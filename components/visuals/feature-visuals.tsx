import { FastForward, RotateCcw, Send } from "lucide-react";

interface ShellProps {
  children: React.ReactNode;
  className?: string;
}

function Shell({ children, className = "" }: ShellProps) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-[24px] border border-white/10 bg-midnight p-4 text-white shadow-device sm:p-6 ${className}`}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Example interface
        </span>
        <span className="text-[10px] font-medium text-white/45">
          Illustrative preview
        </span>
      </div>
      {children}
    </div>
  );
}

interface HeaderRowProps {
  title: string;
  meta: string;
}

function HeaderRow({ title, meta }: HeaderRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-xs font-semibold text-white">{title}</span>
      <span className="text-[10px] font-medium text-sky">{meta}</span>
    </div>
  );
}

export function EpgStripVisual() {
  const channels = [
    { ch: "SPT", program: "Cup final", category: "Sports", width: "w-[76%]" },
    { ch: "N24", program: "World report", category: "News", width: "w-[58%]" },
    {
      ch: "MOV",
      program: "Comedy night",
      category: "Movies",
      width: "w-[46%]",
    },
    {
      ch: "WLD",
      program: "Wildlife quiz",
      category: "Family",
      width: "w-[65%]",
    },
  ];

  return (
    <Shell>
      <HeaderRow title="Channel guide" meta="Sample schedule" />
      <div className="mt-4 space-y-2.5">
        {channels.map((channel, index) => (
          <div
            key={channel.ch}
            className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-2.5 rounded-xl bg-canvas p-2.5 text-ink"
          >
            <span
              className={`flex h-9 items-center justify-center rounded-lg text-[9px] font-bold ${
                index === 0
                  ? "bg-brand text-white"
                  : "bg-brand-soft text-brand-strong"
              }`}
            >
              {channel.ch}
            </span>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-xs font-semibold">
                  {channel.program}
                </span>
                <span className="shrink-0 text-[9px] font-medium text-ink-muted">
                  {channel.category}
                </span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-line/70">
                <div
                  className={`h-full rounded-full bg-brand/55 ${channel.width}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] leading-5 text-white/55">
        A sample layout showing how channel information can be organized.
      </p>
    </Shell>
  );
}

export function SportsScoreboardVisual() {
  return (
    <Shell>
      <HeaderRow title="Sports & events" meta="Sample matchup" />
      <div className="mt-4 rounded-2xl bg-canvas p-4 text-ink sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[9px] font-semibold text-brand-strong">
            Match preview
          </span>
          <span className="text-[10px] font-medium text-ink-muted">
            Cup final
          </span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <span className="block text-xs font-semibold sm:text-sm">
              East Coast
            </span>
            <span className="mt-1 block text-[9px] text-ink-muted">
              Football club
            </span>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight text-[11px] font-bold text-white">
            VS
          </span>
          <div className="text-right">
            <span className="block text-xs font-semibold sm:text-sm">
              West City
            </span>
            <span className="mt-1 block text-[9px] text-ink-muted">
              Football club
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-white">
          Event collections
        </span>
        <span className="text-[10px] text-white/45">Preview categories</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Boxing", "Motorsport", "Derby"].map((event, index) => (
          <div
            key={event}
            className={`rounded-xl border px-2 py-3 text-center ${
              index === 0
                ? "border-brand/45 bg-brand/15 text-white"
                : "border-white/10 bg-midnight-soft text-white/75"
            }`}
          >
            <span className="block text-[9px] font-semibold sm:text-[10px]">
              {event}
            </span>
            <span className="mt-1 block text-[8px] text-white/45">
              Event preview
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function ReplayTimelineVisual() {
  return (
    <Shell>
      <HeaderRow title="Catch-up & replay" meta="Playback example" />
      <div className="mt-5 rounded-2xl bg-canvas p-4 text-ink sm:p-5">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <RotateCcw size={15} />
          </span>
          <span className="text-xs font-semibold">
            Choose a point to resume
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-panel-soft text-ink-muted">
            <FastForward size={15} />
          </span>
        </div>

        <div className="relative mt-6 h-9">
          <div className="absolute inset-x-0 top-2 h-1.5 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[44%] rounded-full bg-brand" />
          </div>
          <div className="absolute left-[44%] top-0 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-canvas bg-brand shadow-soft" />
          <span className="absolute bottom-0 left-0 text-[9px] font-medium text-ink-muted">
            Start
          </span>
          <span className="absolute bottom-0 left-[44%] -translate-x-1/2 text-[9px] font-semibold text-brand">
            Selected
          </span>
          <span className="absolute bottom-0 right-0 text-[9px] font-medium text-ink-muted">
            End
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Browse earlier", "Resume", "Skip ahead"].map((label, index) => (
          <span
            key={label}
            className={`rounded-full px-3 py-1.5 text-[9px] font-semibold ${
              index === 1 ? "bg-brand text-white" : "bg-white/10 text-white/65"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[11px] leading-5 text-white/55">
        Example playback controls for catch-up viewing.
      </p>
    </Shell>
  );
}

export function SupportWindowVisual() {
  return (
    <Shell>
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
          EC
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-white">
            Support guidance
          </div>
          <div className="mt-0.5 text-[10px] text-white/50">
            Setup walkthrough example
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-sky">
          Help desk
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-canvas px-3.5 py-3 text-xs leading-relaxed text-ink">
          Can you help me understand the setup steps for my TV?
        </div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-brand px-3.5 py-3 text-xs leading-relaxed text-white">
          Absolutely. Tell us which supported device you use and we can share
          the relevant guide.
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-midnight-soft px-3 py-3">
        <span className="flex-1 text-xs text-white/45">
          Message field preview
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
          <Send size={12} />
        </span>
      </div>
    </Shell>
  );
}
