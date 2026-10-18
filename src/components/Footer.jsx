import React from 'react';
import { Compass, ShieldCheck, Coins, Heart, Video } from 'lucide-react';

export default function Footer({ onOpenExam }) {
  return (
    <footer className="border-t border-slate-800 bg-[#020617] text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black text-white">
                Trusted<span className="text-amber-400">Guider</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The world's leading tourism platform connecting travelers with verified, 10-Question tested local guides. Rewarding guides and tourists with a transparent dual-coin economy.
            </p>

            <div className="flex items-center gap-2 pt-2 text-emerald-400 font-bold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Anti-Fraud & Local Knowledge Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              For Tourists
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-amber-400 transition">How Tourist Coins Work</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Redeem Coins for Discounts</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Video Experience Reviews</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">All-Trip Safety Standards</a></li>
            </ul>
          </div>

          {/* For Guides */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              For Guides
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={onOpenExam} 
                  className="hover:text-emerald-400 transition text-left font-bold text-emerald-400 cursor-pointer"
                >
                  Take 10-Q Knowledge Exam
                </button>
              </li>
              <li><a href="#" className="hover:text-amber-400 transition">Distance & Experience Coin Rewards</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Spend Coins for Priority Trips</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Guide Earnings Guarantee</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} Trusted Guider Technologies. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <span>Crafted for true explorers and dedicated local guides</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
