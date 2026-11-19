"use client";

import { useMemo, useState } from "react";
import { queryProducts } from "../_api/products";
import { useProducts } from "../_hooks/use-products";
import { PAGE_SIZE, type ProductFilter } from "../_types/product";
import { Pagination } from "./Pagination";
import { ProductGrid } from "./ProductGrid";
import { ProductToolbar } from "./ProductToolbar";

export function ProductSection() {
  const { products, isLoading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProductFilter>("all");
  const [page, setPage] = useState(1);

  const result = useMemo(
    () =>
      queryProducts(products, {
        search,
        filter,
        page,
        pageSize: PAGE_SIZE,
      }),
    [products, search, filter, page],
  );

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  function handleFilterChange(value: ProductFilter) {
    setFilter(value);
    setPage(1);
  }

  return (
    <section id="products" className="scroll-mt-6 px-2.5 py-[50px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-9">
        <ProductToolbar
          search={search}
          filter={filter}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
        />

        {isLoading ? (
          <ProductGridSkeleton />
        ) : error ? (
          <p className="py-20 text-center text-sm text-[#c23d2a]" role="alert">
            상품을 불러오지 못했습니다. {error}
          </p>
        ) : products.length === 0 ? (
          <p className="py-20 text-center text-sm text-[#888]">
            등록된 상품이 없습니다.
          </p>
        ) : result.total === 0 ? (
          <p className="py-20 text-center text-sm text-[#888]">
            검색 결과가 없습니다.
          </p>
        ) : (
          <div className="flex flex-col gap-[46px]">
            <ProductGrid products={result.items} />
            {result.totalPages > 1 ? (
              <Pagination
                page={result.page}
                totalPages={result.totalPages}
                onPageChange={setPage}
              />
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductGridSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-[93px]">
      {Array.from({ length: 8 }, (_, index) => (
        <li key={index} className="animate-pulse">
          <div className="aspect-[250/320] rounded-[6px] border border-[#e9eaec] bg-[#f4f5f7]" />
          <div className="mt-1 h-6 w-10 rounded bg-[#ececec]" />
          <div className="mt-2 h-6 w-3/4 rounded bg-[#ececec]" />
          <div className="mt-2 h-6 w-1/3 rounded bg-[#ececec]" />
        </li>
      ))}
    </ul>
  );
}
