"use client";

import Image from "next/image";
import { useState } from "react";
import { HERO_BANNER_IMAGE } from "@/lib/assets";

const SLIDES = [
  {
    id: "season-2026",
    src: HERO_BANNER_IMAGE,
    alt: "히든카이스, 모두가 푸는 건 이유가 있습니다. 2026 시즌 프로모션 배너",
  },
  {
    id: "series",
    src: HERO_BANNER_IMAGE,
    alt: "히든카이스 시리즈 안내 배너",
  },
] as const;

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = SLIDES[currentIndex];
  const slideNumber = currentIndex + 1;

  function goToNextSlide() {
    setCurrentIndex((index) => (index + 1) % SLIDES.length);
  }

  return (
    <section
      className="relative w-full bg-black"
      aria-roledescription="carousel"
      aria-label="프로모션 배너"
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Image
          src={currentSlide.src}
          alt={currentSlide.alt}
          width={1440}
          height={491}
          className="h-auto w-full"
          priority
          sizes="100vw"
        />

        <a
          href="#products"
          className="absolute top-[71%] left-[5.2%] flex h-[9.5%] w-[15.8%] items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d]"
          aria-label="히든카이스 시리즈 보기"
        >
          <span className="sr-only">히든카이스 시리즈 보기</span>
        </a>

        <button
          type="button"
          onClick={goToNextSlide}
          className="absolute right-5 bottom-4 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white md:right-8 md:bottom-6 md:text-[12px]"
          aria-label={`다음 슬라이드, 현재 ${slideNumber} / ${SLIDES.length}`}
        >
          <span aria-hidden="true">
            {slideNumber}/{SLIDES.length}
          </span>
        </button>
      </div>
    </section>
  );
}
