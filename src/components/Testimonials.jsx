export default function Testimonials() {
  const quotes = [
    {
      name: "Erin P.",
      text: "They treat our lawn like their own. Always on time and the yard has never looked better.",
    },
    {
      name: "Mark R.",
      text: "Switched last year and saw a huge difference in just a few weeks. Highly recommend!",
    },
    {
      name: "Jasmine L.",
      text: "Professional, friendly, and the results speak for themselves.",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Neighbors love us</h2>
          <p className="mt-3 text-emerald-100/80">Real feedback from local homeowners.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-emerald-50/90">“{q.text}”</p>
              <div className="mt-4 text-sm text-emerald-200/80">— {q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
