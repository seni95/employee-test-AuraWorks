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
    <section id="products" className="scroll-mt-6 px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1160px]">
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
          <>
            <ProductGrid products={result.items} />
            {result.totalPages > 1 ? (
              <Pagination
                page={result.page}
                totalPages={result.totalPages}
                onPageChange={setPage}
              />
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

function ProductGridSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
        <li key={index} className="animate-pulse">
          <div className="aspect-square rounded-[10px] bg-[#ececec]" />
          <div className="mt-3 h-3 w-10 rounded bg-[#ececec]" />
          <div className="mt-2 h-4 w-3/4 rounded bg-[#ececec]" />
          <div className="mt-2 h-4 w-1/3 rounded bg-[#ececec]" />
        </li>
      ))}
    </ul>
  );
}
