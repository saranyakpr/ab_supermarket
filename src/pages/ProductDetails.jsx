import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductImage from "../components/product/ProductImage";
import Badge from "../components/common/Badge";
import Rating from "../components/common/Rating";
import PriceTag from "../components/common/PriceTag";
import FavoriteButton from "../components/common/FavoriteButton";
import QuantitySelector from "../components/common/QuantitySelector";
import RelatedProducts from "../components/product/RelatedProducts";
import RecentlyViewed from "../components/product/RecentlyViewed";
import EmptyState from "../components/common/EmptyState";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart, updateQty, getQty } = useCart();
  const { recordView } = useRecentlyViewed();
  const [qtyToAdd, setQtyToAdd] = useState(1);

  useEffect(() => {
    if (product) recordView(product.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState icon="❓" title="Product not found" actionLabel="Back to Home" actionTo="/" />
      </div>
    );
  }

  const cartQty = getQty(product.id);
  const related = getRelatedProducts(product, 10);
  const isOut = product.stock === "out";

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-400">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <span>/</span>
        <Link to={`/category/${product.category}`} className="hover:text-brand-600">{product.categoryName}</Link>
        <span>/</span>
        <span className="text-slate-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative">
          <ProductImage product={product} className="aspect-square w-full rounded-3xl" />
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.discount > 0 && <Badge variant="discount">{product.discount}% OFF</Badge>}
            {product.isNewArrival && <Badge variant="new">NEW ARRIVAL</Badge>}
            {product.isPopular && <Badge variant="popular">POPULAR</Badge>}
          </div>
          <FavoriteButton product={product} className="absolute right-3 top-3" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {product.categoryName}
          </span>
          <h1 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h1>
          <p className="mt-1 text-sm text-slate-500">{product.brand} · {product.unit}</p>

          <div className="mt-3">
            <Rating value={product.rating} count={product.ratingCount} size="md" />
          </div>

          <div className="mt-4 rounded-2xl bg-brand-50/60 p-4">
            <PriceTag price={product.price} originalPrice={product.originalPrice} discount={product.discount} size="lg" />
            <p className="mt-1 text-xs text-slate-500">Inclusive of all taxes</p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {isOut ? (
              <Badge variant="out">Out of Stock</Badge>
            ) : product.stock === "low" ? (
              <Badge variant="low">Only {product.stockQty} left in stock</Badge>
            ) : (
              <Badge variant="success">In Stock</Badge>
            )}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">{product.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {!isOut && (
              <QuantitySelector
                qty={qtyToAdd}
                max={product.stockQty}
                onIncrease={() => setQtyToAdd((q) => Math.min(q + 1, product.stockQty))}
                onDecrease={() => setQtyToAdd((q) => Math.max(q - 1, 1))}
              />
            )}
            {isOut ? (
              <button disabled className="flex-1 cursor-not-allowed rounded-full bg-slate-100 py-3 text-sm font-semibold text-slate-400 sm:flex-none sm:px-10">
                Out of Stock
              </button>
            ) : cartQty > 0 ? (
              <div className="flex flex-1 items-center gap-3 sm:flex-none">
                <span className="text-sm text-slate-500">
                  <strong className="text-slate-800">{cartQty}</strong> in cart
                </span>
                <button
                  onClick={() => updateQty(product.id, cartQty + qtyToAdd)}
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 active:scale-95"
                >
                  Add {qtyToAdd} more
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product, qtyToAdd)}
                className="flex-1 rounded-full bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 active:scale-95 sm:flex-none sm:px-10"
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <h2 className="font-display text-base font-bold text-slate-900">Specifications</h2>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between border-b border-dashed border-slate-100 py-1.5 text-sm">
                  <dt className="text-slate-500">{key}</dt>
                  <dd className="font-medium text-slate-700">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <RelatedProducts products={related} />
        <RecentlyViewed excludeId={product.id} />
      </div>
    </div>
  );
}
