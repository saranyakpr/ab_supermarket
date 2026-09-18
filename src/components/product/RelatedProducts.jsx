import ProductSection from "./ProductSection";

export default function RelatedProducts({ products }) {
  return <ProductSection eyebrow="You may also like" title="Related Products" products={products} />;
}
