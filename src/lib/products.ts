import { getSupabaseBrowserClient } from "@/lib/supabase";
import {
  PAGE_SIZE,
  PRODUCT_TYPES,
  type Product,
  type ProductCoverVariant,
  type ProductListResult,
  type ProductQuery,
  type ProductType,
  type TextbookRow,
} from "@/types/product";

function isProductType(value: string): value is ProductType {
  return (PRODUCT_TYPES as readonly string[]).includes(value);
}

function coverVariantForType(type: ProductType): ProductCoverVariant {
  return type === "pass" ? "pass-set" : "single-green";
}

function discountRate(originalPrice: number, salePrice: number): number {
  if (originalPrice <= salePrice) {
    return 0;
  }

  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

export function mapTextbookToProduct(row: TextbookRow): Product | null {
  if (!isProductType(row.category)) {
    return null;
  }

  const salePrice = row.price;
  const originalPrice = row.original_price ?? row.price;

  return {
    id: String(row.id),
    name: row.title,
    type: row.category,
    originalPrice,
    salePrice,
    discountRate: discountRate(originalPrice, salePrice),
    imageUrl: row.image_url,
    coverVariant: coverVariantForType(row.category),
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("textbooks")
    .select("id, title, category, price, original_price, image_url, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  return data.flatMap((row: TextbookRow) => {
    const product = mapTextbookToProduct(row);
    return product ? [product] : [];
  });
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
