import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { ProjectCard, SectionIntro } from "@/components/Editorial";
import { ContactCta, PageShell } from "@/components/SiteShell";
import { currentYearRange, projects } from "@/data/content";

export default function Projects() {
  return <PageShell><main>
    <section className="page-hero page-hero--projects"><div className="container page-hero-grid"><p className="eyebrow">Selected work / {currentYearRange()}</p><h1>Make the<br /><em>case.</em></h1><p>Selected storefronts, interfaces, and ecommerce systems made to turn good products into clearer decisions.</p></div></section>
    <section className="section projects-index"><div className="container"><SectionIntro index="01" eyebrow="The archive" title="Work that earns its place in the room."><p>Every project begins with a business problem. The visual system is how we make the answer feel obvious.</p></SectionIntro><div className="project-grid project-grid--index">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0 || index === 3} />)}</div></div></section>
    <section className="section work-note"><div className="container work-note-inner"><span className="section-index">02</span><div><p className="eyebrow">Not seeing your category?</p><h2>That’s probably<br /><em>interesting.</em></h2><p>Fashion, jewelry, apps, and Shopify are in the archive. The point is not the category — it’s the opportunity to make the next step clearer.</p><Link href="/contact" className="text-link">Tell us what you’re building <ArrowUpRight size={15} /></Link></div></div></section>
    <ContactCta />
  </main></PageShell>;
}
