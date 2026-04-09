import { PhotoIdentifyPanel } from "@/components/home/photo-identify-panel";
import { PageIntro } from "@/components/home/page-intro";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

export default function Home() {
  return (
    <main className="shell pb-8">
      <SiteHeader />
      <PageIntro
        eyebrow="Birding Assistant"
        title="賞鳥助手"
        description="這一頁只保留分步辨識體驗。你可以像 Merlin Bird ID 一樣，依序加入照片、描述環境與特徵，再查看最可能的候選鳥種。"
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <PhotoIdentifyPanel />
      </section>
      <SiteFooter />
    </main>
  );
}
