import { categories } from "../../data/categories";
import { maxPrice } from "../../data/products";

const DISCOUNT_OPTIONS = [10, 20, 30, 40];

function FilterBlock({ title, children }) {
  return (
    <div className="border-b border-slate-100 py-4 first:pt-0 last:border-0">
      <h4 className="mb-3 text-sm font-semibold text-slate-800">{title}</h4>
      {children}
    </div>
  );
}

export default function FilterSidebar({ filters, setFilters, brands = [], showCategoryFilter = true }) {
  const toggleBrand = (brand) => {
    setFilters((f) => ({
      ...f,
      brands: f.brands.includes(brand) ? f.brands.filter((b) => b !== brand) : [...f.brands, brand],
    }));
  };

  const clearAll = () =>
    setFilters((f) => ({
      ...f,
      category: showCategoryFilter ? "" : f.category,
      priceMax: maxPrice,
      brands: [],
      inStockOnly: false,
      minDiscount: 0,
    }));

  const hasActiveFilters =
    (showCategoryFilter && filters.category) ||
    filters.priceMax < maxPrice ||
    filters.brands.length > 0 ||
    filters.inStockOnly ||
    filters.minDiscount > 0;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-bold text-slate-900">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearAll} className="text-xs font-semibold text-brand-700 hover:underline">
            Clear all
          </button>
        )}
      </div>

      {showCategoryFilter && (
        <FilterBlock title="Category">
          <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
            {categories.map((cat) => (
              <label key={cat.slug} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.slug}
                  onChange={() => setFilters((f) => ({ ...f, category: cat.slug }))}
                  className="h-3.5 w-3.5 accent-brand-600"
                />
                {cat.icon} {cat.name}
              </label>
            ))}
          </div>
        </FilterBlock>
      )}

      <FilterBlock title="Price Range">
        <input
          type="range"
          min="0"
          max={maxPrice}
          step="10"
          value={filters.priceMax}
          onChange={(e) => setFilters((f) => ({ ...f, priceMax: Number(e.target.value) }))}
          className="w-full accent-brand-600"
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>₹0</span>
          <span>Up to ₹{filters.priceMax}</span>
        </div>
      </FilterBlock>

      <FilterBlock title="Availability">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => setFilters((f) => ({ ...f, inStockOnly: e.target.checked }))}
            className="h-3.5 w-3.5 accent-brand-600"
          />
          In stock only
        </label>
      </FilterBlock>

      <FilterBlock title="Discount">
        <div className="flex flex-wrap gap-2">
          {DISCOUNT_OPTIONS.map((d) => (
            <button
              key={d}
              onClick={() => setFilters((f) => ({ ...f, minDiscount: f.minDiscount === d ? 0 : d }))}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                filters.minDiscount === d
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-200 text-slate-600 hover:border-brand-300"
              }`}
            >
              {d}% +
            </button>
          ))}
        </div>
      </FilterBlock>

      {brands.length > 0 && (
        <FilterBlock title="Brand">
          <div className="max-h-40 space-y-2 overflow-y-auto pr-1">
            {brands.map((brand) => (
              <label key={brand} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="h-3.5 w-3.5 accent-brand-600"
                />
                {brand}
              </label>
            ))}
          </div>
        </FilterBlock>
      )}
    </div>
  );
}
