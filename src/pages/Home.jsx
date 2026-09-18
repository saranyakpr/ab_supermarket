import HeroBanner from "../components/home/HeroBanner";
import PromoStrip from "../components/home/PromoStrip";
import OfferBanner from "../components/home/OfferBanner";
import NewsletterSection from "../components/home/NewsletterSection";
import CategorySection from "../components/category/CategorySection";
import ProductSection from "../components/product/ProductSection";
import RecentlyViewed from "../components/product/RecentlyViewed";
import { products } from "../data/products";

const featured = products.filter((p) => p.isFeatured).slice(0, 10);
const popular = products.filter((p) => p.isPopular).slice(0, 10);
const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 10);
const recommended = products.filter((p) => p.isRecommended).slice(0, 10);

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <PromoStrip />
      <CategorySection />
      <ProductSection eyebrow="Hand-picked" title="Featured Products" products={featured} viewAllTo="/offers" />
      <OfferBanner />
      <ProductSection eyebrow="Trending now" title="Popular Products" products={popular} viewAllTo="/offers" />
      <ProductSection eyebrow="Just landed" title="New Arrivals" products={newArrivals} viewAllTo="/offers" />
      <RecentlyViewed />
      <ProductSection eyebrow="Picked for you" title="Recommended Products" products={recommended} viewAllTo="/offers" />
      <NewsletterSection />
    </div>
  );
}
