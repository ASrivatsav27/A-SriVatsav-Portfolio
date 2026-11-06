import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading"><div><p className="section-kicker">A little about me <span>01 / 06</span></p><h2>From first sketch<br />to <em>first deploy.</em></h2></div><span className="section-symbol">✳</span></div>
      <div className="about-layout">
        <p className="about-lead">I’m a Software Developer interested in building production-grade software, scalable backend systems and AI-integrated applications.</p>
        <div className="about-body"><p>I enjoy working across the entire development lifecycle — from designing system architecture and developing APIs to building intuitive interfaces, integrating AI capabilities and deploying applications.</p><p>My experience includes production application development, real-time communication systems, AI-powered workflows and developer tooling.</p><a className="text-link" href="#experience">See my experience <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="about-meta"><span>Currently</span><strong>B.E. Computer Science & Engineering (AI & ML)</strong><span>Methodist College of Engineering & Technology</span><span>2023 — 2027</span></div>
    </section>
  );
}
