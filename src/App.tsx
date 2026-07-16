import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Deliverables from "./components/Deliverables";
import TargetAudience from "./components/TargetAudience";
import Comparison from "./components/Comparison";
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

        {/* Methodology (The 90-Day System) */}
        <Methodology />

        {/* Deliverables (A complete acquisition engine) */}
        <Deliverables />

        {/* Target Audience (This is for you if / This is NOT for you if) */}
        <TargetAudience />

        {/* Comparison (Why we're different) */}
        <Comparison />

        {/* FAQ Accordion (Questions? We have answers) */}
        <FaqAccordion />

        {/* Footer CTA Section */}
        <section className="py-48 px-6 bg-bg-obsidian relative overflow-hidden text-center">
          {/* Glowing element in background */}
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-50 opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-[1000px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-12 tracking-tighter text-white leading-tight">
              Ready to systemize your growth?
            </h2>
            <button
              onClick={() => setIsQuizOpen(true)}
              className="bg-primary text-bg-obsidian px-12 py-5 rounded-xl text-sm font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all duration-300 teal-glow shadow-2xl"
            >
              Start Your 90-Day Build
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-bg-obsidian border-t border-border-hairline py-20 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Logo and Pitch */}
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center">
                <img
                  src="https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163737/leegb5dzskdowk7mn0bs.webp"
                  alt="The Digital Lift"
                  className="h-8 md:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                Engineering excellence for the modern web. We build the systems that build your business.
              </p>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li>
                  <a href="#platform" className="hover:text-primary transition-colors">
                    Platform
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="hover:text-primary transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Legal
              </h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and Socials */}
          <div className="mt-20 pt-8 border-t border-border-hairline/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold">
              © {new Date().getFullYear()} THE DIGITAL LIFT. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-white/40">
              <a
                href="#"
                className="hover:text-primary transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors p-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Roadmap Onboarding Quiz Popup */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
