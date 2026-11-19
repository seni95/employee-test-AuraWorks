import {
  PRODUCT_FILTER_LABEL,
  PRODUCT_FILTERS,
  type ProductFilter,
} from "@/types/product";

interface ProductToolbarProps {
  search: string;
  filter: ProductFilter;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: ProductFilter) => void;
}

export function ProductToolbar({
  search,
  filter,
  onSearchChange,
  onFilterChange,
}: ProductToolbarProps) {
  return (
    <div className="mb-8 flex flex-col items-stretch justify-end gap-4 sm:flex-row sm:items-center">
      <div className="relative w-full sm:w-[240px]">
        <label htmlFor="product-search" className="sr-only">
          상품 검색
        </label>
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#9a9a9a]">
          <SearchIcon />
        </span>
        <input
          id="product-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="검색"
          autoComplete="off"
          className="h-10 w-full rounded-full border-0 bg-[#f2f2f2] pr-10 pl-9 text-[13px] text-[#2b2b2b] placeholder:text-[#9a9a9a] outline-none focus-visible:ring-2 focus-visible:ring-[#e45c2d]/40"
        />
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="검색어 지우기"
          disabled={search.length === 0}
          className="absolute top-1/2 right-2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#9a9a9a] hover:text-[#555] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d] disabled:cursor-default disabled:opacity-40"
        >
          <ClearIcon />
        </button>
      </div>

      <div
        role="radiogroup"
        aria-label="상품 유형 필터"
        className="flex items-center justify-end gap-3 text-[13px]"
      >
        {PRODUCT_FILTERS.map((item, index) => {
          const selected = filter === item;

          return (
            <span key={item} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[#d0d0d0]">
                  |
                </span>
              ) : null}
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onFilterChange(item)}
                className={`rounded-sm px-0.5 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e45c2d] ${
                  selected
                    ? "font-semibold text-[#2b2b2b]"
                    : "font-normal text-[#8a8a8a] hover:text-[#2b2b2b]"
                }`}
              >
                {PRODUCT_FILTER_LABEL[item]}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6 18 18M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
