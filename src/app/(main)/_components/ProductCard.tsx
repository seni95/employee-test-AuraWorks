"use client";

import Image from "next/image";
import { useState } from "react";
import { COVER_PASS_IMAGE, COVER_SINGLE_IMAGE } from "@/lib/assets";
import { formatPrice } from "@/lib/format";
import { PRODUCT_TYPE_LABEL, type Product } from "../_types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountRate > 0;
  const typeLabel = PRODUCT_TYPE_LABEL[product.type];
  const fallbackImage =
    product.type === "pass" ? COVER_PASS_IMAGE : COVER_SINGLE_IMAGE;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageFailed = failedSrc !== null && failedSrc === product.imageUrl;
  const imageSrc =
    product.imageUrl && !imageFailed ? product.imageUrl : fallbackImage;

  return (
    <article className="flex flex-col gap-1">
      <div className="relative aspect-[250/320] overflow-hidden rounded-[6px] border border-[#e9eaec] bg-white">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 250px"
          className={product.type === "pass" ? "object-contain" : "object-cover"}
          onError={() => {
            if (product.imageUrl) {
              setFailedSrc(product.imageUrl);
            }
          }}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-[16px] leading-[1.6] font-semibold text-[#979ca5]">
          {typeLabel}
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] leading-[1.6] font-semibold text-black">
            {product.name}
          </h3>
          {hasDiscount ? (
            <div>
              <p className="text-[14px] leading-[1.5] font-medium text-[#b2b6bd] line-through">
                {formatPrice(product.originalPrice)}
              </p>
              <p className="flex items-center gap-1.5 text-[16px] leading-[1.6] font-semibold">
                <span className="text-[#fa622f]">{product.discountRate}%</span>
                <span className="text-black">{formatPrice(product.salePrice)}</span>
              </p>
            </div>
          ) : (
            <p className="text-[16px] leading-[1.6] font-semibold text-black">
              {formatPrice(product.salePrice)}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
