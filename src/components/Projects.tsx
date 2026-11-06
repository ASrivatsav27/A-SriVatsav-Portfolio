import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/constants";
import { ProjectVisual } from "@/components/ProjectVisual";

export function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-heading compact-heading"><div><p className="section-kicker">A few things I’ve shipped <span>04 / 06</span></p><h2>Selected projects<span className="heading-period">.</span></h2></div><span className="projects-count">04 <span>projects</span></span></div>
      <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.id}>
        <div className={`project-art art-${project.visual}`}><ProjectVisual type={project.visual}/><span className="art-index">PROJECT / {project.number} · CONCEPT VISUAL</span></div>
        <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={14}/> GitHub <ArrowUpRight size={13}/></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer"><span className="live-dot"/> Live <ArrowUpRight size={13}/></a>}</div>
        <div className="project-info"><div className="project-heading"><span className="project-number">{project.number}</span><div><h3>{project.name}</h3><p>{project.title}</p></div></div><p className="project-description">{project.description}</p>
          <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <div className="tag-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          {project.award && <div className="award-badge"><span>✳</span>{project.award}</div>}
        </div>
      </article>)}</div>
    </section>
  );
}
