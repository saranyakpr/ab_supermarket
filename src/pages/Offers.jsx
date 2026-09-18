import ProductListingBase from "./shared/ProductListingBase";
import { products } from "../data/products";

const offerProducts = products.filter((p) => p.discount > 0).sort((a, b) => b.discount - a.discount);

export default function Offers() {
  return (
    <ProductListingBase
      title="Deals & Offers"
      subtitle={`${offerProducts.length} products on discount right now`}
      icon="🔥"
      baseProducts={offerProducts}
      showCategoryFilter
      loadingKey="offers"
      emptyTitle="No active offers"
      emptyMessage="Check back soon for new deals."
    />
  );
}
