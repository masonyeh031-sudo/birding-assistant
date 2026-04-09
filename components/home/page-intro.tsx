type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-white/70 bg-white/78 px-6 py-8 shadow-card backdrop-blur sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-moss-600">{eyebrow}</p>
        <h1 className="section-title mt-3 text-pine">{title}</h1>
        <p className="section-copy mt-4 max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
