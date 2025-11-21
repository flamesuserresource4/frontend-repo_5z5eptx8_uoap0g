import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 inline-flex items-center justify-center text-slate-900 font-black">LC</div>
            <span className="font-semibold">LawnCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#quote" className="hover:text-white">Quote</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#quote" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Get a Quote</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services">
          <Features />
        </div>
        <Testimonials />
        <CTA />
      </main>

      <footer id="contact" className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} LawnCraft. All rights reserved.</p>
          <p className="text-sm text-white/60">Serving: Westside, North Hills, Greenfield, and nearby communities.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
