"use client";

import { useMemo, useState } from "react";

import { birdCards } from "@/lib/home-data";
import { taiwanCommonGuideBirds } from "@/lib/taiwan-common-guide-data";

type GuideBird = (typeof taiwanCommonGuideBirds)[number];
type VerifiedGuideImage = {
  src: string;
  alt: string;
  credit: string;
  page: string;
  note?: string;
};

const guideFilters = [
  { key: "all", label: "都是常見鳥", description: "顯示完整 100 張卡片" },
  { key: "winter", label: "冬候鳥", description: "秋冬來台或冬季較常見" },
  { key: "summer", label: "夏候鳥", description: "春夏繁殖或夏季較常見" },
  { key: "endemic", label: "台灣特有種", description: "只看台灣原生且全球僅分布於台灣的鳥種" },
] as const;

type GuideFilter = (typeof guideFilters)[number]["key"];

const birdCardByName = new Map(birdCards.map((bird) => [bird.name, bird]));
const verifiedPhotoAliasByName: Record<string, string> = {
  斯氏繡眼: "綠繡眼",
  灰樹鵲: "樹鵲",
};

const directVerifiedImages: Record<string, VerifiedGuideImage> = {
  野鴿: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rock%20dove%20-%20natures%20pics.jpg",
    alt: "野鴿的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Rock_dove_-_natures_pics.jpg",
  },
  普通鸕鶿: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Phalacrocorax%20carbo%20Vic.jpg",
    alt: "普通鸕鶿的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Phalacrocorax_carbo_Vic.jpg",
  },
  魚鷹: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Osprey%20NASA.jpg",
    alt: "魚鷹的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Osprey_NASA.jpg",
  },
  紅隼: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Common%20Kestrel%20Falco%20tinnunculus.jpg",
    alt: "紅隼的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Common_Kestrel_Falco_tinnunculus.jpg",
  },
  遊隼: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Falco%20peregrinus%20-%20Peregrine%20Falcon.jpg",
    alt: "遊隼的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Falco_peregrinus_-_Peregrine_Falcon.jpg",
  },
  藍磯鶇: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Monticola%20solitarius%20male.jpg",
    alt: "藍磯鶇的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Monticola_solitarius_male.jpg",
  },
  白腰雨燕: {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/ApusPacificus.jpg",
    alt: "白腰雨燕的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%85%B0%E9%9B%A8%E7%87%95",
  },
  小雨燕: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/House%20swift.jpg",
    alt: "小雨燕的真實鳥類照片",
    credit: "Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/Category:Apus_nipalensis",
  },
  小鸊鷉: {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Litle_Grebe_-_Tachybaptus_ruficollis.jpg",
    alt: "小鸊鷉的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E5%B0%8F%E9%B8%8A%E9%B7%89",
  },
  南亞夜鷹: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Caprimulgus_affinis.jpg",
    alt: "南亞夜鷹的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E6%9E%97%E5%A4%9C%E9%B9%B0",
  },
  黑頭文鳥: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Lonchura_atricapilla_jagori_-Cebu-8-3c.jpg",
    alt: "黑頭文鳥的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Lonchura_atricapilla_jagori_-Cebu-8-3c.jpg",
  },
  黃頭扇尾鶯: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cisticola_exilis_-_Cornwallis_Rd.jpg",
    alt: "黃頭扇尾鶯的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Cisticola_exilis_-_Cornwallis_Rd.jpg",
  },
  棕扇尾鶯: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Zitting_Cisticola_-_Cisticola_juncidis.JPG",
    alt: "棕扇尾鶯的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Zitting_Cisticola_-_Cisticola_juncidis.JPG",
  },
  紅尾伯勞: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Lanius_cristatus_-_Surin.jpg",
    alt: "紅尾伯勞的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Lanius_cristatus_-_Surin.jpg",
  },
  黃鶺鴒: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Motacilla_tschutschensis%2C_Tomohon%2C_North_Sulawesi.jpg",
    alt: "黃鶺鴒的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Motacilla_tschutschensis,_Tomohon,_North_Sulawesi.jpg",
  },
  灰頭鶺鴒: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Grey%20Wagtail%20Motacilla%20cinerea,%20Nepal%2019%20cm.jpg",
    alt: "灰頭鶺鴒的真實鳥類照片",
    credit: "Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/Category:Motacilla_cinerea",
  },
  小雲雀: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Oriental_Skylark_%28Alauda_gulgula%29_in_AP_W_IMG_4084.jpg",
    alt: "小雲雀的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Oriental_Skylark_(Alauda_gulgula)_in_AP_W_IMG_4084.jpg",
  },
  池鷺: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ardeola_bacchus_%2819169872143%29.jpg",
    alt: "池鷺的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E6%B1%A0%E9%B9%AD",
  },
  中白鷺: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Intermediate_Egret_02.jpg",
    alt: "中白鷺的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Intermediate_Egret_02.jpg",
  },
  赤膀鴨: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Anas-strepera-001.jpg",
    alt: "赤膀鴨的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Anas-strepera-001.jpg",
  },
  冠羽畫眉: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Taiwan_Yuhina_-_Taiwan_S4E8280_%2818926478463%29.jpg",
    alt: "冠羽畫眉的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E8%A4%90%E5%A4%B4%E5%87%A4%E9%B9%9B",
  },
  繡眼畫眉: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Alcippe_morrisonia.jpg",
    alt: "繡眼畫眉的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E5%8F%B0%E6%B9%BE%E9%9B%80%E9%B9%9B",
  },
  黃胸藪眉: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Steere%27s_Liocichla_-_Taiwan_S4E6694_%2819301823680%29.jpg/960px-Steere%27s_Liocichla_-_Taiwan_S4E6694_%2819301823680%29.jpg",
    alt: "黃胸藪眉的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E9%BB%84%E7%97%A3%E8%96%AE%E9%B9%9B",
  },
  小啄木: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/%E5%B0%8F%E5%95%84%E6%9C%A8%E9%B3%A5_%2831475054384%29.jpg/960px-%E5%B0%8F%E5%95%84%E6%9C%A8%E9%B3%A5_%2831475054384%29.jpg",
    alt: "小啄木的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%95%84%E6%9C%A8",
  },
  綠啄木: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/%D0%A1%D0%B5%D0%B4%D0%BE%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB_%D1%83_%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%B0_%D1%80%D0%B5%D1%87%D0%BA%D0%B8_%D0%97%D0%B8%D0%BC%D1%91%D0%BD%D0%BA%D0%B8.jpg/960px-%D0%A1%D0%B5%D0%B4%D0%BE%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB_%D1%83_%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%B0_%D1%80%D0%B5%D1%87%D0%BA%D0%B8_%D0%97%D0%B8%D0%BC%D1%91%D0%BD%D0%BA%D0%B8.jpg",
    alt: "綠啄木的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E7%81%B0%E5%A4%B4%E7%BB%BF%E5%95%84%E6%9C%A8%E9%B8%9F",
  },
  朱鸝: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Maroon_Oriole_at_Sikkim%2C_India.jpg/960px-Maroon_Oriole_at_Sikkim%2C_India.jpg",
    alt: "朱鸝的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E6%9C%B1%E9%B9%82",
  },
  灰喉山椒鳥: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Grey-chinned%20Minivet%2C%20Taiwan%208021.jpg",
    alt: "灰喉山椒鳥的真實鳥類照片",
    credit: "Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Grey-chinned_Minivet,_Taiwan_8021.jpg",
  },
  黑枕藍鶲: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Black-naped_Monarch_-_Thailand_S4E7277_%2819449130711%29.jpg/960px-Black-naped_Monarch_-_Thailand_S4E7277_%2819449130711%29.jpg",
    alt: "黑枕藍鶲的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E9%BB%91%E6%9E%95%E7%8E%8B%E9%B6%B2",
  },
  鉛色水鶇: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Plumbeous_Water_Redstart_%28male%29.JPG/960px-Plumbeous_Water_Redstart_%28male%29.JPG",
    alt: "鉛色水鶇的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://zh.wikipedia.org/wiki/%E9%89%9B%E8%89%B2%E6%B0%B4%E9%B4%9D",
  },
  金背鳩: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
    alt: "金背鳩的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Oriental_Turtle_Dove.jpg",
  },
  領角鴞: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Collared_Scops_Owl%28Otus_lettia%29_by_Jack_Walf_.jpg",
    alt: "領角鴞的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Collared_Scops_Owl(Otus_lettia)_by_Jack_Walf_.jpg",
  },
  褐鷹鴞: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Brown_Hawk-Owl_-_Ninox_scutulata.jpg",
    alt: "褐鷹鴞的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Brown_Hawk-Owl_-_Ninox_scutulata.jpg",
  },
  赤腹鷹: {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Chinese_Sparrowhawk_imported_from_iNaturalist_photo_52731117_on_17_June_2024.jpg",
    alt: "赤腹鷹的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Chinese_Sparrowhawk_imported_from_iNaturalist_photo_52731117_on_17_June_2024.jpg",
  },
  松雀鷹: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Besra_Sparrowhawk.jpg",
    alt: "松雀鷹的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Besra_Sparrowhawk.jpg",
  },
  灰面鵟鷹: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Butastur_indicus.jpg",
    alt: "灰面鵟鷹的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Butastur_indicus.jpg",
  },
  黃尾鴝: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Daurian_redstart_at_Daisen_Park_in_Osaka%2C_January_2016.jpg",
    alt: "黃尾鴝的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Daurian_redstart_at_Daisen_Park_in_Osaka,_January_2016.jpg",
  },
  黃眉柳鶯: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Phylloscopus_inornatus_%28Yellow-browed_Warbler%29.jpg",
    alt: "黃眉柳鶯的真實鳥類照片",
    credit: "Wikipedia / Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Phylloscopus_inornatus_(Yellow-browed_Warbler).jpg",
  },
  日本樹鶯: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cettia%20diphone.jpg",
    alt: "日本樹鶯的真實鳥類照片",
    credit: "Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/Category:Horornis_diphone",
  },
};

function getVerifiedGuideImage(name: string): VerifiedGuideImage | null {
  const directImage = directVerifiedImages[name];
  if (directImage) return directImage;

  const exactCard = birdCardByName.get(name);
  if (exactCard && !exactCard.imagePage.startsWith("#")) {
    return {
      src: exactCard.imageSrc,
      alt: exactCard.imageAlt,
      credit: exactCard.imageCredit,
      page: exactCard.imagePage,
    };
  }

  const aliasName = verifiedPhotoAliasByName[name];
  const aliasCard = aliasName ? birdCardByName.get(aliasName) : undefined;

  if (aliasCard && !aliasCard.imagePage.startsWith("#")) {
    return {
      src: aliasCard.imageSrc,
      alt: `${name} 的真實鳥類照片`,
      credit: aliasCard.imageCredit,
      page: aliasCard.imagePage,
      note: `使用「${aliasName}」同物種或常用同類群名稱的照片來源，避免誤放不同鳥種。`,
    };
  }

  return null;
}

function BirdPlaceholder({ bird }: { bird: GuideBird }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br ${bird.imageTone}`}
    >
      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-moss-700 shadow-sm">
        No. {bird.id.toString().padStart(2, "0")}
      </div>
      <svg
        viewBox="0 0 220 150"
        role="img"
        aria-label={`${bird.chineseName} 圖片 placeholder`}
        className="h-28 w-40 text-pine/86 drop-shadow-sm transition duration-300 group-hover:scale-105"
      >
        <ellipse cx="105" cy="86" rx="46" ry="30" fill="currentColor" />
        <circle cx="151" cy="67" r="20" fill="currentColor" />
        <path d="M168 64 L203 53 L171 78 Z" fill="currentColor" />
        <path d="M66 83 C38 69 26 80 18 94 C39 94 51 103 74 107 Z" fill="currentColor" />
        <path d="M96 111 L88 132" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M122 112 L119 134" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="157" cy="62" r="4" fill="#f7f2e8" />
      </svg>
      <div className="absolute bottom-4 right-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-moss-600">
        圖片區塊
      </div>
    </div>
  );
}

function BirdImageBlock({ bird }: { bird: GuideBird }) {
  const image = getVerifiedGuideImage(bird.chineseName);

  if (!image) return <BirdPlaceholder bird={bird} />;

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-moss-50">
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-moss-700 shadow-sm">
        No. {bird.id.toString().padStart(2, "0")}
      </div>
      <div className="absolute bottom-4 right-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-medium text-moss-600">
        已核對照片
      </div>
    </div>
  );
}

function GuideCard({ bird, onOpen }: { bird: GuideBird; onOpen: (bird: GuideBird) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/80 bg-white/90 p-3 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <BirdImageBlock bird={bird} />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">
              {bird.group}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-pine">{bird.chineseName}</h3>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full bg-moss-50 px-3 py-1 text-xs font-semibold text-moss-700">
              {bird.size}
            </span>
            {bird.isTaiwanEndemic ? (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-pine">
                台灣特有種
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-6 text-moss-700">
          <p>
            <span className="font-semibold text-pine">英文名：</span>
            {bird.englishName}
          </p>
          <p>
            <span className="font-semibold text-pine">學名：</span>
            <span className="italic">{bird.scientificName}</span>
          </p>
          <p>
            <span className="font-semibold text-pine">常見環境：</span>
            {bird.habitat}
          </p>
          <p>
            <span className="font-semibold text-pine">季節狀態：</span>
            {bird.season}
          </p>
          <p>
            <span className="font-semibold text-pine">介紹：</span>
            {bird.intro}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpen(bird)}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-pine px-4 py-3 text-sm font-bold text-white transition hover:bg-moss-700"
        >
          查看詳情
        </button>
      </div>
    </article>
  );
}

export function TaiwanCommonBirdGuide() {
  const [query, setQuery] = useState("");
  const [guideFilter, setGuideFilter] = useState<GuideFilter>("all");
  const [selectedBird, setSelectedBird] = useState<GuideBird | null>(null);

  const filteredBirds = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return taiwanCommonGuideBirds.filter((bird) => {
      const matchesQuery = normalizedQuery ? bird.chineseName.toLowerCase().includes(normalizedQuery) : true;
      const matchesGuideFilter =
        guideFilter === "all"
          ? true
          : guideFilter === "endemic"
            ? bird.isTaiwanEndemic
            : bird.season === (guideFilter === "winter" ? "冬候鳥" : "夏候鳥");

      return matchesQuery && matchesGuideFilter;
    });
  }, [query, guideFilter]);

  const hasActiveFilter = query || guideFilter !== "all";

  function clearFilters() {
    setQuery("");
    setGuideFilter("all");
  }

  return (
    <>
      <div className="rounded-[34px] border border-white/80 bg-white/84 p-4 shadow-card backdrop-blur sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <label className="block">
            <span className="text-sm font-semibold text-moss-700">搜尋中文鳥名</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：白頭翁、翠鳥、黑鳶"
              className="mt-2 w-full rounded-2xl border border-moss-200 bg-moss-50/80 px-4 py-3 text-sm text-moss-900 outline-none transition focus:border-moss-500 focus:bg-white"
            />
          </label>

          <div className="rounded-[24px] bg-moss-50 px-4 py-3 text-sm font-semibold text-moss-700">
            預設完整顯示 {taiwanCommonGuideBirds.length} 張卡片
            <div className="mt-1 text-xs font-medium text-moss-500">
              目前畫面顯示 {filteredBirds.length} 張，沒有分頁與截斷
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {guideFilters.map((filter) => {
            const isSelected = guideFilter === filter.key;

            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setGuideFilter(filter.key)}
                className={`rounded-[24px] border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-pine bg-pine text-white shadow-card"
                    : "border-moss-100 bg-white text-moss-700 hover:border-moss-300 hover:bg-moss-50"
                }`}
              >
                <span className="block text-base font-bold">{filter.label}</span>
                <span className={`mt-1 block text-xs font-medium ${isSelected ? "text-white/75" : "text-moss-500"}`}>
                  {filter.description}
                </span>
              </button>
            );
          })}
        </div>

        {hasActiveFilter ? (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-full border border-moss-200 bg-white px-4 py-2 text-sm font-semibold text-moss-700 transition hover:border-moss-400"
          >
            清除搜尋與篩選，回到 100 張完整卡片
          </button>
        ) : null}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBirds.map((bird) => (
          <GuideCard key={bird.chineseName} bird={bird} onOpen={setSelectedBird} />
        ))}
      </div>

      {selectedBird ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pine/55 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[34px] bg-white shadow-2xl">
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-moss-50 p-5">
                <BirdImageBlock bird={selectedBird} />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss-500">
                      {selectedBird.group}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-pine">{selectedBird.chineseName}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedBird(null)}
                    className="rounded-full border border-moss-200 px-4 py-2 text-sm font-semibold text-moss-700"
                  >
                    關閉
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-moss-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">英文名</p>
                    <p className="mt-2 text-sm font-semibold text-pine">{selectedBird.englishName}</p>
                  </div>
                  <div className="rounded-2xl bg-moss-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">學名</p>
                    <p className="mt-2 text-sm italic text-pine">{selectedBird.scientificName}</p>
                  </div>
                  <div className="rounded-2xl bg-sky/60 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">常見環境</p>
                    <p className="mt-2 text-sm font-semibold text-pine">{selectedBird.habitat}</p>
                  </div>
                  <div className="rounded-2xl bg-cream px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">體型大小</p>
                    <p className="mt-2 text-sm font-semibold text-pine">{selectedBird.size}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-moss-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">季節狀態</p>
                    <p className="mt-2 text-sm font-semibold text-pine">{selectedBird.season}</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">在地分類</p>
                    <p className="mt-2 text-sm font-semibold text-pine">
                      {selectedBird.isTaiwanEndemic ? "台灣特有種" : "非台灣特有種"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-moss-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">介紹</p>
                  <p className="mt-2 text-sm leading-7 text-moss-800">{selectedBird.intro}</p>
                </div>

                {(() => {
                  const image = getVerifiedGuideImage(selectedBird.chineseName);

                  if (!image) {
                    return (
                      <p className="rounded-2xl bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900 ring-1 ring-amber-100">
                        這張卡目前沒有放照片，因為尚未核對到同一鳥種的可靠圖片來源；為避免誤放不同鳥種，先保留待補照片。
                      </p>
                    );
                  }

                  return (
                    <div className="rounded-2xl bg-white px-4 py-3 text-xs leading-6 text-moss-600 ring-1 ring-moss-100">
                      <a
                        href={image.page}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline-offset-4 transition hover:text-pine hover:underline"
                      >
                        圖片來源：{image.credit}
                      </a>
                      {image.note ? <p className="mt-1">{image.note}</p> : null}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
