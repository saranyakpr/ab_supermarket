import { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";

const OrdersContext = createContext(null);
const STORAGE_KEY = "ab-supermarket:orders";

const STATUS_FLOW = ["Placed", "Packed", "Out for Delivery", "Delivered"];

const generateOrderId = () =>
  `AB${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => loadFromStorage(STORAGE_KEY, []));

  useEffect(() => {
    saveToStorage(STORAGE_KEY, orders);
  }, [orders]);

  const placeOrder = ({ lines, totals, customer, address }) => {
    const order = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      status: STATUS_FLOW[0],
      customer,
      address,
      items: lines.map((l) => ({
        productId: l.product.id,
        name: l.product.name,
        unit: l.product.unit,
        image: { icon: l.product.icon, color: l.product.color },
        price: l.product.price,
        qty: l.qty,
      })),
      totals,
    };
    setOrders((prev) => [order, ...prev]);
    return order;
  };

  const getOrderById = (id) => orders.find((o) => o.id === id);

  return (
    <OrdersContext.Provider value={{ orders, placeOrder, getOrderById }}>
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
};
