import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { ArticleCard, SectionIntro } from "@/components/Editorial";
import { ContactCta, PageShell } from "@/components/SiteShell";
import { articles } from "@/data/content";

export default function Blogs() {
  const [featured, ...rest] = articles;
  return <PageShell><main>
    <section className="page-hero page-hero--journal"><div className="container page-hero-grid"><p className="eyebrow">The journal / Notes from the work</p><h1>Design ideas<br /><em>with a point.</em></h1><p>From design trends to creative processes, these articles offer useful ways to elevate the craft, solve challenges, and spark better decisions.</p></div></section>
    <section className="section journal-index"><div className="container"><SectionIntro index="01" eyebrow="Most viewed" title="For the space between clicks."><p>A growing archive of notes on design, ecommerce, and the systems that make digital experiences feel simple.</p></SectionIntro><ArticleCard article={featured} featured /><div className="article-grid article-grid--archive">{rest.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>
    <section className="section newsletter-strip"><div className="container newsletter-inner"><div><p className="eyebrow">Keep in touch</p><h2>Useful thinking.<br /><em>No inbox theatre.</em></h2></div><Link href="/contact" className="button-link">Ask a better question <ArrowUpRight size={17} /></Link></div></section>
    <ContactCta eyebrow="Have a question?" title="Bring the brief, not the buzzwords." />
  </main></PageShell>;
}
