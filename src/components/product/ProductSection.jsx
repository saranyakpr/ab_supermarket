import SectionHeader from "../common/SectionHeader";
import ProductRow from "./ProductRow";

export default function ProductSection({ eyebrow, title, products, viewAllTo, className = "" }) {
  if (!products || products.length === 0) return null;
  return (
    <section className={`mx-auto max-w-7xl px-4 py-6 sm:py-8 ${className}`}>
      <SectionHeader eyebrow={eyebrow} title={title} viewAllTo={viewAllTo} />
      <ProductRow products={products} />
    </section>
  );
}
