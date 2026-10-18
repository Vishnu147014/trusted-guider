import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  Milestone, 
  Coins, 
  Video, 
  ArrowRight, 
  Languages, 
  Award, 
  AlertCircle 
} from 'lucide-react';

export default function GuideList({ 
  guides, 
  onSelectGuide, 
  onBookGuide,
  onOpenExamForGuide 
}) {
  if (guides.length === 0) {
    return (
      <div className="text-center py-16 card-tourism rounded-2xl max-w-lg mx-auto border border-slate-800 p-8">
        <AlertCircle className="w-12 h-12 text-amber-400 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white">No Guides Found</h3>
        <p className="text-xs text-slate-400 mt-1">
          Try clearing your search query or selecting a different destination.
        </p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Available Local Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Showing {guides.length} vetted guides ready to care for your entire trip
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guides.map((guide) => {
            const hasVideos = guide.topReviews?.some(r => r.hasVideo);

            return (
              <div
                key={guide.id}
                className="card-tourism rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div>
                  {/* Top Card Image & Banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Verification Badge */}
                    <div className="absolute top-3 left-3">
                      {guide.verifiedTrueGuider ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/80 text-emerald-300 text-[11px] font-extrabold shadow-lg shadow-black/60 backdrop-blur-md">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>True Guider (10/10 Exam)</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-[11px] font-bold shadow-md backdrop-blur-md">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                          <span>Exam Pending</span>
                        </div>
                      )}
                    </div>

                    {/* Tier badge on top right */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900/80 border border-slate-700 text-amber-400 shadow-md backdrop-blur-md">
                        {guide.tier}
                      </span>
                    </div>

                    {/* City and Name on Bottom of Banner */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                          {guide.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-slate-300 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{guide.cityName}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold text-white">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{guide.rating}</span>
                        <span className="text-[10px] text-slate-400 font-normal">({guide.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    
                    {/* Experience, Distance & Coins Ticker */}
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-center text-xs">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          Exp
                        </div>
                        <div className="font-extrabold text-white mt-0.5">{guide.experienceYears} Yrs</div>
                      </div>

                      <div className="border-x border-slate-800">
                        <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-center gap-1">
                          <Milestone className="w-3 h-3 text-sky-400" />
                          Distance
                        </div>
                        <div className="font-extrabold text-sky-400 mt-0.5">{guide.totalDistanceKm} km</div>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase font-bold text-amber-400 flex items-center justify-center gap-1">
                          <Coins className="w-3 h-3 text-amber-400" />
                          Coins
                        </div>
                        <div className="font-extrabold text-amber-400 mt-0.5">{guide.guideCoins}</div>
                      </div>
                    </div>

                    {/* Short Bio */}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {guide.bio}
                    </p>

                    {/* Specialties Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {guide.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-800/60 text-[11px] font-medium text-slate-300 border border-slate-700/50"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Languages & Video Review Tag */}
                    <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
                      <div className="flex items-center gap-1">
                        <Languages className="w-3.5 h-3.5 text-slate-400" />
                        <span>{guide.languages.join(', ')}</span>
                      </div>
                      
                      {hasVideos && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                          <Video className="w-3 h-3" />
                          Video Reviews
                        </span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Footer of Card: Pricing & CTAs */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 mt-2">
                  <div className="flex items-baseline justify-between mb-4 pt-3">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-bold block">Trip Rates</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-white">${guide.dailyRate}</span>
                        <span className="text-xs text-slate-400">/day</span>
                        <span className="text-[11px] text-slate-400 ml-1.5">(${guide.hourlyRate}/hr)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectGuide(guide)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
                    >
                      View Profile & Videos
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onBookGuide(guide)}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-95 transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Trip With Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {!guide.verifiedTrueGuider && (
                      <button
                        onClick={() => onOpenExamForGuide(guide)}
                        className="px-3 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-xs font-bold border border-emerald-500/30 shrink-0 cursor-pointer"
                        title="Pass 10-Q test to become Verified True Guider"
                      >
                        Verify 10-Q
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
