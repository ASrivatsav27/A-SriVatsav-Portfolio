import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "@/lib/constants";

export function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="section-heading compact-heading"><div><p className="section-kicker">Where I’ve worked <span>03 / 06</span></p><h2>Experience<span className="heading-period">.</span></h2></div><span className="section-symbol briefcase-symbol"><BriefcaseBusiness size={21} strokeWidth={1.4} /></span></div>
      <article className="experience-card">
        <div className="experience-top"><div><p className="eyebrow">Internship <span className="eyebrow-divider">/</span> MaterialFlow</p><h3>{experience.role}</h3><p className="company-line">{experience.company}</p></div><span className="date-stamp">{experience.period}</span></div>
        <div className="tag-row">{experience.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
        <ul className="experience-list">{experience.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
        <a className="text-link" href="#projects">Selected work <ArrowUpRight size={15} /></a>
      </article>
    </section>
  );
}
