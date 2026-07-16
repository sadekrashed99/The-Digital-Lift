import { useState, useMemo } from "react";
import { motion } from "motion/react";

interface Option {
  id: string;
  text: string;
  points: number;
}

interface Question {
  id: string;
  label: string;
  text: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    label: "01 — ONLINE PRESENCE",
    text: "How would you describe your current website?",
    options: [
      { id: "A", text: "We don't have one, or it's seriously outdated", points: 1 },
      { id: "B", text: "We have one but it rarely generates enquiries", points: 2 },
      { id: "C", text: "We get occasional enquiries from it", points: 3 },
      { id: "D", text: "It consistently generates leads for the business", points: 5 },
    ]
  },
  {
    id: "q2",
    label: "02 — SOCIAL PROOF",
    text: "How many Google reviews does your business have?",
    options: [
      { id: "A", text: "Fewer than 10", points: 1 },
      { id: "B", text: "10–30 reviews", points: 2 },
      { id: "C", text: "31–50 reviews", points: 3 },
      { id: "D", text: "50+ reviews averaging 4.5★ or above", points: 5 },
    ]
  },
  {
    id: "q3",
    label: "03 — LEAD CAPTURE",
    text: "When someone lands on your website, how do you capture their details?",
    options: [
      { id: "A", text: "We don't — they call or they don't", points: 1 },
      { id: "B", text: "We have a basic contact form", points: 2 },
      { id: "C", text: "We have a quote tool or lead magnet", points: 3 },
      { id: "D", text: "Automated capture with instant follow-up sequence", points: 5 },
    ]
  },
  {
    id: "q4",
    label: "04 — FOLLOW-UP SYSTEM",
    text: "How do you currently follow up with leads after they enquire?",
    options: [
      { id: "A", text: "Manually, when I remember", points: 1 },
      { id: "B", text: "Basic CRM but I use it inconsistently", points: 2 },
      { id: "C", text: "I have a system but it still requires manual steps", points: 3 },
      { id: "D", text: "Automated sequences follow up without me", points: 5 },
    ]
  },
  {
    id: "q5",
    label: "05 — BRAND POSITIONING",
    text: "How clearly do you communicate why a client should choose YOU over a competitor?",
    options: [
      { id: "A", text: "We don't really — we just list what we do", points: 1 },
      { id: "B", text: "We have some differentiators but they're not clear", points: 2 },
      { id: "C", text: "We have a clear value proposition on our site", points: 3 },
      { id: "D", text: "We have a positioning strategy built around our ICP", points: 5 },
    ]
  },
  {
    id: "q6",
    label: "06 — TRAFFIC SOURCES",
    text: "How do potential clients find you online (beyond word of mouth)?",
    options: [
      { id: "A", text: "They don't — it's almost entirely referrals", points: 1 },
      { id: "B", text: "Occasionally through Google, not reliably", points: 2 },
      { id: "C", text: "Some social media or sporadic ads", points: 3 },
      { id: "D", text: "Consistent traffic from SEO, content, or paid ads", points: 5 },
    ]
  }
];

const GAP_DESCRIPTIONS: Record<string, string> = {
  "q1": "You're invisible to buyers actively searching for you right now.",
  "q2": "Without reviews, visitors don't trust you enough to enquire.",
  "q3": "Traffic is arriving and leaving with no way to follow up.",
  "q4": "Leads go cold in minutes. No system means no second chance.",
  "q5": "You're competing on price because your differentiation isn't clear.",
  "q6": "You're one referral drought away from a serious quiet patch."
};

const DIMENSION_LABELS: Record<string, string> = {
  "q1": "Online Presence",
  "q2": "Social Proof",
  "q3": "Lead Capture",
  "q4": "Follow-Up System",
  "q5": "Brand Positioning",
  "q6": "Traffic Sources"
};

export default function DigitalScoreAudit({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: string, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentStep(1);
    setShowResults(false);
  };

  const answeredCount = Object.keys(answers).length;
  
  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum: number, val: number) => sum + val, 0);
  }, [answers]);

  const scorePercent = (totalScore / 30) * 100;

  let bandBadge = "";
  let bandBadgeBg = "";
  let bandBadgeText = "";
  let bandDescription = "";

  if (totalScore >= 6 && totalScore <= 12) {
    bandBadge = "⚠ Critical";
    bandBadgeBg = "#C9503F";
    bandBadgeText = "#FFFFFF";
    bandDescription = "Your digital presence is working against you. Competitors in your market are capturing the leads that should be yours. The gap is widening.";
  } else if (totalScore >= 13 && totalScore <= 18) {
    bandBadge = "Developing";
    bandBadgeBg = "#3A3A3A";
    bandBadgeText = "#9A9A9A";
    bandDescription = "You have the basics in place but there are serious gaps in your pipeline. Every month without a system is revenue left on the table.";
  } else if (totalScore >= 19 && totalScore <= 24) {
    bandBadge = "Growing";
    bandBadgeBg = "rgba(0,212,184,0.15)";
    bandBadgeText = "#00D4B8";
    bandDescription = "You're ahead of most businesses in your market — but your system has gaps that are costing you qualified enquiries every week.";
  } else if (totalScore >= 25 && totalScore <= 30) {
    bandBadge = "Strong";
    bandBadgeBg = "rgba(0,212,184,0.15)";
    bandBadgeText = "#00D4B8";
    bandDescription = "Solid foundation. The next move is scaling what's working and automating what isn't.";
  }

  // Find 3 weakest areas if all answered
  const weakestAreas = useMemo(() => {
    if (answeredCount < 3) return [];
    
    // Sort all answered questions by points ascending
    const sorted = Object.entries(answers)
      .map(([id, points]) => ({ id, points: points as number }))
      .sort((a, b) => a.points - b.points);
      
    // Take up to 3 weakest
    return sorted.slice(0, 3);
  }, [answers, answeredCount]);

  return (
    <section id="digital-score" className="py-16 md:py-24 px-6 bg-light-bg text-charcoal flex flex-col items-center">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase mb-4 font-bold"
            style={{ color: "#00D4B8", letterSpacing: "0.15em", fontSize: "11px" }}
          >
            FREE DIGITAL AUDIT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[900] mb-4 text-[32px] md:text-[44px]"
            style={{ color: "#0F0F0F", lineHeight: "1.15" }}
          >
            What's your business's Digital Score?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-[580px]"
            style={{ color: "#6B6B6B", fontSize: "18px", lineHeight: "1.6" }}
          >
            Answer 6 quick questions. We'll score your current pipeline readiness and
            show you exactly where you're losing ground to competitors in your market.
          </motion.p>
        </div>

        {!showResults ? (
          <div className="w-full max-w-[720px] bg-white rounded-[16px] relative overflow-hidden mb-12 border border-gray-200 shadow-sm">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-100 rounded-[4px]">
              <div 
                className="h-full bg-[#00D4B8] transition-all duration-500 ease-out rounded-[4px]" 
                style={{ width: `${(currentStep / QUESTIONS.length) * 100}%` }} 
              />
            </div>
            
            <div className="p-6 md:p-10">
              <div style={{ color: "#6B6B6B", fontSize: "12px", marginBottom: "24px" }}>
                Question {currentStep} of {QUESTIONS.length}
              </div>

              <div className="min-h-[300px]">
                {QUESTIONS.map((q, idx) => {
                  const isCurrent = currentStep === idx + 1;
                  const hasAnswer = answers[q.id] !== undefined;

                  return (
                    <div 
                      key={q.id}
                      style={{ display: isCurrent ? "block" : "none" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isCurrent ? 1 : 0, x: isCurrent ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ color: "#00D4B8", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                          {q.label}
                        </div>
                        <h3 className="text-[#0F0F0F] font-semibold text-[18px] md:text-[20px] mb-4">{q.text}</h3>
                        
                        <div className="grid grid-cols-1 gap-3 mb-8">
                          {q.options.map((opt) => {
                            const isSelected = answers[q.id] === opt.points;
                            return (
                              <div
                                key={opt.id}
                                onClick={() => handleSelect(q.id, opt.points)}
                                className={`border rounded-[8px] p-3 md:p-4 cursor-pointer transition-all duration-200 flex items-center ${
                                  isSelected 
                                    ? "bg-[#00D4B8] border-[#00D4B8] text-[#0F0F0F]" 
                                    : "bg-white border-gray-200 text-gray-500 hover:border-[#00D4B8] hover:text-[#0F0F0F] shadow-sm"
                                }`}
                              >
                                <span className={`font-semibold text-[14px] md:text-[15px] ${isSelected ? 'font-bold' : ''}`}>
                                  {opt.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8">
                          {currentStep > 1 ? (
                            <button
                              onClick={handleBack}
                              className="bg-transparent border border-gray-200 rounded-[8px] py-[10px] px-[20px] transition-colors hover:bg-gray-50"
                              style={{ color: "#6B6B6B" }}
                            >
                              ← Back
                            </button>
                          ) : <div />}
                          
                          <button
                            onClick={handleNext}
                            disabled={!hasAnswer}
                            className="font-bold rounded-[8px] py-[12px] px-[24px] transition-all duration-200"
                            style={{ 
                              backgroundColor: "#00D4B8", 
                              color: "#0F0F0F",
                              opacity: hasAnswer ? 1 : 0.4,
                              cursor: hasAnswer ? 'pointer' : 'not-allowed'
                            }}
                          >
                            {currentStep === QUESTIONS.length ? "See My Score →" : "Next →"}
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[720px] bg-white rounded-[12px] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
            {/* Results Panel */}
            <div style={{ color: "#6B6B6B", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
              YOUR DIGITAL SCORE
            </div>
            
            <div className="mb-6 flex items-baseline justify-center font-black">
              <span style={{ color: "#0F0F0F", fontSize: "72px", lineHeight: "1" }}>{totalScore}</span>
              <span style={{ color: "#6B6B6B", fontSize: "28px", marginLeft: "4px" }}>/ 30</span>
            </div>

            {/* Gauge */}
            <div className="w-full h-[8px] bg-gray-100 rounded-[4px] overflow-hidden mb-8">
              <div className="h-full bg-[#00D4B8] transition-all duration-700 ease-out rounded-[4px]" style={{ width: `${scorePercent}%` }} />
            </div>

            {/* Band Description */}
            <div className="mb-8 flex flex-col items-center max-w-[500px]">
              {bandBadge && (
                <div className="inline-block px-3 py-1 rounded-[4px] text-[13px] font-bold mb-3" style={{ backgroundColor: bandBadgeBg, color: bandBadgeText }}>
                  {bandBadge}
                </div>
              )}
              {bandDescription && (
                <p style={{ color: "#0F0F0F", fontSize: "15px", lineHeight: "1.6" }}>
                  {bandDescription}
                </p>
              )}
            </div>

            <div style={{ color: "#6B6B6B", fontSize: "14px", fontStyle: "italic", marginBottom: "24px" }}>
              Top performers in your industry score 24+. The average business scores 11.
            </div>

            <div className="w-full h-[1px] bg-gray-200 my-8" />

            {/* Weakest Areas */}
            <div className="w-full text-left mb-8">
              {weakestAreas.length > 0 ? (
                <div className="space-y-4 max-w-[500px] mx-auto">
                  {weakestAreas.map((area, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-[8px] border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span style={{ color: "#0F0F0F", fontSize: "14px", fontWeight: "bold" }}>
                          {DIMENSION_LABELS[area.id]}
                        </span>
                        <span style={{ color: "#00D4B8", fontSize: "13px", fontWeight: "bold" }}>
                          Score: {area.points}/5
                        </span>
                      </div>
                      <p style={{ color: "#6B6B6B", fontSize: "13px", fontStyle: "italic" }}>
                        "{GAP_DESCRIPTIONS[area.id]}"
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: "#6B6B6B", fontSize: "14px", textAlign: "center" }}>
                  Complete the audit above to see your gaps.
                </p>
              )}
            </div>

            {/* CTA */}
            <div className="w-full max-w-[400px] mx-auto flex flex-col items-center">
              <button
                onClick={onOpenQuiz}
                className="w-full font-bold hover:opacity-90 transition-opacity active:scale-95 mb-3"
                style={{ backgroundColor: "#00D4B8", color: "#0F0F0F", fontSize: "16px", borderRadius: "8px", padding: "14px" }}
              >
                See how The Digital Lift closes these gaps →
              </button>
              <p style={{ color: "#6B6B6B", fontSize: "13px", marginBottom: "24px" }}>
                Your blueprint is built around your exact gaps. Free, within 24 hours.
              </p>
              
              <button 
                onClick={handleRetake}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "#6B6B6B", fontSize: "13px", cursor: "pointer", background: "transparent", border: "none" }}
              >
                ← Retake the audit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
