export const PRODUCT_TYPES = ["pass", "single"] as const;
export type ProductType = (typeof PRODUCT_TYPES)[number];

export const PRODUCT_FILTERS = ["all", "pass", "single"] as const;
export type ProductFilter = (typeof PRODUCT_FILTERS)[number];

export const PRODUCT_COVER_VARIANTS = [
  "single-green",
  "single-white",
  "pass-set",
] as const;
export type ProductCoverVariant = (typeof PRODUCT_COVER_VARIANTS)[number];

export interface TextbookRow {
  id: number | string;
  title: string;
  category: string;
  price: number;
  original_price: number | null;
  image_url: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  originalPrice: number;
  salePrice: number;
  discountRate: number;
  imageUrl: string | null;
  coverVariant: ProductCoverVariant;
}

export interface ProductQuery {
  search: string;
  filter: ProductFilter;
  page: number;
  pageSize: number;
}

export interface ProductListResult {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const PAGE_SIZE = 12;

export const PRODUCT_TYPE_LABEL: Record<ProductType, string> = {
  pass: "패스",
  single: "단품",
};

export const PRODUCT_FILTER_LABEL: Record<ProductFilter, string> = {
  all: "전체",
  pass: "패스",
  single: "단품",
};
