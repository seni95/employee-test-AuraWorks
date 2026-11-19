import type { Product, ProductCoverVariant, ProductType } from "@/types/product";

const PASS_PRICE = {
  originalPrice: 76000,
  salePrice: 64800,
  discountRate: 5,
} as const;

const SINGLE_PRICE = {
  originalPrice: 40000,
  salePrice: 40000,
  discountRate: 0,
} as const;

interface ProductSeed {
  id: string;
  name: string;
  type: ProductType;
  coverVariant: ProductCoverVariant;
  originalPrice?: number;
  salePrice?: number;
  discountRate?: number;
}

function createProduct(seed: ProductSeed): Product {
  const defaults = seed.type === "pass" ? PASS_PRICE : SINGLE_PRICE;

  return {
    id: seed.id,
    name: seed.name,
    type: seed.type,
    coverVariant: seed.coverVariant,
    originalPrice: seed.originalPrice ?? defaults.originalPrice,
    salePrice: seed.salePrice ?? defaults.salePrice,
    discountRate: seed.discountRate ?? defaults.discountRate,
    imageUrl: null,
  };
}

const SEEDS: ProductSeed[] = [
  {
    id: "1",
    name: "2026 Hidden Kice 시즌7",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "2",
    name: "2026 Hidden Kice 시즌7",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "3",
    name: "2026 Hidden Kice 시즌7",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "4",
    name: "2026 Hidden Kice 시즌7",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "5",
    name: "2026 Hidden Kice 시즌6",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "6",
    name: "2026 Hidden Kice 시즌6",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "7",
    name: "2026 Hidden Kice 시즌5",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "8",
    name: "2026 Hidden Kice 시즌5",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "9",
    name: "2026 Hidden Kice 시즌4",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "10",
    name: "2026 Hidden Kice 시즌4",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "11",
    name: "2026 Hidden Kice 시즌3",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "12",
    name: "2026 Hidden Kice 시즌3",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "13",
    name: "2026 Hidden Kice 시즌2",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "14",
    name: "2026 Hidden Kice 시즌2",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "15",
    name: "2026 Hidden Kice 시즌1",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "16",
    name: "2025 Hidden Kice 시즌12",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "17",
    name: "2025 Hidden Kice 시즌11",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "18",
    name: "2025 Hidden Kice 시즌10",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "19",
    name: "2025 Hidden Kice 시즌9",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "20",
    name: "2025 Hidden Kice 시즌8",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "21",
    name: "2025 Hidden Kice 시즌7",
    type: "single",
    coverVariant: "single-white",
    originalPrice: 42000,
    salePrice: 37800,
    discountRate: 10,
  },
  {
    id: "22",
    name: "2025 Hidden Kice 시즌6",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "23",
    name: "2025 Hidden Kice 시즌5",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "24",
    name: "2025 Hidden Kice 시즌4",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "25",
    name: "2025 Hidden Kice 시즌3",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "26",
    name: "2025 Hidden Kice 시즌2",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "27",
    name: "2025 Hidden Kice 시즌1",
    type: "single",
    coverVariant: "single-green",
  },
  {
    id: "28",
    name: "2026 Hidden Kice 문법 단품",
    type: "single",
    coverVariant: "single-white",
  },
  {
    id: "29",
    name: "2026 Hidden Kice 듣기 패스",
    type: "pass",
    coverVariant: "pass-set",
  },
  {
    id: "30",
    name: "2026 Hidden Kice 실전 패스",
    type: "pass",
    coverVariant: "pass-set",
  },
];

export const MOCK_PRODUCTS: Product[] = SEEDS.map(createProduct);
