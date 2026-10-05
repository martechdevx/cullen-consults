import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle, Mail, Send } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/SiteShell";
import { contact, services } from "@/data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.reportValidity()) return;
    const form = new FormData(formElement);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    setError("");
    setSent(false);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("The contact form is not configured yet. Please email us directly.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: `Website enquiry from ${name}`,
          service: service || "Not specified",
          message,
        }),
      });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Web3Forms rejected the submission.");
      setSent(true);
      formElement.reset();
    } catch {
      setError("We couldn't send your message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };
  return <PageShell><main>
    <section className="page-hero contact-hero"><div className="container page-hero-grid"><p className="eyebrow">Let’s work together / Contact</p><h1>Bring the brief.<br /><em>Leave with a plan.</em></h1><p>Tell us where the store, product, or idea is getting stuck. We’ll come back with a clear next move — not a fog of agency language.</p></div></section>
    <section className="section contact-section"><div className="container contact-grid"><div className="contact-info"><p className="eyebrow">Start here</p><h2>What are you<br /><span>building?</span></h2><p>Use the form for a new Shopify build, a focused UX sprint, growth and optimization work, or a conversation about where to start.</p><div className="contact-points"><div><Mail size={18} /><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span className="contact-point-mark">↗</span><span>Usually replies within 2 business days</span></div></div><div className="contact-social"><span className="eyebrow">Elsewhere</span><a href={contact.x} target="_blank" rel="noreferrer">X <ArrowUpRight size={15} /></a><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} /></a><a href={contact.behance} target="_blank" rel="noreferrer">Behance <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-header"><span>Project enquiry</span><span>01 / 04</span></div><label htmlFor="name">Your name<input id="name" name="name" type="text" placeholder="Atlas Ben" required /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="you@brand.com" required /></label><label htmlFor="service">What do you need?<select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Email marketing & sales funnels</option><option>Something else</option></select></label><label htmlFor="message">A little about the project<textarea id="message" name="message" placeholder="What are you trying to make clearer?" rows={5} required /></label>{error && <p className="form-message form-message--error" role="alert">{error}</p>}{sent && <p className="form-message" role="status" aria-live="polite"><Check size={15} /> Message sent. Thank you for reaching out.</p>}<button className="button-link button-link--lime form-submit" type="submit" disabled={sending} aria-busy={sending}>{sending ? <>Sending <LoaderCircle size={16} /></> : sent ? <>Sent <Check size={16} /></> : <>Send <Send size={16} /></>}</button></form></div></section>
    <section className="section contact-bottom"><div className="container contact-bottom-inner"><span className="section-index">02</span><div><p className="eyebrow">No perfect brief required</p><h2>A useful first conversation<br /><em>is enough.</em></h2><Link href="/projects" className="text-link">See the kind of work we do <ArrowUpRight size={15} /></Link></div></div></section>
  </main></PageShell> ;
}
