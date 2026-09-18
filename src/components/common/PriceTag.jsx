import { formatCurrency } from "../../utils/format";

export default function PriceTag({ price, originalPrice, discount, size = "md" }) {
  const priceClass = size === "lg" ? "text-2xl" : "text-base";
  return (
    <div className="flex flex-wrap items-baseline gap-1.5">
      <span className={`font-display font-bold text-slate-900 ${priceClass}`}>
        {formatCurrency(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span className="text-xs text-slate-400 line-through">{formatCurrency(originalPrice)}</span>
          <span className="text-xs font-semibold text-brand-600">{discount}% off</span>
        </>
      )}
    </div>
  );
}
