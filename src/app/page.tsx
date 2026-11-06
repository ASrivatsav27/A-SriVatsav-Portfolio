import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { GitHub } from "@/components/GitHub";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Hero />
        <div className="section-divider" />
        <Reveal><About /></Reveal>
        <div className="section-divider hatch-divider" />
        <Reveal><TechStack /></Reveal>
        <div className="section-divider hatch-divider" />
        <Reveal><Experience /></Reveal>
        <div className="section-divider hatch-divider" />
        <Reveal><Projects /></Reveal>
        <div className="section-divider hatch-divider" />
        <Reveal><GitHub /></Reveal>
        <div className="section-divider hatch-divider" />
        <Reveal><Resume /></Reveal>
      </main>
      <Contact />
    </>
  );
}
