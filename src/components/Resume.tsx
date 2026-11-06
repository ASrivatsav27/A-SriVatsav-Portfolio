import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";

export function Resume() {
  return (
    <section className="content-section resume-section" id="resume">
      <div className="section-heading compact-heading"><div><p className="section-kicker">The full story <span>06 / 06</span></p><h2>Resume<span className="heading-period">.</span></h2><p className="section-subtitle">Maintained in LaTeX, just as supplied.</p></div><div className="resume-actions"><a className="button button-dark" href="/resume/resume.pdf" download><ArrowDownToLine size={15}/> Download PDF</a><a className="button button-light" href="/resume/resume.pdf" target="_blank" rel="noreferrer">Open resume <ArrowUpRight size={14}/></a></div></div>
      <div className="resume-preview"><div className="resume-preview-bar"><span><FileText size={15}/> Adapa-SriVatsav-Resume.pdf</span><span>PDF preview · 1 page</span></div><div className="resume-pages" aria-label="Resume preview, one page"><Image src="/resume/resume-preview.png" alt="Adapa SriVatsav resume, one page" width={1556} height={2200} unoptimized/></div></div>
      <p className="resume-source-note">Original LaTeX source is preserved in the project at <span>resume/resume.tex</span>.</p>
    </section>
  );
}
