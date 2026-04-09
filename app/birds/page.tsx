import { CommonBirdsBrowser } from "@/components/home/common-birds-browser";
import { PageIntro } from "@/components/home/page-intro";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { birdCards } from "@/lib/home-data";

export default function BirdsPage() {
  return (
    <main className="shell pb-8">
      <SiteHeader />
      <PageIntro
        eyebrow="Common Birds"
        title="常見鳥類卡片"
        description={`這一頁只保留鳥類卡片瀏覽功能。你可以在 ${birdCards.length} 張常見鳥卡片中搜尋、分類篩選與分頁閱讀。`}
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <CommonBirdsBrowser />
      </section>
      <SiteFooter />
    </main>
  );
}
