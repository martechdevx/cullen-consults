import { articles, contact, projects } from "../data/content";

const siteName = "Cullen Consults";
const fallbackImage = "/ccs.png";

export type PageSeo = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: "website" | "article";
  noindex?: boolean;
};

function normalizePath(pathname: string) {
  const path = pathname.split(/[?#]/, 1)[0];
  const segments = path.split("/").filter(Boolean);
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function normalizeSiteOrigin(siteUrl?: string) {
  if (!siteUrl) return undefined;
  try {
    const url = new URL(siteUrl);
    return url.protocol === "https:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

export function isIndexableSite(siteUrl?: string) {
  const origin = normalizeSiteOrigin(siteUrl);
  if (!origin) return false;
  const hostname = new URL(origin).hostname;
  return hostname !== "localhost" && hostname !== "127.0.0.1";
}

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizePath(pathname);
  const pageSeo: Record<string, PageSeo> = {
    "/": {
      title: "Cullen Consults — Ecommerce Growth Agency",
      description: "We turn ecommerce ambition into clearer strategy, sharper design, and digital storefronts built to move people from curious to committed.",
      image: fallbackImage,
      imageAlt: "Cullen Consults logo",
      type: "website",
    },
    "/about": {
      title: "About Cullen Consults — Ecommerce Growth Agency",
      description: "We are an ecommerce growth agency founded by Benedict Cullen, dedicated to building online stores that look elite and drive sustainable growth.",
      image: fallbackImage,
      imageAlt: "Cullen Consults logo",
      type: "website",
    },
    "/projects": {
      title: "Ecommerce Projects — Cullen Consults",
      description: "Selected storefronts, interfaces, and ecommerce systems made to turn good products into clearer decisions.",
      image: fallbackImage,
      imageAlt: "Cullen Consults logo",
      type: "website",
    },
    "/blogs": {
      title: "Design and Ecommerce Journal — Cullen Consults",
      description: "Notes on design, ecommerce, and the systems that make digital experiences feel simple.",
      image: fallbackImage,
      imageAlt: "Cullen Consults logo",
      type: "website",
    },
    "/contact": {
      title: "Contact Cullen Consults — Start a Project",
      description: "Tell Cullen Consults where your store, product, or idea is getting stuck and start with a clear next move.",
      image: fallbackImage,
      imageAlt: "Cullen Consults logo",
      type: "website",
    },
  };

  if (pageSeo[path]) return pageSeo[path];

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  const project = projectMatch && projects.find((item) => item.slug === projectMatch[1]);
  if (project) {
    return {
      title: `${project.shortTitle} Project Case Study — Cullen Consults`,
      description: project.intro,
      image: project.image,
      imageAlt: `${project.shortTitle} project case study`,
      type: "website",
    };
  }

  const articleMatch = path.match(/^\/blogs\/([^/]+)$/);
  const article = articleMatch && articles.find((item) => item.slug === articleMatch[1]);
  if (article) {
    return {
      title: `${article.title} — Cullen Consults`,
      description: article.excerpt,
      image: article.image,
      imageAlt: article.title,
      type: "article",
    };
  }

  return {
    title: "Page Not Found — Cullen Consults",
    description: "This page may have moved, or it may never have existed.",
    image: fallbackImage,
    imageAlt: "Cullen Consults logo",
    type: "website",
    noindex: true,
  };
}

export function getSeoPaths() {
  return [
    "/",
    "/about",
    "/projects",
    ...projects.map((project) => `/projects/${project.slug}`),
    "/blogs",
    ...articles.map((article) => `/blogs/${article.slug}`),
    "/contact",
  ];
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getOrganizationSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: origin,
    logo: new URL(fallbackImage, origin).href,
    email: contact.email,
    sameAs: [contact.x, contact.instagram, contact.behance],
  };
}

export function renderSeoHead(pathname: string, configuredSiteUrl?: string) {
  const path = normalizePath(pathname);
  const seo = getPageSeo(path);
  const origin = normalizeSiteOrigin(configuredSiteUrl);
  const indexable = !seo.noindex && isIndexableSite(configuredSiteUrl);
  const canonical = origin && indexable ? new URL(path, origin).href : undefined;
  const imageUrl = origin ? new URL(seo.image, origin).href : undefined;
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    ...(!indexable ? ['<meta name="robots" content="noindex,follow" />'] : []),
    ...(canonical ? [`<link rel="canonical" href="${escapeHtml(canonical)}" />`] : []),
    '<meta property="og:site_name" content="Cullen Consults" />',
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    ...(canonical ? [`<meta property="og:url" content="${escapeHtml(canonical)}" />`] : []),
    ...(imageUrl ? [`<meta property="og:image" content="${escapeHtml(imageUrl)}" />`, `<meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`] : []),
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    ...(imageUrl ? [`<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`, `<meta name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />`] : []),
  ];

  if (path === "/" && origin && indexable) {
    const schema = JSON.stringify(getOrganizationSchema(origin)).replace(/</g, "\\u003c");
    tags.push(`<script id="organization-schema" type="application/ld+json">${schema}</script>`);
  }

  return tags.join("\n    ");
}

export function applyPageSeo(pathname: string, configuredSiteUrl: string | undefined, currentOrigin: string) {
  const path = normalizePath(pathname);
  const seo = getPageSeo(path);
  const origin = normalizeSiteOrigin(configuredSiteUrl) ?? normalizeSiteOrigin(currentOrigin);
  const indexable = !seo.noindex && isIndexableSite(origin);
  const canonical = origin && indexable ? new URL(path, origin).href : undefined;
  const imageUrl = origin ? new URL(seo.image, origin).href : undefined;

  document.title = seo.title;

  const setMeta = (attribute: "name" | "property", key: string, content?: string) => {
    const selector = `meta[${attribute}="${key}"]`;
    let element = document.head.querySelector<HTMLMetaElement>(selector);
    if (!content) {
      element?.remove();
      return;
    }
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setMeta("name", "description", seo.description);
  setMeta("name", "robots", indexable ? undefined : "noindex,follow");
  setMeta("property", "og:site_name", siteName);
  setMeta("property", "og:type", seo.type);
  setMeta("property", "og:title", seo.title);
  setMeta("property", "og:description", seo.description);
  setMeta("property", "og:url", canonical);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:alt", imageUrl ? seo.imageAlt : undefined);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", seo.title);
  setMeta("name", "twitter:description", seo.description);
  setMeta("name", "twitter:image", imageUrl);
  setMeta("name", "twitter:image:alt", imageUrl ? seo.imageAlt : undefined);

  let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  } else {
    canonicalLink?.remove();
  }

  document.getElementById("organization-schema")?.remove();
  if (path === "/" && origin && indexable) {
    const script = document.createElement("script");
    script.id = "organization-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getOrganizationSchema(origin));
    document.head.appendChild(script);
  }
}

export function getRobotsTxt(siteUrl?: string) {
  if (!isIndexableSite(siteUrl)) return "User-agent: *\nAllow: /\n";
  const origin = normalizeSiteOrigin(siteUrl)!;
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}

export function getSitemapXml(siteUrl?: string) {
  const origin = normalizeSiteOrigin(siteUrl);
  const paths = isIndexableSite(siteUrl) ? getSeoPaths() : [];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls ? `\n${urls}\n` : ""}</urlset>\n`;
}