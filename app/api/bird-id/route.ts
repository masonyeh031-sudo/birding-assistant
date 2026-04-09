import { NextResponse } from "next/server";

import { birdCards } from "@/lib/home-data";

type BirdIdRequest = {
  imageDataUrl?: string;
  habitat?: string;
  observationSpot?: string;
  size?: string;
  photoFocus?: string;
  traits?: string[];
};

type Confidence = "高" | "中" | "低";

type Candidate = {
  name: string;
  confidence: Confidence;
  reason: string;
};

type VisionAnalysis = {
  summary: string;
  photoClues: string[];
  bestFocusArea: string;
  photoHelp: string;
  detectedHabitat: "urban" | "park" | "water" | "forest-edge" | "unknown";
  detectedSize: "small" | "medium" | "crow" | "waterbird" | "unknown";
  detectedTraits: string[];
  candidates: Candidate[];
};

const traitLabelMap: Record<string, string> = {
  green: "偏綠色",
  brown: "偏褐色",
  white: "白色很明顯",
  dark: "黑灰色明顯",
  yellow: "有黃色區塊",
  orange: "有橘黃或栗色",
  blue: "有藍色區塊",
  "eye-ring": "有白色眼圈",
  "head-pattern": "頭部花紋明顯",
  "white-cheek": "臉頰偏白",
  crest: "有冠羽或頭頂特別突起",
  "thick-bill": "嘴喙粗厚",
  "long-bill": "嘴喙細長",
  "long-neck": "脖子明顯偏長",
  "long-leg": "腿很長",
  "tail-up": "尾巴常翹起",
  "ground-walking": "常在地上走動",
  "perch-open": "喜歡停在明顯高處",
  flock: "常成群出現",
  "near-water": "總是在水邊附近",
  small: "麻雀大小",
  medium: "白頭翁 / 斑鳩大小",
  crow: "八哥 / 喜鵲大小",
  waterbird: "鷺科 / 雁大小",
  urban: "生活圈綠地",
  park: "樹叢公園",
  water: "水邊濕地",
  "forest-edge": "林緣步道",
};

const relatedTraitsMap: Record<string, string[]> = {
  yellow: ["green", "white"],
  orange: ["brown", "white"],
  blue: ["dark"],
  "white-cheek": ["white", "head-pattern"],
  crest: ["head-pattern"],
  "long-bill": ["waterbird"],
  "long-neck": ["waterbird"],
  "long-leg": ["waterbird"],
  "ground-walking": ["brown", "waterbird"],
  "perch-open": ["tail-up", "dark"],
  flock: ["small", "brown"],
  "near-water": ["waterbird", "white"],
};

const contradictoryTraitsMap: Record<string, string[]> = {
  green: ["white", "dark"],
  white: ["green", "orange"],
  blue: ["green", "orange"],
  "eye-ring": ["long-neck", "long-leg"],
  "white-cheek": ["long-neck", "long-leg"],
  crest: ["long-neck", "long-leg"],
  "thick-bill": ["long-bill"],
  "long-bill": ["thick-bill", "eye-ring"],
  "long-neck": ["eye-ring", "tail-up"],
  "long-leg": ["eye-ring", "tail-up"],
  "tail-up": ["long-neck", "long-leg", "near-water"],
  "ground-walking": ["perch-open"],
  "perch-open": ["ground-walking", "near-water"],
  flock: ["perch-open"],
  "near-water": ["tail-up", "perch-open"],
};

const traitEnum = [
  "green",
  "brown",
  "white",
  "dark",
  "yellow",
  "orange",
  "blue",
  "eye-ring",
  "head-pattern",
  "white-cheek",
  "crest",
  "thick-bill",
  "long-bill",
  "long-neck",
  "long-leg",
  "tail-up",
  "ground-walking",
  "perch-open",
  "flock",
  "near-water",
] as const;

const habitatEnum = ["urban", "park", "water", "forest-edge", "unknown"] as const;
const sizeEnum = ["small", "medium", "crow", "waterbird", "unknown"] as const;

function labelForValue(value: string) {
  return traitLabelMap[value] ?? value;
}

function normalizeSizeTraits(size?: string) {
  if (size === "crow") {
    return ["medium", "dark", "perch-open"];
  }

  return size ? [size] : [];
}

function normalizeFocusTraits(photoFocus?: string) {
  switch (photoFocus) {
    case "head":
      return ["head-pattern", "eye-ring"];
    case "bill":
      return ["thick-bill", "long-bill"];
    case "legs":
      return ["long-leg", "long-neck"];
    case "body":
      return ["perch-open"];
    default:
      return [];
  }
}

function normalizeObservationTraits(observationSpot?: string) {
  switch (observationSpot) {
    case "ground":
      return ["ground-walking"];
    case "tree":
    case "wire":
    case "flight":
      return ["perch-open"];
    case "water":
      return ["near-water", "long-leg"];
    default:
      return [];
  }
}

function toConfidence(score: number): Confidence {
  if (score >= 17) return "高";
  if (score >= 10) return "中";
  return "低";
}

function buildFallbackResult(body: BirdIdRequest, engineNote?: string) {
  const selectedTraits = Array.from(
    new Set([
      ...(body.traits ?? []).slice(0, 4),
      ...normalizeSizeTraits(body.size),
      ...normalizeFocusTraits(body.photoFocus),
      ...normalizeObservationTraits(body.observationSpot),
    ])
  );

  const ranked = birdCards
    .map((bird) => {
      let score = 0;
      const reasons: string[] = [];

      if (body.habitat && bird.matcherHabitats.includes(body.habitat)) {
        score += 5;
        reasons.push("出現環境相符");
      }

      if (body.size && bird.matcherTraits.includes(body.size === "crow" ? "medium" : body.size)) {
        score += 4;
        reasons.push("體型比例接近");
      }

      selectedTraits.forEach((trait) => {
        if (bird.matcherTraits.includes(trait)) {
          score += 3;
          reasons.push(`符合${labelForValue(trait)}`);
          return;
        }

        const related = relatedTraitsMap[trait] ?? [];
        const contradictory = contradictoryTraitsMap[trait] ?? [];

        if (related.some((item) => bird.matcherTraits.includes(item))) {
          score += 1;
          return;
        }

        if (contradictory.some((item) => bird.matcherTraits.includes(item))) {
          score -= 3;
        }
      });

      return {
        bird,
        score,
        reasons,
      };
    })
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .slice(0, 3);

  const candidates: Candidate[] = ranked.map((item) => ({
    name: item.bird.name,
    confidence: toConfidence(item.score),
    reason:
      item.reasons.length > 0
        ? `目前先依你選的環境、體型與特徵做條件比對，${item.reasons.slice(0, 3).join("、")}。`
        : "目前先用保守條件比對放進候選，建議再用照片回頭確認頭部、嘴型與站姿。",
  }));

  const focusText =
    body.photoFocus === "head"
      ? "頭部花紋、眼圈或臉頰對比"
      : body.photoFocus === "bill"
        ? "嘴型粗細與嘴長比例"
        : body.photoFocus === "legs"
          ? "腿長、脖子與站姿"
          : "全身比例、尾巴與停棲姿態";

  const first = candidates[0];
  const second = candidates[1];

  return {
    mode: "fallback",
    engineNote:
      engineNote ?? "目前未設定 OPENAI_API_KEY，已自動改用站內輔助辨識模式。",
    summary: first
      ? `目前先用站內條件比對輔助判斷，最接近的是 ${first.name}。這份結果適合當第一輪方向，建議再回頭對照照片細節。`
      : "目前可用線索還不夠，我先保守保留，建議再補一兩個關鍵特徵或換更清楚的照片。",
    photoClues:
      selectedTraits.length > 0
        ? selectedTraits.slice(0, 4).map((trait) => `已納入「${labelForValue(trait)}」這類條件線索`)
        : ["目前主要依環境與體型做第一輪縮小", "建議再補一到兩個明顯特徵", "照片可用來人工回看頭部與站姿"],
    bestFocusArea: `這張照片目前最適合回頭確認 ${focusText}。`,
    photoHelp:
      "因為這個環境尚未啟用雲端影像模型，所以我先改用你填的條件做輔助辨識；照片本身仍很適合拿來手動比對第一名和第二名。",
    comparisonReason:
      first && second
        ? `${first.name} 目前排在 ${second.name} 前面，主要是因為它對上更多環境、體型或特徵條件；不過仍建議再看照片中的頭部與嘴型差異。`
        : "目前候選差距還不大，建議先看照片裡最清楚的部位，再和常見鳥類卡片交叉確認。",
    candidates,
  };
}

function cleanModelCandidates(rawCandidates: Candidate[]) {
  const allowed = new Set(birdCards.map((bird) => bird.name));

  return rawCandidates.filter((candidate) => allowed.has(candidate.name)).slice(0, 3);
}

function buildBirdCatalog() {
  return birdCards
    .map(
      (bird) =>
        `${bird.name}｜棲地:${bird.habitat}｜簡介:${bird.summary}｜辨識重點:${bird.clue}｜體型提示:${bird.size}｜行為:${bird.behavior}｜內部標記:${bird.matcherTraits.join(",")}｜常見環境:${bird.matcherHabitats.join(",")}`
    )
    .join("\n");
}

function rerankWithVision(body: BirdIdRequest, vision: VisionAnalysis) {
  const directCandidates = cleanModelCandidates(vision.candidates);
  const directCandidateMap = new Map(directCandidates.map((candidate) => [candidate.name, candidate]));
  const userTraits = Array.from(
    new Set([
      ...(body.traits ?? []).slice(0, 4),
      ...normalizeObservationTraits(body.observationSpot),
      ...normalizeFocusTraits(body.photoFocus),
      ...normalizeSizeTraits(body.size),
    ])
  );
  const visionTraits = Array.from(new Set(vision.detectedTraits.filter((trait) => traitEnum.includes(trait as never))));

  const ranked = birdCards
    .map((bird) => {
      let score = 0;
      const reasons: string[] = [];
      const direct = directCandidateMap.get(bird.name);

      if (direct) {
        score += direct.confidence === "高" ? 12 : direct.confidence === "中" ? 8 : 5;
        reasons.push(`影像模型先把 ${bird.name} 放進候選`);
      }

      if (vision.detectedHabitat !== "unknown") {
        if (bird.matcherHabitats.includes(vision.detectedHabitat)) {
          score += 6;
          reasons.push(`照片環境像「${labelForValue(vision.detectedHabitat)}」`);
        } else {
          score -= 4;
        }
      }

      if (body.habitat && bird.matcherHabitats.includes(body.habitat)) {
        score += 3;
      }

      const normalizedVisionSize =
        vision.detectedSize === "crow" ? "medium" : vision.detectedSize;
      const normalizedBodySize = body.size === "crow" ? "medium" : body.size;

      if (normalizedVisionSize && normalizedVisionSize !== "unknown") {
        if (bird.matcherTraits.includes(normalizedVisionSize)) {
          score += 6;
          reasons.push(`照片中的體型接近「${labelForValue(vision.detectedSize)}」`);
        } else {
          score -= 4;
        }
      }

      if (normalizedBodySize && bird.matcherTraits.includes(normalizedBodySize)) {
        score += 2;
      }

      visionTraits.forEach((trait) => {
        if (bird.matcherTraits.includes(trait)) {
          score += 4;
          reasons.push(`照片看得到「${labelForValue(trait)}」`);
          return;
        }

        const related = relatedTraitsMap[trait] ?? [];
        const contradictory = contradictoryTraitsMap[trait] ?? [];

        if (related.some((item) => bird.matcherTraits.includes(item))) {
          score += 1;
          return;
        }

        if (contradictory.some((item) => bird.matcherTraits.includes(item))) {
          score -= 4;
        }
      });

      userTraits.forEach((trait) => {
        if (bird.matcherTraits.includes(trait)) {
          score += 2;
          return;
        }

        const related = relatedTraitsMap[trait] ?? [];
        const contradictory = contradictoryTraitsMap[trait] ?? [];

        if (related.some((item) => bird.matcherTraits.includes(item))) {
          score += 1;
          return;
        }

        if (contradictory.some((item) => bird.matcherTraits.includes(item))) {
          score -= 2;
        }
      });

      return {
        bird,
        score,
        direct,
        reasons: Array.from(new Set(reasons)),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const candidates: Candidate[] = ranked.map((item) => ({
    name: item.bird.name,
    confidence: item.direct?.confidence ?? toConfidence(item.score),
    reason: item.direct
      ? `${item.direct.reason} 再和站內鳥種資料交叉比對後，${item.reasons.slice(0, 2).join("、")}。`
      : `我先根據照片線索與站內資料交叉比對，${item.reasons.slice(0, 3).join("、")}。`,
  }));

  const first = candidates[0];
  const second = candidates[1];

  return {
    mode: "api",
    engineNote: "已使用影像模型先抽出照片線索，再和站內鳥種資料交叉比對，會比單純看你手動勾選的條件更嚴格。",
    summary: vision.summary,
    photoClues: Array.from(
      new Set([
        ...vision.photoClues,
        ...visionTraits.slice(0, 3).map((trait) => `照片特徵：${labelForValue(trait)}`),
      ])
    ).slice(0, 6),
    bestFocusArea: vision.bestFocusArea,
    photoHelp: vision.photoHelp,
    comparisonReason:
      first && second
        ? `${first.name} 目前排在 ${second.name} 前面，因為它更符合照片裡實際看到的外觀與站姿線索；若還想再確認，建議優先比對兩者的頭部花紋、嘴型和整體比例。`
        : vision.summary,
    candidates,
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  const body = (await request.json()) as BirdIdRequest;

  if (!body.imageDataUrl) {
    return NextResponse.json({ error: "缺少照片資料。" }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json(
      buildFallbackResult(
        body,
        "目前未設定 OPENAI_API_KEY，已自動改用站內輔助辨識模式。"
      )
    );
  }

  const birdCatalog = buildBirdCatalog();

  const prompt = `
你是一個非常保守的台灣常見鳥類照片辨識助手。你的任務不是亂猜，而是先從照片提取客觀外觀特徵，再和固定鳥種清單做比對。

請只從下列鳥種資料中挑選候選，不要發明新的鳥名：
${birdCatalog}

使用者補充條件：
- 環境：${body.habitat ?? "未知"}
- 停留位置：${body.observationSpot ?? "未知"}
- 體型：${body.size ?? "未知"}
- 照片中最清楚部位：${body.photoFocus ?? "未知"}
- 已選特徵：${body.traits?.map((trait) => labelForValue(trait)).join("、") || "無"}

請遵守以下原則：
1. 先看照片本身，再把使用者條件當輔助。
2. 只描述照片裡真的看得見的線索。
3. 如果照片模糊、距離太遠、角度不好，請誠實降低把握度。
4. 候選只保留最可能的 3 種。
5. 不要因為都市常見就固定偏向白頭翁；請真的根據顏色、大小、站姿、頭部花紋、嘴型、腿長和停棲位置來判斷。
`.trim();

  const responseFormat = {
    type: "json_schema",
    name: "bird_photo_analysis",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        summary: { type: "string" },
        photoClues: {
          type: "array",
          items: { type: "string" },
        },
        bestFocusArea: { type: "string" },
        photoHelp: { type: "string" },
        detectedHabitat: {
          type: "string",
          enum: [...habitatEnum],
        },
        detectedSize: {
          type: "string",
          enum: [...sizeEnum],
        },
        detectedTraits: {
          type: "array",
          items: {
            type: "string",
            enum: [...traitEnum],
          },
        },
        candidates: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: { type: "string" },
              confidence: {
                type: "string",
                enum: ["高", "中", "低"],
              },
              reason: { type: "string" },
            },
            required: ["name", "confidence", "reason"],
          },
        },
      },
      required: [
        "summary",
        "photoClues",
        "bestFocusArea",
        "photoHelp",
        "detectedHabitat",
        "detectedSize",
        "detectedTraits",
        "candidates",
      ],
    },
  } as const;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_BIRD_ID_MODEL || "gpt-4.1",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: prompt,
            },
            {
              type: "input_image",
              image_url: body.imageDataUrl,
              detail: "high",
            },
          ],
        },
      ],
      text: {
        format: responseFormat,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    if (response.status === 429) {
      return NextResponse.json(
        buildFallbackResult(
          body,
          "影像辨識服務目前忙碌中，所以先改用站內輔助辨識模式。你仍可以先看候選結果，晚一點再重新上傳同一張照片做 AI 辨識。"
        )
      );
    }

    if (response.status >= 500) {
      return NextResponse.json(
        buildFallbackResult(
          body,
          "影像辨識服務暫時不穩定，所以先改用站內輔助辨識模式。你可以先參考這份候選結果，之後再回來重試 AI 照片辨識。"
        )
      );
    }

    return NextResponse.json(
      {
        error:
          response.status === 401
            ? "影像辨識 API 驗證失敗，請確認 OPENAI_API_KEY 是否正確。"
            : `照片分析暫時失敗，服務回傳：${errorText.slice(0, 200)}`,
      },
      { status: 502 }
    );
  }

  const payload = (await response.json()) as {
    output_text?: string;
  };

  const rawText = payload.output_text?.trim();

  if (!rawText) {
    return NextResponse.json(
      buildFallbackResult(
        body,
        "影像模型這次沒有回傳可解析內容，所以先改用站內輔助辨識模式。建議之後再試一次，或換一張主體更清楚的照片。"
      )
    );
  }

  try {
    const parsed = JSON.parse(rawText) as VisionAnalysis;
    return NextResponse.json(rerankWithVision(body, parsed));
  } catch {
    return NextResponse.json(
      buildFallbackResult(
        body,
        "影像模型回傳格式這次無法解析，所以先改用站內輔助辨識模式。你可以先參考候選結果，晚點再重新試一次。"
      )
    );
  }
}
