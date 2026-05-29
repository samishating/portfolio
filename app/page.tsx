import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import VisualSection from "@/components/VisualSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-red-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <VisualSection />
      <Contact />

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="container-custom text-center">
          <p className="text-sm text-zinc-500">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sam. Built with Next.js, TypeScript, Tailwind, Framer Motion, and Three.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
