import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainAgitation from "./components/PainAgitation";
import DigitalScoreAudit from "./components/DigitalScoreAudit";
import Methodology from "./components/Methodology";
import Deliverables from "./components/Deliverables";
import TargetAudience from "./components/TargetAudience";
import Comparison from "./components/Comparison";
import PricingCalculator from "./components/PricingCalculator";
import FaqAccordion from "./components/FaqAccordion";
import QuizPopup from "./components/QuizPopup";
import { Linkedin, Twitter } from "lucide-react";

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-bg-obsidian text-on-surface font-sans antialiased selection:bg-primary selection:text-bg-obsidian overflow-x-hidden">
      {/* Absolute 4% opacity Noise Grain Overlay */}
      <div className="fixed inset-0 noise-bg z-[60] pointer-events-none" />

      {/* Navigation */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Pain Agitation */}
        <PainAgitation />

        {/* Digital Score Audit */}
        <DigitalScoreAudit onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Methodology (The 90-Day System) */}
        <Methodology />

        {/* Deliverables (A complete acquisition engine) */}
        <Deliverables />

        {/* Target Audience (This is for you if / This is NOT for you if) */}
        <TargetAudience />

        {/* Comparison (Why we're different) */}
        <Comparison />

        {/* Pricing Calculator */}
        <PricingCalculator onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* FAQ Accordion (Questions? We have answers) */}
        <FaqAccordion />

        {/* Footer CTA Section */}
        <section className="py-32 px-6 bg-[#111111] relative overflow-hidden text-center flex flex-col items-center">
          <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
            <p className="uppercase mb-6" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
              READY TO STOP CHASING WORK?
            </p>
            <h2 className="mb-6 font-bold" style={{ color: "#FFFFFF", fontSize: "44px", lineHeight: "1.2" }}>
              Get your custom pipeline blueprint — free.
            </h2>
            <p className="mb-10 max-w-[560px] mx-auto" style={{ color: "#6B6B6B", fontSize: "17px", lineHeight: "1.6" }}>
              Answer 4 questions about your business. We'll research your market, build your Optireach Pipeline Blueprint, and send you a personalised Loom walkthrough within 24 hours.
            </p>
            <button
              onClick={() => setIsQuizOpen(true)}
              className="font-bold hover:shadow-[0_0_35px_rgba(0,212,184,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 mb-4"
              style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", fontSize: "18px", borderRadius: "8px", padding: "16px 36px" }}
            >
              Build My Pipeline →
            </button>
            <p style={{ color: "#6B6B6B", fontSize: "13px" }}>
              No obligation. No sales call unless you want one. Free within 24 hours.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#0A0A0A] py-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
          
          {/* Left */}
          <div className="flex flex-col gap-2 md:items-start items-center">
            <img 
              src="https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163737/leegb5dzskdowk7mn0bs.webp" 
              alt="The Digital Lift"
              className="h-8 w-auto object-contain mb-2"
            />
            <div style={{ color: "#6B6B6B", fontSize: "13px" }}>An Optireach Systems program.</div>
            <div style={{ color: "#6B6B6B", fontSize: "12px" }}>© 2026 Optireach Systems. All rights reserved.</div>
          </div>
          
          {/* Centre - links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <a href="#how-it-works" className="transition-colors duration-300" style={{ color: "#6B6B6B", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "#00D4B8"} onMouseOut={(e) => e.currentTarget.style.color = "#6B6B6B"}>
              How It Works
            </a>
            <a href="#what-you-get" className="transition-colors duration-300" style={{ color: "#6B6B6B", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "#00D4B8"} onMouseOut={(e) => e.currentTarget.style.color = "#6B6B6B"}>
              What You Get
            </a>
            <button onClick={() => setIsQuizOpen(true)} className="transition-colors duration-300 focus:outline-none" style={{ color: "#6B6B6B", textDecoration: "none", background: "none", border: "none", cursor: "pointer", padding: 0 }} onMouseOver={(e) => e.currentTarget.style.color = "#00D4B8"} onMouseOut={(e) => e.currentTarget.style.color = "#6B6B6B"}>
              Build My Pipeline
            </button>
          </div>

          {/* Right */}
          <div>
            <a href="mailto:hello@thedigitallift.com.au" className="transition-colors duration-300" style={{ color: "#6B6B6B", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "#00D4B8"} onMouseOut={(e) => e.currentTarget.style.color = "#6B6B6B"}>
              Questions? hello@thedigitallift.com.au
            </a>
          </div>

        </div>
      </footer>

      {/* Dynamic Roadmap Onboarding Quiz Popup */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
