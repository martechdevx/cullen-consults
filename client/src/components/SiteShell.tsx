import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/data/content";
import { applyPageSeo } from "@/lib/seo";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`wordmark ${compact ? "wordmark--compact" : ""}`} aria-label="Cullen Consults home" onClick={scrollToTop}>
      <img className="wordmark-logo" src="/ccs.png" alt="" />
    </Link>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    if (open) setHidden(false);

    let previousY = window.scrollY;
    let direction = 0;
    let directionDistance = 0;
    const handleScroll = () => {
      const currentY = Math.max(window.scrollY, 0);
      const delta = currentY - previousY;
      previousY = currentY;

      if (currentY <= 80) {
        direction = 0;
        directionDistance = 0;
        setHidden(false);
        return;
      }
      if (delta === 0) return;

      const nextDirection = Math.sign(delta);
      directionDistance = nextDirection === direction ? directionDistance + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      if (directionDistance >= 6) {
        setHidden(direction > 0 && !open);
        directionDistance = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className={`site-header${hidden ? " is-hidden" : ""}`}>
      <div className="container header-inner">
        <Wordmark compact />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""} onClick={item.href === "/" ? scrollToTop : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-cta"><span>Start a project</span><ArrowUpRight size={16} /></Link>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <div className="mobile-menu"><div className="container mobile-menu-inner">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => { if (item.href === "/") scrollToTop(); setOpen(false); }}>{item.label}</Link>)}<Link href="/contact" className="mobile-menu-cta" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={17} /></Link></div></div>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div><p className="eyebrow">Have a good one in mind?</p><h2>Make the store earn<br />its attention.</h2><Link className="footer-cta" href="/contact">Start a focused conversation <ArrowUpRight size={18} /></Link></div>
        <div className="footer-side"><p className="footer-label">Direct line</p><a href={`mailto:${contact.email}`}>{contact.email}</a><p className="footer-label footer-label--social">Social</p><div className="social-links"><a href={contact.x} target="_blank" rel="noreferrer">X</a><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={contact.behance} target="_blank" rel="noreferrer">Behance</a></div></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Cullen Consults</span><span>Strategy · Design · Growth</span><a href="https://x.com/ecomcullen" target="_blank" rel="noreferrer">Created by Benedict Cullen ↗</a></div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    applyPageSeo(location, import.meta.env.VITE_SITE_URL, window.location.origin);
  }, [location]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("section.section, section.page-hero, section.case-hero, section.article-hero"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location]);
  return <div className="site-shell"><SiteHeader />{children}<SiteFooter /></div>;
}

export function ContactCta({ eyebrow = "Next move", title = "Ready to build something that performs?" }: { eyebrow?: string; title?: string }) {
  return <section className="contact-cta section-dark"><div className="container contact-cta-inner"><div><p className="eyebrow eyebrow-light">{eyebrow}</p><h2>{title}</h2></div><Link className="circle-arrow" href="/contact" aria-label="Go to contact page"><ArrowUpRight size={29} /></Link></div></section>;
}
