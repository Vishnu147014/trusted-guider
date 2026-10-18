import React, { useState } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Coins, 
  Check, 
  RotateCcw 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KNOWLEDGE_EXAMS } from '../data/mockData';

export default function GuideVerificationExamModal({ 
  isOpen, 
  onClose, 
  targetGuide, 
  onGuideVerified 
}) {
  const [selectedCity, setSelectedCity] = useState(targetGuide?.city || 'rome');
  const [currentStep, setCurrentStep] = useState(0); // 0 to 9
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examResult, setExamResult] = useState(null);

  if (!isOpen) return null;

  const examData = KNOWLEDGE_EXAMS[selectedCity] || KNOWLEDGE_EXAMS.rome;
  const questions = examData.questions;

  const handleSelectOption = (qIdx, optionIdx) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qIdx]: optionIdx
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitExam = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });

    const passed = score >= 8;
    setExamResult({
      score,
      total: questions.length,
      passed,
      percentage: Math.round((score / questions.length) * 100)
    });
    setIsSubmitted(true);

    if (passed) {
      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#f59e0b', '#3b82f6', '#ffffff']
      });

      if (onGuideVerified) {
        onGuideVerified(targetGuide?.id || 'g1', score);
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsSubmitted(false);
    setExamResult(null);
  };

  const currentQ = questions[currentStep];
  const isCurrentAnswered = selectedAnswers[currentStep] !== undefined;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl card-tourism rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                  True Guider Anti-Fraud Verification
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Top 10 Local Knowledge Examination
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                To protect tourists and earn the verified badge + high booking income, prove your local mastery by answering at least 8 of the 10 questions correctly.
              </p>

              {/* City selector tabs */}
              <div className="mt-4 flex gap-2">
                {Object.keys(KNOWLEDGE_EXAMS).map((cityKey) => (
                  <button
                    key={cityKey}
                    onClick={() => {
                      setSelectedCity(cityKey);
                      handleReset();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      selectedCity === cityKey
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {cityKey} Exam
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400 font-semibold">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{answeredCount}/{questions.length} Answered</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Knowledge Challenge #{currentStep + 1}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="mt-5 space-y-2.5">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[currentStep] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(currentStep, oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-500/10'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <span>{opt}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                        isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950 font-bold' : 'border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Previous Question
              </button>

              <div className="flex gap-2">
                {currentStep < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-md transition cursor-pointer"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    disabled={answeredCount < questions.length}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20 hover:opacity-95 transition disabled:opacity-50 cursor-pointer"
                  >
                    Submit 10-Q Verification Exam
                  </button>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-6 space-y-4">
            {examResult.passed ? (
              <>
                <div className="w-18 h-18 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 shadow-xl shadow-emerald-500/10">
                  <ShieldCheck className="w-10 h-10" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Certification Issued
                </div>

                <h3 className="text-3xl font-black text-white">
                  Congratulations! You Are a Verified True Guider
                </h3>

                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  You scored <span className="text-emerald-400 font-bold">{examResult.score}/10 ({examResult.percentage}%)</span> on the {examData.city} Knowledge Exam. Your profile is now officially stamped with the <strong className="text-white">True Guider Badge</strong>.
                </p>

                {/* Rewards Unlocked Card */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left space-y-2.5">
                  <div className="text-xs font-bold uppercase text-slate-400">
                    Rewards Credited to Guide Wallet:
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-amber-400" />
                      Verification Bonus Coins
                    </span>
                    <span className="font-bold text-amber-400">+250 Guide Coins</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Platform Status
                    </span>
                    <span className="font-bold text-emerald-400">Verified True Guider</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-sky-400" />
                      Booking Priority Rank
                    </span>
                    <span className="font-bold text-sky-400">Top 5% Placement</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="mt-4 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-sm hover:opacity-95 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  Start Guiding & Earning Income
                </button>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-3xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/40">
                  <XCircle className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-black text-white">
                  Score: {examResult.score}/10 — Not Yet Certified
                </h3>

                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  A True Guider must score at least 8/10 to guarantee authentic tourist safety and historical accuracy. You can study local history and retake the exam anytime.
                </p>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold hover:bg-amber-400 transition cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Try Exam Again</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
