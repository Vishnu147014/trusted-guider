import React from 'react';
import { ShieldCheck, Award, Coins, Video, Search, MapPin, Sparkles, HeartHandshake } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

export default function Hero({ 
  selectedCity, 
  setSelectedCity, 
  searchQuery, 
  setSearchQuery,
  verifiedOnly,
  setVerifiedOnly,
  onOpenExam 
}) {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card-tourism border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Dual Coin Economy: Earn Coins for Distance, Experience & Video Reviews</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Book a Verified{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              True Guider
            </span>{' '}
            for Your Dream Journey
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Every guide is tested with a strict <strong className="text-white">10-Question Local Knowledge Exam</strong>. Guides earn money and coins based on distance and experience, while tourists earn coins to reduce future trip costs!
          </p>
        </div>

        {/* Key Feature Pillars */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">10-Q Verified</div>
              <div className="text-[11px] text-slate-400">Anti-fraud tested</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Dual Coin System</div>
              <div className="text-[11px] text-slate-400">Distance & feedback</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">All-Trip Care</div>
              <div className="text-[11px] text-slate-400">Safety & hospitality</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Video Reviews</div>
              <div className="text-[11px] text-slate-400">Bonus coin payouts</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-10 max-w-4xl mx-auto card-tourism rounded-2xl p-4 sm:p-5 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search guide name, language, or specialty (e.g. Rome, history, food)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Verified Only Toggle */}
            <div className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-3 pl-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-emerald-400 select-none">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-500 bg-slate-900 border-slate-700 focus:ring-emerald-400 accent-emerald-500"
                />
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified True Guiders Only
                </span>
              </label>
            </div>

          </div>

          {/* Destination Badges */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
              Popular Destinations:
            </span>
            {DESTINATIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedCity(d.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                  selectedCity === d.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
