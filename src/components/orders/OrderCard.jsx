import { Link } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";
import { formatCurrency, formatDate } from "../../utils/format";

export default function OrderCard({ order }) {
  const previewItems = order.items.slice(0, 4);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs text-slate-400">Order ID</p>
          <p className="font-display text-sm font-bold text-slate-900">{order.id}</p>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      <div className="mt-3 flex items-center gap-2">
        {previewItems.map((item, i) => (
          <span
            key={i}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
            style={{ backgroundColor: `${item.image.color}1a` }}
          >
            {item.image.icon}
          </span>
        ))}
        {order.items.length > 4 && (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-500">
            +{order.items.length - 4}
          </span>
        )}
      </div>

      <p className="mt-3 line-clamp-1 text-xs text-slate-500">
        {order.items.map((i) => i.name).join(", ")}
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
        <div className="text-xs text-slate-500">
          <p>{formatDate(order.date)}</p>
          <p className="font-semibold text-slate-800">{formatCurrency(order.totals.grandTotal)}</p>
        </div>
        <Link
          to={`/orders/${order.id}`}
          className="rounded-full border border-brand-200 px-4 py-1.5 text-xs font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
