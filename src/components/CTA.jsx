import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="quote" className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-600/30 to-green-600/30 p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Get your free lawn assessment</h3>
          <p className="mt-2 text-emerald-100/80">Tell us a little about your yard and we’ll follow up within one business day.</p>

          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Name" />
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Email" type="email" />
            <input className="sm:col-span-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Address" />
            <textarea className="sm:col-span-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="What services are you interested in?" rows="4" />

            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-700 font-semibold px-6 py-3 hover:bg-emerald-50 transition">
              <Mail className="w-5 h-5" /> Request quote
            </button>
          </form>

          <p className="mt-3 text-xs text-emerald-100/70">By submitting, you agree to be contacted about your request.</p>
        </div>
      </div>
    </section>
  );
}
