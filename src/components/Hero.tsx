import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { profile } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-section section-frame" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="eyebrow-divider">/</span> Hyderabad, India</p>
        <h1>Software<br /><span>Developer.</span></h1>
        <p className="hero-tagline">Building production-grade applications<br className="desktop-break" /> and AI-integrated workflows.</p>
        <a className="text-link hero-scroll" href="#about">Explore my work <ArrowDown size={15} /></a>
      </div>
      <div className="identity-card">
        <div className="portrait-wrap"><Image src="/images/profile.jpeg" alt="Adapa SriVatsav by the sea" width={1438} height={1440} priority /></div>
        <div className="identity-copy">
          <p className="eyebrow">Portfolio <span className="eyebrow-divider">/</span> 2026</p>
          <h2>{profile.name}</h2>
          <p className="identity-role">Software Developer <span>·</span> Hyderabad, India</p>
          <p className="identity-statement">I enjoy taking ideas from architecture to deployment, working across the stack and solving real engineering problems.</p>
          <div className="social-links" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={13} /></a>
            <a href="#resume"><FileText size={16} /> Resume <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="identity-place"><MapPin size={13} /> Based in Hyderabad</div>
      </div>
      <div className="hero-index"><span>01</span><span className="index-line"/><span>06</span></div>
    </section>
  );
}
