import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { METHODOLOGY_STEPS } from "../data";

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="py-32 px-6 bg-bg-obsidian relative overflow-hidden" id="how-it-works">
      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 max-w-3xl mx-auto">
            12 sprints. 90 days. One system that works without you in every room.
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "18px" }}>
            Every sprint has a job. Every phase has a purpose. By day 90, your pipeline runs.
          </p>
        </div>

        {/* Steps Timeline */}
        <div ref={containerRef} className="relative w-full mb-16">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#2A2A2A] transform -translate-x-1/2" />
          
          {/* Animated Teal Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#00D4B8] transform -translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {METHODOLOGY_STEPS.map((step, index) => {
            const startSprint = index * 3 + 1;
            const endSprint = startSprint + 2;
            const subLabel = `Sprints ${startSprint}–${endSprint}`;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex w-full mb-12 md:mb-24 ${
                  isEven ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Center dot (absolute positioned) */}
                <motion.div 
                  initial={{ 
                    boxShadow: "0 0 0px 0px rgba(0,212,184,0)", 
                    borderColor: "#333",
                    backgroundColor: "#0F0F0F"
                  }}
                  whileInView={{ 
                    boxShadow: [
                      "0 0 0px 0px rgba(0,212,184,0)", 
                      "0 0 0px 12px rgba(0,212,184,0.4)", 
                      "0 0 0px 0px rgba(0,212,184,0)"
                    ],
                    borderColor: "#00D4B8",
                    backgroundColor: "#00D4B8",
                    transition: { 
                      boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                      borderColor: { duration: 0 },
                      backgroundColor: { duration: 0 }
                    }
                  }}
                  viewport={{ once: true, margin: "0px 0px -48% 0px" }}
                  className="absolute left-[20px] md:left-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full border-[3px] transform -translate-x-1/2 md:-translate-y-1/2 z-10" 
                />

                {/* Content Box */}
                <div className="w-full pl-[56px] md:pl-0 md:w-[45%]">
                  <div 
                    style={{ backgroundColor: "#1A1A1A", border: "1px solid #333", borderRadius: "16px", padding: "36px" }}
                    className={`w-full relative hover:border-[#00D4B8]/40 transition-colors duration-500 text-left ${!isEven ? 'md:text-right' : ''}`}
                  >
                    <div style={{ color: "#00D4B8", fontSize: "40px", fontWeight: "900", lineHeight: "1", marginBottom: "16px", opacity: 0.9 }}>
                      Phase {parseInt(step.number)}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p style={{ color: "#00D4B8", fontSize: "13px", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: "bold", marginBottom: "20px" }}>
                      {subLabel}
                    </p>
                    <p style={{ color: "#9A9A9A", fontSize: "16px", lineHeight: "1.7" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footnote */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center italic" 
          style={{ color: "#6B6B6B", fontSize: "14px" }}
        >
          ~75% automated. ~25% human — at the 6 moments that matter most.
        </motion.p>
      </div>
    </section>
  );
}
