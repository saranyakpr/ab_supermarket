import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import { useCart } from "../../context/CartContext";

export default function CartSummary({ checkoutTo = "/checkout", showCheckoutButton = true, title = "Order Summary" }) {
  const { totals, freeDeliveryThreshold } = useCart();
  const { subtotal, discount, delivery, grandTotal, totalQty } = totals;
  const remainingForFreeDelivery = Math.max(freeDeliveryThreshold - subtotal, 0);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
      <h3 className="font-display text-base font-bold text-slate-900">{title}</h3>

      {remainingForFreeDelivery > 0 && subtotal > 0 && (
        <div className="mt-3 rounded-xl bg-brand-50 px-3 py-2 text-xs text-brand-700">
          Add {formatCurrency(remainingForFreeDelivery)} more to get <strong>FREE delivery</strong>!
        </div>
      )}

      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex justify-between text-slate-600">
          <dt>Subtotal ({totalQty} {totalQty === 1 ? "item" : "items"})</dt>
          <dd className="font-medium text-slate-800">{formatCurrency(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Discount</dt>
          <dd className="font-medium text-brand-600">
            {discount > 0 ? `− ${formatCurrency(discount)}` : formatCurrency(0)}
          </dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Delivery Charge</dt>
          <dd className="font-medium text-slate-800">
            {delivery > 0 ? formatCurrency(delivery) : <span className="text-brand-600">FREE</span>}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
        <span className="font-display text-base font-bold text-slate-900">Grand Total</span>
        <span className="font-display text-xl font-extrabold text-slate-900">{formatCurrency(grandTotal)}</span>
      </div>

      {showCheckoutButton && (
        <Link
          to={checkoutTo}
          className={`mt-5 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white shadow-sm transition active:scale-95 ${
            totalQty === 0
              ? "pointer-events-none bg-slate-200 text-slate-400"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
