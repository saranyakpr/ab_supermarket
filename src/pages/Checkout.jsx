import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/checkout/AddressForm";
import OrderSummary from "../components/checkout/OrderSummary";
import EmptyState from "../components/common/EmptyState";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { useToast } from "../context/ToastContext";

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
  addressType: "Home",
  notes: "",
};

export default function Checkout() {
  const { cartLines, totals, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (cartLines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState icon="🛒" title="Your cart is empty" message="Add some products before checking out." actionLabel="Start Shopping" actionTo="/" />
      </div>
    );
  }

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = "Enter a valid 10-digit phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Enter a valid email address";
    if (!form.addressLine.trim()) next.addressLine = "Address is required";
    if (!form.city.trim()) next.city = "City is required";
    if (!form.state.trim()) next.state = "State is required";
    if (!/^\d{6}$/.test(form.pincode.trim())) next.pincode = "Enter a valid 6-digit pincode";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) {
      showToast("Please fix the errors in the form", { type: "error" });
      return;
    }
    setSubmitting(true);
    const order = placeOrder({
      lines: cartLines,
      totals,
      customer: { fullName: form.fullName, phone: form.phone, email: form.email },
      address: {
        addressLine: form.addressLine,
        city: form.city,
        state: form.state,
        pincode: form.pincode,
        addressType: form.addressType,
        notes: form.notes,
      },
    });
    clearCart();
    navigate(`/order-confirmation/${order.id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <h1 className="mb-6 font-display text-xl font-bold text-slate-900 sm:text-2xl">Checkout</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-6">
          <AddressForm form={form} onChange={setForm} errors={errors} />
        </div>

        <div className="space-y-4">
          <OrderSummary lines={cartLines} totals={totals} />
          <div className="rounded-2xl border border-slate-100 bg-white p-4 text-xs text-slate-500 sm:p-5">
            💵 Cash on Delivery available. Online payment is not required for this order.
          </div>
          <button
            onClick={handleConfirm}
            disabled={submitting}
            className="w-full rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 active:scale-95 disabled:opacity-60"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
