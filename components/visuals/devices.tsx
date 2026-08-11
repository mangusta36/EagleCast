function GuideRows() {
  const rows = [
    { ch: "SPT", label: "Cup final", fill: "w-[72%]" },
    { ch: "MOV", label: "Comedy night", fill: "w-[48%]" },
    { ch: "KID", label: "Kids quiz", fill: "w-[60%]" },
  ];

  return (
    <div className="space-y-2">
      {rows.map((row, index) => (
        <div
          key={row.ch}
          className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-2"
        >
          <span
            className={`flex h-6 items-center justify-center rounded-lg text-[7px] font-bold ${
              index === 0
                ? "bg-brand text-white"
                : "bg-brand-soft text-brand-strong"
            }`}
          >
            {row.ch}
          </span>
          <div className="relative h-6 overflow-hidden rounded-lg bg-panel-soft">
            <div className={`h-full rounded-lg bg-brand/15 ${row.fill}`} />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[8px] font-semibold text-ink">
              {row.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Mark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-3.5 w-3.5 text-brand"
      aria-hidden="true"
    >
      <path
        d="M12 9.5c0-.7.8-1.1 1.4-.8l9.5 5.6c.6.4.6 1.2 0 1.6l-9.5 5.6c-.6.3-1.4-.1-1.4-.8V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Laptop() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[20px] border-[6px] border-midnight-soft bg-canvas shadow-device sm:border-8">
        <div className="px-3 pb-4 pt-3 sm:px-4">
          <div className="flex items-center justify-between gap-3 pb-3">
            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-ink">
              <Mark />
              EagleCast TV
            </span>
            <span className="rounded-full bg-brand-soft px-2 py-1 text-[7px] font-semibold text-brand-strong">
              Channel guide
            </span>
          </div>
          <GuideRows />
        </div>
      </div>
      <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-midnight-soft" />
      <div className="mx-auto h-1 w-[116%] -translate-x-[7%] rounded-full bg-white/15" />
    </div>
  );
}

function Phone() {
  const tiles = [
    { tone: "bg-brand", icon: "text-white" },
    { tone: "bg-sky", icon: "text-midnight" },
    { tone: "bg-midnight-soft", icon: "text-white" },
    { tone: "bg-brand-soft", icon: "text-brand" },
    { tone: "bg-brand-strong", icon: "text-white" },
    { tone: "bg-panel", icon: "text-brand" },
  ];

  return (
    <div className="mx-auto w-36 rounded-[24px] border-[5px] border-midnight-soft bg-canvas p-2.5 shadow-device">
      <div className="mx-auto mb-2 h-1 w-9 rounded-full bg-midnight/20" />
      <div className="mb-2.5 flex items-center justify-center gap-1 text-[9px] font-semibold text-ink">
        <Mark />
        EagleCast TV
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {tiles.map((tile, index) => (
          <div
            key={`${tile.tone}-${index}`}
            className={`relative flex aspect-[4/5] items-center justify-center rounded-xl ${tile.tone} ${tile.icon}`}
          >
            <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                d="M12 9.5c0-.7.8-1.1 1.4-.8l9.5 5.6c.6.4.6 1.2 0 1.6l-9.5 5.6c-.6.3-1.4-.1-1.4-.8V9.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-brand" />
        <span className="h-1.5 w-1.5 rounded-full bg-midnight/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-midnight/15" />
      </div>
    </div>
  );
}

function Tablet() {
  const items = [
    { label: "Sports", tone: "bg-brand" },
    { label: "Movies", tone: "bg-sky" },
  ];

  return (
    <div className="w-full">
      <div className="rounded-[20px] border-[7px] border-midnight-soft bg-canvas shadow-device">
        <div className="px-3 pb-4 pt-3">
          <div className="pb-2.5 text-[10px] font-semibold text-ink">
            Content library
          </div>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl bg-panel p-2"
              >
                <span
                  className={`flex h-9 w-12 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
                >
                  <svg
                    viewBox="0 0 32 32"
                    className={`h-3 w-3 ${index === 0 ? "text-white" : "text-midnight"}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M12 9.5c0-.7.8-1.1 1.4-.8l9.5 5.6c.6.4.6 1.2 0 1.6l-9.5 5.6c-.6.3-1.4-.1-1.4-.8V9.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[8px] font-semibold text-ink">
                    {item.label}
                  </span>
                  <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-brand-soft">
                    <div
                      className={`h-full rounded-full bg-brand ${index === 0 ? "w-3/4" : "w-1/2"}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeviceStage() {
  return (
    <div
      className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-[24px] border border-white/10 bg-midnight px-4 pb-10 pt-5 shadow-device sm:px-8 sm:pb-12 sm:pt-7"
      aria-hidden="true"
    >
      <div className="mb-9 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Example interface
        </span>
        <span className="text-[10px] font-medium text-white/45">
          Device preview
        </span>
      </div>

      <div className="absolute inset-x-12 bottom-7 h-5 rounded-[50%] bg-black/25 blur-md" />
      <div className="relative">
        <div className="absolute -right-3 top-0 z-0 hidden w-[38%] -translate-y-7 rotate-[3deg] md:block">
          <Tablet />
        </div>
        <div className="relative z-10 mx-auto w-[92%] md:w-[84%]">
          <Laptop />
        </div>
        <div className="absolute -left-3 bottom-0 z-20 hidden -rotate-[4deg] md:block">
          <Phone />
        </div>
      </div>
    </div>
  );
}
