import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/constants";

export function Contact() {
  return <>
    <section className="contact-section" id="contact"><div className="contact-top"><p className="section-kicker">Have a project in mind?</p><h2>Let’s make<br/><em>something useful.</em></h2><a className="contact-cta" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16}/></a></div><div className="contact-info"><a href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}<ArrowUpRight size={13}/></a><a href={`tel:${profile.phone.replaceAll("-", "")}`}><Phone size={15}/>{profile.phone}<ArrowUpRight size={13}/></a><span><MapPin size={15}/>{profile.location}</span></div><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div></section>
    <footer className="site-footer"><a className="brand-mark" href="#home">AS<span>.</span></a><span>Built with care in Hyderabad, India.</span><span>© 2026 Adapa SriVatsav</span><a href="#home" className="back-top">Back to top ↑</a></footer>
  </>;
}
