import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuideList from './components/GuideList';
import GuideDashboard from './components/GuideDashboard';
import GuideVerificationExamModal from './components/GuideVerificationExamModal';
import BookingModal from './components/BookingModal';
import GuideProfileModal from './components/GuideProfileModal';
import VideoFeedbackModal from './components/VideoFeedbackModal';
import Footer from './components/Footer';
import { INITIAL_GUIDES } from './data/mockData';

export default function App() {
  const [currentRole, setCurrentRole] = useState('tourist'); // 'tourist' | 'guide'
  const [guides, setGuides] = useState(INITIAL_GUIDES);
  const [touristCoins, setTouristCoins] = useState(250); // initial tourist coin balance for testing discounts
  
  // Filtering & Search
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Modals state
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [targetGuideForExam, setTargetGuideForExam] = useState(null);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [targetGuideForBooking, setTargetGuideForBooking] = useState(null);

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [targetGuideForProfile, setTargetGuideForProfile] = useState(null);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [targetGuideForReview, setTargetGuideForReview] = useState(null);

  // Filtered guides calculation
  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      // City filter
      if (selectedCity !== 'all' && g.city !== selectedCity) return false;
      
      // Verified only filter
      if (verifiedOnly && !g.verifiedTrueGuider) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = g.name.toLowerCase().includes(query);
        const matchesCity = g.cityName.toLowerCase().includes(query);
        const matchesLang = g.languages.some(l => l.toLowerCase().includes(query));
        const matchesSpec = g.specialties.some(s => s.toLowerCase().includes(query));
        const matchesBio = g.bio.toLowerCase().includes(query);
        return matchesName || matchesCity || matchesLang || matchesSpec || matchesBio;
      }

      return true;
    });
  }, [guides, selectedCity, verifiedOnly, searchQuery]);

  // Handler: When a guide passes the 10-Question Knowledge Exam
  const handleGuideVerified = (guideId, score) => {
    setGuides(prev => prev.map(g => {
      if (g.id === guideId) {
        return {
          ...g,
          verifiedTrueGuider: true,
          examScore: score,
          guideCoins: g.guideCoins + 250 // verification bonus coins
        };
      }
      return g;
    }));
  };

  // Handler: When tourist confirms a booking
  const handleConfirmBooking = ({
    guideId,
    moneyPaid,
    coinsSpentByTourist,
    coinsEarnedByTourist,
    coinsEarnedByGuide,
    distanceKm
  }) => {
    // Update tourist coin wallet
    setTouristCoins(prev => prev - coinsSpentByTourist + coinsEarnedByTourist);

    // Update guide earnings, coins, and total distance
    setGuides(prev => prev.map(g => {
      if (g.id === guideId) {
        return {
          ...g,
          moneyEarned: g.moneyEarned + moneyPaid,
          guideCoins: g.guideCoins + coinsEarnedByGuide,
          totalDistanceKm: g.totalDistanceKm + distanceKm
        };
      }
      return g;
    }));
  };

  // Handler: When tourist submits video feedback & ratings
  const handleAddReview = (guideId, newReview, hasVideo) => {
    const guideCoinBonus = hasVideo ? 150 : 50;
    const touristCoinBonus = hasVideo ? 100 : 25;

    // Credit tourist
    setTouristCoins(prev => prev + touristCoinBonus);

    // Update guide reviews and coins
    setGuides(prev => prev.map(g => {
      if (g.id === guideId) {
        const updatedReviews = [newReview, ...(g.topReviews || [])];
        const newCount = g.reviewsCount + 1;
        // Recalculate rating
        const newRating = Number(((g.rating * g.reviewsCount + newReview.rating) / newCount).toFixed(2));

        return {
          ...g,
          topReviews: updatedReviews,
          reviewsCount: newCount,
          rating: newRating,
          guideCoins: g.guideCoins + guideCoinBonus
        };
      }
      return g;
    }));
  };

  // Handler: Deduct guide coins when buying priority trips in Guide Portal
  const handleDeductGuideCoins = (cost) => {
    setGuides(prev => prev.map((g, idx) => {
      // Deduct from primary guide (Marco Bellini g1)
      if (idx === 0) {
        return {
          ...g,
          guideCoins: Math.max(0, g.guideCoins - cost)
        };
      }
      return g;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        touristCoins={touristCoins}
        onOpenExam={() => {
          setTargetGuideForExam(guides[0]);
          setExamModalOpen(true);
        }}
      />

      {/* Main Content Area depending on Mode */}
      <main className="flex-grow">
        {currentRole === 'tourist' ? (
          /* Tourist Experience */
          <>
            <Hero
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              verifiedOnly={verifiedOnly}
              setVerifiedOnly={setVerifiedOnly}
              onOpenExam={() => {
                setTargetGuideForExam(guides[0]);
                setExamModalOpen(true);
              }}
            />

            <GuideList
              guides={filteredGuides}
              onSelectGuide={(guide) => {
                setTargetGuideForProfile(guide);
                setProfileModalOpen(true);
              }}
              onBookGuide={(guide) => {
                setTargetGuideForBooking(guide);
                setBookingModalOpen(true);
              }}
              onOpenExamForGuide={(guide) => {
                setTargetGuideForExam(guide);
                setExamModalOpen(true);
              }}
            />
          </>
        ) : (
          /* Guide Earnings & Priority Hub */
          <GuideDashboard
            currentGuide={guides[0]}
            onOpenExam={() => {
              setTargetGuideForExam(guides[0]);
              setExamModalOpen(true);
            }}
            onDeductGuideCoins={handleDeductGuideCoins}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenExam={() => {
          setTargetGuideForExam(guides[0]);
          setExamModalOpen(true);
        }}
      />

      {/* Modals */}
      
      {/* 1. 10-Question Knowledge Exam Modal */}
      <GuideVerificationExamModal
        isOpen={examModalOpen}
        onClose={() => setExamModalOpen(false)}
        targetGuide={targetGuideForExam}
        onGuideVerified={handleGuideVerified}
      />

      {/* 2. Tourist Booking & Coin Discount Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        guide={targetGuideForBooking}
        touristCoins={touristCoins}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* 3. Guide Profile & Video Feedback Viewer */}
      <GuideProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        guide={targetGuideForProfile}
        onOpenBooking={(guide) => {
          setTargetGuideForBooking(guide);
          setBookingModalOpen(true);
        }}
        onOpenReviewModal={(guide) => {
          setTargetGuideForReview(guide);
          setReviewModalOpen(true);
        }}
      />

      {/* 4. Video Feedback & Rating Submission Modal */}
      <VideoFeedbackModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        guide={targetGuideForReview}
        onAddReview={handleAddReview}
      />

    </div>
  );
}
