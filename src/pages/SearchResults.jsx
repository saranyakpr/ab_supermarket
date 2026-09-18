import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductListingBase from "./shared/ProductListingBase";
import { products } from "../data/products";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = (params.get("q") || "").trim().toLowerCase();

  const baseProducts = useMemo(() => {
    if (!query) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <ProductListingBase
      title={query ? `Search results for "${query}"` : "All Products"}
      subtitle={
        query
          ? `${baseProducts.length} products found`
          : `Browse our full catalogue of ${baseProducts.length} products`
      }
      icon="🔍"
      baseProducts={baseProducts}
      showCategoryFilter
      loadingKey={query}
      emptyTitle="No results found"
      emptyMessage={`We couldn't find anything for "${query}". Try a different search term.`}
    />
  );
}
