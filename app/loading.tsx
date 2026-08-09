export default function Loading() {
  return (
    <section className="bg-canvas" aria-busy="true" aria-live="polite">
      <div className="site-container min-h-[60vh] py-16 sm:py-20 lg:py-24">
        <p className="sr-only">Loading eaglecast content…</p>
        <div className="animate-pulse" aria-hidden="true">
          <div className="h-3 w-28 rounded-full bg-brand-soft" />
          <div className="mt-6 h-11 max-w-2xl rounded-xl bg-line/70 sm:h-14" />
          <div className="mt-4 h-5 max-w-xl rounded-lg bg-line/55" />
          <div className="mt-3 h-5 max-w-md rounded-lg bg-line/45" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="border-t border-line pt-5">
                <div className="h-32 rounded-2xl bg-panel-soft sm:h-40" />
                <div className="mt-5 h-5 w-2/3 rounded-lg bg-line/60" />
                <div className="mt-3 h-4 rounded-lg bg-line/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
