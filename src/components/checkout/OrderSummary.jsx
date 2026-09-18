import ProductImage from "../product/ProductImage";
import { formatCurrency } from "../../utils/format";

export default function OrderSummary({ lines, totals, title = "Order Summary" }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
      <h3 className="font-display text-base font-bold text-slate-900">{title}</h3>

      <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
        {lines.map((line) => (
          <div key={line.product.id} className="flex items-center gap-3">
            <ProductImage product={line.product} className="h-12 w-12 shrink-0 rounded-lg" />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-1 text-sm font-medium text-slate-800">{line.product.name}</p>
              <p className="text-xs text-slate-400">Qty {line.qty} × {formatCurrency(line.product.price)}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-slate-800">
              {formatCurrency(line.product.price * line.qty)}
            </span>
          </div>
        ))}
      </div>

      <dl className="mt-4 space-y-2.5 border-t border-dashed border-slate-200 pt-4 text-sm">
        <div className="flex justify-between text-slate-600">
          <dt>Subtotal</dt>
          <dd className="font-medium text-slate-800">{formatCurrency(totals.subtotal)}</dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Discount</dt>
          <dd className="font-medium text-brand-600">
            {totals.discount > 0 ? `− ${formatCurrency(totals.discount)}` : formatCurrency(0)}
          </dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Delivery Charge</dt>
          <dd className="font-medium text-slate-800">
            {totals.delivery > 0 ? formatCurrency(totals.delivery) : <span className="text-brand-600">FREE</span>}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
        <span className="font-display text-base font-bold text-slate-900">Grand Total</span>
        <span className="font-display text-xl font-extrabold text-slate-900">{formatCurrency(totals.grandTotal)}</span>
      </div>
    </div>
  );
}
