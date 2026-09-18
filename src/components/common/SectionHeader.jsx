import { Link } from "react-router-dom";

export default function SectionHeader({ eyebrow, title, viewAllTo, viewAllLabel = "View all" }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3 sm:mb-6">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent-600">{eyebrow}</p>
        )}
        <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          {viewAllLabel}
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path d="M7.5 4.5 13 10l-5.5 5.5-1.4-1.4L10.2 10 6.1 5.9z" />
          </svg>
        </Link>
      )}
    </div>
  );
}
