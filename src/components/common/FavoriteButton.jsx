import { useWishlist } from "../../context/WishlistContext";

export default function FavoriteButton({ product, className = "", size = "md" }) {
  const { isFavorite, toggleFavorite } = useWishlist();
  const active = isFavorite(product.id);
  const dim = size === "sm" ? "h-8 w-8" : "h-9 w-9";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product);
      }}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={active}
      className={`flex ${dim} items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:scale-110 hover:text-rose-500 active:scale-95 ${
        active ? "text-rose-500" : ""
      } ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s-7.5-4.6-10-9.1C0.3 8.2 2 4.5 5.6 4c2.1-.3 4 .8 6.4 3.2C14.4 4.8 16.3 3.7 18.4 4c3.6.5 5.3 4.2 3.6 7.9C19.5 16.4 12 21 12 21z"
        />
      </svg>
    </button>
  );
}
