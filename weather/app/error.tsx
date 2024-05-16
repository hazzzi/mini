'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl">An error occurred</h1>
      <p className="text-xl text-center">
        {error.message}
        {error.digest && (
          <span className="text-sm block mt-2">
            Error digest: {error.digest}
          </span>
        )}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
