import { MethodologyStep, DeliverableItem, ComparisonRow, FaqItem } from "./types";

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive audit of your current tech stack and ICP definition.",
    iconName: "Search",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Mapping the technical foundation and multi-channel user journeys.",
    iconName: "Milestone",
  },
  {
    number: "03",
    title: "Build",
    description: "High-performance deployment using Next.js and headless logic.",
    iconName: "Code2",
  },
  {
    number: "04",
    title: "Scale",
    description: "Continuous optimization of the automated acquisition funnel.",
    iconName: "Rocket",
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Conversion Platform",
    description: "A custom-engineered website optimized for speed and high-intent user conversion.",
    iconName: "Layers",
  },
  {
    title: "CRM Integration",
    description: "Seamless automation between your site and sales tools for zero lead leakage.",
    iconName: "Cpu",
  },
  {
    title: "Analytics Dashboard",
    description: "Live data visualization of your pipeline health and traffic sources.",
    iconName: "BarChart3",
  },
  {
    title: "Lead Sourcing",
    description: "Automated outbound systems that identify and engage your ideal clients.",
    iconName: "Send",
  },
  {
    title: "Content Strategy",
    description: "Data-driven content playbooks designed to establish authority in your niche.",
    iconName: "PenTool",
  },
  {
    title: "Ongoing Support",
    description: "Monthly technical maintenance and funnel optimization to maintain peak ROI.",
    iconName: "ShieldCheck",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Focus",
    agency: "Design & Branding",
    digitalLift: "Revenue & Pipelines",
  },
  {
    feature: "Lead Generation",
    agency: "\"Hope\" and Luck",
    digitalLift: "Automated Systems",
  },
  {
    feature: "Tech Stack",
    agency: "WordPress / Drag & Drop",
    digitalLift: "Custom Headless Engine",
  },
  {
    feature: "Timeline",
    agency: "Ongoing / Unknown",
    digitalLift: "Strict 90-Day Build",
  },
  {
    feature: "Guarantee",
    agency: "None",
    digitalLift: "Predictable Growth",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What exactly is an enquiry pipeline?",
    answer: "It's a multi-stage technical system that identifies your ideal customers, educates them through automated content, and funnels them into booking high-intent discovery calls with your team—without manual prospecting.",
  },
  {
    question: "Why 90 days?",
    answer: "This timeframe allows us to conduct a full audit, build the technical foundation, and run the first cycle of optimization to ensure the system is yielding real data and leads.",
  },
  {
    question: "Do you provide content writing?",
    answer: "Yes, we provide high-level strategy and technical copywriting that converts complex solutions into compelling value propositions.",
  },
  {
    question: "What tech stack do you use?",
    answer: "We primarily use Next.js, Tailwind CSS, and headless CMS systems like Sanity or Contentful for maximum performance and scalability.",
  },
  {
    question: "Is this for e-commerce?",
    answer: "No, we specialize exclusively in B2B service providers and SaaS companies looking for high-value client enquiries.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, provided you have a proven product-market fit and a clear understanding of your client's lifetime value.",
  },
  {
    question: "How much involvement do you need from me?",
    answer: "Heavily in the first 2 weeks during Discovery. After that, we handle the engineering, and you simply review progress.",
  },
];
