import Image from "next/image";
import { formatPrice } from "@/lib/format";
import { PRODUCT_TYPE_LABEL, type Product } from "../_types/product";
import { ProductCover } from "./ProductCover";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountRate > 0;
  const typeLabel = PRODUCT_TYPE_LABEL[product.type];

  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-[10px] border border-[#ececec] bg-[#f7f7f7]">
        <div className="relative aspect-square">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 272px"
              className="object-contain p-6"
            />
          ) : (
            <ProductCover variant={product.coverVariant} name={product.name} />
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <p
          className={`text-[12px] ${
            product.type === "pass" ? "font-medium text-[#e45c2d]" : "text-[#8a8a8a]"
          }`}
        >
          {typeLabel}
        </p>
        <h3 className="text-[14px] leading-snug text-[#2b2b2b]">{product.name}</h3>
        {hasDiscount ? (
          <p className="text-[12px] text-[#b0b0b0] line-through">
            {formatPrice(product.originalPrice)}
          </p>
        ) : null}
        <p className="flex items-baseline gap-1.5 text-[15px] font-semibold text-[#1a1a1a]">
          {hasDiscount ? (
            <span className="text-[#e45c2d]">{product.discountRate}%</span>
          ) : null}
          <span>{formatPrice(product.salePrice)}</span>
        </p>
      </div>
    </article>
  );
}
