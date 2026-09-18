import { useEffect, useState } from "react";
import ProductGrid from "../../components/product/ProductGrid";
import FilterSidebar from "../../components/filters/FilterSidebar";
import ActiveFilters from "../../components/filters/ActiveFilters";
import SortDropdown from "../../components/filters/SortDropdown";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";

export default function ProductListingBase({
  title,
  subtitle,
  icon,
  baseProducts,
  showCategoryFilter = false,
  emptyTitle,
  emptyMessage,
  loadingKey,
}) {
  const { filtered, filters, setFilters, sort, setSort } = useFilteredProducts(baseProducts);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const brands = [...new Set(baseProducts.map((p) => p.brand))].sort();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, [loadingKey]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <div className="mb-6 flex items-center gap-3">
        {icon && (
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
            {icon}
          </span>
        )}
        <div>
          <h1 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <FilterSidebar filters={filters} setFilters={setFilters} brands={brands} showCategoryFilter={showCategoryFilter} />
          </div>
        </aside>

        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            {!mobileFiltersOpen && (
              <p className="text-sm text-slate-500">
                {loading ? "Loading..." : `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`}
              </p>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 lg:hidden"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M2 4.5A1 1 0 0 1 3 3.5h14a1 1 0 0 1 .8 1.6l-5.3 6.8v4.6a1 1 0 0 1-1.45.9l-2.6-1.3a1 1 0 0 1-.55-.9v-3.3L2.2 5.1A1 1 0 0 1 2 4.5Z" />
                </svg>
                Filters
              </button>
              <SortDropdown value={sort} onChange={setSort} />
            </div>
          </div>

          <ActiveFilters filters={filters} setFilters={setFilters} showCategoryFilter={showCategoryFilter} />

          <ProductGrid
            products={filtered}
            loading={loading}
            emptyTitle={emptyTitle}
            emptyMessage={emptyMessage}
          />
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-4 animate-slide-up">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-slate-900">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500"
                aria-label="Close filters"
              >
                ✕
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} brands={brands} showCategoryFilter={showCategoryFilter} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-4 w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
