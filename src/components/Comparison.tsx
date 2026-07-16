import { COMPARISON_ROWS } from "../data";

export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-light-bg text-charcoal" id="comparison">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            THE DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-5xl font-[900] tracking-tight text-[#0F0F0F] leading-tight">
            Why most agencies leave you exactly where you started.
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-[16px] border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-6 px-6 font-bold text-lg w-[28%] text-[#0F0F0F] bg-white">
                    {/* Empty top left corner */}
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#00D4B8", color: "#0F0F0F" }}>
                    The Digital Lift
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#F9FAFB", color: "#6B6B6B" }}>
                    Typical Agency
                  </th>
                  <th className="py-6 px-6 font-bold text-base md:text-lg text-center" style={{ backgroundColor: "#F3F4F6", color: "#6B6B6B" }}>
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, index) => {
                  return (
                    <tr
                      key={row.feature}
                      className="group border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-6 px-6 font-semibold text-base text-[#0F0F0F]">
                        {row.feature}
                      </td>
                      <td className="py-6 px-6 text-center text-sm md:text-base" style={{ color: "#0F0F0F" }}>
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
