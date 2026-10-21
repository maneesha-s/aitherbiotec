"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="catalog">
      <h1>Something went wrong</h1>
      <p>We couldn't load the products.</p>
      <button onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}