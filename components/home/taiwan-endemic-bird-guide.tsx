"use client";

import { useMemo, useState } from "react";

import { taiwanEndemicBirds, type TaiwanEndemicBird } from "@/lib/taiwan-endemic-bird-data";

const habitatFilters = [
  { key: "all", label: "全部棲地" },
  { key: "high-mountain", label: "高山森林" },
  { key: "mid-forest", label: "中低海拔山林" },
  { key: "lowland", label: "低海拔與生活圈" },
  { key: "stream", label: "溪流與潮濕林下" },
] as const;

const sizeFilters = [
  "全部體型",
  "小型鳥",
  "中小型鳥",
  "中型鳥",
  "中大型鳥",
  "大型鳥",
] as const;

type HabitatFilter = (typeof habitatFilters)[number]["key"];
type SizeFilter = (typeof sizeFilters)[number];

function EndemicImagePlaceholder({ bird }: { bird: TaiwanEndemicBird }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br ${bird.imageTone}`}
    >
      <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-bold text-moss-700 shadow-sm">
        No. {bird.id.toString().padStart(2, "0")}
      </div>
      <div className="absolute inset-x-6 bottom-5 rounded-[24px] border border-white/60 bg-white/78 px-4 py-3 text-center shadow-sm backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss-500">Endemic Species</p>
        <p className="mt-1 text-lg font-black text-pine">{bird.chineseName}</p>
      </div>
      <svg
        viewBox="0 0 260 170"
        role="img"
        aria-label={`${bird.chineseName} 圖片區塊`}
        className="mb-10 h-28 w-44 text-pine/88 drop-shadow-sm transition duration-500 group-hover:scale-105"
      >
        <path
          d="M54 106 C72 78 105 62 137 70 C164 77 181 94 199 100 C218 107 237 99 247 89 C241 112 222 127 199 131 C175 134 158 127 139 121 C112 112 82 122 54 106 Z"
          fill="currentColor"
        />
        <circle cx="156" cy="72" r="24" fill="currentColor" />
        <path d="M176 70 L221 55 L183 87 Z" fill="currentColor" />
        <path d="M67 105 C42 91 25 98 12 115 C39 115 51 125 76 130 Z" fill="currentColor" />
        <path d="M116 124 L106 151" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M147 124 L144 152" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="164" cy="66" r="4.5" fill="#fff7ed" />
      </svg>
    </div>
  );
}

function EndemicBirdCard({
  bird,
  onOpen,
}: {
  bird: TaiwanEndemicBird;
  onOpen: (bird: TaiwanEndemicBird) => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/80 bg-white/92 p-3 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <EndemicImagePlaceholder bird={bird} />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">Taiwan Endemic</p>
            <h3 className="mt-2 text-2xl font-black text-pine">{bird.chineseName}</h3>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-pine">
            特有種
          </span>
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
            <span className="font-semibold text-pine">常見棲地：</span>
            {bird.habitat}
          </p>
          <p>
            <span className="font-semibold text-pine">體型大小：</span>
            {bird.size}
          </p>
          <p>
            <span className="font-semibold text-pine">主色：</span>
            {bird.colors.join("、")}
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

export function TaiwanEndemicBirdGuide() {
  const [query, setQuery] = useState("");
  const [habitatFilter, setHabitatFilter] = useState<HabitatFilter>("all");
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>("全部體型");
  const [selectedBird, setSelectedBird] = useState<TaiwanEndemicBird | null>(null);

  const filteredBirds = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return taiwanEndemicBirds.filter((bird) => {
      const matchesQuery = normalizedQuery
        ? bird.chineseName.toLowerCase().includes(normalizedQuery) ||
          bird.englishName.toLowerCase().includes(normalizedQuery)
        : true;
      const matchesHabitat = habitatFilter === "all" ? true : bird.habitatTag === habitatFilter;
      const matchesSize = sizeFilter === "全部體型" ? true : bird.size === sizeFilter;

      return matchesQuery && matchesHabitat && matchesSize;
    });
  }, [habitatFilter, query, sizeFilter]);

  const hasActiveFilter = query || habitatFilter !== "all" || sizeFilter !== "全部體型";

  function clearFilters() {
    setQuery("");
    setHabitatFilter("all");
    setSizeFilter("全部體型");
  }

  return (
    <>
      <div className="rounded-[34px] border border-white/80 bg-white/84 p-4 shadow-card backdrop-blur sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <label className="block">
            <span className="text-sm font-semibold text-moss-700">搜尋鳥名</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：臺灣藍鵲、火冠戴菊鳥、Taiwan Barbet"
              className="mt-2 w-full rounded-2xl border border-moss-200 bg-moss-50/80 px-4 py-3 text-sm text-moss-900 outline-none transition focus:border-moss-500 focus:bg-white"
            />
          </label>

          <div className="rounded-[24px] bg-moss-50 px-4 py-3 text-sm font-semibold text-moss-700">
            預設完整顯示 {taiwanEndemicBirds.length} 張特有種卡片
            <div className="mt-1 text-xs font-medium text-moss-500">
              目前畫面顯示 {filteredBirds.length} 張，沒有分頁與截斷
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">棲地篩選</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {habitatFilters.map((filter) => {
              const selected = habitatFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setHabitatFilter(filter.key)}
                  className={`rounded-[22px] border px-4 py-3 text-left text-sm font-bold transition ${
                    selected
                      ? "border-pine bg-pine text-white shadow-card"
                      : "border-moss-100 bg-white text-moss-700 hover:border-moss-300 hover:bg-moss-50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">體型篩選</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {sizeFilters.map((filter) => {
              const selected = sizeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSizeFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    selected
                      ? "border-pine bg-pine text-white shadow-card"
                      : "border-moss-100 bg-white text-moss-700 hover:border-moss-300 hover:bg-moss-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {hasActiveFilter ? (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-full border border-moss-200 bg-white px-4 py-2 text-sm font-semibold text-moss-700 transition hover:border-moss-400"
          >
            清除搜尋與篩選，回到 32 張完整卡片
          </button>
        ) : null}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBirds.map((bird) => (
          <EndemicBirdCard key={bird.chineseName} bird={bird} onOpen={setSelectedBird} />
        ))}
      </div>

      {selectedBird ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pine/55 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[34px] bg-white shadow-2xl">
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-moss-50 p-5">
                <EndemicImagePlaceholder bird={selectedBird} />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss-500">
                      Taiwan Endemic Species
                    </p>
                    <h2 className="mt-2 text-3xl font-black text-pine">{selectedBird.chineseName}</h2>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">常見棲地</p>
                    <p className="mt-2 text-sm font-semibold text-pine">{selectedBird.habitat}</p>
                  </div>
                  <div className="rounded-2xl bg-cream px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">體型與主色</p>
                    <p className="mt-2 text-sm font-semibold text-pine">
                      {selectedBird.size} / {selectedBird.colors.join("、")}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-moss-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">辨識重點</p>
                  <p className="mt-2 text-sm leading-7 text-moss-800">{selectedBird.fieldMarks}</p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-500">生態介紹</p>
                  <p className="mt-2 text-sm leading-7 text-moss-800">{selectedBird.intro}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
