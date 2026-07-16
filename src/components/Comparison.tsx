import { COMPARISON_ROWS } from "../data";

export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-light-bg text-charcoal" id="comparison">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Comparison
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            Why we&apos;re different.
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="p-6 md:p-12 rounded-[32px] border border-charcoal/5 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-charcoal/5">
                  <th className="py-6 px-6 font-bold text-lg md:text-xl w-1/3 text-charcoal">
                    Feature
                  </th>
                  <th className="py-6 px-6 bg-secondary/5 text-secondary font-bold text-base md:text-lg rounded-t-2xl text-center">
                    Typical Agency
                  </th>
                  <th className="py-6 px-6 bg-primary/5 text-primary font-bold text-base md:text-lg rounded-t-2xl text-center">
                    The Digital Lift
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, index) => {
                  const isLastRow = index === COMPARISON_ROWS.length - 1;
                  return (
                    <tr
                      key={row.feature}
                      className="group border-b border-charcoal/5 last:border-0 hover:bg-light-bg/30 transition-colors"
                    >
                      <td className="py-6 px-6 font-semibold text-base md:text-lg text-charcoal">
                        {row.feature}
                      </td>
                      <td className="py-6 px-6 bg-secondary/5 text-gray-600 text-center text-sm md:text-base">
                        {row.agency}
                      </td>
                      <td
                        className={`py-6 px-6 bg-primary/5 font-extrabold text-charcoal text-center text-sm md:text-base ${
                          isLastRow ? "rounded-b-2xl" : ""
                        }`}
                      >
                        {row.digitalLift}
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
