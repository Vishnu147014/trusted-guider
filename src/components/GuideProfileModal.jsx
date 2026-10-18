import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  Milestone, 
  Coins, 
  Video, 
  Play, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Heart
} from 'lucide-react';

export default function GuideProfileModal({ 
  isOpen, 
  onClose, 
  guide, 
  onOpenBooking, 
  onOpenReviewModal 
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!isOpen || !guide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl card-tourism rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-slate-800">
          <img
            src={guide.avatar}
            alt={guide.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-2 border-amber-500/50 shadow-xl"
          />

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">{guide.name}</h2>
              {guide.verifiedTrueGuider ? (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-black shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  10-Q Certified True Guider
                </span>
              ) : (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold">
                  Exam Pending
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {guide.cityName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-bold text-white">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {guide.rating} ({guide.reviewsCount} reviews)
              </span>
              <span>•</span>
              <span className="text-amber-400 font-extrabold uppercase">{guide.tier}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {guide.bio}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 my-6 text-center text-xs">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-400">Experience</div>
            <div className="text-base font-black text-white mt-0.5">{guide.experienceYears} Years</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-sky-400">Distance</div>
            <div className="text-base font-black text-sky-400 mt-0.5">{guide.totalDistanceKm} km</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-amber-400">Guide Coins</div>
            <div className="text-base font-black text-amber-400 mt-0.5">{guide.guideCoins}</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-emerald-400">Total Income</div>
            <div className="text-base font-black text-emerald-400 mt-0.5">${guide.moneyEarned}</div>
          </div>
        </div>

        {/* Specialties & Languages */}
        <div className="space-y-4 pb-6 border-b border-slate-800">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Curated Specialties & Secret Spots:
            </h4>
            <div className="flex flex-wrap gap-2">
              {guide.specialties.map((spec, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Spoken Languages:
            </h4>
            <span className="text-xs text-slate-300 font-semibold">
              {guide.languages.join(' • ')}
            </span>
          </div>
        </div>

        {/* Video Reviews & Tourist Feedback Section */}
        <div className="my-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-400" />
                Tourist Video Experiences & Feedback
              </h3>
              <p className="text-xs text-slate-400">
                Tourists earn coins and reward the guide by sharing honest video feedback!
              </p>
            </div>

            <button
              onClick={() => onOpenReviewModal(guide)}
              className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 text-xs font-bold border border-purple-500/40 flex items-center gap-1.5 transition cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Record & Add Review</span>
            </button>
          </div>

          {/* Video modal preview if active */}
          {activeVideo && (
            <div className="mb-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 relative animate-in fade-in">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕ Close Player
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
                  <Play className="w-6 h-6 fill-purple-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Playing Video Review ({activeVideo.videoDuration})</h4>
                  <p className="text-xs text-slate-300">By {activeVideo.touristName} — "{activeVideo.comment}"</p>
                </div>
              </div>
            </div>
          )}

          {/* List of Reviews */}
          <div className="space-y-3">
            {guide.topReviews && guide.topReviews.length > 0 ? (
              guide.topReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.avatar}
                        alt={rev.touristName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{rev.touristName}</div>
                        <div className="text-[10px] text-slate-400">{rev.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    "{rev.comment}"
                  </p>

                  {rev.hasVideo && (
                    <div className="pt-1">
                      <button
                        onClick={() => setActiveVideo(rev)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold hover:bg-purple-500/25 transition cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-purple-300" />
                        <span>Watch Video Feedback ({rev.videoDuration})</span>
                        <span className="text-[10px] text-emerald-400 font-normal">+150 Coins Awarded</span>
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-4 rounded-xl bg-slate-900 text-center text-xs text-slate-400">
                No reviews yet. Be the first tourist to review and earn 100 tourist coins!
              </div>
            )}
          </div>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Pricing</span>
            <div className="text-2xl font-black text-white">
              ${guide.dailyRate}<span className="text-xs text-slate-400 font-normal"> /day</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(guide);
            }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider hover:opacity-95 transition shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Book Trip With {guide.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
