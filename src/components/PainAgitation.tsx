import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

export default function PainAgitation() {
  const scrollToAudit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("digital-score");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pain" className="py-16 md:py-24 px-6 bg-[#0F0F0F] flex flex-col items-center">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center text-center">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase mb-6 font-bold"
          style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}
        >
          THE REAL PROBLEM
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold mb-6 text-[32px] md:text-[44px]"
          style={{ color: "#FFFFFF", lineHeight: "1.15" }}
        >
          Your competitors aren't better than you.<br />
          They just have a system and you don't.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-[640px]"
          style={{ color: "#6B6B6B", fontSize: "17px", lineHeight: "1.6" }}
        >
          Right now, while you're relying on word of mouth and hoping the phone rings,
          the businesses winning in your market have a machine quietly running in the
          background — capturing leads, filtering tyre-kickers, booking appointments,
          and following up automatically. 24/7. Without lifting a finger.<br /><br />
          You're not losing because you're not good enough. You're losing because they
          built a system and you haven't. Yet.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full text-left">
          {[
            {
              title: "Invisible online",
              body: "Potential clients are searching for exactly what you do — right now. They can't find you. They're booking your competitor instead."
            },
            {
              title: "Leads slipping through",
              body: "Every enquiry that doesn't get an immediate, automatic response goes cold within 5 minutes. No system means no follow-up. No follow-up means lost revenue."
            },
            {
              title: "Referral dependency",
              body: "Referrals feel reliable — until a quiet month hits. One client drought away from cashflow stress is not a business. It's a gamble."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
              className="bg-[#1A1A1A] rounded-[12px] p-[28px] border border-[#333] border-l-[3px] border-l-[#C9503F]"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <AlertTriangle color="#C9503F" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p style={{ color: "#9A9A9A", fontSize: "15px", lineHeight: "1.6" }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="font-semibold mb-3" style={{ color: "#FFFFFF", fontSize: "20px" }}>
            The good news: this is entirely fixable. In 90 days.
          </p>
          <a
            href="#digital-score"
            onClick={scrollToAudit}
            className="hover:opacity-80 transition-opacity flex items-center gap-1"
            style={{ color: "#00D4B8", fontSize: "15px", cursor: "pointer", textDecoration: "none" }}
          >
            Find out exactly where your pipeline is leaking <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
