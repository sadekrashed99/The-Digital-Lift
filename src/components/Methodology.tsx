import { ComponentType } from "react";
import { Search, Milestone, Code2, Rocket } from "lucide-react";
import { METHODOLOGY_STEPS } from "../data";

// Helper to resolve lucide icons dynamically
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Search: Search,
  Milestone: Milestone,
  Code2: Code2,
  Rocket: Rocket,
};

export default function Methodology() {
  return (
    <section className="py-32 px-6 bg-bg-obsidian relative overflow-hidden" id="platform">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            The Methodology
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The 90-Day System
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Dashed Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[120px] left-0 w-full h-[1px] border-t border-dashed border-primary/20 z-0" />

          {METHODOLOGY_STEPS.map((step) => {
            const IconComponent = iconMap[step.iconName] || Search;
            return (
              <div
                key={step.number}
                className="group relative glass p-8 rounded-3xl z-10 overflow-hidden bg-surface-lvl1/40 hover:bg-surface-lvl2/60 border border-border-hairline hover:border-primary/45 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),_0_0_20px_rgba(0,212,184,0.05)] cursor-pointer"
              >
                {/* Step Number in Background */}
                <div className="absolute top-6 right-6 text-white font-black text-6xl opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 select-none group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(0,212,184,0.3)]">
                  {step.number}
                </div>

                <div className="relative z-10 mt-12">
                  {/* Icon Wrapper */}
                  <div className="mb-6 text-primary p-3 bg-primary/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
