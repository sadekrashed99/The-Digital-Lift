import { useState, FormEvent } from "react";
import { X, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { QuizAnswers } from "../types";

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizPopup({ isOpen, onClose }: QuizPopupProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    goal: "",
    industry: "",
    revenue: "",
    name: "",
    email: "",
  });

  const [formError, setFormError] = useState("");

  if (!isOpen) return null;

  const handleSelectGoal = (val: string) => {
    setAnswers((prev) => ({ ...prev, goal: val }));
    setStep(2);
  };

  const handleSelectIndustry = (val: string) => {
    setAnswers((prev) => ({ ...prev, industry: val }));
    setStep(3);
  };

  const handleSelectRevenue = (val: string) => {
    setAnswers((prev) => ({ ...prev, revenue: val }));
    setStep(4);
  };

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();
    if (!answers.name.trim() || !answers.email.trim()) {
      setFormError("All fields are required.");
      return;
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(answers.email)) {
      setFormError("Please enter a valid business email address.");
      return;
    }

    setFormError("");
    setStep(5);
  };

  const handleReset = () => {
    setAnswers({
      goal: "",
      industry: "",
      revenue: "",
      name: "",
      email: "",
    });
    setStep(1);
    onClose();
  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="fixed inset-0 bg-bg-obsidian/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
      {/* Modal Card */}
      <div className="glass w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative bg-surface-lvl2 border border-border-hairline">
        
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-border-hairline">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_12px_rgba(0,212,184,0.4)]"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>

        <div className="p-8 md:p-12 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            {/* Step 1: Goal */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                  Step 1 of 4
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                  What is your primary goal?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Increase high-ticket enquiry volume",
                    "Modernize my digital presence",
                    "Automate my sales outreach",
                  ].map((goalOption) => (
                    <button
                      key={goalOption}
                      onClick={() => handleSelectGoal(goalOption)}
                      className="text-left p-6 rounded-2xl bg-surface-lvl1/40 hover:bg-primary/10 border border-border-hairline hover:border-primary/50 transition-all flex justify-between items-center group focus:outline-none"
                    >
                      <span className="text-base font-semibold text-gray-200">
                        {goalOption}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1.5 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Industry */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                  Step 2 of 4
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                  Which industry do you operate in?
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "B2B SaaS",
                    "Professional Services",
                    "Deep Tech / Engineering",
                    "Other",
                  ].map((industryOption) => (
                    <button
                      key={industryOption}
                      onClick={() => handleSelectIndustry(industryOption)}
                      className="w-full py-4 px-6 rounded-full bg-surface-lvl1/40 hover:bg-primary hover:text-bg-obsidian border border-border-hairline text-center font-bold text-white hover:border-primary transition-all focus:outline-none"
                    >
                      {industryOption}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-6 text-xs text-white/40 hover:text-white transition-colors underline underline-offset-4"
                >
                  &larr; Back to Step 1
                </button>
              </motion.div>
            )}

            {/* Step 3: Revenue */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                  Step 3 of 4
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                  What is your current monthly revenue?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["$10k - $50k", "$50k - $200k", "$200k - $500k", "$500k+"].map(
                    (revenueOption) => (
                      <button
                        key={revenueOption}
                        onClick={() => handleSelectRevenue(revenueOption)}
                        className="p-6 rounded-2xl bg-surface-lvl1/40 hover:bg-primary/10 border border-border-hairline hover:border-primary/50 text-center font-bold text-white transition-all focus:outline-none"
                      >
                        {revenueOption}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="mt-6 text-xs text-white/40 hover:text-white transition-colors underline underline-offset-4"
                >
                  &larr; Back to Step 2
                </button>
              </motion.div>
            )}

            {/* Step 4: Contact Form */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                  Step 4 of 4
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                  Where should we send your custom roadmap?
                </h3>
                
                <form onSubmit={handleSubmitContact} className="space-y-6">
                  {formError && (
                    <p className="text-secondary text-sm font-semibold">{formError}</p>
                  )}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-white/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={answers.name}
                      onChange={(e) =>
                        setAnswers((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full bg-surface-lvl1/50 border border-border-hairline rounded-xl py-4 px-5 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-white/50">
                      Business Email
                    </label>
                    <input
                      type="email"
                      value={answers.email}
                      onChange={(e) =>
                        setAnswers((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full bg-surface-lvl1/50 border border-border-hairline rounded-xl py-4 px-5 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white outline-none"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-bg-obsidian py-5 rounded-xl font-bold uppercase tracking-[0.15em] hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,212,184,0.3)] text-sm"
                  >
                    Access My Roadmap
                  </button>
                </form>

                <button
                  onClick={() => setStep(3)}
                  className="mt-6 text-xs text-white/40 hover:text-white transition-colors underline underline-offset-4"
                >
                  &larr; Back to Step 3
                </button>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,212,184,0.2)]">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-white">
                  Roadmap Requested.
                </h3>
                <p className="text-gray-400 max-w-md mx-auto text-base leading-relaxed">
                  One of our engineers will review your profile and send your custom 90-day pipeline plan to <span className="text-primary font-semibold">{answers.email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-12 text-primary font-bold uppercase tracking-[0.15em] hover:text-white transition-colors text-xs underline underline-offset-4"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
