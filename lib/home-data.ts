export type BirdCard = {
  name: string;
  summary: string;
  habitat: string;
  clue: string;
  size: string;
  behavior: string;
  watchTip: string;
  accent: string;
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
  imagePage: string;
  matcherHabitats: string[];
  matcherTraits: string[];
};

export type SpotCard = {
  name: string;
  lineKey: string;
  station: string;
  line: string;
  route: string;
  summary: string;
  birds: string[];
  bestTime: string;
  bestFor: string;
  habitatType: string;
  speciesCount: number;
  distanceKm: number;
  tone: string;
  sourceUrl: string;
};

export type ChannelTopic = {
  title: string;
  summary: string;
  focus: string;
  audience: string;
  sourceUrl: string;
  thumbnailUrl?: string;
  viewCount?: string;
  publishOrder?: string;
};

export type ChannelSection = {
  title: string;
  description: string;
  accent: string;
  topics: ChannelTopic[];
};

export type PlaylistCard = {
  title: string;
  summary: string;
  vibe: string;
  ctaLabel: string;
  playlistUrl: string;
  accent: string;
  note?: string;
  videoTitle: string;
  thumbnailUrl: string;
  publishOrder: string;
  playlistLabel?: string;
};

export type FeaturedVideoCard = {
  title: string;
  summary: string;
  viewCount: string;
  videoUrl: string;
  thumbnailUrl: string;
  playlistLabel?: string;
};

export const birdCategories = [
  { key: "all", label: "全部鳥類" },
  { key: "urban", label: "都市常見" },
  { key: "park", label: "公園樹叢" },
  { key: "water", label: "水邊濕地" },
  { key: "forest-edge", label: "林緣山區" },
] as const;

export const mrtLines = [
  { key: "all", label: "全部路線" },
  { key: "wenhu", label: "文湖線" },
  { key: "tamsui-xinyi", label: "淡水信義線" },
  { key: "songshan-xindian", label: "松山新店線" },
  { key: "bannan", label: "板南線" },
] as const;

export const guanNiaoRenChannel = {
  name: "觀鳥人 YouTube 頻道",
  handle: "@watching-birds",
  channelUrl: "https://www.youtube.com/@watching-birds",
  playlistsUrl: "https://www.youtube.com/@watching-birds/playlists",
  intro:
    "以都市賞鳥、相似鳥種辨識與黑冠麻鷺行為觀察為核心，用短影片降低新手入門門檻。",
  sourceUrl: "https://www.youtube.com/@watching-birds",
};

export const guanNiaoRenPlaylists: PlaylistCard[] = [
  {
    title: "鳥類電子圖鑑",
    summary: "如果你想先把單一鳥種的基礎印象建立起來，這組最像可慢慢累積的影音圖鑑。",
    vibe:
      "很適合拿來當你的第一套影音鳥圖鑑。先把一種鳥從臉、羽色到成幼鳥差異慢慢看熟，之後再回頭看相似種比較，會有一種『原來我真的看得出來』的成就感。",
    ctaLabel: "直接看鳥類電子圖鑑",
    playlistUrl: "https://www.youtube.com/watch?v=aWP0HOBtzSU&list=PLPonTf39GETD3gaGNHziRv38wsoIe5QKe",
    accent: "from-rose-100 via-orange-50 to-white",
    videoTitle: "【鳥類電子圖鑑】EP1 要如何分辨夜鷺成鳥和亞成鳥呢？｜觀鳥人",
    thumbnailUrl: "https://i.ytimg.com/vi/aWP0HOBtzSU/hqdefault.jpg",
    publishOrder: "頻道系列型內容代表作",
    playlistLabel: "單一鳥種入門",
  },
  {
    title: "觀鳥人田野調查",
    summary: "把實地賞鳥、導覽活動與公園觀察集中看，適合喜歡跟著走現場的人。",
    vibe:
      "如果你喜歡跟著別人的鏡頭一起走進現場，這組會很有臨場感。從公園、步道到實際賞鳥路線，一邊看一邊很容易想像自己下次也可以這樣出門觀察。",
    ctaLabel: "直接看這個播放清單",
    playlistUrl: "https://www.youtube.com/watch?v=KeGPugahdjM&list=PLPonTf39GETDW6SnTBRY9rVq5h1scaFot",
    accent: "from-emerald-100 via-emerald-50 to-white",
    videoTitle: "【觀鳥人田野調查】白石湖吊橋爬山之旅｜觀鳥人",
    thumbnailUrl: "https://i.ytimg.com/vi/KeGPugahdjM/hqdefault.jpg",
    publishOrder: "頻道第 26 支上架",
    playlistLabel: "田野調查",
  },
  {
    title: "YA！我們來對決吧！",
    summary: "這是頻道裡最成熟的辨識系列，專門把相似鳥種放在一起對照講解。",
    vibe:
      "如果你最常卡在『明明長很像，到底差在哪』，這條就是最快上手的入口。兩種鳥直接放在一起比，會讓你從模糊印象一下子變成有抓手的辨識記憶。",
    ctaLabel: "直接看相似鳥種辨識清單",
    playlistUrl: "https://www.youtube.com/watch?v=X7b4sb1URXw&list=PLPonTf39GETDv7aklBRB7Ic-wNA5jCPFM",
    accent: "from-amber-100 via-amber-50 to-white",
    videoTitle: "【YA！我們來對決吧！】EP3 大白鷺和中白鷺差在哪？｜觀鳥人",
    thumbnailUrl: "https://i.ytimg.com/vi/X7b4sb1URXw/hqdefault.jpg",
    publishOrder: "頻道第 28 支上架",
    playlistLabel: "相似鳥種辨識",
  },
  {
    title: "從鳥開始學觀察力",
    summary: "比起純辨識，這組更像基礎觀念課，適合想把名詞、部位和分類補起來的人。",
    vibe:
      "這組像是替你的賞鳥眼睛打底。先把鳥的部位、觀察順序和基本概念建立起來，之後不管看辨識影片還是自己在公園遇到鳥，都會更知道該從哪裡開始看。",
    ctaLabel: "直接看觀察力入門清單",
    playlistUrl: "https://www.youtube.com/watch?v=lNyLv2vqNOc&list=PLPonTf39GETBpuAHTBNEKcn0nXcHSuw_Q",
    accent: "from-sky-100 via-sky-50 to-white",
    videoTitle: "【從鳥開始學觀察力】介紹鳥的部位（上）｜觀鳥人",
    thumbnailUrl: "https://i.ytimg.com/vi/lNyLv2vqNOc/hqdefault.jpg",
    publishOrder: "頻道早期上架代表作",
    playlistLabel: "觀察力入門",
  },
];

export const guanNiaoRenFeaturedVideos: FeaturedVideoCard[] = [
  {
    title: "【YA！我們來對決吧！】EP7 喜鵲和樹鵲差在哪？",
    summary: "目前頻道裡觀看數最高的鳥類辨識代表作之一，適合先從最有記憶點的長尾鳥差異開始看。",
    viewCount: "4,337 次觀看",
    videoUrl: "https://www.youtube.com/watch?v=2FPrHNX4728",
    thumbnailUrl: "https://i.ytimg.com/vi/2FPrHNX4728/hqdefault.jpg",
    playlistLabel: "相似鳥種辨識",
  },
  {
    title: "【YA！我們來對決吧！】EP3 大白鷺和中白鷺差在哪？",
    summary: "用最常見的白色鷺科鳥類做差異比較，對剛開始學水鳥辨識的人很實用。",
    viewCount: "2,813 次觀看",
    videoUrl: "https://www.youtube.com/watch?v=X7b4sb1URXw",
    thumbnailUrl: "https://i.ytimg.com/vi/X7b4sb1URXw/hqdefault.jpg",
    playlistLabel: "相似鳥種辨識",
  },
  {
    title: "【YA！我們來對決吧！】EP6 珠頸斑鳩和紅鳩差在哪？",
    summary: "把生活圈裡容易看到、卻最常叫錯名字的斑鳩類拆開講，很適合新手入門。",
    viewCount: "2,697 次觀看",
    videoUrl: "https://www.youtube.com/watch?v=pt-zpNIz-8M",
    thumbnailUrl: "https://i.ytimg.com/vi/pt-zpNIz-8M/hqdefault.jpg",
    playlistLabel: "相似鳥種辨識",
  },
];

export const guanNiaoRenChannelSections: ChannelSection[] = [
  {
    title: "頻道推薦觀看順序",
    description: "先從最容易建立記憶點的系列開始，再回到鳥類辨識與延伸議題，會比較容易追得下去。",
    accent: "bg-emerald-50 border-emerald-100",
    topics: [
      {
        title: "家八哥、白尾八哥和冠八哥的差異",
        summary: "把都市最容易搞混的八哥類一次拆開，很適合對照網站的常見鳥類卡片一起記。",
        focus: "八哥類、外來種辨識、城市常見鳥",
        audience: "想先解決最常混淆鳥種的新手",
        sourceUrl: "https://www.youtube.com/watch?v=TXgGqxM6T2Q",
        thumbnailUrl: "https://i.ytimg.com/vi/TXgGqxM6T2Q/hqdefault.jpg",
        viewCount: "1,118 次觀看",
        publishOrder: "頻道第 6 支上架",
      },
      {
        title: "棕背伯勞與紅尾伯勞的識別方法",
        summary: "伯勞類對新手來說常常只覺得『長很像』，這支會把差異講得很具體。",
        focus: "伯勞辨識、羽色差異、相似種比較",
        audience: "想進一步提升辨識細節的人",
        sourceUrl: "https://www.youtube.com/watch?v=_XdZBB3pAfU",
        thumbnailUrl: "https://i.ytimg.com/vi/_XdZBB3pAfU/hqdefault.jpg",
        viewCount: "2,613 次觀看",
        publishOrder: "頻道第 9 支上架",
      },
      {
        title: "珠頸斑鳩和金背鳩差在哪？",
        summary: "把都市與林邊都可能看到的鳩類差異講清楚，對剛開始認斑鳩系統的人很實用。",
        focus: "斑鳩辨識、頸部花紋、羽色差異",
        audience: "想把生活圈常見鳩類一次分清楚的人",
        sourceUrl: "https://www.youtube.com/watch?v=NfbfHrF0160",
        thumbnailUrl: "https://i.ytimg.com/vi/NfbfHrF0160/hqdefault.jpg",
        viewCount: "2,093 次觀看",
        publishOrder: "頻道第 25 支上架",
      },
    ],
  },
  {
    title: "田野調查與觀察延伸",
    description: "如果你比較喜歡跟著走現場、看實地觀察和導覽活動，這幾支會更適合你。",
    accent: "bg-sky-50 border-sky-100",
    topics: [
      {
        title: "首次！關渡自然公園賞鳥之旅",
        summary: "最新上架的田野調查片之一，適合直接感受頻道現在的外出觀察節奏。",
        focus: "關渡自然公園、水鳥、外出賞鳥",
        audience: "想跟著頻道走戶外路線的人",
        sourceUrl: "https://www.youtube.com/watch?v=Sx_DvxSRuo4",
        thumbnailUrl: "https://i.ytimg.com/vi/Sx_DvxSRuo4/hqdefault.jpg",
        viewCount: "167 次觀看",
        publishOrder: "頻道第 1 支上架",
      },
      {
        title: "800mm 鏡頭直擊！台大常見鳥類的生動畫面",
        summary: "用很近的拍攝距離帶你看常見鳥的動作，對建立生活圈辨識很有幫助。",
        focus: "台大校園、常見鳥、特寫觀察",
        audience: "想練生活圈辨識的人",
        sourceUrl: "https://www.youtube.com/watch?v=gI7X_RDeQRs",
        thumbnailUrl: "https://i.ytimg.com/vi/gI7X_RDeQRs/hqdefault.jpg",
        viewCount: "179 次觀看",
        publishOrder: "頻道第 2 支上架",
      },
      {
        title: "鳥類導航：鳥類導覽活動開箱",
        summary: "如果你對實體導覽活動或現場帶看有興趣，這支是很好的入口。",
        focus: "導覽活動、大安森林公園、入門帶看",
        audience: "想知道觀鳥導覽長什麼樣的人",
        sourceUrl: "https://www.youtube.com/watch?v=y4tcKjd2xnw",
        thumbnailUrl: "https://i.ytimg.com/vi/y4tcKjd2xnw/hqdefault.jpg",
        viewCount: "224 次觀看",
        publishOrder: "頻道第 8 支上架",
      },
    ],
  },
];

export const guanNiaoRenBlog = {
  name: "觀鳥人部落格",
  platform: "vocus 方格子",
  blogUrl: "https://vocus.cc/user/%40mason_bird_watching",
  intro:
    "用文章延伸 YouTube 影片內容，補上觀察背景、辨識重點與黑冠麻鷺專題紀錄，適合想慢慢讀的人。",
  sourceUrl: "https://vocus.cc/user/%40mason_bird_watching",
};

export const guanNiaoRenBlogSections: ChannelSection[] = [
  {
    title: "相似鳥種辨識整理",
    description: "如果你想知道『到底怎麼分』，這一組最實用，尤其適合常在公園看到八哥或斑鳩卻叫不出名字的人。",
    accent: "bg-amber-50 border-amber-100",
    topics: [
      {
        title: "辨識家八哥、白尾八哥和臺灣冠八哥的方式",
        summary: "從新手最常混淆的八哥類切入，適合搭配網站的常見鳥類卡片一起看。",
        focus: "相似種差異、外來種與保育種",
        audience: "想建立辨識力的新手",
        sourceUrl: "https://vocus.cc/user/%40mason_bird_watching",
      },
      {
        title: "家八哥和白尾八哥對臺灣冠八哥與農民的影響",
        summary: "不只講怎麼分，還把物種影響與保育背景補上，知識密度更完整。",
        focus: "物種辨識、外來種影響、保育",
        audience: "想從辨識延伸到議題理解的人",
        sourceUrl: "https://vocus.cc/user/%40mason_bird_watching",
      },
    ],
  },
  {
    title: "野生動物議題與延伸觀察",
    description: "除了賞鳥教學，頻道也延伸到野生動物倡議與現場紀錄，讓內容不只停在『認鳥』。",
    accent: "bg-sky-50 border-sky-100",
    topics: [
      {
        title: "EP1 為野生動物而走行動聯盟，為什麼要遊行呢？",
        summary: "把參與現場活動的原因與訴求講清楚，讓觀眾知道賞鳥也能連到保育行動。",
        focus: "倡議現場、行動背景",
        audience: "對野生動物議題有興趣的人",
        sourceUrl: "https://vocus.cc/user/%40mason_bird_watching",
      },
      {
        title: "EP2 為野生動物遊行，三大宗旨與三項具體訴求",
        summary: "承接上一支，適合想快速理解活動重點與保育主張的人。",
        focus: "活動重點、訴求整理",
        audience: "想快速掌握議題的人",
        sourceUrl: "https://vocus.cc/user/%40mason_bird_watching",
      },
    ],
  },
];

type BirdSeed = Omit<
  BirdCard,
  "size" | "behavior" | "watchTip" | "imageSrc" | "imageAlt" | "imageCredit" | "imagePage"
>;

type BirdImageOverride = {
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
  imagePage: string;
};

function createBirdImage(name: string, imageSrc: string, imagePage: string): BirdImageOverride {
  return {
    imageSrc,
    imageAlt: `${name} 的真實鳥類照片`,
    imageCredit: "Wikipedia / Wikimedia Commons",
    imagePage,
  };
}

function describeSize(traits: string[]) {
  if (traits.includes("small")) return "小型鳥，適合先看整體輪廓與移動方式。";
  if (traits.includes("medium")) return "中型鳥，站姿與頭部比例通常很好辨識。";
  return "體型中等偏大，遠看時也容易留下印象。";
}

function describeBehavior(traits: string[], habitats: string[]) {
  if (traits.includes("waterbird")) return "常在水邊慢步覓食，停下來觀察嘴型與腳色很有幫助。";
  if (traits.includes("tail-up")) return "移動時尾巴或身體動作明顯，行為特徵很有辨識價值。";
  if (habitats.includes("forest-edge")) return "多在樹梢、灌叢或林緣活動，聽聲音常比先看到更容易。";
  return "常出現在生活圈綠地，先記住牠最常出現的位置會更快上手。";
}

function describeWatchTip(traits: string[], habitats: string[]) {
  if (traits.includes("eye-ring")) return "先看臉部細節和眼圈，再回頭對照身體顏色。";
  if (traits.includes("head-pattern")) return "頭部花紋通常是第一辨識點，先記頭再記身體。";
  if (traits.includes("white")) return "白色區塊的位置與範圍，往往是分辨相似鳥種的關鍵。";
  if (habitats.includes("water")) return "先判斷是在岸邊、淺水區還是草叢邊活動，再縮小候選範圍。";
  return "先看體型和站姿，再補看顏色與嘴型，會比只盯羽色更有效。";
}

const birdImageOverrides: Record<string, BirdImageOverride> = {
  白頭翁: createBirdImage(
    "白頭翁",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Light-vented_Bulbul_%28Pycnonotus_sinensis%29_%287184485008%29.jpg",
    "https://commons.wikimedia.org/wiki/File:Light-vented_Bulbul_(Pycnonotus_sinensis)_(7184485008).jpg"
  ),
  綠繡眼: createBirdImage(
    "綠繡眼",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Japanese_white-eye_at_Tenn%C5%8Dji_Park_in_Osaka%2C_January_2016_III.jpg",
    "https://en.wikipedia.org/wiki/Warbling_white-eye"
  ),
  麻雀: createBirdImage(
    "麻雀",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg",
    "https://en.wikipedia.org/wiki/Eurasian_tree_sparrow"
  ),
  紅嘴黑鵯: createBirdImage(
    "紅嘴黑鵯",
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Black_Bulbul_0A2A0215.jpg",
    "https://en.wikipedia.org/wiki/Black_bulbul"
  ),
  夜鷺: createBirdImage(
    "夜鷺",
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nycticorax_nycticorax_457953189.jpg",
    "https://en.wikipedia.org/wiki/Black-crowned_night_heron"
  ),
  小白鷺: createBirdImage(
    "小白鷺",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Little_egret_%28Egretta_garzetta%29_Photograph_by_Shantanu_Kuveskar.jpg",
    "https://en.wikipedia.org/wiki/Little_egret"
  ),
  珠頸斑鳩: createBirdImage(
    "珠頸斑鳩",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Spotted_dove_%28Spilopelia_chinensis_suratensis%29.jpg",
    "https://en.wikipedia.org/wiki/Spotted_dove"
  ),
  五色鳥: createBirdImage(
    "五色鳥",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Taiwan_barbet_%28Psilopogon_nuchalis%29_Qianshan.jpg",
    "https://en.wikipedia.org/wiki/Taiwan_barbet"
  ),
  鵲鴝: createBirdImage(
    "鵲鴝",
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Oriental_magpie-robin_%28Copsychus_saularis_ceylonensis%29_male.jpg",
    "https://en.wikipedia.org/wiki/Oriental_magpie-robin"
  ),
  樹鵲: createBirdImage(
    "樹鵲",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Dendrocitta_formosae_formosae_1.jpg",
    "https://en.wikipedia.org/wiki/Grey_treepie"
  ),
  黑冠麻鷺: createBirdImage(
    "黑冠麻鷺",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Malayan_Night-Heron_-_Taiwan_S4E8695_%2817320173361%29.jpg",
    "https://en.wikipedia.org/wiki/Malayan_night_heron"
  ),
  白鶺鴒: createBirdImage(
    "白鶺鴒",
    "https://upload.wikimedia.org/wikipedia/commons/6/60/20180415_015_Winterswijk_Witte_kwikstaart_%2840785272624%29.jpg",
    "https://en.wikipedia.org/wiki/White_wagtail"
  ),
  黃頭鷺: createBirdImage(
    "黃頭鷺",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese%20pond%20heron.jpg",
    "https://commons.wikimedia.org/wiki/File:Chinese_pond_heron.jpg"
  ),
  牛背鷺: createBirdImage(
    "牛背鷺",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern%20cattle%20egret%20IMG%208019.jpg",
    "https://commons.wikimedia.org/wiki/File:Eastern_cattle_egret_IMG_8019.jpg"
  ),
  蒼鷺: createBirdImage(
    "蒼鷺",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Grey_heron_2022_03_18_01.jpg",
    "https://en.wikipedia.org/wiki/Grey_heron"
  ),
  大白鷺: createBirdImage(
    "大白鷺",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Great_Egret_%28Ardea_alba%29_in_Breeding_Plumage%2C_Cape_May_County%2C_New_Jersey%2C_USA_%28cropped%29.png",
    "https://en.wikipedia.org/wiki/Great_egret"
  ),
  翠鳥: createBirdImage(
    "翠鳥",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg",
    "https://en.wikipedia.org/wiki/Common_kingfisher"
  ),
  紅冠水雞: createBirdImage(
    "紅冠水雞",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Common_moorhen_%28Gallinula_chloropus%29_France.jpg",
    "https://en.wikipedia.org/wiki/Common_moorhen"
  ),
  白腹秧雞: createBirdImage(
    "白腹秧雞",
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Amaurornis_phoenicurus_-_Singapore_Botanic_Gardens.jpg",
    "https://en.wikipedia.org/wiki/White-breasted_waterhen"
  ),
  小彎嘴: createBirdImage(
    "小彎嘴",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Tawny-flanked_Prinia_%28Prinia_subflava%29_%2811465162445%29.jpg",
    "https://en.wikipedia.org/wiki/Tawny-flanked_prinia"
  ),
  灰頭鷦鶯: createBirdImage(
    "灰頭鷦鶯",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Plain_prinia_%28Prinia_inornata_inornata%29.jpg",
    "https://en.wikipedia.org/wiki/Plain_prinia"
  ),
  褐頭鷦鶯: createBirdImage(
    "褐頭鷦鶯",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Zitting_cisticola_2024_04_19_%28cropped%29.jpg",
    "https://en.wikipedia.org/wiki/Zitting_cisticola"
  ),
  家燕: createBirdImage(
    "家燕",
    "https://upload.wikimedia.org/wikipedia/commons/7/7d/Rauchschwalbe_Hirundo_rustica.jpg",
    "https://en.wikipedia.org/wiki/Barn_swallow"
  ),
  赤腰燕: createBirdImage(
    "赤腰燕",
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Red-rumped_swallow_in_Calpe%2C_Spain_-_May_2018_01.jpg",
    "https://en.wikipedia.org/wiki/European_red-rumped_swallow"
  ),
  大卷尾: createBirdImage(
    "大卷尾",
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bdrongo-Sandeep1.jpg",
    "https://en.wikipedia.org/wiki/Black_drongo"
  ),
  斑文鳥: createBirdImage(
    "斑文鳥",
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Scaly-breasted_munia_%28Lonchura_punctulata_nisoria%29_Ubud.jpg",
    "https://en.wikipedia.org/wiki/Scaly-breasted_munia"
  ),
  白腰文鳥: createBirdImage(
    "白腰文鳥",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/White-rumped_Munia_East_Distrct_Sikkim_India_05.07.2018.jpg",
    "https://en.wikipedia.org/wiki/White-rumped_munia"
  ),
  紅鳩: createBirdImage(
    "紅鳩",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Streptopelia_tranquebarica.jpg",
    "https://en.wikipedia.org/wiki/Red_collared_dove"
  ),
  山紅頭: createBirdImage(
    "山紅頭",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Rufous-capped_babbler_%28Cyanoderma_ruficeps_praecognitum%29_Shuangyu.jpg",
    "https://en.wikipedia.org/wiki/Rufous-capped_babbler"
  ),
  台灣藍鵲: createBirdImage(
    "台灣藍鵲",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Taiwan_blue_magpie_%28Urocissa_caerulea%29_Xindian.jpg",
    "https://en.wikipedia.org/wiki/Taiwan_blue_magpie"
  ),
  喜鵲: createBirdImage(
    "喜鵲",
    "https://upload.wikimedia.org/wikipedia/commons/2/22/Eurasian_magpie_%2810860%29.jpg",
    "https://en.wikipedia.org/wiki/Eurasian_magpie"
  ),
  鳳頭蒼鷹: createBirdImage(
    "鳳頭蒼鷹",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/C-Goshawk-Sandeep.jpg",
    "https://en.wikipedia.org/wiki/Crested_goshawk"
  ),
  大冠鷲: createBirdImage(
    "大冠鷲",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Spilornis_cheela_%28Bandipur%2C_2008%29.jpg",
    "https://en.wikipedia.org/wiki/Crested_serpent_eagle"
  ),
  小環頸鴴: createBirdImage(
    "小環頸鴴",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Charadrius_dubius_-_Little_ringed_plover_05.jpg",
    "https://en.wikipedia.org/wiki/Little_ringed_plover"
  ),
  磯鷸: createBirdImage(
    "磯鷸",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Actitis_hypoleucos_-_Laem_Pak_Bia.jpg",
    "https://en.wikipedia.org/wiki/Common_sandpiper"
  ),
  黃小鷺: createBirdImage(
    "黃小鷺",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ixobrychus_sinensis_-_Chinese_Garden.jpg",
    "https://en.wikipedia.org/wiki/Yellow_bittern"
  ),
  小水鴨: createBirdImage(
    "小水鴨",
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Eurasian_teal_%28Anas_crecca_crecca%29_male_Qingshui.jpg",
    "https://en.wikipedia.org/wiki/Eurasian_teal"
  ),
  綠頭鴨: createBirdImage(
    "綠頭鴨",
    "https://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg",
    "https://en.wikipedia.org/wiki/Mallard"
  ),
  赤腹鶇: createBirdImage(
    "赤腹鶇",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Turdus_eunomus_-_Forest_Botial-Jarvis_-_616099817_%28cropped%29.jpeg",
    "https://en.wikipedia.org/wiki/Dusky_thrush"
  ),
  白腹鶇: createBirdImage(
    "白腹鶇",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Pale_Thrush_-_Taiwan_S4E8071_%2817027483687%29.jpg",
    "https://en.wikipedia.org/wiki/Pale_thrush"
  ),
  灰椋鳥: createBirdImage(
    "灰椋鳥",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Spodiopsar_cineraceus_Higashi-hagoromo_station.jpg",
    "https://en.wikipedia.org/wiki/White-cheeked_starling"
  ),
  八哥: createBirdImage(
    "八哥",
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Acridotheres_javanicus_-_Kent_Ridge_Park.jpg",
    "https://en.wikipedia.org/wiki/Javan_myna"
  ),
  白尾八哥: createBirdImage(
    "白尾八哥",
    "https://upload.wikimedia.org/wikipedia/commons/d/db/Great_myna_%28Acridotheres_grandis%29_Prek_Toal.jpg",
    "https://en.wikipedia.org/wiki/Great_myna"
  ),
  家八哥: createBirdImage(
    "家八哥",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Acridotheres_tristis00.jpg",
    "https://en.wikipedia.org/wiki/Common_myna"
  ),
  黑翅鳶: createBirdImage(
    "黑翅鳶",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Black-shouldered_Kite_%28Elanus_caeruleus%29_in_Hyderabad_W_IMG_4418.jpg",
    "https://en.wikipedia.org/wiki/Black-winged_kite"
  ),
  黑鳶: createBirdImage(
    "黑鳶",
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Schwarzmilan.jpg",
    "https://en.wikipedia.org/wiki/Black_kite"
  ),
  黑面琵鷺: createBirdImage(
    "黑面琵鷺",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Black_faced_spoonbill_at_Niigata.JPG",
    "https://en.wikipedia.org/wiki/Black-faced_spoonbill"
  ),
  冠羽畫眉: createBirdImage(
    "冠羽畫眉",
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Garrulax_taewanus%2C_Taiwan_1.jpg",
    "https://en.wikipedia.org/wiki/Taiwan_hwamei"
  ),
  白耳畫眉: createBirdImage(
    "白耳畫眉",
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/White-eared_Sibia_-_Taiwan_S4E8153_%2819547305835%29.jpg",
    "https://en.wikipedia.org/wiki/White-eared_sibia"
  ),
  棕背伯勞: createBirdImage(
    "棕背伯勞",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Lanius_cristatus_-_Surin.jpg",
    "https://en.wikipedia.org/wiki/Brown_shrike"
  ),
};

const birdSeeds: BirdSeed[] = [
  {
    name: "白頭翁",
    summary: "都市與郊區最常見的鳥種之一，活潑好動，常在樹梢與電線間跳躍。",
    habitat: "公園、校園、住宅區綠地",
    clue: "黑色頭頂配上明顯白色後頭，是最容易記住的外觀特徵。",
    accent: "from-rose-100 to-orange-50",
    matcherHabitats: ["urban", "park", "forest-edge"],
    matcherTraits: ["medium", "head-pattern", "dark"],
  },
  {
    name: "綠繡眼",
    summary: "身形嬌小，常成群出現，喜歡在花叢與枝葉間快速移動。",
    habitat: "庭院、果園、低海拔闊葉林",
    clue: "眼睛周圍一圈白色眼框，腹部偏黃綠，是辨識關鍵。",
    accent: "from-lime-100 to-emerald-50",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["small", "eye-ring", "green"],
  },
  {
    name: "麻雀",
    summary: "與人類生活距離很近，容易在路邊、屋簷與農地周圍看到。",
    habitat: "街區、車站、農村、空地",
    clue: "體色偏褐，臉頰淡色，常以短距離跳步方式活動。",
    accent: "from-amber-100 to-stone-50",
    matcherHabitats: ["urban", "park"],
    matcherTraits: ["small", "brown"],
  },
  {
    name: "紅嘴黑鵯",
    summary: "叫聲響亮，體型中等，常見於開闊樹林與山邊聚落。",
    habitat: "山區邊緣、果園、灌叢",
    clue: "黑色身體配上鮮紅嘴喙與腳，是非常直接的辨識點。",
    accent: "from-slate-100 to-red-50",
    matcherHabitats: ["forest-edge", "park"],
    matcherTraits: ["medium", "dark"],
  },
  {
    name: "夜鷺",
    summary: "靠近水域時很有機會遇見，白天常安靜停棲，傍晚後更活躍。",
    habitat: "河岸、公園池塘、濕地",
    clue: "成鳥背部偏黑、腹部偏白，站姿穩重，脖子常縮起。",
    accent: "from-sky-100 to-cyan-50",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "medium", "dark"],
  },
  {
    name: "小白鷺",
    summary: "水邊常客，步伐緩慢，擅長在淺水區覓食，是新手容易認出的鳥。",
    habitat: "濕地、魚塭、溪口、河濱",
    clue: "全身白色、黑腳配黃趾，覓食時會專注盯著水面。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "white", "medium"],
  },
  {
    name: "珠頸斑鳩",
    summary: "常在住宅區、公園草地與校園活動，步調穩定，常低頭在地面覓食。",
    habitat: "都市綠地、公園草地、校園空地",
    clue: "頸側有黑底白點的斑紋，看起來像一圈珠鍊。",
    accent: "from-stone-100 to-amber-50",
    matcherHabitats: ["urban", "park"],
    matcherTraits: ["medium", "brown"],
  },
  {
    name: "五色鳥",
    summary: "在台灣低海拔都市樹林很常聽到叫聲，外型可愛，是許多人入門後最先記住的樹棲鳥。",
    habitat: "都市公園、校園老樹區、低海拔林地",
    clue: "綠色身體、粗嘴、臉上有藍黃紅色塊，是辨識度很高的鳥。",
    accent: "from-emerald-100 to-lime-50",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["green", "medium", "thick-bill"],
  },
  {
    name: "鵲鴝",
    summary: "在校園、住家附近與開闊林緣都不難遇見，常站在明顯的位置抬尾鳴唱。",
    habitat: "校園、庭院、林緣、低海拔聚落",
    clue: "黑白對比明顯，尾巴常翹起，是辨識時很好用的特徵。",
    accent: "from-slate-100 to-neutral-50",
    matcherHabitats: ["urban", "forest-edge"],
    matcherTraits: ["medium", "dark", "tail-up"],
  },
  {
    name: "樹鵲",
    summary: "體型比想像中大，常成小群在樹梢活動，聲音存在感很高。",
    habitat: "低海拔林緣、公園大樹區、郊山",
    clue: "長尾加上黑白栗色塊明顯，飛行時很容易留下印象。",
    accent: "from-violet-100 to-sky-50",
    matcherHabitats: ["forest-edge", "park"],
    matcherTraits: ["medium", "brown", "tail-up"],
  },
  {
    name: "黑冠麻鷺",
    summary: "在都市公園與校園其實很常見，站著不動時很像落葉堆。",
    habitat: "校園、公園草地、樹林邊緣",
    clue: "站姿筆直、嘴喙粗長，受驚時會慢慢走開而不是立刻飛走。",
    accent: "from-zinc-100 to-orange-50",
    matcherHabitats: ["park", "urban"],
    matcherTraits: ["medium", "brown", "waterbird"],
  },
  {
    name: "白鶺鴒",
    summary: "常在河岸、停車場、空地或草坪上快步行走，尾巴會上下擺動。",
    habitat: "河岸步道、草地、空地、校園",
    clue: "黑白配色明顯，走路節奏快，尾巴不停點動。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["urban", "water", "park"],
    matcherTraits: ["small", "white", "tail-up"],
  },
  {
    name: "黃頭鷺",
    summary: "夏季常見於農地、草地與水田邊，繁殖羽時頭頸帶暖黃色。",
    habitat: "農田、濕地邊、草地",
    clue: "繁殖期頭頸偏黃褐，線條較修長，站姿常比牛背鷺更像典型水邊鷺科。",
    accent: "from-amber-100 to-white",
    matcherHabitats: ["water", "park"],
    matcherTraits: ["white", "waterbird", "medium"],
  },
  {
    name: "牛背鷺",
    summary: "常出現在牛群、草地與農田邊，走動節奏穩定，和小白鷺相比更短胖。",
    habitat: "草地、農田、濕地邊緣",
    clue: "脖子較短、身形更結實，常直接在地面走動，和黃頭鷺的修長感不太一樣。",
    accent: "from-amber-100 to-slate-50",
    matcherHabitats: ["water", "park"],
    matcherTraits: ["white", "waterbird", "medium"],
  },
  {
    name: "蒼鷺",
    summary: "體型很大，常在濕地、河口與魚塭靜靜站著，存在感很強。",
    habitat: "河口、魚塭、濕地、河濱",
    clue: "長腿長頸、灰色為主，飛行時脖子會縮成 S 型。",
    accent: "from-slate-100 to-cyan-50",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "dark", "medium"],
  },
  {
    name: "大白鷺",
    summary: "比小白鷺更高大修長，常在較開闊的濕地與河口活動。",
    habitat: "濕地、河口、魚塭、水田",
    clue: "全身白色、體型大，脖子修長，動作相對從容。",
    accent: "from-white to-cyan-50",
    matcherHabitats: ["water"],
    matcherTraits: ["white", "waterbird", "medium"],
  },
  {
    name: "翠鳥",
    summary: "常在溪流、公園池塘與河道邊出現，停棲後會突然俯衝抓魚。",
    habitat: "溪流、池塘、河岸、水圳",
    clue: "藍綠背部與橘褐腹部對比強，嘴長而直。",
    accent: "from-cyan-100 to-blue-50",
    matcherHabitats: ["water"],
    matcherTraits: ["small", "green", "thick-bill"],
  },
  {
    name: "紅冠水雞",
    summary: "濕地公園很容易遇到，會在水邊草叢間走動，幼鳥與成鳥外觀差異也很有趣。",
    habitat: "埤塘、濕地、公園池畔",
    clue: "額頭有紅色額甲，身體偏黑，腳趾很長。",
    accent: "from-slate-100 to-red-50",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "dark", "medium"],
  },
  {
    name: "白腹秧雞",
    summary: "常在都市水溝、草叢與濕地邊緣出沒，聲音常比身影更容易先被發現。",
    habitat: "水溝、濕地草叢、池塘邊",
    clue: "臉與腹部偏白，身體深色，常快速穿梭在草叢間。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "white", "dark"],
  },
  {
    name: "小彎嘴",
    summary: "在灌叢與林緣相當常見，常成對活動，叫聲辨識度高。",
    habitat: "灌叢、林緣、郊山步道",
    clue: "尾巴長、嘴微彎，動作靈活，常在低矮枝葉間穿梭。",
    accent: "from-stone-100 to-lime-50",
    matcherHabitats: ["forest-edge"],
    matcherTraits: ["small", "brown", "tail-up"],
  },
  {
    name: "灰頭鷦鶯",
    summary: "草地與灌叢的常客，會在蘆葦或草叢頂端停一下又鑽進去。",
    habitat: "草地、濕地灌叢、農地邊緣",
    clue: "頭偏灰、身體褐色，尾巴細長，常發出連續叫聲。",
    accent: "from-zinc-100 to-amber-50",
    matcherHabitats: ["park", "water", "forest-edge"],
    matcherTraits: ["small", "brown", "tail-up"],
  },
  {
    name: "褐頭鷦鶯",
    summary: "和灰頭鷦鶯一樣很常見，但頭頂更偏暖褐色，棲地重疊度高。",
    habitat: "草地、濕地邊、灌叢",
    clue: "頭頂褐色較明顯，尾巴細長，常在低處快速移動。",
    accent: "from-amber-100 to-stone-50",
    matcherHabitats: ["park", "water", "forest-edge"],
    matcherTraits: ["small", "brown", "tail-up"],
  },
  {
    name: "家燕",
    summary: "春夏常見的飛行高手，常在建築物與空地上空高速掠過。",
    habitat: "街區上空、橋下、河岸、農地",
    clue: "飛行速度快、尾叉明顯，停棲時身形修長。",
    accent: "from-slate-100 to-blue-50",
    matcherHabitats: ["urban", "water"],
    matcherTraits: ["small", "dark", "tail-up"],
  },
  {
    name: "赤腰燕",
    summary: "和家燕一樣常見於開闊空域，但腰部的暖色調是很好的辨識點。",
    habitat: "農地、河岸、聚落邊緣",
    clue: "腹部較淡，腰部帶橙褐色，尾叉不如家燕那麼深。",
    accent: "from-amber-100 to-white",
    matcherHabitats: ["urban", "water"],
    matcherTraits: ["small", "brown", "tail-up"],
  },
  {
    name: "大卷尾",
    summary: "在農地、公園與林緣常停在高處觀察，捕蟲動作俐落。",
    habitat: "開闊林緣、農地、公園",
    clue: "整體黑色，尾巴分叉像剪刀，是很好記的特徵。",
    accent: "from-slate-100 to-neutral-50",
    matcherHabitats: ["park", "forest-edge", "urban"],
    matcherTraits: ["dark", "medium", "tail-up"],
  },
  {
    name: "斑文鳥",
    summary: "草地和農地邊很常見，常小群覓食，冬季時更容易遇到。",
    habitat: "草地、農田、灌叢邊",
    clue: "褐色身體配上白色斑點，嘴粗短呈灰藍色。",
    accent: "from-stone-100 to-amber-50",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["small", "brown", "thick-bill"],
  },
  {
    name: "白腰文鳥",
    summary: "常混在斑文鳥群裡，體型小巧，喜歡在草穗和低矮植被上活動。",
    habitat: "草地、農地邊、灌叢",
    clue: "深色身體配上明顯白腰，嘴厚而短。",
    accent: "from-slate-100 to-white",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["small", "dark", "thick-bill"],
  },
  {
    name: "紅鳩",
    summary: "在郊區、農地與林緣不難遇到，叫聲低沉，常靜靜停在電線或枝頭。",
    habitat: "農地、灌叢、聚落邊緣",
    clue: "整體帶暖紅褐色調，體型比斑鳩更纖細。",
    accent: "from-rose-100 to-amber-50",
    matcherHabitats: ["forest-edge", "urban"],
    matcherTraits: ["medium", "brown"],
  },
  {
    name: "山紅頭",
    summary: "低海拔山區常見的小型山鳥，成群活動時很熱鬧。",
    habitat: "林緣、郊山步道、低海拔闊葉林",
    clue: "頭部偏栗紅，身體橄欖綠，常在樹梢間不停穿梭。",
    accent: "from-rose-100 to-lime-50",
    matcherHabitats: ["forest-edge"],
    matcherTraits: ["small", "green", "brown"],
  },
  {
    name: "台灣藍鵲",
    summary: "雖然不是每天都遇到，但在部分郊區和校園林地很有機會看見整群出動。",
    habitat: "郊山、校園樹林、住宅區邊緣",
    clue: "藍色身體、紅嘴紅腳，尾巴非常長，辨識度極高。",
    accent: "from-cyan-100 to-indigo-100",
    matcherHabitats: ["forest-edge", "urban"],
    matcherTraits: ["medium", "tail-up", "dark"],
  },
  {
    name: "喜鵲",
    summary: "在部分北部空曠綠地與河濱不難看到，黑白配色鮮明。",
    habitat: "河濱、公園、農田邊",
    clue: "黑白身體搭配長尾，站在高處時相當醒目。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["park", "urban"],
    matcherTraits: ["medium", "white", "tail-up"],
  },
  {
    name: "鳳頭蒼鷹",
    summary: "都市公園與校園樹林都可能見到，是台灣都會區相當有名的猛禽。",
    habitat: "都市公園、校園、大型綠地",
    clue: "飛行時尾巴長、翅圓，眼神銳利，腹面有細橫斑。",
    accent: "from-stone-100 to-slate-50",
    matcherHabitats: ["park", "urban"],
    matcherTraits: ["medium", "brown", "head-pattern"],
  },
  {
    name: "大冠鷲",
    summary: "郊山和林緣經常能看到在空中盤旋，是入門辨認猛禽的好對象。",
    habitat: "山區步道、林緣、丘陵",
    clue: "頭後有冠羽，飛行時翅膀寬大，尾巴有明顯條紋。",
    accent: "from-amber-100 to-zinc-50",
    matcherHabitats: ["forest-edge"],
    matcherTraits: ["medium", "brown", "head-pattern"],
  },
  {
    name: "小環頸鴴",
    summary: "河灘與潮間帶常見的小型鷸鴴科鳥類，常在裸露地表快速跑動。",
    habitat: "河灘、海邊、濕地裸地",
    clue: "眼圈鮮明、腳細長，停下來時頭部黑白花紋很清楚。",
    accent: "from-amber-100 to-sky-50",
    matcherHabitats: ["water"],
    matcherTraits: ["small", "white", "head-pattern"],
  },
  {
    name: "磯鷸",
    summary: "溪流與河岸很容易看到，常低頭點動身體，在石頭與水邊來回走動。",
    habitat: "溪流、河岸、濕地邊",
    clue: "褐色背、白色腹，飛起來時翅膀上有白斑。",
    accent: "from-stone-100 to-sky-50",
    matcherHabitats: ["water"],
    matcherTraits: ["small", "brown", "white"],
  },
  {
    name: "黃小鷺",
    summary: "喜歡躲在水邊植被裡，離得近時常突然振翅飛起。",
    habitat: "池塘、濕地、蘆葦邊",
    clue: "身形較小，背部偏黃褐，飛行時翅膀大片白色很明顯。",
    accent: "from-amber-100 to-white",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "brown", "white"],
  },
  {
    name: "小水鴨",
    summary: "冬季濕地常見鴨科鳥類，體型小巧，是辨識水鳥的好入門。",
    habitat: "埤塘、濕地、河口",
    clue: "身體緊湊，公鳥頭部花色細緻，常成群休息或覓食。",
    accent: "from-emerald-100 to-cyan-50",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "small", "green"],
  },
  {
    name: "綠頭鴨",
    summary: "在公園湖面與冬季濕地都很常見，是許多人最熟悉的鴨類之一。",
    habitat: "池塘、湖泊、濕地",
    clue: "公鳥頭部綠色金屬光澤明顯，母鳥則偏褐色。",
    accent: "from-green-100 to-emerald-50",
    matcherHabitats: ["water"],
    matcherTraits: ["waterbird", "green", "brown"],
  },
  {
    name: "赤腹鶇",
    summary: "秋冬在公園與林地地面覓食時常見，偶爾會一群一起出現。",
    habitat: "公園草地、林下、校園樹蔭",
    clue: "腹部暖橘色很有記憶點，常在落葉層翻找食物。",
    accent: "from-rose-100 to-amber-50",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["medium", "brown", "ground"],
  },
  {
    name: "白腹鶇",
    summary: "冬季都會公園常見的鶇科鳥類，安靜時不太起眼，但其實很常出現。",
    habitat: "公園、校園、林緣",
    clue: "腹部偏白，背部褐灰色，站姿挺直。",
    accent: "from-white to-stone-100",
    matcherHabitats: ["park", "forest-edge"],
    matcherTraits: ["medium", "white", "brown"],
  },
  {
    name: "灰椋鳥",
    summary: "在都市街區、校園和公園都常見，常群聚停在電線或樹上。",
    habitat: "街區、公園、校園",
    clue: "灰白身體配黑色頭部與橘色嘴腳，群體行動很明顯。",
    accent: "from-slate-100 to-amber-50",
    matcherHabitats: ["urban", "park"],
    matcherTraits: ["medium", "white", "dark"],
  },
  {
    name: "八哥",
    summary: "都市常見外來種，在草地上行走和在路燈上停棲都很常見。",
    habitat: "街區、公園、空地",
    clue: "黑褐色身體、黃色嘴腳，眼周裸皮也偏黃。",
    accent: "from-zinc-100 to-amber-50",
    matcherHabitats: ["urban", "park"],
    matcherTraits: ["medium", "dark", "brown"],
  },
  {
    name: "白尾八哥",
    summary: "和八哥一樣常在人類活動區域出現，飛行時尾部白斑容易被注意到。",
    habitat: "公園、校園、街區",
    clue: "身體偏深色，尾部白色塊和黃色嘴腳很醒目。",
    accent: "from-slate-100 to-white",
    matcherHabitats: ["urban", "park"],
    matcherTraits: ["medium", "white", "dark"],
  },
  {
    name: "家八哥",
    summary: "在都市與市場周邊活動力很強，叫聲粗啞，常成對或成群。",
    habitat: "街區、住商混合區、公園",
    clue: "褐色身體、黑頭、黃色眼圈與嘴腳，是典型外來種外觀。",
    accent: "from-amber-100 to-zinc-50",
    matcherHabitats: ["urban"],
    matcherTraits: ["medium", "brown", "dark"],
  },
  {
    name: "黑翅鳶",
    summary: "近年在台灣平地愈來愈常見，常停在電線杆上觀察草地中的獵物。",
    habitat: "農地、河濱、草地邊",
    clue: "全身灰白，肩部有黑色翼斑，會在空中定點振翅。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["park", "urban", "water"],
    matcherTraits: ["white", "dark", "medium"],
  },
  {
    name: "黑鳶",
    summary: "河岸與開闊地常可見在空中盤旋，是很有代表性的中大型猛禽。",
    habitat: "河濱、河口、開闊丘陵",
    clue: "尾巴略呈凹形，飛行時翅膀長而略成 V 字。",
    accent: "from-zinc-100 to-slate-50",
    matcherHabitats: ["water", "forest-edge"],
    matcherTraits: ["dark", "medium"],
  },
  {
    name: "黑面琵鷺",
    summary: "冬季濕地明星鳥種，雖然不是生活圈天天可見，但新手常會特別想認識。",
    habitat: "河口、潟湖、濕地",
    clue: "全身白色，黑色匙狀嘴非常好認。",
    accent: "from-white to-slate-100",
    matcherHabitats: ["water"],
    matcherTraits: ["white", "waterbird", "thick-bill"],
  },
  {
    name: "冠羽畫眉",
    summary: "郊山步道與低海拔林緣常成群出現，動作熱鬧也不算太怕人。",
    habitat: "林緣、郊山、竹林邊",
    clue: "頭頂有微翹冠羽，眼周與臉部花紋清楚。",
    accent: "from-stone-100 to-lime-50",
    matcherHabitats: ["forest-edge"],
    matcherTraits: ["small", "brown", "head-pattern"],
  },
  {
    name: "白耳畫眉",
    summary: "山區和林緣常見，聲音宏亮，常一邊叫一邊在灌木間移動。",
    habitat: "郊山、林緣、竹林",
    clue: "耳羽白色明顯，背部褐色，尾巴略長。",
    accent: "from-white to-stone-100",
    matcherHabitats: ["forest-edge"],
    matcherTraits: ["small", "brown", "head-pattern"],
  },
  {
    name: "棕背伯勞",
    summary: "秋冬在空曠地和草生地很常見，常停在高處等待獵物。",
    habitat: "空地、河濱、農地、草地",
    clue: "眼部黑色過眼線強烈，背部帶栗褐色。",
    accent: "from-amber-100 to-slate-50",
    matcherHabitats: ["park", "urban", "water"],
    matcherTraits: ["small", "brown", "head-pattern"],
  },
];

export const birdCards: BirdCard[] = birdSeeds.map((bird) => {
  const override = birdImageOverrides[bird.name] ?? birdImageOverrides["白頭翁"];

  return {
    ...bird,
    size: describeSize(bird.matcherTraits),
    behavior: describeBehavior(bird.matcherTraits, bird.matcherHabitats),
    watchTip: describeWatchTip(bird.matcherTraits, bird.matcherHabitats),
    ...override,
  };
});

export const birdingSpots: SpotCard[] = [
  {
    name: "關渡自然公園",
    lineKey: "tamsui-xinyi",
    station: "R25 關渡",
    line: "淡水信義線",
    route: "關渡自然公園 Guandu Nature Park",
    summary: "從捷運站出發就能進入濕地核心區，對第一次想看水鳥的新手非常友善。",
    birds: ["小白鷺", "夜鷺", "黑面琵鷺", "紅冠水雞"],
    bestTime: "清晨 7:00 - 9:30 或冬季下午退潮前後",
    bestFor: "想先認識水鳥、涉禽與濕地環境的新手",
    habitatType: "平地",
    speciesCount: 60,
    distanceKm: 2,
    tone: "bg-sky-50 border-sky-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "大安森林公園",
    lineKey: "tamsui-xinyi",
    station: "R06 大安森林公園",
    line: "淡水信義線",
    route: "大安森林公園 Daan Park",
    summary: "交通最方便的入門地點之一，城市裡就能練習分辨白頭翁、綠繡眼與五色鳥。",
    birds: ["白頭翁", "綠繡眼", "五色鳥", "珠頸斑鳩"],
    bestTime: "上午 7:00 - 9:00，避開正午人潮與高溫",
    bestFor: "完全新手，想從生活圈開始建立辨識感",
    habitatType: "平地",
    speciesCount: 35,
    distanceKm: 2,
    tone: "bg-emerald-50 border-emerald-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "動物園－政大",
    lineKey: "wenhu",
    station: "BR01 動物園",
    line: "文湖線",
    route: "動物園－政大 Taipei Zoo - National Chengchi University",
    summary: "沿著山邊與溪流環境前進，能從都市邊緣慢慢接觸到更多林緣鳥。",
    birds: ["白頭翁", "紅嘴黑鵯", "五色鳥", "大冠鷲"],
    bestTime: "清晨到上午 10:00 前，鳥聲最活躍",
    bestFor: "想從城市公園進階到林緣賞鳥的人",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 4,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "社子島",
    lineKey: "tamsui-xinyi",
    station: "R15 劍潭",
    line: "淡水信義線",
    route: "社子島 Shezidao",
    summary: "開闊河濱與草地環境視野很好，適合練習看遠處飛行中的鳥與濕地邊鳥種。",
    birds: ["蒼鷺", "小白鷺", "黑翅鳶", "磯鷸"],
    bestTime: "清晨 6:30 - 8:30，或傍晚日照柔和時",
    bestFor: "想找視野開闊、比較不會被樹遮住的新手",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 2,
    tone: "bg-cyan-50 border-cyan-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "鹿角溪人工濕地",
    lineKey: "bannan",
    station: "BL05 亞東醫院",
    line: "板南線",
    route: "鹿角溪人工濕地 Lujiaoxi Constructed Wetland",
    summary: "步行距離不算長，但濕地型態完整，是很適合觀察水鳥與城市邊界鳥種的路線。",
    birds: ["小白鷺", "黃頭鷺", "紅冠水雞", "白腹秧雞"],
    bestTime: "清晨或陰天上午，水邊活動更明顯",
    bestFor: "想看濕地鳥，又不想跑太遠的人",
    habitatType: "平地",
    speciesCount: 50,
    distanceKm: 4,
    tone: "bg-teal-50 border-teal-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "烏來",
    lineKey: "songshan-xindian",
    station: "G01 新店",
    line: "松山新店線",
    route: "烏來 Wulai",
    summary: "山區鳥種更豐富，對已經看熟都市常見鳥、想進一步接觸山鳥的人很適合。",
    birds: ["山紅頭", "小彎嘴", "冠羽畫眉", "大冠鷲"],
    bestTime: "上午 7:00 - 10:00，天氣穩定、光線柔和時",
    bestFor: "已經有入門基礎，想開始看林間鳥種",
    habitatType: "山區",
    speciesCount: 45,
    distanceKm: 3,
    tone: "bg-amber-50 border-amber-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "深坑",
    lineKey: "wenhu",
    station: "BR02 木柵",
    line: "文湖線",
    route: "深坑 Shenkeng",
    summary: "從木柵延伸出去的山邊路線，對想開始接觸林緣鳥的入門者很合適。",
    birds: ["山紅頭", "五色鳥", "大冠鷲", "白耳畫眉"],
    bestTime: "上午 7:00 - 10:00，鳥聲最活躍",
    bestFor: "想從平地常見鳥進階到郊山鳥種的人",
    habitatType: "山區",
    speciesCount: 30,
    distanceKm: 2,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "劍南路步道",
    lineKey: "wenhu",
    station: "BR15 劍南路",
    line: "文湖線",
    route: "劍南路 Jiannan Road",
    summary: "市區可快速抵達的山區步道型路線，適合半天賞鳥行程。",
    birds: ["白頭翁", "紅嘴黑鵯", "樹鵲", "鳳頭蒼鷹"],
    bestTime: "清晨 6:30 - 9:30",
    bestFor: "想要城市近郊、時間彈性高的人",
    habitatType: "山區",
    speciesCount: 25,
    distanceKm: 2,
    tone: "bg-emerald-50 border-emerald-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "陽明山",
    lineKey: "tamsui-xinyi",
    station: "R15 劍潭",
    line: "淡水信義線",
    route: "陽明山 Yangmingshan",
    summary: "鳥種豐富度高，適合已熟悉平地常見鳥、想挑戰更多山區鳥的使用者。",
    birds: ["冠羽畫眉", "白耳畫眉", "山紅頭", "大冠鷲"],
    bestTime: "上午 7:00 - 10:30，雲霧少時更好觀察",
    bestFor: "想進一步認識山區鳥相的入門者",
    habitatType: "山區",
    speciesCount: 45,
    distanceKm: 5,
    tone: "bg-amber-50 border-amber-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "故宮－雙溪公園",
    lineKey: "tamsui-xinyi",
    station: "R16 士林",
    line: "淡水信義線",
    route: "故宮-雙溪公園 National Palace Museum",
    summary: "結合溪流、公園與林蔭，是很平衡的新手路線。",
    birds: ["綠繡眼", "白頭翁", "鵲鴝", "翠鳥"],
    bestTime: "上午 7:30 - 10:00",
    bestFor: "想在市區與自然感之間取得平衡的人",
    habitatType: "平地",
    speciesCount: 30,
    distanceKm: 2,
    tone: "bg-sky-50 border-sky-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "芝山岩",
    lineKey: "tamsui-xinyi",
    station: "R17 芝山",
    line: "淡水信義線",
    route: "芝山岩 Zhishanyan",
    summary: "短距離但有林地感，適合第一次走進都市小山丘賞鳥的人。",
    birds: ["白頭翁", "五色鳥", "紅嘴黑鵯", "樹鵲"],
    bestTime: "清晨到上午 9:30",
    bestFor: "想用短時間接觸林緣環境的新手",
    habitatType: "平地",
    speciesCount: 25,
    distanceKm: 2,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "立農濕地",
    lineKey: "tamsui-xinyi",
    station: "R19 石牌",
    line: "淡水信義線",
    route: "立農濕地 Linong Wetland",
    summary: "離捷運不遠就能接觸濕地鳥，是北市很適合練習水鳥辨識的點。",
    birds: ["小白鷺", "夜鷺", "白腹秧雞", "黃頭鷺"],
    bestTime: "清晨 6:30 - 8:30",
    bestFor: "想先學水鳥與濕地邊鳥種的人",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 4,
    tone: "bg-cyan-50 border-cyan-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "唭哩岸－關渡",
    lineKey: "tamsui-xinyi",
    station: "R20 唭哩岸",
    line: "淡水信義線",
    route: "唭哩岸-關渡 Qili'an-Guandu",
    summary: "沿線可從都市綠地一路接到更完整的濕地環境，變化感很好。",
    birds: ["白鶺鴒", "小白鷺", "黑翅鳶", "夜鷺"],
    bestTime: "早上 7:00 - 9:30",
    bestFor: "想一次看不同棲地變化的新手",
    habitatType: "平地",
    speciesCount: 50,
    distanceKm: 6,
    tone: "bg-teal-50 border-teal-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "番仔溝－貴子坑大排",
    lineKey: "tamsui-xinyi",
    station: "R22 北投",
    line: "淡水信義線",
    route: "番仔溝-貴子坑大排 Fanzigou-Guizkendapai",
    summary: "平地水域路線，鳥況穩定，節奏不會太趕，很適合練習觀察。",
    birds: ["黃頭鷺", "牛背鷺", "白腹秧雞", "紅冠水雞"],
    bestTime: "早上 7:00 - 9:00",
    bestFor: "偏好平地散步型賞鳥的新手",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 4,
    tone: "bg-sky-50 border-sky-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "珠海路",
    lineKey: "tamsui-xinyi",
    station: "R22A 新北投",
    line: "淡水信義線",
    route: "珠海路 Zhuhai Road",
    summary: "山邊道路型路線，能在較舒服的步行節奏下接觸山鳥。",
    birds: ["山紅頭", "冠羽畫眉", "白耳畫眉", "大卷尾"],
    bestTime: "上午 7:00 - 10:00",
    bestFor: "想開始認識北投一帶山區鳥種的人",
    habitatType: "山區",
    speciesCount: 40,
    distanceKm: 5,
    tone: "bg-amber-50 border-amber-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "忠義小徑",
    lineKey: "tamsui-xinyi",
    station: "R24 忠義",
    line: "淡水信義線",
    route: "忠義小徑 Zhongyi Trail",
    summary: "步道型路線但坡度壓力不高，適合剛接觸山徑賞鳥的使用者。",
    birds: ["白頭翁", "紅嘴黑鵯", "五色鳥", "棕背伯勞"],
    bestTime: "上午 7:00 - 10:00",
    bestFor: "想從平地過渡到步道賞鳥的人",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 4,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "挖仔尾",
    lineKey: "tamsui-xinyi",
    station: "R25 關渡",
    line: "淡水信義線",
    route: "挖仔尾 Waziwei",
    summary: "濕地與潮間帶環境完整，對想多看涉禽與水鳥的人很有吸引力。",
    birds: ["小白鷺", "蒼鷺", "磯鷸", "黑面琵鷺"],
    bestTime: "冬季上午與潮位變化時段",
    bestFor: "想把水鳥辨識練得更紮實的人",
    habitatType: "平地",
    speciesCount: 50,
    distanceKm: 2,
    tone: "bg-cyan-50 border-cyan-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "樹梅坑溪",
    lineKey: "tamsui-xinyi",
    station: "R26 竹圍",
    line: "淡水信義線",
    route: "樹梅坑溪 Plum Tree Creek",
    summary: "沿溪流與山邊環境前進，兼具水域與林緣特徵，變化感很好。",
    birds: ["翠鳥", "白頭翁", "紅嘴黑鵯", "山紅頭"],
    bestTime: "上午 7:00 - 10:00",
    bestFor: "喜歡邊走邊觀察不同環境轉換的人",
    habitatType: "山區",
    speciesCount: 40,
    distanceKm: 5,
    tone: "bg-emerald-50 border-emerald-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "淡江農場",
    lineKey: "tamsui-xinyi",
    station: "R27 紅樹林",
    line: "淡水信義線",
    route: "淡江農場 Tamkang Farm",
    summary: "山區與農場邊緣環境，鳥種豐富，適合把常見平地鳥再往外延伸。",
    birds: ["五色鳥", "樹鵲", "冠羽畫眉", "大卷尾"],
    bestTime: "上午 7:00 - 10:30",
    bestFor: "想練習聽聲辨位與山邊常見種的人",
    habitatType: "山區",
    speciesCount: 40,
    distanceKm: 4,
    tone: "bg-amber-50 border-amber-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "淡水忠烈祠",
    lineKey: "tamsui-xinyi",
    station: "R28 淡水",
    line: "淡水信義線",
    route: "淡水忠烈祠 Danshui Martyrs Shrine",
    summary: "海邊與聚落邊緣交錯，走法相對輕鬆，是淡水一帶入門路線之一。",
    birds: ["麻雀", "珠頸斑鳩", "白鶺鴒", "家燕"],
    bestTime: "上午 7:30 - 10:00",
    bestFor: "想安排淡水半日輕鬆賞鳥行程的人",
    habitatType: "平地",
    speciesCount: 35,
    distanceKm: 4,
    tone: "bg-sky-50 border-sky-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "四崁水",
    lineKey: "songshan-xindian",
    station: "G01 新店",
    line: "松山新店線",
    route: "四崁水 Sikanshui",
    summary: "山區型路線，較適合想在新店一帶延伸觀察的人。",
    birds: ["冠羽畫眉", "白耳畫眉", "山紅頭", "台灣藍鵲"],
    bestTime: "上午 7:00 - 10:00",
    bestFor: "想逐步接觸山區鳥相的人",
    habitatType: "山區",
    speciesCount: 40,
    distanceKm: 5,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "廣興",
    lineKey: "songshan-xindian",
    station: "G01 新店",
    line: "松山新店線",
    route: "廣興 Guangxing",
    summary: "山區環境穩定，適合安排半天以上的延伸觀察。",
    birds: ["五色鳥", "山紅頭", "大卷尾", "大冠鷲"],
    bestTime: "上午 7:00 - 10:30",
    bestFor: "想在新店延伸更多山區觀察點的人",
    habitatType: "山區",
    speciesCount: 35,
    distanceKm: 3,
    tone: "bg-emerald-50 border-emerald-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "直潭國小",
    lineKey: "songshan-xindian",
    station: "G01 新店",
    line: "松山新店線",
    route: "直潭國小 Jhihtan Elementary School",
    summary: "山邊聚落與樹林交界，適合練習觀察不同高度活動的鳥。",
    birds: ["白頭翁", "紅嘴黑鵯", "鵲鴝", "台灣藍鵲"],
    bestTime: "上午 7:00 - 9:30",
    bestFor: "想把常見鳥和林緣鳥一起練的人",
    habitatType: "山區",
    speciesCount: 40,
    distanceKm: 6,
    tone: "bg-amber-50 border-amber-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "蘆洲堤防",
    lineKey: "songshan-xindian",
    station: "G01 新店",
    line: "松山新店線",
    route: "蘆洲堤防 Luzhou Dyke",
    summary: "原網站列在新店站延伸路線中，實際環境偏河濱開闊地，適合看水邊與空域鳥。",
    birds: ["黑翅鳶", "小白鷺", "白鶺鴒", "家燕"],
    bestTime: "清晨或傍晚",
    bestFor: "喜歡開闊視野、好走路線的人",
    habitatType: "平地",
    speciesCount: 50,
    distanceKm: 2,
    tone: "bg-cyan-50 border-cyan-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "土城彈藥庫",
    lineKey: "bannan",
    station: "BL03 土城",
    line: "板南線",
    route: "土城彈藥庫 Tucheng Ammunituin Dump",
    summary: "生態復育感強的綠地，對新手來說能同時看到平地與灌叢鳥種。",
    birds: ["白頭翁", "綠繡眼", "棕背伯勞", "斑文鳥"],
    bestTime: "上午 7:00 - 9:30",
    bestFor: "想找都會邊界型綠地路線的人",
    habitatType: "平地",
    speciesCount: 35,
    distanceKm: 5,
    tone: "bg-lime-50 border-lime-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "新海濕地",
    lineKey: "bannan",
    station: "BL08 新埔",
    line: "板南線",
    route: "新海濕地 Xinhai Artificial Wetland",
    summary: "市區相對方便抵達的濕地型路線，適合把水鳥辨識再往前推一步。",
    birds: ["小白鷺", "夜鷺", "黃頭鷺", "白腹秧雞"],
    bestTime: "清晨到上午 9:00",
    bestFor: "想在市區附近直接練水鳥辨識的人",
    habitatType: "平地",
    speciesCount: 35,
    distanceKm: 3,
    tone: "bg-sky-50 border-sky-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "青年公園",
    lineKey: "bannan",
    station: "BL10 龍山寺",
    line: "板南線",
    route: "青年公園 Youth Park",
    summary: "很適合完全新手，公園型環境簡單好走，也容易建立第一批常見鳥印象。",
    birds: ["白頭翁", "麻雀", "珠頸斑鳩", "綠繡眼"],
    bestTime: "上午 7:00 - 9:00",
    bestFor: "第一次出門賞鳥、想先建立信心的人",
    habitatType: "平地",
    speciesCount: 25,
    distanceKm: 2,
    tone: "bg-emerald-50 border-emerald-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
  {
    name: "南港公園",
    lineKey: "bannan",
    station: "BL21 昆陽",
    line: "板南線",
    route: "南港公園 Nangang Park",
    summary: "公園、水域與坡地混合，對新手來說觀察素材很多，也很方便安排短程行程。",
    birds: ["白頭翁", "綠繡眼", "夜鷺", "五色鳥"],
    bestTime: "上午 7:00 - 9:30",
    bestFor: "想在一個點同時練習平地與水邊觀察的人",
    habitatType: "平地",
    speciesCount: 40,
    distanceKm: 2,
    tone: "bg-teal-50 border-teal-100",
    sourceUrl: "https://www.birdfair.org.tw/TPE_Birdwatchingmap/",
  },
];
