import { useRecentlyViewed } from "../../context/RecentlyViewedContext";
import ProductSection from "./ProductSection";

export default function RecentlyViewed({ excludeId }) {
  const { recentlyViewed } = useRecentlyViewed();
  const products = recentlyViewed.filter((p) => p.id !== excludeId);
  return <ProductSection eyebrow="Continue browsing" title="Recently Viewed" products={products} />;
}
