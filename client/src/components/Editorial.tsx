import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/content";

export function SectionIntro({ index, eyebrow, title, children, dark = false }: { index?: string; eyebrow: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return <div className={`section-intro ${dark ? "section-intro--dark" : ""}`}><div className="section-intro-rail"><span className="section-index">{index ?? "—"}</span><span className="eyebrow">{eyebrow}</span></div><div><h2>{title}</h2>{children && <div className="section-intro-copy">{children}</div>}</div></div>;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/projects/${project.slug}`} className={`project-card ${featured ? "project-card--featured" : ""}`}>
    <div className="project-card-image"><img src={project.image} alt={`${project.shortTitle} project preview`} loading="lazy" /><span className="project-card-arrow"><ArrowUpRight size={19} /></span></div>
    <div className="project-card-meta"><span>{project.category}</span><span>{project.year}</span></div>
    <h3>{project.title}</h3><p>{project.intro}</p><span className="text-link">View case study <ArrowUpRight size={15} /></span>
  </Link>;
}

export function ArticleCard({ article, featured = false }: { article: { slug: string; title: string; category: string; date: string; excerpt: string; image: string }; featured?: boolean }) {
  return <Link href={`/blogs/${article.slug}`} className={`article-card ${featured ? "article-card--featured" : ""}`}><div className="article-card-image"><img src={article.image} alt="" loading="lazy" /><span className="article-card-tag">{article.category}</span></div><div className="article-card-meta"><span>{article.date}</span><span>5 min read</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="text-link">Read article <ArrowUpRight size={15} /></span></Link>;
}

export function StatsStrip() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ clients: 1, growth: 1, projects: 1 });

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const targets = { clients: 115, growth: 200, projects: 250 };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setCounts(targets);
      return;
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const duration = 1800;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCounts({
          clients: Math.max(1, Math.floor(targets.clients * easedProgress)),
          growth: Math.max(1, Math.floor(targets.growth * easedProgress)),
          projects: Math.max(1, Math.floor(targets.projects * easedProgress)),
        });
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="stats-strip" ref={statsRef}><div><strong>{counts.clients}<span>+</span></strong><small>happy clients</small></div><div><strong>{counts.growth}<span>%</span></strong><small>revenue growth worked toward</small></div><div><strong>{counts.projects}<span>+</span></strong><small>projects delivered worldwide</small></div></div>;
}
