const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
const labelClass = "mb-1 block text-xs font-semibold text-slate-600";

export default function AddressForm({ form, onChange, errors = {} }) {
  const set = (field) => (e) => onChange({ ...form, [field]: e.target.value });

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-display text-base font-bold text-slate-900">Customer Details</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="fullName">Full Name</label>
            <input id="fullName" className={inputClass} value={form.fullName} onChange={set("fullName")} placeholder="Jane Doe" />
            {errors.fullName && <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">Phone Number</label>
            <input id="phone" className={inputClass} value={form.phone} onChange={set("phone")} placeholder="98765 43210" />
            {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="email">Email Address</label>
            <input id="email" type="email" className={inputClass} value={form.email} onChange={set("email")} placeholder="jane@example.com" />
            {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-base font-bold text-slate-900">Delivery Address</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="addressLine">Address Line</label>
            <input id="addressLine" className={inputClass} value={form.addressLine} onChange={set("addressLine")} placeholder="House no., street, area" />
            {errors.addressLine && <p className="mt-1 text-xs text-rose-500">{errors.addressLine}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="city">City</label>
            <input id="city" className={inputClass} value={form.city} onChange={set("city")} placeholder="Bengaluru" />
            {errors.city && <p className="mt-1 text-xs text-rose-500">{errors.city}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="state">State</label>
            <input id="state" className={inputClass} value={form.state} onChange={set("state")} placeholder="Karnataka" />
            {errors.state && <p className="mt-1 text-xs text-rose-500">{errors.state}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="pincode">Pincode</label>
            <input id="pincode" className={inputClass} value={form.pincode} onChange={set("pincode")} placeholder="560001" />
            {errors.pincode && <p className="mt-1 text-xs text-rose-500">{errors.pincode}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="addressType">Address Type</label>
            <select id="addressType" className={inputClass} value={form.addressType} onChange={set("addressType")}>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">Delivery Instructions (optional)</label>
        <textarea
          id="notes"
          rows={2}
          className={inputClass}
          value={form.notes}
          onChange={set("notes")}
          placeholder="E.g. Leave at the door, call on arrival..."
        />
      </div>
    </div>
  );
}
