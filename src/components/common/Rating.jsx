const Star = ({ fill }) => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
    <defs>
      <linearGradient id={`star-${fill}`}>
        <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
        <stop offset={`${fill * 100}%`} stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#star-${fill})`}
      d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
    />
  </svg>
);

export default function Rating({ value = 0, count, size = "sm" }) {
  const stars = [0, 1, 2, 3, 4].map((i) => Math.max(0, Math.min(1, value - i)));
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {stars.map((fill, i) => (
          <Star key={i} fill={fill} />
        ))}
      </div>
      <span className={`font-medium text-slate-600 ${size === "sm" ? "text-xs" : "text-sm"}`}>
        {value.toFixed(1)}
      </span>
      {count != null && (
        <span className={`text-slate-400 ${size === "sm" ? "text-xs" : "text-sm"}`}>({count})</span>
      )}
    </div>
  );
}
