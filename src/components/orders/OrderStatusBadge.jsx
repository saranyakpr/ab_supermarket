const STYLES = {
  Placed: "bg-sky-100 text-sky-700",
  Packed: "bg-amber-100 text-amber-700",
  "Out for Delivery": "bg-violet-100 text-violet-700",
  Delivered: "bg-brand-100 text-brand-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

export default function OrderStatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${STYLES[status] || STYLES.Placed}`}>
      {status}
    </span>
  );
}
