import { Link } from "react-router-dom";
import ProductImage from "../product/ProductImage";
import QuantitySelector from "../common/QuantitySelector";
import { formatCurrency } from "../../utils/format";
import { useCart } from "../../context/CartContext";

export default function CartItem({ line }) {
  const { updateQty, removeFromCart } = useCart();
  const { product, qty } = line;
  const lineTotal = product.price * qty;

  return (
    <div className="flex gap-3 border-b border-slate-100 py-4 last:border-0 sm:gap-4">
      <Link to={`/product/${product.slug}`} className="shrink-0">
        <ProductImage product={product} className="h-20 w-20 rounded-xl sm:h-24 sm:w-24" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link to={`/product/${product.slug}`} className="min-w-0">
              <h3 className="line-clamp-2 text-sm font-semibold text-slate-800 hover:text-brand-700 sm:text-base">
                {product.name}
              </h3>
            </Link>
            <button
              onClick={() => removeFromCart(product.id)}
              aria-label="Remove item"
              className="shrink-0 text-slate-400 transition hover:text-rose-500"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                <path d="M8 2a1 1 0 0 0-1 1v1H4a1 1 0 1 0 0 2h.5l.7 10.1A2 2 0 0 0 7.2 18h5.6a2 2 0 0 0 2-1.9L15.5 6H16a1 1 0 1 0 0-2h-3V3a1 1 0 0 0-1-1H8Zm1 2h2v0H9Zm-1.3 4a.75.75 0 0 1 .75.7l.4 7a.75.75 0 1 1-1.5.1l-.4-7A.75.75 0 0 1 7.7 8Zm4.6 0a.75.75 0 0 1 .75.8l-.4 7a.75.75 0 1 1-1.5-.1l.4-7a.75.75 0 0 1 .75-.7Z" />
              </svg>
            </button>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">{product.brand} · {product.unit}</p>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <QuantitySelector
            qty={qty}
            size="sm"
            max={product.stockQty}
            onIncrease={() => updateQty(product.id, Math.min(qty + 1, product.stockQty))}
            onDecrease={() => updateQty(product.id, qty - 1)}
          />
          <div className="text-right">
            {product.originalPrice && (
              <p className="text-xs text-slate-400 line-through">
                {formatCurrency(product.originalPrice * qty)}
              </p>
            )}
            <p className="font-display text-sm font-bold text-slate-900 sm:text-base">
              {formatCurrency(lineTotal)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
