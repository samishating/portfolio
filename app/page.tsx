import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import VisualSection from "@/components/VisualSection";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent pt-24 text-white selection:bg-sky-300 selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <VisualSection />
      <Contact />

      <section id="colophon" className="container-custom py-14">
        <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6 text-left sm:p-10">
          <p className="kicker mb-4 text-sky-300">Colophon | Info</p>
          <p className="max-w-4xl text-[1.05rem] leading-[1.7] text-slate-300">
            This portfolio was built in Next.js, powered by React Three Fiber and Framer Motion, and deployed on Vercel. It is structured for readability, smooth interaction, and direct contact with future collaborators or hiring teams.
          </p>

          <a
            href={profile.email}
            className="mt-8 inline-block text-[clamp(1.4rem,4vw,2.5rem)] font-black leading-none text-white underline decoration-sky-300 decoration-[2px] underline-offset-[8px] transition-colors hover:text-sky-200"
          >
            {profile.emailLabel}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <a href="#contact" className="transition hover:text-white">Discord: {profile.discord}</a>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <a href={profile.phone} className="transition hover:text-white">Phone: {profile.phoneLabel}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/70 py-8">
        <div className="container-custom flex flex-col justify-between gap-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:flex-row sm:items-center sm:text-left">
          <p>2026 Portfolio | Made in Morocco | (c) Sam</p>
          <p className="text-[9px]">Next.js | TypeScript | Three.js | Tailwind v4</p>
        </div>
      </footer>
    </main>
  );
}
