export default function QuantitySelector({ qty, onIncrease, onDecrease, max, size = "md" }) {
  const isSm = size === "sm";
  return (
    <div
      className={`inline-flex items-center rounded-full border border-brand-200 bg-white ${
        isSm ? "h-8" : "h-10"
      }`}
    >
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`flex items-center justify-center rounded-full text-brand-700 transition hover:bg-brand-50 ${
          isSm ? "h-8 w-8 text-base" : "h-10 w-10 text-lg"
        }`}
      >
        −
      </button>
      <span className={`min-w-[1.75rem] text-center font-semibold text-slate-900 ${isSm ? "text-sm" : "text-base"}`}>
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={max != null && qty >= max}
        aria-label="Increase quantity"
        className={`flex items-center justify-center rounded-full text-brand-700 transition hover:bg-brand-50 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent ${
          isSm ? "h-8 w-8 text-base" : "h-10 w-10 text-lg"
        }`}
      >
        +
      </button>
    </div>
  );
}
