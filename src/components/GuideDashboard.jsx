import React, { useState } from 'react';
import { 
  Coins, 
  DollarSign, 
  Milestone, 
  Clock, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Zap, 
  Star, 
  Video, 
  CheckCircle2, 
  Sparkles, 
  Crown,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GuideDashboard({ 
  currentGuide, 
  onOpenExam,
  onDeductGuideCoins 
}) {
  const [activeBoosts, setActiveBoosts] = useState(['Search Priority Boost (Active)']);
  const [notification, setNotification] = useState('');

  const boostOptions = [
    {
      id: 'priority_search',
      title: 'Priority Search Rank #1',
      desc: 'Be shown first to tourists booking trips in your city for the next 7 days.',
      cost: 300,
      icon: Zap,
      color: 'from-amber-500 to-yellow-400'
    },
    {
      id: 'homepage_spotlight',
      title: 'Homepage Featured Spotlight',
      desc: 'Guaranteed top banner feature viewed by thousands of incoming international travelers.',
      cost: 500,
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'family_office_tier',
      title: 'VIP Family & Luxury Tier Unlock',
      desc: 'Exclusive eligibility for multi-day high-budget private family and luxury concierge tours.',
      cost: 1000,
      icon: Crown,
      color: 'from-emerald-500 to-teal-400'
    }
  ];

  const handleRedeemBoost = (boost) => {
    if (currentGuide.guideCoins < boost.cost) {
      setNotification(`Insufficient coins! You need ${boost.cost} coins. Complete more trips or earn video reviews to gain coins.`);
      setTimeout(() => setNotification(''), 4000);
      return;
    }

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#ffffff']
    });

    if (onDeductGuideCoins) {
      onDeductGuideCoins(boost.cost);
    }

    setActiveBoosts(prev => [...prev, `${boost.title} (Active)`]);
    setNotification(`Success! ${boost.title} activated. Your profile will now attain more trips ahead of other guides!`);
    setTimeout(() => setNotification(''), 4000);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Guide Overview Banner */}
        <div className="card-tourism rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <img
                src={currentGuide.avatar}
                alt={currentGuide.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white">{currentGuide.name}</h2>
                  {currentGuide.verifiedTrueGuider ? (
                    <span className="flex items-center gap-1 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      True Guider Certified
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                      Exam Pending
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Base Destination: <strong className="text-white">{currentGuide.cityName}</strong> • Tier: <strong className="text-amber-400">{currentGuide.tier}</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!currentGuide.verifiedTrueGuider && (
                <button
                  onClick={onOpenExam}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider hover:opacity-95 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  Pass 10-Q Verification Test
                </button>
              )}
            </div>
          </div>

          {/* Toast Notification */}
          {notification && (
            <div className="mt-4 p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-bold animate-in fade-in">
              {notification}
            </div>
          )}

          {/* 4 Core Financial & Reputation Metrics */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1: Total Money Income */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                <span>Total Money Income</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-2">
                ${currentGuide.moneyEarned.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Direct booking payouts + tips
              </div>
            </div>

            {/* Metric 2: Guide Coins Wallet */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-amber-400 text-xs font-bold uppercase">
                <span>Guide Coin Wallet</span>
                <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-2">
                {currentGuide.guideCoins.toLocaleString()} <span className="text-sm font-normal">Coins</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Spend to attain more trips ahead
              </div>
            </div>

            {/* Metric 3: Distance Guided */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-sky-400 text-xs font-bold uppercase">
                <span>Distance Guided</span>
                <Milestone className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-2">
                {currentGuide.totalDistanceKm} <span className="text-sm font-normal text-slate-400">km</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                1 coin awarded per 2 km guided
              </div>
            </div>

            {/* Metric 4: Experience & Rating */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-purple-400 text-xs font-bold uppercase">
                <span>Rating & Reviews</span>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-2">
                {currentGuide.rating} <span className="text-xs text-slate-400 font-normal">({currentGuide.reviewsCount})</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {currentGuide.experienceYears} Years Certified Experience
              </div>
            </div>

          </div>
        </div>

        {/* Coin Mechanics Guide for Guides */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Left: How Guides Gain Coins */}
          <div className="card-tourism rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              How You Gain Guide Coins
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Coins are your career capital on Trusted Guider. You earn them automatically through performance:
            </p>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Milestone className="w-3 h-3" />
                </div>
                <div>
                  <strong className="text-white">Trip Distance Escorted:</strong> Earn 1 Guide Coin for every 2 km walked/traveled with tourists across the city.
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3 h-3" />
                </div>
                <div>
                  <strong className="text-white">Experience Multiplier:</strong> Bonus +15 coins automatically credited per year of certified local experience.
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-3 h-3" />
                </div>
                <div>
                  <strong className="text-white">Video Feedback Supercharge:</strong> Tourists who post video feedback award you <strong className="text-purple-300">+150 bonus coins</strong> per review!
                </div>
              </li>
            </ul>
          </div>

          {/* Right: How to Attain More Trips Ahead of Others */}
          <div className="card-tourism rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Use Coins to Attain More Trips Ahead
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Spend your accumulated coins in the priority exchange to outrank competitors and secure peak tourist bookings:
            </p>

            <div className="space-y-3">
              {boostOptions.map((boost) => (
                <div
                  key={boost.id}
                  className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <boost.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{boost.title}</div>
                      <div className="text-[11px] text-slate-400">{boost.desc}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRedeemBoost(boost)}
                    className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 transition shadow-sm cursor-pointer flex items-center gap-1"
                  >
                    <Coins className="w-3 h-3 fill-slate-950" />
                    <span>{boost.cost} Coins</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Currently Active Boosts */}
            <div className="pt-2 text-xs text-emerald-400 font-bold flex flex-wrap gap-2">
              {activeBoosts.map((b, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  ⚡ {b}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
