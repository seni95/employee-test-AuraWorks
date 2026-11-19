import type { ProductCoverVariant } from "@/types/product";

const SET_COVERS = [
  { background: "#7ec8e3", accent: "#1f4d63" },
  { background: "#9fd89a", accent: "#2f5c32" },
  { background: "#f3de7a", accent: "#6d5a16" },
  { background: "#e7a8c6", accent: "#7a3458" },
] as const;

interface ProductCoverProps {
  variant: ProductCoverVariant;
  name: string;
}

export function ProductCover({ variant, name }: ProductCoverProps) {
  if (variant === "pass-set") {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-[#f4f4f4]"
        role="img"
        aria-label={`${name} 표지 플레이스홀더`}
      >
        <div className="grid grid-cols-2 gap-1.5" aria-hidden="true">
          {SET_COVERS.map((cover) => (
            <div
              key={cover.background}
              className="flex aspect-[2/3] h-16 flex-col justify-between p-1.5 shadow-sm sm:h-[72px] lg:h-20"
              style={{ backgroundColor: cover.background }}
            >
              <p
                className="text-[6px] leading-tight font-bold tracking-tight sm:text-[7px]"
                style={{ color: cover.accent }}
              >
                HIDDEN
                <br />
                KICE
              </p>
              <span
                className="block h-1 w-4 rounded-full opacity-50"
                style={{ backgroundColor: cover.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const titleColor = variant === "single-green" ? "#c6f04a" : "#f4f4f4";

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-[#f4f4f4]"
      role="img"
      aria-label={`${name} 표지 플레이스홀더`}
    >
      <div
        className="flex aspect-[2/3] h-[72%] flex-col items-center justify-between bg-[#111] py-4 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:py-5"
        aria-hidden="true"
      >
        <p
          className="text-center text-[15px] leading-[0.88] font-extrabold tracking-tight sm:text-[18px] lg:text-[20px]"
          style={{ color: titleColor }}
        >
          HID
          <br />
          DEN
        </p>
        <p className="text-[7px] tracking-[0.16em] text-white/80 sm:text-[8px]">
          HIDDEN KICE
        </p>
      </div>
    </div>
  );
}
