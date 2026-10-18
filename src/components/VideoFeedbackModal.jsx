import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Video, 
  Upload, 
  CheckCircle2, 
  Coins, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Camera
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VideoFeedbackModal({ 
  isOpen, 
  onClose, 
  guide, 
  onAddReview 
}) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [touristName, setTouristName] = useState('');
  const [comment, setComment] = useState('');
  const [includeVideo, setIncludeVideo] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !guide) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: 'rev_' + Date.now(),
      touristName: touristName || 'Anonymous Traveler',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating,
      date: 'Just now',
      hasVideo: includeVideo,
      videoDuration: includeVideo ? '0:48' : null,
      comment: comment || 'Amazing guide! Took great care of our entire trip.'
    };

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#f59e0b', '#10b981', '#ffffff']
    });

    setSubmitted(true);

    if (onAddReview) {
      onAddReview(guide.id, newReview, includeVideo);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setComment('');
    setTouristName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg card-tourism rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Video className="w-4 h-4" />
              <span>Video Experience & Guider Feedback</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              Review Your Trip with {guide.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Your feedback is crucial! High ratings and video reviews award bonus coins to your guide, boosting their career and unlocking discount coins for you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Star Rating */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Trip Care & Experience Rating
                </span>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-slate-600 hover:scale-110 transition cursor-pointer"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hoverRating || rating) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs text-amber-400 font-bold mt-2 block">
                  {rating === 5 ? 'Exceptional 5-Star Guiding! (+150 Guide Coins)' : `${rating} Stars Selected`}
                </span>
              </div>

              {/* Tourist Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jessica Taylor"
                  value={touristName}
                  onChange={(e) => setTouristName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                />
              </div>

              {/* Video Feedback Toggle & Simulation */}
              <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Attach Video Testimonial</div>
                      <div className="text-[10px] text-purple-300/80">
                        Earn +100 Tourist Coins & reward your guide with +150 Coins!
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeVideo}
                    onChange={(e) => setIncludeVideo(e.target.checked)}
                    className="w-4 h-4 rounded text-purple-500 accent-purple-500"
                  />
                </label>

                {includeVideo && (
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-purple-500/20 text-xs text-slate-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-white">trip_experience_clip.mp4</span>
                      <span className="text-slate-400 text-[10px]">(0:48 duration attached)</span>
                    </div>
                    <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      Ready
                    </span>
                  </div>
                )}
              </div>

              {/* Written Review */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Trip Feedback & Guide Care Details
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How did the guide take care of you throughout the trip? Mention knowledge, local spots, and overall safety..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>

              {/* Coin Payout Preview */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Coins className="w-4 h-4" />
                  <span>You Earn: +{includeVideo ? 100 : 25} Tourist Coins</span>
                </div>
                <div className="text-emerald-400 font-bold">
                  Guide Receives: +{includeVideo ? 150 : 50} Guide Coins
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs uppercase tracking-wider hover:opacity-95 transition shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Publish Review & Award Coins</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Feedback & Video Published!
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you for sharing your experience. Your review helps other travelers and directly empowers <strong className="text-white">{guide.name}</strong> with vital coins for career growth!
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left max-w-sm mx-auto space-y-2">
              <div className="flex justify-between text-amber-400 font-bold">
                <span>Tourist Coins Added to Your Wallet:</span>
                <span>+{includeVideo ? 100 : 25} Coins</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Guide Coins Awarded to {guide.name}:</span>
                <span>+{includeVideo ? 150 : 50} Coins</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 px-8 py-2.5 rounded-xl bg-purple-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-600 transition cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
