import OrderCard from "../components/orders/OrderCard";
import EmptyState from "../components/common/EmptyState";
import { useOrders } from "../context/OrdersContext";

export default function MyOrders() {
  const { orders } = useOrders();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8">
      <h1 className="mb-6 font-display text-xl font-bold text-slate-900 sm:text-2xl">My Orders</h1>

      {orders.length === 0 ? (
        <EmptyState
          icon="📦"
          title="No orders yet"
          message="Once you place an order, it will show up here for easy tracking."
          actionLabel="Start Shopping"
          actionTo="/"
        />
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
