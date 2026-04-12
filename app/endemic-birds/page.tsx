import { PageIntro } from "@/components/home/page-intro";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { TaiwanEndemicBirdGuide } from "@/components/home/taiwan-endemic-bird-guide";
import { taiwanEndemicBirds } from "@/lib/taiwan-endemic-bird-data";

export default function EndemicBirdsPage() {
  return (
    <main className="shell pb-8">
      <SiteHeader />
      <PageIntro
        eyebrow="Taiwan Endemic Bird Guide"
        title="台灣特有種鳥類圖鑑"
        description={`認識台灣獨有的鳥類之美。這一頁預設直接完整顯示 ${taiwanEndemicBirds.length} 張台灣特有種鳥類卡片，不分頁、不截斷。`}
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <TaiwanEndemicBirdGuide />
      </section>
      <SiteFooter />
    </main>
  );
}
