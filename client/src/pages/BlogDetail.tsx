import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "wouter";
import { ContactCta, PageShell } from "@/components/SiteShell";
import { articles } from "@/data/content";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <PageShell><main className="simple-page"><div className="container simple-page-inner"><p className="eyebrow">Article not found</p><h1>Back to the<br /><span>journal.</span></h1><Link href="/blogs" className="button-link">Browse articles <ArrowUpRight size={17} /></Link></div></main></PageShell>;
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  return <PageShell><main>
    <section className="article-hero"><div className="container"><Link href="/blogs" className="back-link"><ArrowLeft size={15} /> All journal entries</Link><div className="article-hero-grid"><div><p className="eyebrow">{article.category} / {article.date}</p><h1>{article.title}</h1><p>{article.excerpt}</p></div><div className="article-hero-image"><img src={article.image} alt={article.title} fetchPriority="high" decoding="async" /></div></div></div></section>
    <section className="section article-body-section"><div className="container article-body-layout"><aside><span className="eyebrow">On this page</span><div className="article-toc">{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, "0")} {section.heading}</a>)}</div></aside><article className="article-body"><p className="article-lead">{article.excerpt}</p>{article.sections.map((section, index) => <section className="article-section" id={`section-${index + 1}`} key={section.heading}><span className="case-number">{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="article-end"><span>End note</span><p>Good ideas become useful when they change the next decision.</p></div></article></div></section>
    <section className="section related-articles"><div className="container"><div className="related-heading"><p className="eyebrow">More to discover</p><h2>Keep reading.</h2></div><div className="related-links">{related.map((item) => <Link href={`/blogs/${item.slug}`} key={item.slug}><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={20} /></Link>)}</div></div></section>
    <ContactCta eyebrow="Bring the thinking into the work" title="Have a store, product, or idea to make clearer?" />
  </main></PageShell>;
}
