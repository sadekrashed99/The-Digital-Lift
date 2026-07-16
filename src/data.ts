import { MethodologyStep, DeliverableItem, ComparisonRow, FaqItem } from "./types";

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: "01",
    title: "Foundation",
    description: "We research your market, map your ideal client profile, and build your custom Optireach Pipeline Blueprint. You don't guess — we verify.",
    iconName: "Search",
  },
  {
    number: "02",
    title: "Pipeline Build",
    description: "Your lead capture system goes live. Traffic flows in. Enquiries are captured and qualified automatically — no manual sorting, no chasing.",
    iconName: "Milestone",
  },
  {
    number: "03",
    title: "Conversion Engine",
    description: "Your follow-up sequences, booking flow, and qualification logic are activated. Booked appointments land in your calendar without you lifting a finger.",
    iconName: "Code2",
  },
  {
    number: "04",
    title: "Scale & Automate",
    description: "We optimise, tighten, and hand you the keys. Your system is documented, tested, and running. You focus on delivering work — not finding it.",
    iconName: "Rocket",
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Your Optireach Pipeline Blueprint",
    description: "Custom-researched for your vertical and market. Covers your ICP, lead sources, positioning angle, funnel structure, and first-90-day roadmap. Delivered within 24 hours of your quiz.",
    iconName: "Layers",
  },
  {
    title: "Personalised Loom Walkthrough",
    description: "A ~5-minute video walking through exactly what we found in your market and how your blueprint is structured. Not a template. Made for you.",
    iconName: "Cpu",
  },
  {
    title: "Lead Capture System (Built, Not Templated)",
    description: "Landing pages, forms, and capture flows built to convert in your specific niche. Designed for your best-fit client, not the average browser.",
    iconName: "BarChart3",
  },
  {
    title: "Automated Qualification & Follow-Up",
    description: "Your enquiries are filtered, scored, and followed up automatically. Only qualified prospects reach you. No more chasing tyre-kickers.",
    iconName: "Send",
  },
  {
    title: "Booked-Appointment Engine",
    description: "Calendar integration, booking logic, and confirmation sequences — so appointments land without back-and-forth. You show up. They're already sold.",
    iconName: "PenTool",
  },
  {
    title: "90-Day Sprint Delivery + 6 White-Glove Check-ins",
    description: "12 sprints × 7 days. Structured delivery with human accountability at every major milestone. You always know exactly where you're at.",
    iconName: "ShieldCheck",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Research",
    digitalLift: "✓ Your market, your ICP, verified",
    agency: "Generic strategy deck",
    diy: "You figure it out",
  },
  {
    feature: "Build",
    digitalLift: "✓ Done-for-you, sprint-delivered",
    agency: "Retainer, no deadline",
    diy: "YouTube tutorials",
  },
  {
    feature: "Timeline",
    digitalLift: "✓ 90 days, 12 sprints",
    agency: "Ongoing, no finish line",
    diy: "Unknown",
  },
  {
    feature: "Automation",
    digitalLift: "✓ ~75% automated",
    agency: "Manual reporting",
    diy: "Zero",
  },
  {
    feature: "Blueprint",
    digitalLift: "✓ Custom-researched",
    agency: "Template repurposed",
    diy: "Template found online",
  },
  {
    feature: "Enquiry quality",
    digitalLift: "✓ Qualified, filtered",
    agency: "Raw, unqualified",
    diy: "Any and all",
  },
  {
    feature: "Handover",
    digitalLift: "✓ Documented, running",
    agency: "Dependent on agency",
    diy: "Dependent on you",
  },
  {
    feature: "Pricing",
    digitalLift: "✓ One program, clear scope",
    agency: "Monthly retainer forever",
    diy: "Just your time — forever",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is this different from hiring a marketing agency?",
    answer: "Agencies run campaigns on your behalf — usually indefinitely, usually on retainer. The Digital Lift builds you a pipeline system you own. By day 90, the system runs. There's no ongoing dependency on us to keep the leads coming.",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. The entire pipeline is built and managed for you across the 90 days. At the 6 white-glove milestones, we walk you through exactly what's happening and what's next. Your job is to show up and deliver the work — not manage the technology.",
  },
  {
    question: "What if my industry isn't listed?",
    answer: "We've built blueprints across 35 niches. If your vertical isn't in our standard library, we custom-research your market from scratch using the same Optireach methodology. The quiz captures this with a free-text field.",
  },
  {
    question: "What does it cost?",
    answer: "Pricing is scoped after your blueprint is built — so we can give you a number that reflects your actual market and build complexity, not a generic package price. Start with the quiz and we'll walk you through it.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Your pipeline goes live in Phase 2 — around weeks 4–6. You'll typically see your first enquiries flowing through by week 8. By day 90, you have a fully operational pipeline. This is a 90-day build — not a 90-minute ad campaign.",
  },
  {
    question: "What do the 6 white-glove moments involve?",
    answer: "At 6 key sprint milestones — Blueprint Reveal, System Launch, First Enquiry Review, Conversion Audit, Automation Check, and Handover — you get direct time with us to review, refine, and confirm. Everything else runs automatically without needing your time.",
  },
  {
    question: "Is this only for trades?",
    answer: "The Optireach Pipeline System was designed for trade and local service businesses first — but the same methodology applies to remote professionals, migration agents, mortgage brokers, and education/coaching businesses. The quiz routes you to the right blueprint for your market.",
  },
];
