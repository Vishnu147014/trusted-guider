export const DESTINATIONS = [
  { id: 'all', name: 'All Destinations', country: 'Global' },
  { id: 'rome', name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80' },
  { id: 'kyoto', name: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
  { id: 'agra', name: 'Agra (Taj Mahal)', country: 'India', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
  { id: 'paris', name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
  { id: 'cairo', name: 'Cairo & Giza', country: 'Egypt', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80' },
  { id: 'bali', name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
];

export const INITIAL_GUIDES = [
  {
    id: 'g1',
    name: 'Marco Bellini',
    city: 'rome',
    cityName: 'Rome, Italy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: true,
    examScore: 10,
    rating: 4.98,
    reviewsCount: 168,
    experienceYears: 8,
    totalDistanceKm: 2450,
    guideCoins: 4820,
    moneyEarned: 18450,
    hourlyRate: 35,
    dailyRate: 180,
    languages: ['English', 'Italian', 'Spanish'],
    tier: 'Platinum Guider',
    bio: 'Born in Trastevere, archaeological researcher specializing in Imperial Rome, ancient aqueducts, and authentic family-owned trattorias.',
    specialties: ['Ancient Colosseum Secrets', 'Vatican Hidden Passages', 'Culinary Tasting Walks', 'Night Photography'],
    topReviews: [
      {
        id: 'r1',
        touristName: 'Sophia Miller',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '2 days ago',
        hasVideo: true,
        videoDuration: '0:45',
        videoThumbnail: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80',
        comment: 'Marco took care of my parents and me across 4 days in Rome! He skipped every tourist trap and answered every obscure historical question. Truly a Verified True Guider!'
      },
      {
        id: 'r2',
        touristName: 'Liam Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '1 week ago',
        hasVideo: false,
        comment: 'Unbelievable knowledge of the Roman Forum. Highly recommend booking him early!'
      }
    ]
  },
  {
    id: 'g2',
    name: 'Kenji Takahashi',
    city: 'kyoto',
    cityName: 'Kyoto, Japan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: true,
    examScore: 10,
    rating: 4.96,
    reviewsCount: 142,
    experienceYears: 6,
    totalDistanceKm: 1980,
    guideCoins: 3950,
    moneyEarned: 15200,
    hourlyRate: 38,
    dailyRate: 195,
    languages: ['Japanese', 'English'],
    tier: 'Gold Guider',
    bio: 'Licensed national guide-interpreter and former Zen temple apprentice. Providing tranquil journeys through bamboo groves, shrines, and tea ceremonies.',
    specialties: ['Fushimi Inari Sunrise Trek', 'Gion Geisha Etiquette', 'Matcha Tea Masters', 'Historic Temples'],
    topReviews: [
      {
        id: 'r3',
        touristName: 'Emma Watson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '3 days ago',
        hasVideo: true,
        videoDuration: '1:12',
        videoThumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80',
        comment: 'Kenji made our Kyoto journey unforgettable! He explained the philosophy of Zen gardens and guided us smoothly through Arashiyama.'
      }
    ]
  },
  {
    id: 'g3',
    name: 'Aarav Sharma',
    city: 'agra',
    cityName: 'Agra, India',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: true,
    examScore: 10,
    rating: 4.99,
    reviewsCount: 215,
    experienceYears: 9,
    totalDistanceKm: 3100,
    guideCoins: 5980,
    moneyEarned: 22400,
    hourlyRate: 25,
    dailyRate: 130,
    languages: ['English', 'Hindi', 'French'],
    tier: 'Platinum Guider',
    bio: 'Government Ministry of Tourism certified guide. 9+ years unraveling Mughal architecture, romantic history of Shah Jahan, and secret Taj sunrise vantage points.',
    specialties: ['Sunrise Taj Mahal Access', 'Agra Fort Red Sandstone', 'Artisan Marble Inlay Art', 'Old Bazaar Heritage'],
    topReviews: [
      {
        id: 'r4',
        touristName: 'Carlos Gomez',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '5 days ago',
        hasVideo: true,
        videoDuration: '0:58',
        videoThumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80',
        comment: 'Aarav is an absolute treasure! He knew all the optical illusions in the Taj architecture and saved us hours of queue time.'
      }
    ]
  },
  {
    id: 'g4',
    name: 'Amélie Laurent',
    city: 'paris',
    cityName: 'Paris, France',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: true,
    examScore: 9,
    rating: 4.94,
    reviewsCount: 110,
    experienceYears: 5,
    totalDistanceKm: 1540,
    guideCoins: 2890,
    moneyEarned: 13800,
    hourlyRate: 40,
    dailyRate: 210,
    languages: ['French', 'English', 'German'],
    tier: 'Gold Guider',
    bio: 'Art historian educated at Sorbonne. Passionate about Montmartre artists, secret courtyards of Le Marais, and French pastry craft.',
    specialties: ['Louvre Masterpieces in 2h', 'Montmartre Hidden Vineyards', 'Latin Quarter Stories', 'Pastry & Baguette Tours'],
    topReviews: [
      {
        id: 'r5',
        touristName: 'Hannah Davies',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '1 week ago',
        hasVideo: false,
        comment: 'Amélie is charming and exceptionally knowledgeable. Loved discovering hidden Paris away from crowds!'
      }
    ]
  },
  {
    id: 'g5',
    name: 'Tarek Mansour',
    city: 'cairo',
    cityName: 'Cairo, Egypt',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: true,
    examScore: 10,
    rating: 4.97,
    reviewsCount: 189,
    experienceYears: 10,
    totalDistanceKm: 3400,
    guideCoins: 6320,
    moneyEarned: 24100,
    hourlyRate: 30,
    dailyRate: 150,
    languages: ['Arabic', 'English', 'Spanish'],
    tier: 'Platinum Guider',
    bio: 'Certified Egyptologist. Specializing in Great Pyramid astronomy, the Sphinx, and the Grand Egyptian Museum treasures.',
    specialties: ['Giza Pyramid Complex', 'Hieroglyph Decryption', 'Khan el-Khalili Spice Alley', 'Saqqara Step Pyramid'],
    topReviews: [
      {
        id: 'r6',
        touristName: 'Oliver Smith',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '4 days ago',
        hasVideo: true,
        videoDuration: '1:30',
        videoThumbnail: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=400&q=80',
        comment: 'Tarek made Egypt come alive! He protected us from aggressive street vendors and took unbelievable photos.'
      }
    ]
  },
  {
    id: 'g6',
    name: 'Wayan Subawa',
    city: 'bali',
    cityName: 'Bali, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
    verifiedTrueGuider: false,
    examScore: null,
    rating: 4.88,
    reviewsCount: 45,
    experienceYears: 3,
    totalDistanceKm: 890,
    guideCoins: 1120,
    moneyEarned: 4800,
    hourlyRate: 20,
    dailyRate: 95,
    languages: ['Indonesian', 'English'],
    tier: 'Silver Guider',
    bio: 'Local Balinese guide from Ubud. Guiding waterfall treks, rice terrace walks, and sacred purification temple rituals.',
    specialties: ['Tegallalang Rice Terraces', 'Tirta Empul Water Temple', 'Mount Batur Sunrise Hike', 'Authentic Warung Food'],
    topReviews: []
  }
];

// TOP 10 KNOWLEDGE VERIFICATION EXAMS (The True Guider Test)
export const KNOWLEDGE_EXAMS = {
  rome: {
    city: 'Rome',
    questions: [
      {
        id: 1,
        question: 'In what year was the Roman Colosseum officially inaugurated by Emperor Titus?',
        options: ['80 AD', '44 BC', '312 AD', '125 AD'],
        correctIndex: 0,
        explanation: 'The Colosseum was completed in 80 AD under Emperor Titus with 100 days of games.'
      },
      {
        id: 2,
        question: 'What is unique about the central opening in the dome of the Pantheon?',
        options: ['It is made of tinted quartz', 'It is an open oculus exposed to rain and sun', 'It was sealed with gold foil in 1800', 'It only lets in air, not light'],
        correctIndex: 1,
        explanation: 'The Pantheon has a 9-meter open oculus; rain falls to the floor where hidden drainage holes remove water.'
      },
      {
        id: 3,
        question: 'According to tradition, how should you throw a coin into the Trevi Fountain to ensure your return to Rome?',
        options: ['Left hand over left shoulder', 'Right hand over left shoulder', 'Both hands facing forward', 'Backwards with eyes closed'],
        correctIndex: 1,
        explanation: 'Legend dictates using your right hand over your left shoulder to ensure a return to the Eternal City.'
      },
      {
        id: 4,
        question: 'Vatican City is an independent sovereign state established by which historical treaty?',
        options: ['Treaty of Versailles (1919)', 'Lateran Pacts (1929)', 'Treaty of Rome (1957)', 'Peace of Westphalia (1648)'],
        correctIndex: 1,
        explanation: 'The Lateran Pacts of 1929 recognized the full sovereignty of the Holy See over Vatican City.'
      },
      {
        id: 5,
        question: 'Which of Rome’s historic seven hills was the legendary founding site by Romulus?',
        options: ['Aventine Hill', 'Capitoline Hill', 'Palatine Hill', 'Esquiline Hill'],
        correctIndex: 2,
        explanation: 'Romulus founded Rome on the Palatine Hill in 753 BC.'
      },
      {
        id: 6,
        question: 'What was the Circus Maximus primarily used for in Ancient Rome?',
        options: ['Gladiatorial naval battles', 'Chariot racing', 'Senate election votes', 'Public executions only'],
        correctIndex: 1,
        explanation: 'The Circus Maximus held over 150,000 spectators for thrilling chariot races.'
      },
      {
        id: 7,
        question: 'What authentic Roman pasta dish is traditionally prepared with guanciale, pecorino romano, and black pepper (no tomatoes or eggs)?',
        options: ['Carbonara', 'Amatriciana', 'Cacio e Pepe', 'Gricia (Pasta alla Gricia)'],
        correctIndex: 3,
        explanation: 'Pasta alla Gricia is the historic ancestor of Carbonara and Amatriciana, featuring cured pork cheek and pecorino.'
      },
      {
        id: 8,
        question: 'Where is the famous sculpture "The Ecstasy of Saint Teresa" by Gian Lorenzo Bernini located?',
        options: ['Saint Peter’s Basilica', 'Santa Maria della Vittoria', 'Borghese Gallery', 'Piazza Navona'],
        correctIndex: 1,
        explanation: 'Bernini’s baroque masterpiece is housed in the Cornaro Chapel of Santa Maria della Vittoria.'
      },
      {
        id: 9,
        question: 'What ancient stone road is known as the "Queen of Long Roads" (Regina Viarum)?',
        options: ['Via Flaminia', 'Via Appia Antica (Appian Way)', 'Via Aurelia', 'Via Salaria'],
        correctIndex: 1,
        explanation: 'Via Appia Antica connected Rome to Brindisi and was deemed the Queen of Roads.'
      },
      {
        id: 10,
        question: 'What is the local etiquette regarding ordering a Cappuccino in Rome?',
        options: ['Only ordered after 8 PM dinner', 'Customarily enjoyed in the morning, rarely after 11 AM or lunch', 'Never served with milk', 'Must be consumed seated only'],
        correctIndex: 1,
        explanation: 'Italians drink milk coffees exclusively in the morning; ordering one after a heavy meal is considered a tourist mistake.'
      }
    ]
  },
  kyoto: {
    city: 'Kyoto',
    questions: [
      {
        id: 1,
        question: 'What is the iconic visual feature of Fushimi Inari Taisha?',
        options: ['Thousands of vibrant vermillion Torii gates', 'A 50-meter golden pagoda', 'An underwater stone lantern', 'A white gravel dragon labyrinth'],
        correctIndex: 0,
        explanation: 'Fushimi Inari features thousands of vermillion torii gates winding up sacred Mount Inari.'
      },
      {
        id: 2,
        question: 'What is the top two floors of Kinkaku-ji covered in?',
        options: ['Solid silver leaf', 'Pure gold leaf', 'Polished white marble', 'Lacquered red cedar'],
        correctIndex: 1,
        explanation: 'Kinkaku-ji (The Golden Pavilion) has its top two floors draped in genuine gold leaf.'
      },
      {
        id: 3,
        question: 'Kyoto was the imperial capital of Japan for over a millennium before Tokyo, starting in:',
        options: ['794 AD (Heian period)', '1603 AD (Edo period)', '1868 AD (Meiji restoration)', '500 BC'],
        correctIndex: 0,
        explanation: 'Kyoto served as the imperial capital from 794 AD until the emperor moved to Tokyo in 1868.'
      },
      {
        id: 4,
        question: 'In traditional Japanese Zen rock gardens like Ryoan-ji, how many rocks are arranged such that you can never see all of them simultaneously from any vantage point?',
        options: ['12 rocks', '15 rocks', '21 rocks', '8 rocks'],
        correctIndex: 1,
        explanation: 'Ryoan-ji has 15 rocks arranged so that from any perspective, at least one remains hidden, symbolizing human imperfection.'
      },
      {
        id: 5,
        question: 'What is the correct respectful term for an apprentice geisha in Kyoto?',
        options: ['Geiko', 'Maiko', 'Sensei', 'Miko'],
        correctIndex: 1,
        explanation: 'In Kyoto, apprentice geishas are called Maiko, while fully licensed artists are called Geiko.'
      },
      {
        id: 6,
        question: 'What world-famous bamboo forest is located in western Kyoto?',
        options: ['Nara Park Grove', 'Arashiyama Bamboo Grove', 'Uji Tea Mountain', 'Hakone Mist Forest'],
        correctIndex: 1,
        explanation: 'Arashiyama Bamboo Grove is one of Kyoto’s most atmospheric natural landmarks.'
      },
      {
        id: 7,
        question: 'What historic street in Gion is famous for preserved machiya wooden teahouses?',
        options: ['Takeshita Street', 'Hanami-koji Dori', 'Dotonbori', 'Omotesando'],
        correctIndex: 1,
        explanation: 'Hanami-koji Dori in Gion is lined with historic 17th-century wooden tea houses.'
      },
      {
        id: 8,
        question: 'Which Kyoto district is universally renowned for producing Japan’s finest matcha green tea?',
        options: ['Uji', 'Kobe', 'Osaka', 'Nagoya'],
        correctIndex: 0,
        explanation: 'Uji, just south of Kyoto, is the historic heartland of premium matcha cultivation.'
      },
      {
        id: 9,
        question: 'At a Shinto shrine, what is the traditional purification ritual at the temizuya water pavilion before praying?',
        options: ['Wash feet then face', 'Rinse left hand, right hand, mouth, then ladle handle', 'Drink three full cups of water', 'Bow three times into the basin'],
        correctIndex: 1,
        explanation: 'Purification requires washing the left hand, right hand, rinsing mouth, and cleansing the ladle.'
      },
      {
        id: 10,
        question: 'Why was Kyoto spared from major atomic and firebombing destruction during World War II?',
        options: ['It had natural mountain anti-aircraft shields', 'US Secretary of War Henry Stimson intervened due to its immense cultural value', 'The Japanese emperor surrendered inside Kyoto', 'Bad weather diverted all flights'],
        correctIndex: 1,
        explanation: 'Henry Stimson admired Kyoto from previous personal visits and struck it from bombing target lists.'
      }
    ]
  },
  agra: {
    city: 'Agra',
    questions: [
      {
        id: 1,
        question: 'Who commissioned the Taj Mahal in memory of his beloved wife Mumtaz Mahal?',
        options: ['Emperor Akbar', 'Emperor Shah Jahan', 'Emperor Babur', 'Emperor Aurangzeb'],
        correctIndex: 1,
        explanation: 'Shah Jahan commissioned the magnificent white marble mausoleum in 1632.'
      },
      {
        id: 2,
        question: 'What special optical feature is designed into the four minarets flanking the Taj Mahal?',
        options: ['They lean slightly outward to prevent damage to the tomb during earthquakes', 'They reflect pink light only at sunset', 'They are hollow water reservoirs', 'They contain solar clocks on top'],
        correctIndex: 0,
        explanation: 'Architects tilted the minarets slightly outward so if they ever collapse, they fall away from the tomb.'
      },
      {
        id: 3,
        question: 'What semi-precious stone inlay technique is famously showcased across the marble walls of the Taj Mahal?',
        options: ['Cloisonné', 'Pietra Dura (Parchin Kari)', 'Filigree', 'Meenakari'],
        correctIndex: 1,
        explanation: 'Parchin Kari (Pietra Dura) uses lapis lazuli, jade, turquoise, and mother of pearl inlaid into white Makrana marble.'
      },
      {
        id: 4,
        question: 'Where was Shah Jahan imprisoned by his son Aurangzeb during his final years, gazing at the Taj Mahal?',
        options: ['Fatehpur Sikri', 'Agra Fort (Musamman Burj)', 'Red Fort in Delhi', 'Gwalior Fort'],
        correctIndex: 1,
        explanation: 'Shah Jahan spent his final years under house arrest in Musamman Burj inside Agra Fort.'
      },
      {
        id: 5,
        question: 'Across the Yamuna River directly behind the Taj Mahal lies which garden complex offering stunning sunset reflections?',
        options: ['Shalimar Bagh', 'Mehtab Bagh (Moonlight Garden)', 'Lodhi Garden', 'Nishat Bagh'],
        correctIndex: 1,
        explanation: 'Mehtab Bagh was planned by Shah Jahan as the ultimate viewing pavilion across the Yamuna.'
      },
      {
        id: 6,
        question: 'What famous sweet confectionery made from winter melon is Agra’s culinary signature?',
        options: ['Rasgulla', 'Petha', 'Jalebi', 'Kaju Katli'],
        correctIndex: 1,
        explanation: 'Agra Petha is a legendary soft translucent candy crafted from white pumpkin/ash gourd.'
      },
      {
        id: 7,
        question: 'The ghost city of Fatehpur Sikri near Agra was built by which emperor and later abandoned due to water shortages?',
        options: ['Akbar the Great', 'Humayun', 'Jahangir', 'Bahadur Shah'],
        correctIndex: 0,
        explanation: 'Akbar built Fatehpur Sikri as his capital in 1571, later abandoned due to lack of water.'
      },
      {
        id: 8,
        question: 'Why is the Taj Mahal closed to all tourists on Fridays?',
        options: ['Structural cooling maintenance', 'Reserved exclusively for Friday congregational prayers at the mosque', 'Archaeological cleaning', 'National holiday'],
        correctIndex: 1,
        explanation: 'The Taj complex is closed to general visitors on Fridays to accommodate Muslim worshippers at the adjacent mosque.'
      },
      {
        id: 9,
        question: 'What natural river flows immediately alongside the Taj Mahal?',
        options: ['Ganges River', 'Yamuna River', 'Indus River', 'Brahmaputra River'],
        correctIndex: 1,
        explanation: 'The Yamuna River provides the iconic backdrop and historical timber foundation moisture for the Taj.'
      },
      {
        id: 10,
        question: 'What is the only intentionally asymmetrical object inside the central burial chamber of the Taj Mahal?',
        options: ['The main chandelier', 'The cenotaph of Shah Jahan placed beside Mumtaz Mahal', 'The north window arch', 'The marble lattice screen'],
        correctIndex: 1,
        explanation: 'Mumtaz Mahal’s cenotaph is in the exact center; Shah Jahan’s larger cenotaph was added later beside hers.'
      }
    ]
  }
};
