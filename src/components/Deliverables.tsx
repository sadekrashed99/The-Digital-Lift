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
    <section className="py-32 px-6 bg-[#0F0F0F] relative" id="what-you-get">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            WHAT YOU GET
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A complete pipeline system. Not a PDF. Not a plan. A running machine.
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DELIVERABLES.map((item) => {
            return (
              <div
                key={item.title}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #333", borderRadius: "12px", padding: "28px" }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white">
                  {item.title}
                </h3>
                <p style={{ color: "#6B6B6B", fontSize: "16px", lineHeight: "1.6" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
