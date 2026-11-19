import Image from "next/image";
import { HERO_BANNER_IMAGE } from "@/lib/assets";

export function HeroBanner() {
  return (
    <section
      className="relative w-full border-b border-[#e5e5e5] bg-[#f2f5f8]"
      aria-label="프로모션 배너"
    >
      <div className="relative aspect-[1440/490] w-full">
        <Image
          src={HERO_BANNER_IMAGE}
          alt="히든카이스, 모두가 푸는 건 이유가 있습니다. 2026 시즌 프로모션 배너"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <a
          href="#products"
          className="absolute top-[76%] left-[4.2%] h-[8%] w-[16%] rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd]"
          aria-label="히든카이스 시리즈 보기"
        >
          <span className="sr-only">히든카이스 시리즈 보기</span>
        </a>

        <p className="absolute right-[2.8%] bottom-[6%] flex w-[60px] items-center justify-center rounded-full bg-black/30 px-2.5 py-1 text-[14px] leading-[1.5] text-white">
          <span className="font-semibold">1</span>
          <span className="font-medium">/5</span>
        </p>
      </div>
    </section>
  );
}
