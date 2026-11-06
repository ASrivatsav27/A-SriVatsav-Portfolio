"use client";

import { useState } from "react";
import { ArrowUpRight, Github as GithubIcon } from "lucide-react";
import { profile } from "@/lib/constants";

export function GitHub() {
  const [failed, setFailed] = useState(false);
  return (
    <section className="content-section github-section" id="github">
      <div className="section-heading compact-heading">
        <div>
          <p className="section-kicker">Open source and activity <span>05 / 06</span></p>
          <h2>GitHub contributions<span className="heading-period">.</span></h2>
          <p className="section-subtitle">Recent work, in little green squares.</p>
        </div>
        <a className="github-profile-link" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={17}/> View profile <ArrowUpRight size={14}/></a>
      </div>
      <div className="contribution-card">
        <div className="contribution-head">
          <div><span className="eyebrow">Contribution activity</span><p>Activity from my public GitHub profile</p></div>
          <span className="contribution-period">Past year <ArrowUpRight size={13}/></span>
        </div>
        <div className="heatmap-wrap">
          {failed ? (
            <div className="heatmap-error">The contribution graph is temporarily unavailable. <a href={profile.github} target="_blank" rel="noreferrer">View activity on GitHub <ArrowUpRight size={13}/></a></div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- GitHub chart is supplied as a third-party SVG image and is not served through Next's optimizer.
            <img src="https://ghchart.rshah.org/2f7a55/ASrivatsav27" alt="GitHub contribution graph for ASrivatsav27" loading="lazy" onError={() => setFailed(true)}/>
          )}
        </div>
        <div className="contribution-foot">
          <span><i/> Less <b className="level-1"/><b className="level-2"/><b className="level-3"/><b className="level-4"/> More</span>
          <a href={profile.github} target="_blank" rel="noreferrer">@ASrivatsav27 <ArrowUpRight size={13}/></a>
        </div>
      </div>
      <p className="data-note">Contribution visualization provided by ghchart. No contribution totals are shown here.</p>
    </section>
  );
}
