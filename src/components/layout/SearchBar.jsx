import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar({ className = "", autoFocus = false, onSubmit }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const urlQuery = params.get("q") || "";
  const [value, setValue] = useState(urlQuery);

  // Keep the box in sync if the URL's query changes from elsewhere
  // (e.g. a link navigates straight to /search?q=... while this bar stays mounted).
  useEffect(() => {
    setValue(urlQuery);
  }, [urlQuery]);

  const goToQuery = (q) => {
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    goToQuery(value.trim());
    onSubmit?.();
  };

  const handleChange = (e) => {
    const next = e.target.value;
    setValue(next);
    // Clearing the box (e.g. via the native/keyboard clear on mobile) should
    // immediately drop the active filter instead of waiting for a submit.
    if (next.trim() === "" && urlQuery) {
      goToQuery("");
    }
  };

  const handleClear = () => {
    setValue("");
    goToQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
      <button
        type="submit"
        aria-label="Search"
        className="absolute left-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-brand-100 hover:text-brand-700 active:scale-95"
      >
        <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="9" r="6.5" />
          <path d="m17.5 17.5-4-4" strokeLinecap="round" />
        </svg>
      </button>
      <input
        type="text"
        inputMode="search"
        enterKeyHint="search"
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
        placeholder="Search for fruits, snacks, dairy and more..."
        className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-600"
        >
          ✕
        </button>
      )}
    </form>
  );
}
