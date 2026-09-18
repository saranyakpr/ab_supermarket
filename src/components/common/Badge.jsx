const VARIANTS = {
  discount: "bg-accent-500 text-white",
  new: "bg-sky-500 text-white",
  popular: "bg-violet-500 text-white",
  featured: "bg-brand-600 text-white",
  out: "bg-slate-700 text-white",
  low: "bg-amber-500 text-white",
  neutral: "bg-slate-100 text-slate-600",
  success: "bg-brand-100 text-brand-700",
};

export default function Badge({ variant = "neutral", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
