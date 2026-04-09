const footerColumns = [
  {
    title: "關於我們",
    content: "用簡單、友善的方式陪新手開始賞鳥，降低第一次拿起望遠鏡或拍下鳥照時的不確定感。",
  },
  {
    title: "聯絡方式",
    content: "hello@birding-guide.test\n週一至週五 10:00 - 18:00",
  },
  {
    title: "資料來源僅供參考",
    content: "鳥種辨識與地點資訊可作為入門方向，實際觀察結果仍會受到季節、氣候與地區差異影響。",
  },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-moss-200 bg-pine px-6 py-8 text-white shadow-card sm:px-8 sm:py-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight text-white">把第一次賞鳥，變成一件輕鬆開始的事</h2>
          <p className="mt-4 text-sm leading-7 text-moss-100 sm:text-base">
            先認識身邊常見的鳥、學會看幾個關鍵特徵，再慢慢走向更深入的觀察。這個首頁示範了一個對新手友善的入門節奏。
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-moss-100">
                {column.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
