import { useParams } from "react-router-dom";
import ProductListingBase from "./shared/ProductListingBase";
import { getCategoryBySlug } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import EmptyState from "../components/common/EmptyState";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <EmptyState icon="❓" title="Category not found" actionLabel="Back to Home" actionTo="/" />
      </div>
    );
  }

  const baseProducts = getProductsByCategory(slug);

  return (
    <ProductListingBase
      title={category.name}
      subtitle={`${baseProducts.length} products available`}
      icon={category.icon}
      baseProducts={baseProducts}
      showCategoryFilter={false}
      loadingKey={slug}
      emptyTitle="No products in this category yet"
      emptyMessage="Try adjusting your filters or check back soon."
    />
  );
}
