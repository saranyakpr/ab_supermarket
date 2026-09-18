import ProductCard from "./ProductCard";
import EmptyState from "../common/EmptyState";
import { ProductGridSkeleton } from "../common/LoadingSkeleton";

export default function ProductGrid({ products, loading, emptyTitle = "No products found", emptyMessage }) {
  if (loading) return <ProductGridSkeleton />;

  if (!products || products.length === 0) {
    return (
      <EmptyState
        icon="🔍"
        title={emptyTitle}
        message={emptyMessage || "Try adjusting your filters or search terms."}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
