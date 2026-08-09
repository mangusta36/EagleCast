"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ unstable_retry }: ErrorPageProps) {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-16 h-52 w-52 rounded-full border border-white/10"
      />
      <div className="site-container relative flex min-h-[68vh] items-center py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-sky">
            Something interrupted this page
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            We could not load that view.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Try the page again. If the problem continues, return home and use
            the support options from there.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white bg-white px-5 py-3 text-[15px] font-semibold text-midnight transition-colors hover:border-sky hover:bg-sky"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
