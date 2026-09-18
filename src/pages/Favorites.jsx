import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/common/EmptyState";
import { useWishlist } from "../context/WishlistContext";

export default function Favorites() {
  const { wishlistProducts, count } = useWishlist();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-2xl">❤️</span>
        <div>
          <h1 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">My Favorites</h1>
          <p className="text-sm text-slate-500">{count} item{count === 1 ? "" : "s"} saved</p>
        </div>
      </div>

      {count === 0 ? (
        <EmptyState
          icon="🤍"
          title="Your wishlist is empty"
          message="Tap the heart icon on any product to save it here for later."
          actionLabel="Explore Products"
          actionTo="/"
        />
      ) : (
        <ProductGrid products={wishlistProducts} />
      )}
    </div>
  );
}
