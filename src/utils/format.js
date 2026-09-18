export const formatCurrency = (amount) =>
  `₹${Math.round(amount).toLocaleString("en-IN")}`;

export const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const formatDateTime = (isoString) =>
  new Date(isoString).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
