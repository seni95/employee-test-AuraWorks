import Image from "next/image";
import Link from "next/link";
import { LOGO_IMAGE } from "@/lib/assets";

const NAV_ITEMS = [
  { href: "/", label: "스토어", current: true },
  { href: "#ai-omr-work", label: "AI OMR WORK", current: false },
  { href: "#challenge", label: "챌린지", current: false },
  { href: "#about", label: "히든카이스 소개", current: false },
] as const;

export function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/" className="shrink-0" aria-label="HIDDEN KICE 홈">
            <Image
              src={LOGO_IMAGE}
              alt="HIDDEN KICE"
              width={143}
              height={18}
              className="h-[18px] w-auto"
              priority
            />
          </Link>
          <nav aria-label="주요 메뉴" className="hidden items-center gap-7 md:flex lg:gap-9">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={`text-[14px] tracking-tight text-[#2b2b2b] transition-colors hover:text-black ${
                  item.current ? "font-medium" : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <IconButton label="장바구니">
            <CartIcon />
          </IconButton>
          <IconButton label="알림">
            <BellIcon />
          </IconButton>
          <IconButton label="프로필">
            <UserIcon />
          </IconButton>
        </div>
      </div>
      <nav
        aria-label="모바일 메뉴"
        className="flex gap-5 overflow-x-auto border-t border-[#f3f3f3] px-5 py-3 text-[13px] md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={`shrink-0 ${item.current ? "font-medium text-[#2b2b2b]" : "text-[#666]"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#2b2b2b] transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d]"
    >
      {children}
    </button>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9h-12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="20" r="1.3" fill="currentColor" />
      <circle cx="18" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9a6 6 0 1 1 12 0c0 3.5 1.2 5.2 1.8 6H4.2C4.8 14.2 6 12.5 6 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 18a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.2c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
