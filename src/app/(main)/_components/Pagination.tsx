import { ICON_CHEVRON_LEFT, ICON_CHEVRON_RIGHT } from "@/lib/assets";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <nav aria-label="상품 페이지" className="flex items-center justify-center gap-2">
      <PaginationButton
        label="이전 페이지"
        disabled={isFirstPage}
        onClick={() => onPageChange(page - 1)}
      >
        <img src={ICON_CHEVRON_LEFT} alt="" width={20} height={20} />
      </PaginationButton>

      {pages.map((pageNumber) => {
        const current = pageNumber === page;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            aria-label={`${pageNumber}페이지`}
            aria-current={current ? "page" : undefined}
            className={`flex size-10 items-center justify-center rounded-[6px] text-[14px] leading-[1.5] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd] ${
              current
                ? "bg-[#7f77dd] text-white"
                : "border border-[#7f77dd] bg-white text-[#7f77dd]"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <PaginationButton
        label="다음 페이지"
        disabled={isLastPage}
        onClick={() => onPageChange(page + 1)}
      >
        <img src={ICON_CHEVRON_RIGHT} alt="" width={20} height={20} />
      </PaginationButton>
    </nav>
  );
}

function PaginationButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-10 items-center justify-center rounded-[6px] border border-[#7f77dd] bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd] disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
