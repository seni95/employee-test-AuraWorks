import { MOCK_PRODUCTS } from "@/data/mock-products";
import {
  PAGE_SIZE,
  type Product,
  type ProductListResult,
  type ProductQuery,
} from "@/types/product";

/**
 * 상품 목록을 조회합니다.
 * 현재는 목 데이터를 반환하며, 이후 Supabase CSR 조회로 교체할 수 있습니다.
 *
 * @example
 * // 이후 교체 예시
 * // const { data, error } = await supabase.from("products").select("*");
 * // if (error) throw error;
 * // return data;
 */
export async function fetchProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}

export function queryProducts(
  products: Product[],
  query: ProductQuery,
): ProductListResult {
  const search = query.search.trim().toLowerCase();
  const pageSize = query.pageSize > 0 ? query.pageSize : PAGE_SIZE;

  const filtered = products.filter((product) => {
    const matchesFilter =
      query.filter === "all" || product.type === query.filter;
    const matchesSearch =
      search.length === 0 || product.name.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(query.page, 1), totalPages);
  const start = (page - 1) * pageSize;

  return {
    items: filtered.slice(start, start + pageSize),
    total,
    page,
    pageSize,
    totalPages,
  };
}
