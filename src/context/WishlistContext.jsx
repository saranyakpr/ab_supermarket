import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { useToast } from "./ToastContext";

const WishlistContext = createContext(null);
const STORAGE_KEY = "ab-supermarket:wishlist";

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(() => loadFromStorage(STORAGE_KEY, []));
  const { showToast } = useToast();

  useEffect(() => {
    saveToStorage(STORAGE_KEY, ids);
  }, [ids]);

  const isFavorite = (productId) => ids.includes(productId);

  const toggleFavorite = (product) => {
    setIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed ${product.name} from favorites`, { type: "info" });
        return prev.filter((id) => id !== product.id);
      }
      showToast(`Added ${product.name} to favorites`, { type: "success" });
      return [...prev, product.id];
    });
  };

  const wishlistProducts = useMemo(
    () => ids.map((id) => products.find((p) => p.id === id)).filter(Boolean),
    [ids]
  );

  return (
    <WishlistContext.Provider
      value={{ ids, count: ids.length, wishlistProducts, isFavorite, toggleFavorite }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
