import EmptyState from "../components/common/EmptyState";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 py-16">
      <EmptyState
        icon="🧭"
        title="404 — Page not found"
        message="The page you're looking for doesn't exist or has been moved."
        actionLabel="Back to Home"
        actionTo="/"
      />
    </div>
  );
}
