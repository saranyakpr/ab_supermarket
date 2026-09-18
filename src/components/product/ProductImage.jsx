export default function ProductImage({ product, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 20%, ${product.color}22, ${product.color}0d 60%), linear-gradient(135deg, ${product.color}14, #ffffff)`,
      }}
    >
      <span
        className="select-none text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:text-6xl"
        aria-hidden="true"
      >
        {product.icon}
      </span>
      {product.stock === "out" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
            Out of stock
          </span>
        </div>
      )}
    </div>
  );
}
