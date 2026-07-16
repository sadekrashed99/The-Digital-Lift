import { ComponentType } from "react";
import { Layers, Cpu, BarChart3, Send, PenTool, ShieldCheck } from "lucide-react";
import { DELIVERABLES } from "../data";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Layers: Layers,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Send: Send,
  PenTool: PenTool,
  ShieldCheck: ShieldCheck,
};

export default function Deliverables() {
  return (
    <section className="py-32 px-6 bg-light-bg text-charcoal relative" id="solutions">
      {/* Decorative dots grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Deliverables
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            A complete acquisition engine.
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERABLES.map((item) => {
            const IconComponent = iconMap[item.iconName] || Layers;
            return (
              <div
                key={item.title}
                className="group p-8 rounded-[24px] bg-white border border-charcoal/5 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block with subtle teal background */}
                  <div className="w-14 h-14 bg-light-bg rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-charcoal group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Subtle indicator arrow on hover */}
                <div className="w-full h-[1px] bg-charcoal/5 group-hover:bg-primary/20 transition-colors duration-300 mt-4" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
