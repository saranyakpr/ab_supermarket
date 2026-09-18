import { Link, useParams } from "react-router-dom";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import EmptyState from "../components/common/EmptyState";
import { useOrders } from "../context/OrdersContext";
import { formatCurrency, formatDateTime } from "../utils/format";

const STEPS = ["Placed", "Packed", "Out for Delivery", "Delivered"];

export default function OrderDetails() {
  const { orderId } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState icon="❓" title="Order not found" actionLabel="Back to My Orders" actionTo="/orders" />
      </div>
    );
  }

  const currentStep = STEPS.indexOf(order.status);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:py-8">
      <Link to="/orders" className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
        ← Back to My Orders
      </Link>

      <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs text-slate-400">Order ID</p>
            <p className="font-display text-lg font-bold text-slate-900">{order.id}</p>
            <p className="text-xs text-slate-500">Placed on {formatDateTime(order.date)}</p>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>

        <div className="mt-6 flex items-center">
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    i <= currentStep ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {i < currentStep ? "✓" : i + 1}
                </div>
                <span className={`hidden text-[10px] font-medium sm:block ${i <= currentStep ? "text-brand-700" : "text-slate-400"}`}>
                  {step}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-1 h-0.5 flex-1 ${i < currentStep ? "bg-brand-600" : "bg-slate-100"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-dashed border-slate-200 pt-5 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-slate-400">Customer</p>
            <p className="text-sm text-slate-700">{order.customer.fullName}</p>
            <p className="text-sm text-slate-500">{order.customer.phone} · {order.customer.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Delivery Address ({order.address.addressType})</p>
            <p className="text-sm text-slate-700">
              {order.address.addressLine}, {order.address.city}, {order.address.state} - {order.address.pincode}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-t border-dashed border-slate-200 pt-5">
          <p className="text-xs font-semibold text-slate-400">Items</p>
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

        <div className="mt-6 space-y-2 border-t border-dashed border-slate-200 pt-5 text-sm">
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
            <span>Grand Total</span>
            <span>{formatCurrency(order.totals.grandTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
