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
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-red-500 selection:text-white pt-24">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <VisualSection />
      <Contact />

      {/* Editorial Colophon Card */}
      <section id="colophon" className="container-custom py-14">
        <div className="border border-white/20 bg-zinc-950/70 p-6 sm:p-10 text-left">
          <p className="kicker mb-4 text-red-500">Colophon · Info</p>
          <p className="font-serif italic text-[1.05rem] leading-[1.7] text-zinc-300 max-w-4xl">
            This portfolio was built in Next.js, powered by React Three Fiber and Framer Motion, and deployed on Vercel. Typeset in Inter, Fraunces, and JetBrains Mono. Written by hand, compiled with strict linting, and optimized for 24/7 support reliability. Spotted a typo or want to coordinate a project? Write to me directly.
          </p>
          
          <a
            href={profile.email}
            className="mt-8 inline-block text-[clamp(1.4rem,4vw,2.5rem)] font-serif italic font-black leading-none text-white underline decoration-[2px] underline-offset-[8px] hover:text-red-400 transition-colors"
          >
            {profile.emailLabel}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <a href="#contact" className="hover:text-white transition">Discord: {profile.discord}</a>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <a href={profile.phone} className="hover:text-white transition">Phone: {profile.phoneLabel}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container-custom text-center sm:text-left flex flex-col justify-between gap-4 sm:flex-row sm:items-center font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
          <p>ISSUE 2026 · PORTFOLIO · MADE IN MOROCCO · © SAM</p>
          <p className="text-[9px]">NEXT.JS · TYPESCRIPT · THREE.JS · TAILWIND v4</p>
        </div>
      </footer>
    </main>
  );
}
