import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { useToast } from "./ToastContext";

const CartContext = createContext(null);
const STORAGE_KEY = "ab-supermarket:cart";

const FREE_DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 40;

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadFromStorage(STORAGE_KEY, []));
  const { showToast } = useToast();

  useEffect(() => {
    saveToStorage(STORAGE_KEY, items);
  }, [items]);

  const addToCart = (product, qty = 1) => {
    if (product.stock === "out") return;
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id);
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id
            ? { ...i, qty: Math.min(i.qty + qty, product.stockQty || 99) }
            : i
        );
      }
      return [...prev, { productId: product.id, qty }];
    });
    showToast(`${product.name} added to cart`, { type: "success" });
  };

  const removeFromCart = (productId, opts = {}) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
    if (!opts.silent) showToast("Removed from cart", { type: "info" });
  };

  const updateQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId, { silent: true });
      return;
    }
    setItems((prev) => prev.map((i) => (i.productId === productId ? { ...i, qty } : i)));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartLines = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return { ...item, product };
        })
        .filter(Boolean),
    [items]
  );

  const totals = useMemo(() => {
    const subtotal = cartLines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
    const originalTotal = cartLines.reduce(
      (sum, l) => sum + (l.product.originalPrice || l.product.price) * l.qty,
      0
    );
    const discount = Math.max(originalTotal - subtotal, 0);
    const totalQty = cartLines.reduce((sum, l) => sum + l.qty, 0);
    const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const grandTotal = subtotal + delivery;
    return { subtotal, discount, delivery, grandTotal, totalQty, originalTotal };
  }, [cartLines]);

  const isInCart = (productId) => items.some((i) => i.productId === productId);
  const getQty = (productId) => items.find((i) => i.productId === productId)?.qty || 0;

  return (
    <CartContext.Provider
      value={{
        cartLines,
        totals,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        isInCart,
        getQty,
        freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
