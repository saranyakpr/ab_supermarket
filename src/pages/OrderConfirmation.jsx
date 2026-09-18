import { Link, useParams } from "react-router-dom";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import EmptyState from "../components/common/EmptyState";
import { useOrders } from "../context/OrdersContext";
import { formatCurrency, formatDateTime } from "../utils/format";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState icon="❓" title="Order not found" actionLabel="Back to Home" actionTo="/" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <div className="flex flex-col items-center text-center animate-slide-up">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-4xl">✅</div>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Order Confirmed!</h1>
        <p className="mt-2 max-w-md text-sm text-slate-500">
          Thank you, {order.customer.fullName.split(" ")[0]}! Your order has been placed successfully and is being prepared.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-slate-200 pb-4">
          <div>
            <p className="text-xs text-slate-400">Order ID</p>
            <p className="font-display text-base font-bold text-slate-900">{order.id}</p>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>

        <div className="grid grid-cols-1 gap-4 border-b border-dashed border-slate-200 py-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-slate-400">Order Date</p>
            <p className="text-sm text-slate-700">{formatDateTime(order.date)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Delivery Address</p>
            <p className="text-sm text-slate-700">
              {order.address.addressLine}, {order.address.city}, {order.address.state} - {order.address.pincode}
            </p>
          </div>
        </div>

        <div className="space-y-3 py-4">
          {order.items.map((item) => (
            <div key={item.productId} className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl"
                style={{ backgroundColor: `${item.image.color}1a` }}
              >
                {item.image.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-1 text-sm font-medium text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-400">Qty {item.qty} × {formatCurrency(item.price)}</p>
              </div>
              <span className="text-sm font-semibold text-slate-800">{formatCurrency(item.price * item.qty)}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-dashed border-slate-200 pt-4 text-sm">
          <div className="flex justify-between text-slate-600">
            <span>Subtotal</span>
            <span>{formatCurrency(order.totals.subtotal)}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Discount</span>
            <span className="text-brand-600">
              {order.totals.discount > 0 ? `− ${formatCurrency(order.totals.discount)}` : formatCurrency(0)}
            </span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Delivery</span>
            <span>{order.totals.delivery > 0 ? formatCurrency(order.totals.delivery) : "FREE"}</span>
          </div>
          <div className="flex justify-between border-t border-dashed border-slate-200 pt-2 font-display text-base font-bold text-slate-900">
            <span>Total Paid (COD)</span>
            <span>{formatCurrency(order.totals.grandTotal)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to={`/orders/${order.id}`}
          className="flex-1 rounded-full border border-brand-200 py-3 text-center text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          Track Order
        </Link>
        <Link
          to="/"
          className="flex-1 rounded-full bg-brand-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
