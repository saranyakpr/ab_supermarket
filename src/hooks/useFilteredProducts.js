import { useMemo, useState } from "react";
import { maxPrice } from "../data/products";

export const defaultFilters = () => ({
  category: "",
  priceMax: maxPrice,
  brands: [],
  inStockOnly: false,
  minDiscount: 0,
});

export function useFilteredProducts(baseProducts) {
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("popularity");

  const filtered = useMemo(() => {
    let list = baseProducts.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (p.price > filters.priceMax) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false;
      if (filters.inStockOnly && p.stock === "out") return false;
      if (filters.minDiscount > 0 && p.discount < filters.minDiscount) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "discount":
        list = [...list].sort((a, b) => b.discount - a.discount);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list = [...list].sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0) || b.id - a.id);
        break;
      default:
        list = [...list].sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.ratingCount - a.ratingCount);
    }

    return list;
  }, [baseProducts, filters, sort]);

  return { filtered, filters, setFilters, sort, setSort };
}
