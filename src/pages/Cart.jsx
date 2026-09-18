import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyState from "../components/common/EmptyState";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartLines, clearCart } = useCart();

  if (cartLines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState
          icon="🛒"
          title="Your cart is empty"
          message="Looks like you haven't added anything yet. Let's find something fresh!"
          actionLabel="Start Shopping"
          actionTo="/"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">Shopping Cart</h1>
        <button onClick={clearCart} className="text-sm font-semibold text-rose-500 hover:text-rose-600">
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
          {cartLines.map((line) => (
            <CartItem key={line.productId} line={line} />
          ))}
          <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
            ← Continue Shopping
          </Link>
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
