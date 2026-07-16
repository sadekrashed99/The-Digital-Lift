import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            FREQUENTLY ASKED
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Honest answers to the questions we get most.
          </h2>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden bg-surface-lvl1/30 hover:bg-surface-lvl1/50 border border-border-hairline transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-center transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base md:text-lg tracking-tight text-white group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180 text-primary" : "text-white/50"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-border-hairline/20 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
