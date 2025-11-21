import { Phone, Leaf, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_0%,rgba(34,197,94,0.15),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs mb-5">
              <Sparkles className="w-4 h-4" />
              Premium local lawn care
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Lush, healthy lawns without the hassle
            </h1>
            <p className="mt-5 text-lg md:text-xl text-emerald-100/80">
              Reliable mowing, treatment, and seasonal care from friendly professionals. We keep your yard looking its best—week after week.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition">
                Get a free quote
              </a>
              <a href="tel:+15551234567" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition">
                <Phone className="w-5 h-5 mr-2" /> (555) 123-4567
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-emerald-100/70">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" /> Eco-friendly treatments
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" /> Licensed & insured
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" /> Satisfaction guaranteed
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-600 to-green-500 rounded-3xl p-1 shadow-2xl shadow-emerald-900/30">
              <div className="rounded-3xl overflow-hidden bg-slate-900">
                <LawnIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LawnIllustration() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-[360px] md:h-[420px]">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="sun" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#sky)" />
      <circle cx="650" cy="90" r="40" fill="url(#sun)" opacity="0.9" />

      <g transform="translate(0,360)">
        <rect width="800" height="200" fill="#065f46" />
        {[...Array(80)].map((_, i) => {
          const x = i * 10 + (i % 2 === 0 ? 3 : 0);
          const h = 60 + (i % 5) * 12;
          return (
            <path key={i} d={`M${x},120 q5,-${h / 2} 0,-${h} q-3,${h / 2} 0,${h}`} stroke="#10b981" strokeWidth="2" fill="none" />
          );
        })}
      </g>

      <g transform="translate(440,220)">
        <rect x="0" y="0" width="220" height="120" rx="10" fill="#94a3b8" />
        <rect x="15" y="10" width="80" height="60" fill="#e2e8f0" />
        <rect x="110" y="10" width="95" height="60" fill="#e2e8f0" />
        <rect x="15" y="80" width="190" height="25" fill="#64748b" />
        <circle cx="200" cy="92" r="6" fill="#1f2937" />
      </g>

      <g transform="translate(220,300)">
        <rect x="0" y="0" width="120" height="60" rx="12" fill="#047857" />
        <circle cx="24" cy="42" r="6" fill="#1f2937" />
        <circle cx="96" cy="42" r="6" fill="#1f2937" />
        <rect x="20" y="18" width="80" height="14" rx="2" fill="#10b981" />
      </g>
    </svg>
  );
}
