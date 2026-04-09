"use client";

import { useMemo, useState } from "react";

import { birdCards, birdCategories } from "@/lib/home-data";

const PAGE_SIZE = 12;

function habitatLabel(bird: (typeof birdCards)[number]) {
  if (bird.matcherHabitats.includes("water")) return "水邊常見";
  if (bird.matcherHabitats.includes("forest-edge")) return "林緣入門";
  if (bird.matcherHabitats.includes("urban")) return "生活圈常見";
  return "公園常見";
}

export function CommonBirdsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof birdCategories)[number]["key"]>("all");
  const [page, setPage] = useState(1);
  const [selectedBird, setSelectedBird] = useState<(typeof birdCards)[number] | null>(null);

  const filteredBirds = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return birdCards.filter((bird) => {
      const matchCategory =
        category === "all" ? true : bird.matcherHabitats.includes(category);
      const haystack = [bird.name, bird.summary, bird.habitat, bird.clue].join(" ").toLowerCase();
      const matchQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true;

      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filteredBirds.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleBirds = filteredBirds.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function updateCategory(nextCategory: (typeof birdCategories)[number]["key"]) {
    setCategory(nextCategory);
    setPage(1);
  }

  function updateQuery(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <>
      <div className="mt-6 rounded-[28px] border border-white/80 bg-white/84 p-4 shadow-card backdrop-blur sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <label htmlFor="bird-search" className="text-sm font-medium text-moss-700">
              搜尋鳥名、棲地或辨識重點
            </label>
            <input
              id="bird-search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="例如：白頭、濕地、眼圈、尾巴"
              className="mt-2 w-full rounded-2xl border border-moss-200 bg-moss-50/70 px-4 py-3 text-sm text-moss-900 outline-none transition focus:border-moss-400 focus:bg-white"
            />
          </div>

          <div className="rounded-2xl bg-moss-50/80 px-4 py-3 text-sm text-moss-700">
            目前顯示 {filteredBirds.length} / {birdCards.length} 張卡片
            <div className="mt-1 text-xs text-moss-500">
              第 {currentPage} / {totalPages} 頁，每頁 {PAGE_SIZE} 張
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {birdCategories.map((item) => {
            const active = item.key === category;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => updateCategory(item.key)}
                className={
                  active
                    ? "rounded-full bg-moss-700 px-4 py-2 text-sm font-medium text-white"
                    : "rounded-full border border-moss-200 bg-white px-4 py-2 text-sm font-medium text-moss-700"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleBirds.map((bird) => (
          <button
            key={bird.name}
            type="button"
            onClick={() => setSelectedBird(bird)}
            className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/88 text-left shadow-card backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${bird.accent} p-4`}>
              <img
                src={bird.imageSrc}
                alt={bird.imageAlt}
                className="h-full w-full rounded-[20px] bg-white/70 object-scale-down p-2 transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-moss-700 shadow-sm">
                {habitatLabel(bird)}
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-medium text-moss-700 shadow-sm">
                全身照取向
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-pine">{bird.name}</h3>
                  <span className="rounded-full bg-moss-50 px-3 py-1 text-xs font-medium text-moss-600">
                    常見入門
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-moss-700">{bird.summary}</p>
              </div>

              <div className="rounded-2xl bg-moss-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-moss-600">棲地類型</p>
                <p className="mt-2 text-sm leading-7 text-moss-900">{bird.habitat}</p>
              </div>

              <div className="rounded-2xl bg-amber-50 px-4 py-3 ring-1 ring-amber-100">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-700/80">辨識重點</p>
                <p className="mt-2 text-sm leading-7 text-amber-950">{bird.clue}</p>
              </div>

              <div className="rounded-2xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-100">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-700/80">新手觀察建議</p>
                <p className="mt-2 text-sm leading-7 text-emerald-950">{bird.watchTip}</p>
              </div>

              {bird.imagePage.startsWith("#") ? (
                <p className="block text-xs leading-6 text-moss-500">圖片來源：{bird.imageCredit}</p>
              ) : (
                <a
                  href={bird.imagePage}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs leading-6 text-moss-500 underline-offset-4 transition hover:text-moss-700 hover:underline"
                >
                  圖片來源：{bird.imageCredit}
                </a>
              )}

              <p className="text-sm font-medium text-moss-700">點擊卡片可放大檢視</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/70 bg-white/80 px-4 py-4 shadow-sm">
        <p className="text-sm text-moss-700">
          {filteredBirds.length === 0
            ? "目前沒有符合條件的鳥類，試著換個關鍵字或分類。"
            : `正在看第 ${currentPage} 頁，共 ${totalPages} 頁。`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-moss-200 bg-white px-4 py-2 text-sm font-medium text-moss-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            上一頁
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full bg-moss-700 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            下一頁
          </button>
        </div>
      </div>

      {selectedBird ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pine/55 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[32px] bg-white shadow-2xl">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative flex min-h-[320px] items-center justify-center bg-moss-100 p-5">
                <img
                  src={selectedBird.imageSrc}
                  alt={selectedBird.imageAlt}
                  className="h-full max-h-[72vh] w-full rounded-[24px] bg-white/80 object-scale-down p-3"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-medium text-moss-700 shadow-sm">
                  {habitatLabel(selectedBird)}
                </div>
                <div className="absolute bottom-5 right-5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-medium text-moss-700 shadow-sm">
                  以完整鳥身為優先
                </div>
              </div>

              <div className="space-y-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-moss-600">鳥類詳情卡</p>
                    <h3 className="mt-2 text-3xl font-semibold text-pine">{selectedBird.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedBird(null)}
                    className="rounded-full border border-moss-200 bg-white px-4 py-2 text-sm font-medium text-moss-700"
                  >
                    關閉
                  </button>
                </div>

                <p className="text-sm leading-7 text-moss-700">{selectedBird.summary}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-moss-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-moss-600">棲地類型</p>
                    <p className="mt-2 text-sm leading-7 text-moss-900">
                      {selectedBird.habitat}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-sky/70 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-moss-500">體型印象</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-moss-900">
                      {selectedBird.size}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 px-4 py-4 ring-1 ring-amber-100">
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-700/80">辨識重點</p>
                    <p className="mt-2 text-sm leading-7 text-amber-950">
                      {selectedBird.clue}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-4 ring-1 ring-moss-100">
                    <p className="text-xs uppercase tracking-[0.18em] text-moss-500">常見行為</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-moss-900">
                      {selectedBird.behavior}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-5 py-5 ring-1 ring-emerald-100">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-700/80">新手觀察建議</p>
                  <p className="mt-2 text-sm leading-7 text-emerald-950">{selectedBird.watchTip}</p>
                </div>

                {selectedBird.imagePage.startsWith("#") ? (
                  <p className="text-xs leading-6 text-moss-500">圖片來源：{selectedBird.imageCredit}</p>
                ) : (
                  <a
                    href={selectedBird.imagePage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-xs leading-6 text-moss-500 underline-offset-4 transition hover:text-moss-700 hover:underline"
                  >
                    圖片來源：{selectedBird.imageCredit}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
