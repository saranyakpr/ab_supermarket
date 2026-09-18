import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import Rating from "../common/Rating";
import PriceTag from "../common/PriceTag";
import FavoriteButton from "../common/FavoriteButton";
import QuantitySelector from "../common/QuantitySelector";
import ProductImage from "./ProductImage";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, updateQty, getQty } = useCart();
  const qty = getQty(product.id);
  const isOut = product.stock === "out";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link to={`/product/${product.slug}`} className="relative block">
        <ProductImage product={product} className="aspect-square w-full" />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {product.discount > 0 && <Badge variant="discount">{product.discount}% OFF</Badge>}
          {product.isNewArrival && <Badge variant="new">NEW</Badge>}
        </div>
        <FavoriteButton product={product} className="absolute right-2 top-2" size="sm" />
        {product.stock === "low" && (
          <span className="absolute bottom-2 left-2 rounded-full bg-amber-500/95 px-2 py-0.5 text-[10px] font-semibold text-white">
            Only {product.stockQty} left
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
          {product.categoryName}
        </span>
        <Link to={`/product/${product.slug}`} className="min-h-[2.5rem]">
          <h3 className="line-clamp-2 font-display text-sm font-semibold text-slate-800 transition hover:text-brand-700">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-slate-400">{product.brand} · {product.unit}</p>
        <Rating value={product.rating} count={product.ratingCount} />
        <PriceTag price={product.price} originalPrice={product.originalPrice} discount={product.discount} />

        <div className="mt-auto pt-2">
          {isOut ? (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-full bg-slate-100 py-2 text-sm font-semibold text-slate-400"
            >
              Out of Stock
            </button>
          ) : qty > 0 ? (
            <div className="flex items-center justify-center">
              <QuantitySelector
                qty={qty}
                size="sm"
                max={product.stockQty}
                onIncrease={() => updateQty(product.id, Math.min(qty + 1, product.stockQty))}
                onDecrease={() => updateQty(product.id, qty - 1)}
              />
            </div>
          ) : (
            <button
              onClick={() => addToCart(product, 1)}
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-600 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 active:scale-95"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M2 2h1.4l.5 2H17a1 1 0 0 1 .97 1.24l-1.5 6A1 1 0 0 1 15.5 12H6.7l.2 1H15a1 1 0 1 1 0 2H6a1 1 0 0 1-.97-.76L3.06 4H2a1 1 0 1 1 0-2Zm4.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
