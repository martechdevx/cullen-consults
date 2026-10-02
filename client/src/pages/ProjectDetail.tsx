import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import { ProjectCard } from "@/components/Editorial";
import { ContactCta, PageShell } from "@/components/SiteShell";
import { projects } from "@/data/content";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <PageShell><main className="simple-page"><div className="container simple-page-inner"><p className="eyebrow">Project not found</p><h1>Let’s go back<br /><span>to the archive.</span></h1><Link href="/projects" className="button-link">View projects <ArrowUpRight size={17} /></Link></div></main></PageShell>;
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  return <PageShell><main>
    <section className="case-hero"><div className="container"><Link href="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link><div className="case-hero-copy"><p className="eyebrow">{project.category} / {project.year}</p><h1>{project.title}</h1><p>{project.intro}</p></div><div className="case-hero-image"><img src={project.image} alt={`${project.shortTitle} case study`} fetchPriority="high" decoding="async" /></div></div></section>
    <section className="section case-meta-section"><div className="container case-meta"><div><span>Client</span><strong>{project.client}</strong></div><div><span>Industry</span><strong>{project.industry}</strong></div><div><span>Duration</span><strong>{project.duration}</strong></div><div><span>Discipline</span><strong>{project.category}</strong></div></div></section>
    <section className="section case-content"><div className="container case-content-grid"><aside><p className="eyebrow">The brief</p><div className="case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></aside><div className="case-body"><p className="case-lead">{project.description}</p><div className="case-block"><span className="case-number">01</span><div><h2>The problem</h2><p>{project.problem}</p></div></div><div className="case-block"><span className="case-number">02</span><div><h2>The solution</h2><p>{project.solution}</p></div></div><div className="case-block"><span className="case-number">03</span><div><h2>The challenge</h2><p>{project.challenge}</p></div></div><div className="case-summary"><span>Outcome</span><p>{project.summary}</p><div className="summary-checks"><span><Check size={15} /> Mobile-ready</span><span><Check size={15} /> Conversion-minded</span><span><Check size={15} /> Built for trust</span></div></div></div></div></section>
    <section className="section related-work"><div className="container"><div className="related-heading"><p className="eyebrow">More projects</p><h2>Keep exploring.</h2></div><div className="project-grid">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></div></section>
    <ContactCta eyebrow="Next project" title="Let’s make the next case study yours." />
  </main></PageShell>;
}
