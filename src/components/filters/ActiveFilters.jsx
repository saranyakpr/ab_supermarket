import { getCategoryBySlug } from "../../data/categories";
import { maxPrice } from "../../data/products";

function Chip({ children, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
      {children}
      <button onClick={onRemove} aria-label="Remove filter" className="text-brand-500 hover:text-brand-800">
        ✕
      </button>
    </span>
  );
}

export default function ActiveFilters({ filters, setFilters, showCategoryFilter = true }) {
  const chips = [];

  if (showCategoryFilter && filters.category) {
    const cat = getCategoryBySlug(filters.category);
    chips.push({
      key: "category",
      label: cat?.name || filters.category,
      remove: () => setFilters((f) => ({ ...f, category: "" })),
    });
  }
  if (filters.priceMax < maxPrice) {
    chips.push({
      key: "price",
      label: `Under ₹${filters.priceMax}`,
      remove: () => setFilters((f) => ({ ...f, priceMax: maxPrice })),
    });
  }
  if (filters.inStockOnly) {
    chips.push({
      key: "stock",
      label: "In stock",
      remove: () => setFilters((f) => ({ ...f, inStockOnly: false })),
    });
  }
  if (filters.minDiscount > 0) {
    chips.push({
      key: "discount",
      label: `${filters.minDiscount}% + off`,
      remove: () => setFilters((f) => ({ ...f, minDiscount: 0 })),
    });
  }
  filters.brands.forEach((brand) => {
    chips.push({
      key: `brand-${brand}`,
      label: brand,
      remove: () => setFilters((f) => ({ ...f, brands: f.brands.filter((b) => b !== brand) })),
    });
  });

  if (chips.length === 0) return null;

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <Chip key={chip.key} onRemove={chip.remove}>
          {chip.label}
        </Chip>
      ))}
    </div>
  );
}
