import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Coins, 
  DollarSign, 
  Milestone, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  guide, 
  touristCoins, 
  onConfirmBooking 
}) {
  const [tripDays, setTripDays] = useState(2);
  const [distanceKm, setDistanceKm] = useState(25);
  const [tripDate, setTripDate] = useState('2026-10-25');
  const [meetingPoint, setMeetingPoint] = useState('Hotel Lobby / City Center');
  const [redeemCoins, setRedeemCoins] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen || !guide) return null;

  // Pricing & Coin Math
  const basePrice = tripDays * guide.dailyRate;
  
  // Redeem tourist coins (max 200 coins = $20 discount, or whatever balance allows)
  const maxCoinsToRedeem = Math.min(200, touristCoins);
  const coinDiscountMoney = redeemCoins ? Math.floor(maxCoinsToRedeem / 10) : 0;
  const finalPriceMoney = Math.max(10, basePrice - coinDiscountMoney);

  // Guide Rewards for this trip:
  // Coins = (distance / 2) + (experienceYears * 10)
  const guideDistanceCoins = Math.round(distanceKm / 2);
  const guideExperienceBonusCoins = guide.experienceYears * 10;
  const totalGuideCoinsAwarded = guideDistanceCoins + guideExperienceBonusCoins;

  // Tourist earns 50 coins upon booking
  const touristCoinsEarned = 50;

  const handleBookTrip = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#3b82f6', '#ffffff']
    });

    setBookingConfirmed(true);

    if (onConfirmBooking) {
      onConfirmBooking({
        guideId: guide.id,
        moneyPaid: finalPriceMoney,
        coinsSpentByTourist: redeemCoins ? maxCoinsToRedeem : 0,
        coinsEarnedByTourist: touristCoinsEarned,
        coinsEarnedByGuide: totalGuideCoinsAwarded,
        distanceKm,
        tripDays
      });
    }
  };

  const handleClose = () => {
    setBookingConfirmed(false);
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
      <div className="relative w-full max-w-xl card-tourism rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!bookingConfirmed ? (
          <div>
            {/* Guide Quick Preview Header */}
            <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
              <img
                src={guide.avatar}
                alt={guide.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/40"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-white">{guide.name}</h3>
                  {guide.verifiedTrueGuider && (
                    <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <ShieldCheck className="w-3 h-3" />
                      True Guider
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{guide.cityName} • ${guide.dailyRate}/day</span>
                </div>
              </div>
            </div>

            {/* Trip Configuration Form */}
            <form onSubmit={handleBookTrip} className="mt-6 space-y-4">
              
              {/* Trip Date & Duration */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Trip Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={tripDate}
                    onChange={(e) => setTripDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Duration (Days)
                  </label>
                  <select
                    value={tripDays}
                    onChange={(e) => setTripDays(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value={1}>1 Full Day Trip</option>
                    <option value={2}>2 Days Guided Journey</option>
                    <option value={3}>3 Days Full Experience</option>
                    <option value={5}>5 Days Extended Expedition</option>
                  </select>
                </div>
              </div>

              {/* Distance Slider */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-300 flex items-center gap-1">
                    <Milestone className="w-3.5 h-3.5 text-sky-400" />
                    Estimated Trip Distance:
                  </span>
                  <span className="font-extrabold text-sky-400">{distanceKm} km</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="text-[10px] text-slate-400">
                  Guides earn distance coins for escorting and guiding you across the city!
                </div>
              </div>

              {/* Meeting Point / Special Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Meeting Point / Accommodation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hotel St. Regis Lobby, or Central Station"
                  value={meetingPoint}
                  onChange={(e) => setMeetingPoint(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Tourist Care Standard Guarantee */}
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/20 text-xs text-sky-200 flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <strong className="text-white">Full-Trip Care Standard:</strong> {guide.name} will handle local cultural translation, crowd avoidance, landmark entry logistics, and your personal safety all over the trip.
                </div>
              </div>

              {/* Tourist Coin Redemption Section */}
              {touristCoins >= 100 && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={redeemCoins}
                      onChange={(e) => setRedeemCoins(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 accent-amber-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        Redeem {maxCoinsToRedeem} Tourist Coins
                      </div>
                      <div className="text-[10px] text-amber-300/80">
                        Apply ${coinDiscountMoney} discount from your coin balance
                      </div>
                    </div>
                  </label>
                  <span className="text-xs font-black text-emerald-400">
                    -${coinDiscountMoney} OFF
                  </span>
                </div>
              )}

              {/* Price & Rewards Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Guiding Fee ({tripDays} days × ${guide.dailyRate})</span>
                  <span className="font-bold text-white">${basePrice}</span>
                </div>

                {redeemCoins && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Coin Reward Discount</span>
                    <span>-${coinDiscountMoney}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline text-sm">
                  <span className="font-bold text-white">Total Trip Price:</span>
                  <span className="text-2xl font-black text-amber-400">${finalPriceMoney}</span>
                </div>

                {/* Coin Earnings generated */}
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="text-amber-300">You will earn:</span>
                  <span className="font-bold text-amber-400">+{touristCoinsEarned} Tourist Coins on completion</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider hover:opacity-95 transition shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm & Book Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Trip Confirmed with {guide.name}!
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your booking for <strong className="text-white">{tripDays} days in {guide.cityName}</strong> is confirmed. {guide.name} has been notified and will meet you at {meetingPoint}.
            </p>

            {/* Trip summary breakdown */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left text-slate-300 space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Money Paid:</span>
                <span className="font-bold text-white">${finalPriceMoney}</span>
              </div>
              {redeemCoins && (
                <div className="flex justify-between text-emerald-400">
                  <span>Coins Redeemed:</span>
                  <span className="font-bold">-{maxCoinsToRedeem} coins (${coinDiscountMoney} saved)</span>
                </div>
              )}
              <div className="flex justify-between text-amber-400">
                <span>Your New Trip Coins:</span>
                <span className="font-bold">+{touristCoinsEarned} coins</span>
              </div>
              <div className="flex justify-between text-sky-400">
                <span>Guide Care:</span>
                <span className="font-bold">All-trip safety & guidance guaranteed</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition cursor-pointer"
            >
              Back to Explorer
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
