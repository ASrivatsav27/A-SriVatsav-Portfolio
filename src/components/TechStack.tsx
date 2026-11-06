"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, Layers3, Server, Database, Sparkles, Wrench } from "lucide-react";
import { profile, techGroups } from "@/lib/constants";

const categories = ["All", ...techGroups.map((group) => group.category)];
const marks: Record<string, string> = { JavaScript: "JS", TypeScript: "TS", Python: "Py", PostgreSQL: "PG", "Next.js": "N", React: "R", Docker: "D", Gemini: "G", "Node.js": "N", Redis: "Re", Vercel: "V" };
const icons = [Code2, Layers3, Server, Database, Sparkles, Wrench];

export function TechStack() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => techGroups.filter((group) => active === "All" || group.category === active), [active]);
  return (
    <section className="content-section stack-section" id="stack">
      <div className="section-heading compact-heading"><div><p className="section-kicker">The tools behind the work <span>02 / 06</span></p><h2>Tech stack<span className="heading-period">.</span></h2><p className="section-subtitle">Tools I reach for, hover to explore.</p></div><a className="quiet-link" href={profile.github} target="_blank" rel="noreferrer">@ASrivatsav27 <ArrowUpRight size={14} /></a></div>
      <div className="filter-row" role="group" aria-label="Filter technology categories">{categories.map((category) => <button type="button" key={category} className={active === category ? "filter-chip active" : "filter-chip"} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div>
      <div className="tech-grid">{visible.map((group) => { const Icon = icons[techGroups.indexOf(group)]; return <div className="tech-group" key={group.category}><div className="tech-group-title"><Icon size={15} strokeWidth={1.7} /><h3>{group.category}</h3><span>{String(group.items.length).padStart(2, "0")}</span></div><div className="tech-items">{group.items.map((item) => <div className="tech-item" key={item} title={item}><span className="tech-mark">{marks[item] ?? item.slice(0, 1)}</span><span>{item}</span></div>)}</div></div>; })}</div>
    </section>
  );
}
