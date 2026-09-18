import { Link } from "react-router-dom";

export default function EmptyState({ icon = "🛒", title, message, actionLabel, actionTo, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center animate-fade-in">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-4xl">{icon}</div>
      <h3 className="font-display text-lg font-semibold text-slate-800">{title}</h3>
      {message && <p className="max-w-sm text-sm text-slate-500">{message}</p>}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && !actionTo && (
        <button
          onClick={onAction}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
