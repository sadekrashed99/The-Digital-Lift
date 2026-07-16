import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

export default function TargetAudience() {
  const forYouItems = [
    "You are a technical founder or B2B service provider.",
    "You rely too heavily on referrals and manual outreach.",
    "You value systems and ROI over &quot;engagement&quot; metrics.",
  ];

  const notForYouItems = [
    "You want a &quot;cheap&quot; website with no strategy.",
    "You aren't ready to handle a surge in new enquiries.",
    "You believe marketing is a &quot;creative&quot; task, not a technical one.",
  ];

  return (
    <section className="py-32 px-6 bg-bg-obsidian relative">
      {/* Dynamic bottom glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,184,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Panel: This is for you if... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-10 md:p-14 rounded-[32px] border-primary/20 bg-primary/5 shadow-[inset_0_0_24px_rgba(0,212,184,0.05)] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-10">
                This is for you if...
              </h3>
              <ul className="space-y-8">
                {forYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-5 group">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span
                      className="text-lg leading-relaxed text-gray-200"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
            className="glass p-10 md:p-14 rounded-[32px] border-secondary/20 bg-secondary/5 shadow-[inset_0_0_24px_rgba(201,80,63,0.05)] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-secondary font-semibold text-xs tracking-[0.2em] uppercase mb-10">
                This is NOT for you if...
              </h3>
              <ul className="space-y-8">
                {notForYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-5 group">
                    <XCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span
                      className="text-lg leading-relaxed text-gray-200"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
