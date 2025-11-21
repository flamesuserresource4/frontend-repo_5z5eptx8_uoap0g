import { Sprout, Ruler, Calendar, ShieldCheck } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Sprout,
      title: "Weekly mowing",
      desc: "Sharp blades, clean edges, and tidy clippings—every visit.",
    },
    {
      icon: Ruler,
      title: "Fertilization & weed control",
      desc: "A balanced plan tailored to your soil and grass type.",
    },
    {
      icon: Calendar,
      title: "Seasonal cleanups",
      desc: "Spring prep, fall leaves, aeration, and overseeding.",
    },
    {
      icon: ShieldCheck,
      title: "No-risk guarantee",
      desc: "If you’re not thrilled, we’ll make it right—every time.",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services that keep your yard thriving</h2>
          <p className="mt-3 text-emerald-100/80">Simple plans, dependable results.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-emerald-400/30 hover:bg-emerald-400/5 transition">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
