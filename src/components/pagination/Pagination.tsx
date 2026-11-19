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
    <nav aria-label="상품 페이지" className="mt-12 flex items-center justify-center gap-2">
      <PaginationButton
        label="이전 페이지"
        disabled={isFirstPage}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft />
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
            className={`flex h-9 w-9 items-center justify-center rounded-md text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d] ${
              current
                ? "bg-[#e45c2d] font-medium text-white"
                : "border border-[#e5e5e5] bg-white text-[#666] hover:border-[#cfcfcf]"
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
        <ChevronRight />
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
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e5e5e5] bg-white text-[#666] transition-colors hover:border-[#cfcfcf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 6 8.5 12l6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9.5 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
