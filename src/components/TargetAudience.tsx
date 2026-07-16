import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

export default function TargetAudience() {
  const forYouItems = [
    "You're a trade or service business generating revenue but can't predict next month's workload",
    "You're booked out on referrals but terrified of what happens when they slow down",
    "You've tried ads or a website refresh and got nothing back",
    "You want a system — not another campaign to manage",
    "You're ready to invest 90 days building something that outlasts you",
  ];

  const notForYouItems = [
    "You're looking for a quick fix or instant leads",
    "You're not willing to be responsive at the 6 white-glove sprint milestones",
    "You're not yet generating revenue — this accelerates what's working, not starts from zero",
    "You want to manage the ads yourself and hope for the best",
    "You're genuinely happy with how things are",
  ];

  return (
    <section className="py-32 px-6 bg-[#0F0F0F] relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
            WHO IT'S FOR
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for trade and service businesses ready to stop relying on luck.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Panel: This is for you if... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div>
              <h3 className="font-bold text-xl mb-8" style={{ color: "#00D4B8" }}>
                ✓ This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYouItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                    style={{ backgroundColor: "#1A1A1A", borderLeft: "3px solid #00D4B8", padding: "16px 20px" }}
                  >
                    <span className="text-base leading-relaxed text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Panel: This is NOT for you if... */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div>
              <h3 className="font-bold text-xl mb-8" style={{ color: "#6B6B6B" }}>
                ✗ This isn't for you if...
              </h3>
              <ul className="space-y-4">
                {notForYouItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                    style={{ backgroundColor: "#1A1A1A", borderLeft: "3px solid #3A3A3A", padding: "16px 20px" }}
                  >
                    <span className="text-base leading-relaxed text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
