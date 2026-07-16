import { useState, FormEvent, useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { QuizAnswers } from "../types";

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizPopup({ isOpen, onClose }: QuizPopupProps) {
  const [step, setStep] = useState<number>(1);
  const [route, setRoute] = useState<"2A" | "2B" | "2C" | null>(null);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherService, setOtherService] = useState("");
  
  const [answers, setAnswers] = useState<QuizAnswers>({
    category: "",
    service: "",
    operatingTime: "",
    enquiriesPerMonth: "",
    clientSource: "",
    pipelineChallenge: "",
    firstName: "",
    businessName: "",
    email: "",
    phone: "",
  });

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCategorySelect = (val: string, routeId: "2A" | "2B" | "2C") => {
    setAnswers((prev) => ({ ...prev, category: val, service: "" }));
    setRoute(routeId);
    setShowOtherInput(false);
    setOtherService("");
    setStep(2);
  };

  const handleServiceSelect = (val: string) => {
    if (val === "Other") {
      setShowOtherInput(true);
      setAnswers((prev) => ({ ...prev, service: "" }));
    } else {
      setShowOtherInput(false);
      setAnswers((prev) => ({ ...prev, service: val }));
      setStep(3);
    }
  };

  const submitOtherService = () => {
    if (otherService.trim()) {
      setAnswers((prev) => ({ ...prev, service: otherService }));
      setStep(3);
    }
  };

  const canAdvanceToStep4 = 
    answers.operatingTime !== "" && 
    answers.enquiriesPerMonth !== "" && 
    answers.clientSource !== "" && 
    answers.pipelineChallenge !== "";

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const handleReset = () => {
    setAnswers({
      category: "",
      service: "",
      operatingTime: "",
      enquiriesPerMonth: "",
      clientSource: "",
      pipelineChallenge: "",
      firstName: "",
      businessName: "",
      email: "",
      phone: "",
    });
    setRoute(null);
    setShowOtherInput(false);
    setOtherService("");
    setStep(1);
    onClose();
  };

  const progressPercentage = step <= 4 ? (step / 4) * 100 : 100;

  const getServiceChips = () => {
    switch(route) {
      case "2A": return [
        "Bathroom Renovation", "Solar & Battery", "HVAC / Air Con", "Plumbing", 
        "Electrical", "Landscaping & Gardens", "Concreting & Paving", "Fencing", 
        "Painting & Decorating", "Flooring", "Roofing", "Pool & Spa", 
        "Cleaning Services", "Pest Control", "Removalist", "Dental / Health Clinic", "Other"
      ];
      case "2B": return [
        "Mortgage Broking", "Financial Planning", "Accounting & Tax", "Bookkeeping", 
        "Insurance Broking", "Migration Agent", "Legal / Conveyancing", 
        "IT & Tech Services", "Recruitment", "Marketing / Copywriting", "Other"
      ];
      case "2C": return [
        "Business Coaching", "Life & Mindset Coaching", "Health & Wellness Coaching", 
        "Fitness Training", "Online Course Creator", "Tutoring / Academic", 
        "Skills & Trades Training", "Other"
      ];
      default: return [];
    }
  };

  const renderChip = (option: string, field: keyof QuizAnswers, onSelect: (val: string) => void) => {
    const isSelected = option !== "Other" && answers[field] === option;
    return (
      <button
        key={option}
        onClick={() => onSelect(option)}
        className="text-left cursor-pointer transition-all focus:outline-none"
        style={{
          backgroundColor: isSelected ? "#00D4B8" : "#252525",
          color: isSelected ? "#0F0F0F" : "#9A9A9A",
          border: isSelected ? "1px solid #00D4B8" : "1px solid #333",
          borderRadius: "100px",
          padding: "10px 18px",
          fontWeight: isSelected ? "bold" : "normal",
          fontSize: "14px"
        }}
        onMouseOver={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#00D4B8";
            e.currentTarget.style.color = "#FFFFFF";
          }
        }}
        onMouseOut={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#333";
            e.currentTarget.style.color = "#9A9A9A";
          }
        }}
      >
        {option === "Other" ? "My service isn't listed →" : option}
      </button>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center sm:p-4 transition-opacity duration-300"
      style={{ backgroundColor: "rgba(15,15,15,0.92)", backdropFilter: "blur(8px)" }}
    >
      <div 
        className="relative bg-[#1A1A1A] w-full sm:w-[90vw] sm:max-w-[600px] h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto sm:rounded-[16px] p-6 sm:p-10 shadow-2xl"
      >
        {step <= 4 && (
          <div 
            className="absolute top-0 left-0 h-[4px] bg-[#00D4B8] transition-all duration-300 sm:rounded-tl-[16px]"
            style={{ width: `${progressPercentage}%` }}
          />
        )}

        {step <= 4 && (
          <button
            onClick={onClose}
            className="absolute top-4 right-5 text-[#6B6B6B] hover:text-[#FFFFFF] cursor-pointer focus:outline-none"
            style={{ fontSize: "20px" }}
          >
            ✕
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ color: "#6B6B6B", fontSize: "12px", marginBottom: "24px" }}>Step 1 of 4</div>
              <p className="uppercase mb-2" style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}>
                YOUR PIPELINE BLUEPRINT STARTS HERE
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                What type of business do you run?
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "15px", marginBottom: "24px" }}>
                This shapes your entire pipeline blueprint.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { title: "Local Services", sub: "Trades, home services, health & wellness", route: "2A" as const },
                  { title: "Remote / Online", sub: "Professional services, finance, legal", route: "2B" as const },
                  { title: "Education / Coaching", sub: "Courses, coaching, training programs", route: "2C" as const },
                ].map((card) => (
                  <button
                    key={card.title}
                    onClick={() => handleCategorySelect(card.title, card.route)}
                    className="text-left w-full cursor-pointer focus:outline-none group"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "12px", padding: "24px", transition: "all 0.2s ease" }}
                  >
                    <h4 className="text-white font-bold text-lg mb-1">{card.title}</h4>
                    <p style={{ color: "#9A9A9A", fontSize: "14px" }}>{card.sub}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ color: "#6B6B6B", fontSize: "12px", marginBottom: "24px" }}>Step 2 of 4</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                What's your primary service?
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "15px", marginBottom: "24px" }}>
                Pick the one that drives most of your revenue.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {getServiceChips().map((chip) => renderChip(chip, "service", handleServiceSelect))}
              </div>

              {showOtherInput && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                  <label className="block mb-2 text-sm" style={{ color: "#E8E6E3" }}>
                    Tell us your service — we'll map the closest blueprint to your market.
                  </label>
                  <input
                    type="text"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    placeholder="e.g. Drone Services, Hypnotherapy, Speech Pathology…"
                    className="w-full mb-4 focus:outline-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#FFFFFF" }}
                    autoFocus
                  />
                  <button
                    onClick={submitOtherService}
                    className="w-full font-bold focus:outline-none"
                    style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", borderRadius: "8px", padding: "12px" }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ color: "#6B6B6B", fontSize: "12px", marginBottom: "24px" }}>Step 3 of 4</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Tell us about your business.
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "15px", marginBottom: "32px" }}>
                This is how we calibrate your blueprint to your actual market.
              </p>

              <div className="space-y-8 mb-8">
                <div>
                  <label className="block mb-3 text-sm font-semibold text-white">How long have you been operating?</label>
                  <select 
                    value={answers.operatingTime} 
                    onChange={(e) => setAnswers(p => ({...p, operatingTime: e.target.value}))}
                    className="w-full focus:outline-none appearance-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: answers.operatingTime ? "#FFFFFF" : "#9A9A9A" }}
                  >
                    <option value="" disabled>Select an option</option>
                    {["Under 1 year", "1–3 years", "3–7 years", "7+ years"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm font-semibold text-white">How many enquiries do you currently receive per month?</label>
                  <select 
                    value={answers.enquiriesPerMonth} 
                    onChange={(e) => setAnswers(p => ({...p, enquiriesPerMonth: e.target.value}))}
                    className="w-full focus:outline-none appearance-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: answers.enquiriesPerMonth ? "#FFFFFF" : "#9A9A9A" }}
                  >
                    <option value="" disabled>Select an option</option>
                    {["0–5", "6–15", "16–30", "30+"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm font-semibold text-white">Where do most of your current clients come from?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Word of mouth", "Google Search", "Social media", "Referral partners", "Paid ads", "Just starting out"].map(opt => renderChip(opt, "clientSource", (val) => setAnswers(p => ({...p, clientSource: val}))))}
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-sm font-semibold text-white">What's your biggest pipeline challenge right now?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Not enough leads coming in", "Leads aren't converting to jobs", "Too dependent on referrals", "No system — it's all manual", "Work is inconsistent month to month"].map(opt => renderChip(opt, "pipelineChallenge", (val) => setAnswers(p => ({...p, pipelineChallenge: val}))))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(4)}
                disabled={!canAdvanceToStep4}
                className="w-full font-bold focus:outline-none transition-all"
                style={{ 
                  backgroundColor: "#00D4B8", 
                  color: "#0F0F0F", 
                  borderRadius: "8px", 
                  padding: "14px", 
                  fontSize: "16px",
                  opacity: canAdvanceToStep4 ? 1 : 0.4,
                  cursor: canAdvanceToStep4 ? "pointer" : "default"
                }}
              >
                Almost there →
              </button>
            </motion.div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{ color: "#6B6B6B", fontSize: "12px", marginBottom: "24px" }}>Step 4 of 4</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Where should we send your blueprint?
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "15px", marginBottom: "32px" }}>
                Your custom Optireach Pipeline Blueprint will be researched and ready within 24 hours.
              </p>
              
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div>
                  <label style={{ color: "#E8E6E3", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>First Name</label>
                  <input
                    type="text"
                    value={answers.firstName}
                    onChange={(e) => setAnswers(p => ({...p, firstName: e.target.value}))}
                    placeholder="Your first name"
                    className="w-full focus:outline-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#FFFFFF" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ color: "#E8E6E3", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>Business Name</label>
                  <input
                    type="text"
                    value={answers.businessName}
                    onChange={(e) => setAnswers(p => ({...p, businessName: e.target.value}))}
                    placeholder="Your business name"
                    className="w-full focus:outline-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#FFFFFF" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ color: "#E8E6E3", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>Email Address</label>
                  <input
                    type="email"
                    value={answers.email}
                    onChange={(e) => setAnswers(p => ({...p, email: e.target.value}))}
                    placeholder="your@email.com"
                    className="w-full focus:outline-none"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#FFFFFF" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ color: "#E8E6E3", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>Phone Number (optional)</label>
                  <input
                    type="tel"
                    value={answers.phone}
                    onChange={(e) => setAnswers(p => ({...p, phone: e.target.value}))}
                    placeholder="04XX XXX XXX"
                    className="w-full focus:outline-none mb-2"
                    style={{ backgroundColor: "#252525", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#FFFFFF" }}
                  />
                  <p style={{ color: "#6B6B6B", fontSize: "12px" }}>
                    For your personalised Loom walkthrough — we'll only call if you'd like a guided walkthrough.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full font-bold focus:outline-none mb-4"
                    style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", fontSize: "18px", borderRadius: "8px", padding: "16px" }}
                  >
                    Build My Pipeline →
                  </button>
                  <p className="text-center mb-2" style={{ color: "#6B6B6B", fontSize: "12px" }}>
                    No spam. No sales calls unless you ask for one.
                  </p>
                  <p className="text-center" style={{ color: "#6B6B6B", fontSize: "11px" }}>
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </div>
              </form>
            </motion.div>
          )}

          {/* Confirmation */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6"
            >
              <div className="flex justify-center mb-6">
                <Check className="text-[#00D4B8] animate-pulse" style={{ width: "64px", height: "64px" }} />
              </div>
              <h3 className="font-bold mb-6" style={{ color: "#FFFFFF", fontSize: "28px" }}>
                Your blueprint is being built.
              </h3>
              <div style={{ color: "#E8E6E3", fontSize: "16px", marginBottom: "24px" }}>
                <p className="mb-4">We're researching your market right now.</p>
                <p>Your Optireach Pipeline Blueprint — along with a personal Loom video walking you through exactly what we found — will be in your inbox within 24 hours.</p>
              </div>
              <p style={{ color: "#6B6B6B", fontSize: "14px", marginBottom: "32px" }}>
                Check your inbox (and spam folder) for an email from hello@thedigitallift.com.au
              </p>
              <button
                onClick={() => {
                  onClose();
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mb-8 font-semibold focus:outline-none"
                style={{ backgroundColor: "transparent", border: "1px solid #00D4B8", color: "#00D4B8", borderRadius: "8px", padding: "12px 28px" }}
              >
                Explore how it works →
              </button>
              <p style={{ color: "#6B6B6B", fontSize: "12px" }}>
                Most blueprints are delivered within 4–8 hours during business hours (AEST).
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
