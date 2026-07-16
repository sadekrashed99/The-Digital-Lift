import { COMPARISON_ROWS } from "../data";

export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-[#0F0F0F] text-white" id="comparison">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            THE DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why most agencies leave you exactly where you started.
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-[16px] border border-[#333] bg-[#1A1A1A] shadow-sm overflow-hidden">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="py-6 px-6 font-bold text-lg w-[28%] text-white bg-[#1A1A1A]">
                    {/* Empty top left corner */}
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#00D4B8", color: "#0F0F0F" }}>
                    The Digital Lift
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#3A3A3A", color: "#9A9A9A" }}>
                    Typical Agency
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#2A2A2A", color: "#6B6B6B" }}>
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, index) => {
                  return (
                    <tr
                      key={row.feature}
                      className="group border-b border-[#333] last:border-0 hover:bg-[#252525] transition-colors"
                    >
                      <td className="py-6 px-6 font-semibold text-base text-white">
                        {row.feature}
                      </td>
                      <td className="py-6 px-6 text-center text-sm md:text-base" style={{ color: "#E8E6E3" }}>
                        <span style={{ color: "#00D4B8", marginRight: "6px" }}>✓</span>
                        {row.digitalLift.replace("✓ ", "")}
                      </td>
                      <td className="py-6 px-6 text-center text-sm md:text-base" style={{ color: "#6B6B6B" }}>
                        {row.agency}
                      </td>
                      <td className="py-6 px-6 text-center text-sm md:text-base" style={{ color: "#6B6B6B" }}>
                        {row.diy}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
