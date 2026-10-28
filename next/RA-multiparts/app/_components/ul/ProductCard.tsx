import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export type Procuct = {
  status: "IN STOCK" | "LOW STOCK";
  imgUrl: string;
  sku: string;
  name: string;
  price: number;
};

export default function ProductCard({ product }: { product: Procuct }) {
  return (
    <div className="bg-surface-card border border-border-subtle group relative cursor-pointer">
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`text-[10px] font-medium font-mono tracking-wider px-2 py-1 border ${
            product.status === "IN STOCK"
              ? "bg-status-success/10 text-status-success border-status-success/20"
              : "bg-status-danger/10 text-status-danger border-status-danger/20"
          }`}
        >
          {product.status}
        </span>
      </div>
      <div className="aspect-square bg-surface-container overflow-hidden relative">
        <Image
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          alt={product.name}
          fill
          src={product.imgUrl}
          unoptimized
        /> 
      </div>
      <div className="p-4 space-y-2">
        <span className="text-[10px] font-medium font-mono tracking-wider text-on-surface-variant/60">
          SKU: {product.sku}
        </span>
        <h3 className="text-base font-bold text-on-surface pt-1">{product.name}</h3>
        <div className="flex justify-between items-end pt-2">
          <span className="text-1xl font-semibold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <button className="bg-primary-container p-2 text-on-primary-container rounded hover:bg-primary-hover active:scale-95 transition-all duration-200 cursor-pointer">
    +
</button>
        </div>
      </div>
    </div>
  );
}
