import { useState, useMemo } from "react";
import { motion } from "motion/react";

interface PricingCalculatorProps {
  onOpenQuiz: () => void;
}

export default function PricingCalculator({ onOpenQuiz }: PricingCalculatorProps) {
  const [avgJobValue, setAvgJobValue] = useState(3500);
  const [currentEnquiries, setCurrentEnquiries] = useState(10); // Options: 3, 10, 23, 40
  const [targetEnquiries, setTargetEnquiries] = useState(30); // Options: 15, 30, 50, 70
  const [conversionRate, setConversionRate] = useState(40); // 10 to 80
  
  const [addons, setAddons] = useState({
    appointmentSetting: false,
    reviewManagement: false,
    socialMedia: false,
    ongoingMaintenance: false
  });

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculations
  const currentPipelineValue = currentEnquiries * (conversionRate / 100) * avgJobValue;
  const projectedPipelineValue = targetEnquiries * (conversionRate / 100) * avgJobValue;
  const monthlyUplift = projectedPipelineValue - currentPipelineValue;
  
  const baseRange = useMemo(() => {
    if (avgJobValue < 2000) return { min: 4500, max: 6500, label: "$4,500 – $6,500" };
    if (avgJobValue <= 7500) return { min: 6500, max: 9500, label: "$6,500 – $9,500" };
    return { min: 9500, max: 14500, label: "$9,500 – $14,500" };
  }, [avgJobValue]);

  const addonMonthlyCost = (addons.appointmentSetting ? 497 : 0) +
                           (addons.reviewManagement ? 297 : 0) +
                           (addons.socialMedia ? 697 : 0) +
                           (addons.ongoingMaintenance ? 397 : 0);

  const addonTotalCost = addonMonthlyCost * 3;
  const estimatedInvestmentStr = addonTotalCost > 0 
    ? `${baseRange.label} + $${addonTotalCost.toLocaleString()} in add-ons over 90 days`
    : baseRange.label;

  const baseMidpoint = (baseRange.min + baseRange.max) / 2;
  const roi = (monthlyUplift * 3) / baseMidpoint;

  // Format helpers
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(val).replace('USD', '');

  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-[#0F0F0F] flex flex-col items-center">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase mb-4 font-bold"
            style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}
          >
            WHAT DOES IT COST?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold mb-4 text-[32px] md:text-[44px]"
            style={{ color: "#FFFFFF", lineHeight: "1.15" }}
          >
            Calculate your pipeline ROI before you commit to anything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-[560px]"
            style={{ color: "#6B6B6B", fontSize: "18px", lineHeight: "1.6" }}
          >
            Plug in your numbers. See what a working pipeline is actually worth to your
            business — then see what it costs to build one.
          </motion.p>
        </div>

        {/* Calculator Widget */}
        <div className="w-full max-w-[900px] bg-[#1A1A1A] rounded-[16px] border border-[#333] p-6 md:p-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* LEFT - INPUTS */}
          <div className="flex-1 space-y-8">
            
            {/* Input 1 */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label style={{ color: "#E8E6E3", fontSize: "15px", fontWeight: "600" }}>What's your average job value?</label>
                <span style={{ color: "#00D4B8", fontSize: "18px", fontWeight: "bold" }}>{formatCurrency(avgJobValue)}</span>
              </div>
              <input 
                type="range" 
                min={500} 
                max={50000} 
                step={500} 
                value={avgJobValue} 
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full accent-[#00D4B8] h-2 bg-[#252525] rounded-lg appearance-none cursor-pointer" 
              />
            </div>

            {/* Input 2 */}
            <div>
              <label className="block mb-4" style={{ color: "#E8E6E3", fontSize: "15px", fontWeight: "600" }}>How many enquiries do you currently receive per month?</label>
              <div className="flex bg-[#252525] p-1 rounded-[8px]">
                {[
                  { label: "0–5", val: 3 }, 
                  { label: "6–15", val: 10 }, 
                  { label: "16–30", val: 23 }, 
                  { label: "30+", val: 40 }
                ].map(opt => (
                  <button 
                    key={opt.val}
                    onClick={() => setCurrentEnquiries(opt.val)}
                    className={`flex-1 py-2 text-[13px] md:text-[14px] font-semibold rounded-[6px] transition-colors ${
                      currentEnquiries === opt.val ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#9A9A9A] hover:text-[#E8E6E3]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3 */}
            <div>
              <label className="block mb-4" style={{ color: "#E8E6E3", fontSize: "15px", fontWeight: "600" }}>Where do you want to be after 90 days?</label>
              <div className="flex bg-[#252525] p-1 rounded-[8px]">
                {[
                  { label: "10–20", val: 15 }, 
                  { label: "21–40", val: 30 }, 
                  { label: "41–60", val: 50 }, 
                  { label: "60+", val: 70 }
                ].map(opt => (
                  <button 
                    key={opt.val}
                    onClick={() => setTargetEnquiries(opt.val)}
                    className={`flex-1 py-2 text-[13px] md:text-[14px] font-semibold rounded-[6px] transition-colors ${
                      targetEnquiries === opt.val ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#9A9A9A] hover:text-[#E8E6E3]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4 */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label style={{ color: "#E8E6E3", fontSize: "15px", fontWeight: "600" }}>What % of enquiries typically convert to a paid job?</label>
                <span style={{ color: "#00D4B8", fontSize: "18px", fontWeight: "bold" }}>{conversionRate}%</span>
              </div>
              <input 
                type="range" 
                min={10} 
                max={80} 
                step={5} 
                value={conversionRate} 
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-[#00D4B8] h-2 bg-[#252525] rounded-lg appearance-none cursor-pointer" 
              />
            </div>

            {/* Input 5 */}
            <div>
              <label className="block mb-4" style={{ color: "#E8E6E3", fontSize: "15px", fontWeight: "600" }}>Add optional modules:</label>
              <div className="space-y-3">
                {[
                  { key: "appointmentSetting", label: "Appointment Setting", price: 497 },
                  { key: "reviewManagement", label: "Review Management", price: 297 },
                  { key: "socialMedia", label: "Social Media Management", price: 697 },
                  { key: "ongoingMaintenance", label: "Ongoing Pipeline Maintenance", price: 397 },
                ].map(addon => {
                  const isChecked = addons[addon.key as keyof typeof addons];
                  return (
                    <div 
                      key={addon.key} 
                      onClick={() => toggleAddon(addon.key as keyof typeof addons)}
                      className={`flex items-center justify-between p-3 rounded-[4px] cursor-pointer border ${isChecked ? 'border-[#00D4B8] bg-[rgba(0,212,184,0.05)]' : 'border-[#333] bg-[#252525]'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-[18px] h-[18px] rounded-[4px] flex items-center justify-center border ${isChecked ? 'bg-[#00D4B8] border-[#00D4B8]' : 'bg-[#1A1A1A] border-[#333]'}`}>
                          {isChecked && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span style={{ color: "#E8E6E3", fontSize: "14px" }}>{addon.label}</span>
                      </div>
                      <span style={{ color: "#6B6B6B", fontSize: "13px" }}>+${addon.price}/mo</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT - OUTPUT */}
          <div className="flex-1 lg:max-w-[360px]">
            <div className="bg-[#252525] rounded-[12px] p-7 border border-[#333] lg:sticky lg:top-24 flex flex-col">
              
              <div className="mb-6">
                <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  CURRENT MONTHLY PIPELINE VALUE
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: "bold" }}>
                  {formatCurrency(currentPipelineValue)} / month
                </div>
              </div>

              <div className="mb-6">
                <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  PROJECTED MONTHLY PIPELINE VALUE
                </div>
                <div style={{ color: "#00D4B8", fontSize: "36px", fontWeight: "bold", lineHeight: "1.1" }}>
                  {formatCurrency(projectedPipelineValue)} / month
                </div>
              </div>

              <div className="mb-6">
                <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  MONTHLY REVENUE UPLIFT
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: "bold" }}>
                  +{formatCurrency(monthlyUplift)} / month
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#333] my-2 mb-6" />

              <div className="mb-6">
                <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  ESTIMATED PROGRAM INVESTMENT
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "bold" }}>
                  {estimatedInvestmentStr}
                </div>
              </div>

              <div className="mb-8">
                <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  90-DAY ROI ESTIMATE
                </div>
                <div style={{ color: "#00D4B8", fontSize: "40px", fontWeight: "900" }}>
                  {roi.toFixed(1)}:1 return
                </div>
                <div style={{ color: "#6B6B6B", fontSize: "12px", fontStyle: "italic", marginTop: "4px" }}>
                  Based on your inputs. Actual results vary by market and execution.
                </div>
              </div>

              <div className="mt-auto flex flex-col items-center text-center">
                <button
                  onClick={onOpenQuiz}
                  className="w-full font-bold hover:opacity-90 transition-opacity active:scale-95 mb-4"
                  style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", fontSize: "16px", borderRadius: "8px", padding: "16px" }}
                >
                  Get my exact quote — build my blueprint free →
                </button>
                <p style={{ color: "#6B6B6B", fontSize: "13px", marginBottom: "12px" }}>
                  Pricing is confirmed after your free blueprint — so your quote
                  reflects your actual market, not a generic rate card.
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "11px" }}>
                  Calculator estimates are indicative only. Final investment is scoped during your blueprint review.
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
