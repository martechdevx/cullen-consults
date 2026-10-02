export type Service = {
  number: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  industry: string;
  client: string;
  duration: string;
  image: string;
  intro: string;
  description: string;
  problem: string;
  solution: string;
  challenge: string;
  summary: string;
  tags: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const contact = {
  email: "cullenconsults@gmail.com",
  x: "https://x.com/ecomcullen",
  instagram: "https://www.instagram.com/ecom.cullen/",
  behance: "https://www.behance.net/benedict_cullen",
};

export function currentYearRange() {
  const currentYear = new Date().getFullYear();
  return `${currentYear}–${String(currentYear + 1).slice(-2)}`;
}

export const founder = {
  name: "Benedict Cullen",
  role: "Founder & agency lead",
  bio: "Cullen is an e-commerce mentor and founder who helps e-commerce brands scale through strategic architecture, high-performing ads, and direct mentorship.",
  image: "https://framerusercontent.com/images/aaITd1smvDnkap6zGhwsAuHNYtg.png?width=225&height=225",
  portrait: "/source/cport.jpg",
};

export const services: Service[] = [
  {
    number: "01",
    title: "UI/UX design",
    summary: "Clear, considered interfaces that make the next action feel obvious.",
    bullets: ["Wireframing and prototyping", "User interface design for web and mobile apps", "Usability testing and user feedback analysis", "Interaction design and micro-animations"],
  },
  {
    number: "02",
    title: "Ecommerce growth & optimization",
    summary: "Find and remove the friction between attention, trust, and purchase.",
    bullets: ["Conversion rate optimization strategies", "SEO setup: meta tags, product optimization, and alt text", "Speed and performance enhancements", "A/B testing and customer journey improvements"],
  },
  {
    number: "03",
    title: "Shopify store design & development",
    summary: "A storefront built to feel distinctive, fast, and ready to scale.",
    bullets: ["Custom Shopify setup tailored to your brand", "Landing page design and optimization", "Payment gateway integration and secure checkout", "Website maintenance and updates"],
  },
  {
    number: "04",
    title: "Social media marketing & ads",
    summary: "Creative and targeting that turns paid attention into a clearer growth loop.",
    bullets: ["Meta Ads campaign setup", "Audience research and targeting strategies", "Creative ad design and copywriting", "Performance tracking and ROI optimization"],
  },
];

export const projects: Project[] = [
  {
    slug: "summer-vibes-festival-campaign",
    title: "JUBILEE — Elegant Shopify Jewelry Fashion Store Design",
    shortTitle: "Jubilee",
    category: "Web design",
    year: "2025",
    industry: "Fashion",
    client: "Jubilee",
    duration: "1 week",
    image: "https://framerusercontent.com/images/ceZeGdmliNIgMdahhpGqnQzD2I.png?width=1080&height=1350",
    intro: "A premium Shopify presence for a jewelry brand that needed its digital experience to feel as considered as the product.",
    description: "We partnered with JUBILEE jewelry brand aiming to build a premium online presence that reflects elegance and trust.",
    problem: "In a crowded ecommerce space, jewelry brands often struggle to stand out online. Many sites fail to capture the elegance of luxury products or build the trust needed for high-value purchases.",
    solution: "We designed a modern, mobile-optimized Shopify store with a focus on luxury branding, smooth navigation, and product storytelling. Lifestyle visuals were integrated into product pages, secure checkout was streamlined, and upsell features were added to support average order value.",
    challenge: "Balancing a luxury brand identity with a conversion-focused store design. Too much emphasis on visuals risked slowing the shopping experience, while too much functionality risked diluting the premium feel.",
    summary: "The JUBILEE Jewelry Brand Store delivered a polished, elegant online presence that elevated the brand while improving engagement and trust.",
    tags: ["Shopify", "Luxury ecommerce", "Conversion design"],
  },
  {
    slug: "coral-spiral-abstract",
    title: "Glamour — Elegant Shopify Fashion Store",
    shortTitle: "Glamour",
    category: "Web design",
    year: "2025",
    industry: "Fashion",
    client: "Glamour Store",
    duration: "7 days",
    image: "https://framerusercontent.com/images/Y2WIk6weHFE78pzFWM5J9I3Deu8.png?width=1080&height=1350",
    intro: "A sleek, mobile-first Shopify store for a shapewear and lingerie brand built around comfort, confidence, and sophistication.",
    description: "We designed a mobile-optimized store, crafted high-converting product pages, integrated secure payments, and added upsell features.",
    problem: "Fashion and lingerie brands often struggle online with cluttered layouts, inconsistent branding, and confusing navigation that fail to reflect their elegance. Glamour needed one store to make several product lines feel coherent.",
    solution: "We designed a sleek, mobile-optimized Shopify fashion store that highlighted shapewear, bras, and backless designs with elegant visuals and clear navigation. Product pages were tuned for conversion, checkout was streamlined, and upsell features were added to increase order value.",
    challenge: "Maintaining a luxury, fashion-forward identity while managing multiple product categories within one store. The design needed to be refined without becoming overwhelming.",
    summary: "The Glamour Shopify Store delivered a stylish, user-friendly shopping experience that built trust and positioned the brand as a modern, customer-focused fashion label.",
    tags: ["Shopify", "Fashion ecommerce", "Product storytelling"],
  },
  {
    slug: "shopease-redesign-sprint",
    title: "ShopEase Redesign Sprint",
    shortTitle: "ShopEase",
    category: "UI / UX design",
    year: "2025",
    industry: "E-commerce",
    client: "ShopEase",
    duration: "1 week",
    image: "https://framerusercontent.com/images/nTU7b0ZAdWdlqCI4mQ4tGTPpDs.jpeg?width=1200&height=673",
    intro: "A focused UX sprint that simplified navigation, tightened checkout, and made a busy e-commerce app easier to trust.",
    description: "Redesigned the ShopEase e-commerce app to enhance user experience, simplify navigation, and optimize the checkout process.",
    problem: "The original ShopEase app faced usability issues that hindered satisfaction and conversion. Users found navigation confusing, checkout cumbersome, and the interface dated compared with modern ecommerce standards.",
    solution: "The redesign sprint introduced a clear menu structure, prominent search, a shorter checkout with progress indicators, and popular payment options. Ample white space, clean typography, and a cohesive color system made the app feel fresh and trustworthy.",
    challenge: "Balancing a modern, minimalist look with the need to display a large amount of product information and features while keeping the experience easy for new and returning customers.",
    summary: "The ShopEase Redesign Sprint transformed the app into a more user-friendly and visually engaging platform, reducing friction throughout the shopping journey.",
    tags: ["UX audit", "Mobile commerce", "Checkout"],
  },
  {
    slug: "flexion",
    title: "Flexion — High-Converting Shopify Fashion Store Design",
    shortTitle: "Flexion",
    category: "Web design",
    year: "2025",
    industry: "Fashion",
    client: "FLEXION",
    duration: "8 days",
    image: "https://framerusercontent.com/images/HpNROIvJ9pMmFJjd51EfC6e7c0.png?width=725&height=444",
    intro: "A clean, conversion-focused Shopify build that gives a premium fashion label a faster, more intuitive path to purchase.",
    description: "We implemented a responsive layout, optimized product pages, integrated secure payment gateways, and set up essential apps for reviews, upsells, and abandoned-cart recovery.",
    problem: "Flexion needed a sleek online presence that could stand out in a crowded fashion market while building trust and delivering a smooth shopping experience across devices.",
    solution: "We designed and developed a clean, stylish, conversion-focused Shopify store. Product pages were optimized with lifestyle visuals, payment gateways were integrated, and essential apps supported reviews, upsells, and abandoned-cart recovery.",
    challenge: "Balancing luxury branding with functionality. Fashion audiences expect elegance, but they also demand fast performance and intuitive navigation.",
    summary: "The Flexion Shopify store combined style with strategy, creating a polished, mobile-optimized platform designed to improve engagement and sales performance.",
    tags: ["Shopify", "Fashion", "Growth systems"],
  },
];

export const articles: Article[] = [
  {
    slug: "how-to-streamline-your-design-workflow",
    title: "How to Streamline Your Design Workflow",
    category: "Tutorials",
    date: "Apr 27, 2025",
    excerpt: "Practical strategies to improve your design process, save time, and deliver quality work more efficiently.",
    image: "https://framerusercontent.com/images/xmKml0E7v2iBI4zbbj0yVccaQwg.jpeg?width=1200&height=673",
    sections: [
      { heading: "Set clear goals and define project scope", paragraphs: ["Establish clear objectives at the start of every project to guide the workflow and align the team’s efforts.", "Clear goals make progress measurable and keep everyone focused on the work that matters most."] },
      { heading: "Map out and visualize your workflow", paragraphs: ["Workflow design means mapping tasks in a logical sequence so the process is easier to understand, improve, and share.", "Flowcharts, SIPOC diagrams, or BPMN can help visualize and analyze how the design process moves from question to outcome."] },
      { heading: "Organize your workspace and digital assets", paragraphs: ["A tidy physical and digital workspace reduces distractions and protects focus. Create a clear, consistent file structure so project resources are easy to find.", "Establish communication channels and feedback guidelines at the outset so the team knows where decisions live."] },
      { heading: "Assign tasks and responsibilities clearly", paragraphs: ["Defining roles and responsibilities prevents bottlenecks and keeps accountability visible.", "Use project management tools to track assignments, deadlines, and the handoffs between disciplines."] },
      { heading: "Leverage templates, presets, and design systems", paragraphs: ["Templates and presets speed up repetitive tasks and maintain consistency across projects.", "A living design system, for example in Figma, makes collaboration and handoff more predictable."] },
    ],
  },
  {
    slug: "5-design-trends-that-will-define-2024",
    title: `5 Design Trends That Will Define ${new Date().getFullYear()}`,
    category: "Insights",
    date: "Apr 30, 2025",
    excerpt: "The design trends shaping web, UI/UX, and branding projects — from tactile texture to visible structure.",
    image: "https://framerusercontent.com/images/1wFj19qQG6zNr7gj3iTlH0Gdlu8.jpeg?width=1200&height=673",
    sections: [
      { heading: "3D lettering and bubble fonts", paragraphs: ["3D lettering and playful bubble fonts add vibrancy and fun to designs. They are especially effective when a brand needs an expressive point of view in social content or campaign work."] },
      { heading: "Bold color contrasts and abstract gradients", paragraphs: ["High-contrast palettes are being used for attention and accessibility, while unusual gradients create surreal visual effects that make a digital experience feel distinct."] },
      { heading: "AI-assisted design and human-centered experiences", paragraphs: ["AI tools are influencing design workflows as creative partners. The important counterbalance is a human-centered experience that ensures technology serves people rather than replacing judgment."] },
      { heading: "Natural elements and tactile textures", paragraphs: ["Natural tones, authentic textures, and sustainable materials create emotionally resonant work, particularly for food, cosmetics, and home-goods brands."] },
      { heading: "Structural redesign: visible grids and composition", paragraphs: ["Visible grids, clear sections, and rich details add informational depth. A more composition-driven layout can encourage visitors to linger and engage more deeply."] },
    ],
  },
  {
    slug: "the-power-of-typography-in-web-design",
    title: "The Power of Typography in Web Design",
    category: "Insights",
    date: "May 2, 2025",
    excerpt: "How type choices shape readability, brand identity, accessibility, and the way a digital experience feels.",
    image: "https://framerusercontent.com/images/mu6sFIgrbmHNxa3m94cG4VVROM.jpeg?width=1200&height=800",
    sections: [
      { heading: "Defining typography in web design", paragraphs: ["Typography is the art and technique of arranging type to make written language legible, readable, and visually engaging.", "It is not only about choosing a beautiful font. It is about building a system of size, weight, spacing, and alignment that supports clarity and interaction."] },
      { heading: "Typography and readability", paragraphs: ["Well-chosen fonts and a thoughtful hierarchy help visitors navigate content intuitively. Headline scale, line spacing, and alignment guide attention and reduce cognitive strain."] },
      { heading: "The role of typography in brand identity", paragraphs: ["Typography acts as a silent ambassador for a brand. Serif type can suggest tradition and reliability, while sans-serif type often communicates modernity and simplicity.", "Consistent use across touchpoints reinforces recognition and builds trust."] },
      { heading: "Accessibility and inclusive design", paragraphs: ["Legible fonts, sufficient contrast, appropriate type sizes, and generous spacing are essential for users with varying visual abilities. Inclusive typography lets more people reach and use the experience."] },
    ],
  },
  {
    slug: "the-role-of-color-psychology-in-branding",
    title: "The Role of Color Psychology in Branding",
    category: "Insights",
    date: "Apr 22, 2025",
    excerpt: "How color influences emotion, perception, differentiation, and the way a brand is remembered.",
    image: "https://framerusercontent.com/images/RFcUbpIGFydbU9WBSTc9HJRQI.jpeg?width=1200&height=800",
    sections: [
      { heading: "Understanding color psychology", paragraphs: ["Color psychology looks at how hues affect emotion, perception, and behavior. These responses are shaped by both instinct and cultural context.", "Red is often associated with energy and passion, while blue can suggest trust and reliability."] },
      { heading: "The emotional impact of color on branding", paragraphs: ["A brand’s colors influence how people feel about it. The right palette aligns emotion with the brand’s message and audience.", "The strongest identities make this choice deliberately, using color to reinforce trust, excitement, calm, or confidence."] },
      { heading: "Color as a tool for differentiation", paragraphs: ["In a crowded market, a clear palette helps a brand stand out and become recognizable even without a wordmark.", "Consistency across touchpoints reinforces recognition and strengthens the connection between brand and consumer."] },
      { heading: "Practical applications and strategy", paragraphs: ["Color psychology supports decisions from logo design to packaging and digital presence. Testing and refining color choices through marketing experiments can keep a brand relevant and effective."] },
    ],
  },
  {
    slug: "mastering-ui-ux-design-key-principles-for-success",
    title: "Mastering UI/UX Design: Key Principles for Success",
    category: "Resources",
    date: "Mar 30, 2025",
    excerpt: "The principles that create seamless, useful, and enjoyable experiences for real people.",
    image: "https://framerusercontent.com/images/9HduiIXX5eSq1WREpvO4qCnKM.jpeg?width=1200&height=904",
    sections: [
      { heading: "User-centricity: designing for real people", paragraphs: ["Successful UI/UX starts with an understanding of real users. Research uncovers pain points and motivations, while testing and iteration refine the solution.", "Focusing on the user journey creates experiences that feel relevant, personal, and satisfying."] },
      { heading: "Consistency and simplicity", paragraphs: ["Consistent visual elements, navigation patterns, and interactions help users learn a product quickly.", "Simplicity removes unnecessary complexity and reduces the cognitive load required to get something done."] },
      { heading: "Visual hierarchy and clarity", paragraphs: ["Size, color, spacing, and contrast guide attention through content and features. Clarity ensures every component communicates its purpose effectively."] },
      { heading: "Embracing innovation and micro-interactions", paragraphs: ["AI-driven personalization, immersive interfaces, and voice or gesture controls are shaping the future of UI/UX.", "Micro-interactions add delight and clarity by giving users feedback and making digital products feel more responsive."] },
    ],
  },
  {
    slug: "balancing-creativity-and-functionality-in-design",
    title: "Balancing Creativity and Functionality in Design",
    category: "Insights",
    date: "Apr 5, 2025",
    excerpt: "How to make work feel distinctive without losing the clarity and usability people need.",
    image: "https://framerusercontent.com/images/7RrI1CE0NHr8L8o3ZXGWxQDFQc.jpeg?width=1200&height=665",
    sections: [
      { heading: "The essence of creativity in design", paragraphs: ["Creativity brings originality and emotional resonance. Bold color, innovative layouts, and unexpected interactions can create a visual language that sets a brand apart.", "Without usability, however, creativity can become overcomplication."] },
      { heading: "The role of functionality", paragraphs: ["Functionality is the backbone of successful design. It lets users navigate, interact, and accomplish their goals with confidence.", "The best work anticipates needs, minimizes friction, and creates intuitive paths to action."] },
      { heading: "The interplay and importance of balance", paragraphs: ["Design thrives where creativity and functionality meet. The balance supports user satisfaction, brand credibility, and market competitiveness.", "Memorable experiences work emotionally and practically at the same time."] },
      { heading: "Conclusion", paragraphs: ["Balancing creativity and functionality is an ongoing process of testing, iteration, and listening. The strongest designs combine aesthetic innovation with practical excellence."] },
    ],
  },
];

export const processSteps = [
  { number: "01", title: "Research & strategy", text: "Understand the business, audience, and project goals. Define the roadmap before the pixels begin." },
  { number: "02", title: "Concept & ideation", text: "Translate the problem into a direction that reflects the brand while keeping usability at the core." },
  { number: "03", title: "Feedback & refinement", text: "Share the work, listen closely, and refine the experience until the direction feels right." },
  { number: "04", title: "Testing & optimization", text: "Test across devices and interactions so the experience is ready for real customers." },
  { number: "05", title: "Launch & delivery", text: "Launch with confidence and leave you with the guidance to keep improving over time." },
];

export const stack = [
  { name: "Shopify", descriptor: "Storefronts", logo: "/source/shopify.svg", text: "A scalable business engine for conversion-ready online stores." },
  { name: "Figma", descriptor: "Design systems", logo: "/source/figma.svg", text: "The canvas for clean, collaborative interfaces and prototypes." },
  { name: "Klaviyo", descriptor: "Automation", logo: "/source/klaviyo.svg", logoWide: true, text: "Flows and campaigns that nurture customers and recover carts." },
  { name: "Meta Ads", descriptor: "Paid growth", logo: "/source/meta.svg", text: "Data-driven campaigns that turn attention into trust and sales." },
  { name: "Google Analytics", descriptor: "Measurement", logo: "/source/googleanalytics.svg", text: "The insight layer for understanding customer behavior." },
];

export const testimonials = [
  { quote: "Cullen Consults truly understood my vision and turned it into impactful designs. The results went beyond my expectations!", name: "Ethan Cole", role: "Marketing Director" },
  { quote: "The team took the time to understand our goals and delivered a design that resonated perfectly with our audience.", name: "Liam Carter", role: "Product Manager" },
  { quote: "Their design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.", name: "Sophia Bennett", role: "CEO" },
  { quote: "As a small business owner, I appreciated how stress-free the Cullen Consults team made the process.", name: "Olivia Harper", role: "Small Business Owner" },
];
