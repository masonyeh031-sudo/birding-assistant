import { taiwanEndemicBirds } from "@/lib/taiwan-endemic-bird-data";

export type TaiwanCommonGuideBird = {
  id: number;
  chineseName: string;
  englishName: string;
  scientificName: string;
  habitat: string;
  habitatCategory: string;
  size: string;
  colors: string[];
  season: "常見鳥" | "冬候鳥" | "夏候鳥";
  isTaiwanEndemic: boolean;
  group: string;
  intro: string;
  imageTone: string;
};

export const taiwanCommonGuideBirdNames = [
  "麻雀",
  "珠頸斑鳩",
  "紅鳩",
  "野鴿",
  "白頭翁",
  "紅嘴黑鵯",
  "斯氏繡眼",
  "五色鳥",
  "黑冠麻鷺",
  "洋燕",
  "家燕",
  "赤腰燕",
  "白腰雨燕",
  "小雨燕",
  "白尾八哥",
  "家八哥",
  "喜鵲",
  "灰樹鵲",
  "樹鵲",
  "大卷尾",
  "白腹秧雞",
  "紅冠水雞",
  "小鸊鷉",
  "翠鳥",
  "南亞夜鷹",
  "斑文鳥",
  "白腰文鳥",
  "黑頭文鳥",
  "灰頭鷦鶯",
  "褐頭鷦鶯",
  "黃頭扇尾鶯",
  "棕扇尾鶯",
  "紅尾伯勞",
  "棕背伯勞",
  "白鶺鴒",
  "黃鶺鴒",
  "灰頭鶺鴒",
  "小雲雀",
  "牛背鷺",
  "池鷺",
  "夜鷺",
  "黃小鷺",
  "蒼鷺",
  "大白鷺",
  "中白鷺",
  "小白鷺",
  "花嘴鴨",
  "琵嘴鴨",
  "赤頸鴨",
  "尖尾鴨",
  "小水鴨",
  "赤膀鴨",
  "高蹺鴴",
  "反嘴鴴",
  "東方環頸鴴",
  "小環頸鴴",
  "磯鷸",
  "青足鷸",
  "鷹斑鷸",
  "黑腹濱鷸",
  "燕鴴",
  "小燕鷗",
  "黑面琵鷺",
  "普通鸕鶿",
  "彩鷸",
  "臺灣藍鵲",
  "冠羽畫眉",
  "白耳畫眉",
  "山紅頭",
  "小彎嘴",
  "繡眼畫眉",
  "黃胸藪眉",
  "赤腹山雀",
  "黃山雀",
  "小啄木",
  "綠啄木",
  "朱鸝",
  "灰喉山椒鳥",
  "黑枕藍鶲",
  "鉛色水鶇",
  "白腹鶇",
  "金背鳩",
  "臺灣竹雞",
  "領角鴞",
  "褐鷹鴞",
  "大冠鷲",
  "鳳頭蒼鷹",
  "黑翅鳶",
  "黑鳶",
  "魚鷹",
  "紅隼",
  "遊隼",
  "赤腹鷹",
  "松雀鷹",
  "灰面鵟鷹",
  "黃尾鴝",
  "黃眉柳鶯",
  "日本樹鶯",
  "藍磯鶇",
  "鵲鴝",
];

const baseCommonGuideBirdNameSet = new Set(taiwanCommonGuideBirdNames);

taiwanEndemicBirds.forEach((bird) => {
  if (!baseCommonGuideBirdNameSet.has(bird.chineseName)) {
    taiwanCommonGuideBirdNames.push(bird.chineseName);
  }
});

const waterBirds = new Set([
  "黑冠麻鷺",
  "白腹秧雞",
  "紅冠水雞",
  "小鸊鷉",
  "牛背鷺",
  "池鷺",
  "夜鷺",
  "黃小鷺",
  "蒼鷺",
  "大白鷺",
  "中白鷺",
  "小白鷺",
  "花嘴鴨",
  "琵嘴鴨",
  "赤頸鴨",
  "尖尾鴨",
  "小水鴨",
  "赤膀鴨",
  "高蹺鴴",
  "反嘴鴴",
  "東方環頸鴴",
  "小環頸鴴",
  "磯鷸",
  "青足鷸",
  "鷹斑鷸",
  "黑腹濱鷸",
  "燕鴴",
  "小燕鷗",
  "黑面琵鷺",
  "普通鸕鶿",
  "彩鷸",
  "鉛色水鶇",
  "魚鷹",
]);

const forestBirds = new Set([
  "五色鳥",
  "灰樹鵲",
  "樹鵲",
  "台灣藍鵲",
  "冠羽畫眉",
  "白耳畫眉",
  "山紅頭",
  "小彎嘴",
  "繡眼畫眉",
  "黃胸藪眉",
  "赤腹山雀",
  "黃山雀",
  "小啄木",
  "綠啄木",
  "朱鸝",
  "灰喉山椒鳥",
  "黑枕藍鶲",
  "白腹鶇",
  "金背鳩",
  "台灣竹雞",
  "領角鴞",
  "褐鷹鴞",
  "大冠鷲",
  "鳳頭蒼鷹",
  "赤腹鷹",
  "松雀鷹",
  "灰面鵟鷹",
  "黃尾鴝",
  "黃眉柳鶯",
  "日本樹鶯",
  "藍磯鶇",
]);

const raptors = new Set(["大冠鷲", "鳳頭蒼鷹", "黑翅鳶", "黑鳶", "魚鷹", "紅隼", "遊隼", "赤腹鷹", "松雀鷹", "灰面鵟鷹"]);

const winterVisitors = new Set([
  "紅尾伯勞",
  "白鶺鴒",
  "黃鶺鴒",
  "灰頭鶺鴒",
  "琵嘴鴨",
  "赤頸鴨",
  "尖尾鴨",
  "小水鴨",
  "赤膀鴨",
  "反嘴鴴",
  "東方環頸鴴",
  "小環頸鴴",
  "磯鷸",
  "青足鷸",
  "鷹斑鷸",
  "黑腹濱鷸",
  "黑面琵鷺",
  "普通鸕鶿",
  "白腹鶇",
  "黃尾鴝",
  "黃眉柳鶯",
  "日本樹鶯",
  "藍磯鶇",
  "魚鷹",
  "紅隼",
  "遊隼",
  "松雀鷹",
  "灰面鵟鷹",
]);

const summerVisitors = new Set([
  "洋燕",
  "家燕",
  "赤腰燕",
  "白腰雨燕",
  "小雨燕",
  "南亞夜鷹",
  "黃頭扇尾鶯",
  "燕鴴",
  "小燕鷗",
  "朱鸝",
  "黑枕藍鶲",
  "赤腹鷹",
]);

const taiwanEndemicByName = new Map(taiwanEndemicBirds.map((bird) => [bird.chineseName, bird]));
const taiwanEndemicSpecies = new Set(taiwanEndemicBirds.map((bird) => bird.chineseName));

function getHabitatCategoryFromEndemicTag(tag: (typeof taiwanEndemicBirds)[number]["habitatTag"]) {
  if (tag === "stream") return "水邊濕地 / 河川湖泊";
  if (tag === "lowland") return "草地 / 農田 / 開闊地";
  return "山林 / 林緣步道";
}

function inferHabitat(name: string) {
  if (waterBirds.has(name)) return "水邊濕地 / 河川湖泊";
  if (forestBirds.has(name)) return "山林 / 林緣步道";
  if (/燕|雨燕/.test(name)) return "都市上空 / 河濱空域";
  if (/鶺鴒|雲雀|扇尾鶯|鷦鶯|伯勞/.test(name)) return "草地 / 農田 / 開闊地";
  return "都市公園 / 校園 / 住宅區";
}

function inferSize(name: string) {
  if (/蒼鷺|大白鷺|黑面琵鷺|普通鸕鶿|大冠鷲|黑鳶|魚鷹|遊隼|灰面鵟鷹/.test(name)) return "大型鳥";
  if (/夜鷺|牛背鷺|池鷺|中白鷺|花嘴鴨|琵嘴鴨|尖尾鴨|赤頸鴨|赤膀鴨|喜鵲|台灣藍鵲|鳳頭蒼鷹|黑翅鳶|赤腹鷹|褐鷹鴞/.test(name)) return "中大型鳥";
  if (/斑鳩|紅鳩|野鴿|八哥|小鸊鷉|翠鳥|紅冠水雞|白腹秧雞|彩鷸|燕鴴|台灣竹雞|領角鴞|紅隼|松雀鷹|鵲鴝/.test(name)) return "中型鳥";
  if (/白頭翁|紅嘴黑鵯|大卷尾|伯勞|白鶺鴒|黃鶺鴒|灰頭鶺鴒|黑枕藍鶲|藍磯鶇|白腹鶇|金背鳩/.test(name)) return "中小型鳥";
  return "小型鳥";
}

function inferColors(name: string) {
  const colors = new Set<string>();

  if (/黑|烏|卷尾|鸕鶿|黑鳶/.test(name)) colors.add("黑");
  if (/白|鷺|鶺鴒|白腰|白尾|白耳|白腹|黑面琵鷺/.test(name)) colors.add("白");
  if (/灰|蒼|鉛|鵟/.test(name)) colors.add("灰");
  if (/褐|棕|斑|鷦|麻雀|鴨|鷸|鴴|夜鷹|竹雞|伯勞/.test(name)) colors.add("褐");
  if (/黃|金/.test(name)) colors.add("黃");
  if (/紅|赤|朱/.test(name)) colors.add("紅");
  if (/藍|翠鳥|藍鵲|琉璃/.test(name)) colors.add("藍");
  if (/綠|繡眼|五色/.test(name)) colors.add("綠");

  if (colors.size === 0) colors.add("褐");

  return Array.from(colors);
}

function inferGroup(name: string) {
  if (raptors.has(name)) return "猛禽";
  if (waterBirds.has(name)) return "水鳥";
  if (/燕|雨燕/.test(name)) return "燕科 / 雨燕";
  if (forestBirds.has(name)) return "山林鳥";
  return "都市常見鳥";
}

function inferSeason(name: string): TaiwanCommonGuideBird["season"] {
  if (winterVisitors.has(name)) return "冬候鳥";
  if (summerVisitors.has(name)) return "夏候鳥";
  return "常見鳥";
}

function inferIntro(name: string) {
  if (raptors.has(name)) {
    return "常以開闊空域、林緣或高處作為觀察起點；辨識時先看翼型、尾型、飛行姿態與整體大小。";
  }
  if (waterBirds.has(name)) {
    return "多和水域、濕地、河口或岸邊活動有關；辨識時先分清鷺科、雁鴨、鷸鴴或水雞類群。";
  }
  if (/燕|雨燕/.test(name)) {
    return "常在空中飛行覓食，適合觀察翼型、尾叉、腰部顏色與飛行高度。";
  }
  if (forestBirds.has(name)) {
    return "多出現在林緣、山區步道或樹冠層，辨識時先看停棲高度、頭部花紋與叫聲線索。";
  }
  return "常見於都市綠地、校園與住家周邊，適合新手從體型、活動位置與常見環境建立辨識感。";
}

function inferTone(name: string) {
  if (raptors.has(name)) return "from-stone-200 via-amber-50 to-white";
  if (waterBirds.has(name)) return "from-sky-100 via-white to-emerald-50";
  if (forestBirds.has(name)) return "from-emerald-100 via-moss-50 to-white";
  if (/燕|雨燕/.test(name)) return "from-cyan-100 via-white to-sky-50";
  return "from-cream via-white to-moss-50";
}

export const taiwanCommonGuideBirds: TaiwanCommonGuideBird[] = taiwanCommonGuideBirdNames.map(
  (chineseName, index) => {
    const endemicInfo = taiwanEndemicByName.get(chineseName);
    const habitatCategory = endemicInfo
      ? getHabitatCategoryFromEndemicTag(endemicInfo.habitatTag)
      : inferHabitat(chineseName);

    return {
      id: index + 1,
      chineseName,
      englishName: endemicInfo?.englishName ?? "英文名待補",
      scientificName: endemicInfo?.scientificName ?? "學名待補",
      habitat: endemicInfo?.habitat ?? inferHabitat(chineseName),
      habitatCategory,
      size: endemicInfo?.size ?? inferSize(chineseName),
      colors: endemicInfo?.colors ?? inferColors(chineseName),
      season: inferSeason(chineseName),
      isTaiwanEndemic: taiwanEndemicSpecies.has(chineseName),
      group: endemicInfo ? "台灣特有種" : inferGroup(chineseName),
      intro: endemicInfo?.intro ?? inferIntro(chineseName),
      imageTone: endemicInfo?.imageTone ?? inferTone(chineseName),
    };
  }
);
