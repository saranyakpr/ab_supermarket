import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";
import { loadFromStorage, saveToStorage } from "../utils/storage";

const RecentlyViewedContext = createContext(null);
const STORAGE_KEY = "ab-supermarket:recently-viewed";
const MAX_ITEMS = 12;

export function RecentlyViewedProvider({ children }) {
  const [ids, setIds] = useState(() => loadFromStorage(STORAGE_KEY, []));

  useEffect(() => {
    saveToStorage(STORAGE_KEY, ids);
  }, [ids]);

  const recordView = (productId) => {
    setIds((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, MAX_ITEMS));
  };

  const recentlyViewed = useMemo(
    () => ids.map((id) => products.find((p) => p.id === id)).filter(Boolean),
    [ids]
  );

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, recordView }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export const useRecentlyViewed = () => {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error("useRecentlyViewed must be used within RecentlyViewedProvider");
  return ctx;
};
