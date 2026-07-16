import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-light-bg text-charcoal">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,184,0.08)_0%,_transparent_60%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1000px] text-center flex flex-col items-center">
        {/* Category Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase mb-6"
          style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}
        >
          OPTIREACH PIPELINE SYSTEM
        </motion.p>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-[900] mb-8"
          style={{ color: "#0F0F0F", fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1.1" }}
        >
          Stop chasing work.<br />Build a predictable enquiry pipeline in 90 days.
        </motion.h1>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-medium mb-6"
          style={{ color: "#00D4B8", fontSize: "20px" }}
        >
          Researched for your market. Built around your best clients. Running without you.
        </motion.h2>

        {/* Paragraph Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12 max-w-[560px] text-center mx-auto"
          style={{ color: "#6B6B6B", fontSize: "17px" }}
        >
          Most trade and service businesses run on referrals and word of mouth. That works — until it doesn't. The Digital Lift builds you a researched, automated enquiry pipeline: designed for your specific market, calibrated to your best-fit clients, and operational in 90 days.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center mb-24 w-full"
        >
          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto font-bold hover:shadow-[0_0_35px_rgba(0,212,184,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 mb-4"
            style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", fontSize: "18px", borderRadius: "8px", padding: "16px 36px" }}
          >
            Build My Pipeline →
          </button>
          
          <p style={{ color: "#6B6B6B", fontSize: "13px" }} className="text-center">
            Answer 4 questions. Get your custom blueprint. Free.
          </p>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 w-full"
          style={{ borderTop: "1px solid #2A2A2A" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center" style={{ color: "#6B6B6B", fontSize: "13px" }}>
            <span>Not a template</span>
            <span style={{ color: "#00D4B8" }}>|</span>
            <span>Not a retainer</span>
            <span style={{ color: "#00D4B8" }}>|</span>
            <span>A pipeline built for your market</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-40 text-charcoal pointer-events-none"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
}
