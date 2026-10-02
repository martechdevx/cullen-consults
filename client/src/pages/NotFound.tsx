import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/SiteShell";

export default function NotFound() {
  return <PageShell><main className="simple-page"><div className="container simple-page-inner"><p className="eyebrow">404 / off the map</p><h1>That page took<br /><span>a different route.</span></h1><p>It may have moved, or it may never have existed. Let’s get you back to the work.</p><Link href="/" className="button-link">Back to home <ArrowUpRight size={17} /></Link></div></main></PageShell>;
}
