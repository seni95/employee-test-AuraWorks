import { ICON_BELL, ICON_CART, ICON_USER, LOGO_IMAGE } from "@/lib/assets";

const NAV_ITEMS = [
  { label: "스토어", current: true },
  { label: "AI OMR WORK", current: false },
  { label: "챌린지", current: false },
  { label: "히든카이스 소개", current: false },
] as const;

export function Header() {
  return (
    <header className="bg-white px-4 py-2.5 shadow-[0px_3px_2px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between">
        <div className="flex min-w-0 items-center gap-8 xl:gap-[100px]">
          <img
            src={LOGO_IMAGE}
            alt="HIDDEN KICE"
            width={142.851}
            height={17.472}
          />
          <nav
            aria-label="주요 메뉴"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <span
                key={item.label}
                aria-current={item.current ? "page" : undefined}
                className={`text-[18px] leading-[1.6] font-semibold whitespace-nowrap ${
                  item.current ? "text-[#7f77dd]" : "text-[#979ca5]"
                }`}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-6">
          <HeaderIcon label="장바구니" src={ICON_CART} badge="1" badgeLeft="left-3.5" />
          <HeaderIcon label="알림" src={ICON_BELL} badge="1" badgeLeft="left-[11px]" />
          <HeaderIcon label="프로필" src={ICON_USER} />
        </div>
      </div>

      <nav
        aria-label="모바일 메뉴"
        className="mx-auto flex w-full max-w-[1280px] gap-6 overflow-x-auto pt-1 md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <span
            key={item.label}
            aria-current={item.current ? "page" : undefined}
            className={`shrink-0 text-[16px] leading-[1.6] font-semibold ${
              item.current ? "text-[#7f77dd]" : "text-[#979ca5]"
            }`}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </header>
  );
}

function HeaderIcon({
  label,
  src,
  badge,
  badgeLeft = "left-3.5",
}: {
  label: string;
  src: string;
  badge?: string;
  badgeLeft?: string;
}) {
  return (
    <span className="relative block h-6 w-[27px]" aria-label={label} role="img">
      <img src={src} alt="" width={24} height={24} />
      {badge ? (
        <span
          className={`absolute -top-1.5 flex size-[15px] items-center justify-center rounded-full bg-[#7f77dd] text-[10px] leading-[1.4] font-normal text-white ${badgeLeft}`}
        >
          {badge}
        </span>
      ) : null}
    </span>
  );
}
