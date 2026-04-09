const navItems = [
  { label: "賞鳥助手", href: "/assistant" },
  { label: "常見鳥類卡片", href: "/birds" },
  { label: "台北捷運賞鳥推薦", href: "/mrt-spots" },
  { label: "觀鳥人部落格", href: "/blog" },
  { label: "觀鳥人YT頻道", href: "/youtube" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a href="/assistant" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-moss-100">
            <img
              src="/guaniaoren-logo.png"
              alt="觀鳥人頻道 Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-moss-500">Birding Guide</p>
            <p className="text-lg font-semibold text-pine">賞鳥助手</p>
          </div>
        </a>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-moss-200 bg-white/86 px-4 py-2 text-sm font-medium text-moss-700 transition hover:border-moss-400 hover:text-pine"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
