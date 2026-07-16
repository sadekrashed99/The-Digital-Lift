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
          className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-6"
        >
          Engineering-First Client Acquisition
        </motion.p>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-[72px] font-extrabold tracking-tighter text-charcoal leading-[1.05] mb-8"
        >
          Stop chasing work. Build a predictable enquiry pipeline in 90 days.
        </motion.h1>

        {/* Paragraph Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 font-medium mb-12 max-w-3xl leading-relaxed"
        >
          We replace &quot;hope-based&quot; marketing with technical systems that
          generate high-intent leads while you sleep.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 w-full sm:w-auto"
        >
          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto bg-primary text-bg-obsidian px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_35px_rgba(0,212,184,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Build My Pipeline
          </button>
          
          <a
            href="#comparison"
            className="w-full sm:w-auto text-center border border-charcoal/10 bg-white/50 backdrop-blur-md px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white hover:border-charcoal/30 transition-all duration-300 text-charcoal shadow-sm active:scale-95"
          >
            View System Pricing
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 border-t border-charcoal/10 w-full"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-bold">
            Trusted by Technical Founders at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            <span className="font-black text-lg tracking-wider text-charcoal">SOLARIS</span>
            <span className="font-black text-lg tracking-wider text-charcoal">NEXUS DATA</span>
            <span className="font-black text-lg tracking-wider text-charcoal">CYBERFLOW</span>
            <span className="font-black text-lg tracking-wider text-charcoal">KINETIC</span>
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
