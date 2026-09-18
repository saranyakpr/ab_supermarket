import ProductCard from "./ProductCard";

export default function ProductRow({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:gap-4">
      {products.map((product) => (
        <div key={product.id} className="w-[46%] shrink-0 snap-start sm:w-[30%] lg:w-[22%] xl:w-[18%]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
