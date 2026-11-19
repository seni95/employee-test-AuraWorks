"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../_api/products";
import type { Product } from "../_types/product";

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchProducts()
      .then((data) => {
        if (cancelled) return;
        setProducts(data);
        setIsLoading(false);
      })
      .catch((unknownError: unknown) => {
        if (cancelled) return;
        const message =
          unknownError instanceof Error
            ? unknownError.message
            : "상품을 불러오지 못했습니다.";
        setError(message);
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, isLoading, error };
}
