import React from 'react';
import { Compass, Coins, Award, ShieldCheck, UserCheck, Sparkles, User, Briefcase, PlusCircle } from 'lucide-react';

export default function Navbar({ 
  currentRole, 
  setCurrentRole, 
  touristCoins, 
  onOpenExam,
  onOpenAddGuide
}) {
  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-slate-800 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentRole('tourist')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Compass className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white">
                  Trusted<span className="text-amber-400">Guider</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  10-Q Verified
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wider font-semibold block -mt-0.5">
                Certified Local Tourism & Dual Coin Rewards
              </span>
            </div>
          </div>

          {/* Center: Mode Switcher (Tourist vs Guide Portal) */}
          <div className="hidden md:flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setCurrentRole('tourist')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'tourist'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Tourist Explorer</span>
            </button>
            <button
              onClick={() => setCurrentRole('guide')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'guide'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Guide Earnings & Exam</span>
            </button>
          </div>

          {/* Right Section: Coins & CTAs */}
          <div className="flex items-center gap-3">
            
            {/* Tourist Coin Wallet Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold shadow-sm shadow-amber-500/10">
              <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{touristCoins} Tourist Coins</span>
              <span className="hidden sm:inline text-[10px] text-amber-300/80 font-normal">
                (${Math.floor(touristCoins / 10)} off)
              </span>
            </div>

            {/* Guide Exam Button */}
            <button
              onClick={onOpenExam}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-extrabold hover:opacity-95 transition-all shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-100"
              title="Guides must pass 10 questions to become Verified True Guider"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Pass 10-Q Guide Exam</span>
              <span className="sm:hidden">10-Q Exam</span>
            </button>

          </div>

        </div>

        {/* Mobile Sub-bar for Role Switch */}
        <div className="flex md:hidden items-center justify-center pb-3 pt-1">
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 w-full max-w-xs">
            <button
              onClick={() => setCurrentRole('tourist')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'tourist'
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Tourist</span>
            </button>
            <button
              onClick={() => setCurrentRole('guide')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'guide'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-slate-400'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Guide Portal</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
