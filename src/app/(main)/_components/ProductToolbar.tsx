import { ICON_CLOSE, ICON_SEARCH } from "@/lib/assets";
import {
  PRODUCT_FILTER_LABEL,
  PRODUCT_FILTERS,
  type ProductFilter,
} from "../_types/product";

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
    <div className="flex flex-col items-stretch justify-end gap-4 sm:flex-row sm:items-center sm:gap-[17px]">
     <div className="flex h-[42px] w-full items-center gap-2 rounded-[6px] border border-[#ced0d4] px-2 sm:w-[250px]">
        <label htmlFor="product-search" className="sr-only">
          상품 검색
        </label>
        <span className="flex min-w-0 flex-1 items-center gap-1.5">
          <img src={ICON_SEARCH} alt="" width={20} height={20} />
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="검색"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-[16px] leading-[1.6] font-semibold text-[#1c1e21] outline-none placeholder:text-[#979ca5]"
          />
        </span>
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="검색어 지우기"
          className="flex shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd]"
        >
          <img src={ICON_CLOSE} alt="" width={16} height={16} />
        </button>
      </div>

      <div
        role="radiogroup"
        aria-label="상품 유형 필터"
        className="flex items-center justify-end gap-[11px] text-[16px] leading-[1.6] font-semibold"
      >
        {PRODUCT_FILTERS.map((item, index) => {
          const selected = filter === item;

          return (
            <span key={item} className="flex items-center gap-[11px]">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[#979ca5]">
                  |
                </span>
              ) : null}
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onFilterChange(item)}
                className={`rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f77dd] ${
                  selected ? "text-[#1c1e21]" : "text-[#979ca5]"
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
