import { useToast } from "../../context/ToastContext";

const ICONS = {
  success: "✓",
  info: "ℹ",
  error: "!",
};

const STYLES = {
  success: "bg-brand-600 text-white",
  info: "bg-slate-800 text-white",
  error: "bg-rose-600 text-white",
};

export default function ToastContainer() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 sm:top-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className={`animate-toast-in pointer-events-auto flex max-w-sm items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg ${STYLES[toast.type]}`}
        >
          <span className="flex h-4 w-4 shrink-0 items-center justify-center text-xs">{ICONS[toast.type]}</span>
          <span className="line-clamp-1">{toast.message}</span>
          <button
            onClick={() => dismiss(toast.id)}
            aria-label="Dismiss notification"
            className="ml-1 shrink-0 opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
