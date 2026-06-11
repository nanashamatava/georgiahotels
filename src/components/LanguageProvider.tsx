import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ka';

interface Translations {
  [key: string]: {
    en: string;
    ka: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_cities: { en: 'Cities', ka: 'ქალაქები' },
  nav_explorer: { en: 'Explorer', ka: 'აღმოაჩინე' },
  nav_sign_out: { en: 'Sign Out', ka: 'გამოსვლა' },
  nav_back: { en: 'Back', ka: 'უკან' },
  status_premium: { en: 'Premium Member', ka: 'პრემიუმ წევრი' },

  // Auth Page
  auth_title: { en: 'Authentication', ka: 'ავტორიზაცია' },
  auth_label: { en: 'Secure Gateway / Georgia Stay', ka: 'უსაფრთხო შესვლა / საქართველო' },
  auth_google: { en: 'Sign In with Google', ka: 'შესვლა Google-ით' },
  auth_protocol: { en: 'Geometric Protocol', ka: 'გეომეტრიული პროტოკოლი' },
  auth_agree: { en: 'By continuing, you agree to our', ka: 'გაგრძელებით თქვენ ეთანხმებით' },

  // Dashboard
  hero_label: { en: 'Exploration Hub / Caucasus', ka: 'აღმოჩენების ჰაბი / კავკასია' },
  hero_title_1: { en: 'GEORGIA', ka: 'საქართველო' },
  hero_title_2: { en: 'CURATED', ka: 'რჩეული' },
  hero_title_3: { en: 'STAYS', ka: 'ადგილები' },
  hero_desc: { en: 'Discover exclusive, verified luxury hotels across Georgia\'s historic cities. Polished environments meet traditional hospitality.', ka: 'აღმოაჩინეთ ექსკლუზიური, ვერიფიცირებული ლუქს სასტუმროები საქართველოს ისტორიულ ქალაქებში. თანამედროვე გარემო და ტრადიციული სტუმართმოყვარეობა.' },
  hero_view_cities: { en: 'View Cities', ka: 'ქალაქების ნახვა' },
  hero_learn_more: { en: 'Learn More', ka: 'გაიგე მეტი' },
  hero_members: { en: 'Verified Members', ka: 'ვერიფიცირებული წევრები' },
  hero_featured: { en: 'Featured Destination', ka: 'რჩეული ლოკაცია' },
  hero_top_rated: { en: 'Top Rated', ka: 'მაღალი რეიტინგი' },
  hero_quote: { en: '"Breathtaking mountain views and seamless service."', ka: '"წარმოუდგენელი მთის ხედები და იდეალური სერვისი."' },
  hero_verified_hotels: { en: 'Verified Hotels', ka: 'ვერიფიცირებული სასტუმროები' },

  // Cities Page
  cities_label: { en: 'Regional Directory', ka: 'რეგიონული კატალოგი' },
  cities_title: { en: 'Popular Cities', ka: 'პოპულარული ქალაქები' },
  cities_desc: { en: 'Pick a destination and explore top-notch hospitality in Georgia.', ka: 'აარჩიეთ დანიშნულება და დატკბით საუკეთესო სტუმართმოყვარეობით საქართველოში.' },
  cities_filters: { en: 'Filters', ka: 'ფილტრები' },
  cities_sort: { en: 'Sort By', ka: 'დახარისხება' },
  cities_selection: { en: 'Selection Active', ka: 'შერჩევა აქტიურია' },
  cities_explore: { en: 'Explore Hotels', ka: 'სასტუმროების ნახვა' },

  // Hotels Page
  hotels_loc_profile: { en: 'Location Profile', ka: 'ლოკაციის პროფილი' },
  hotels_curated: { en: 'Curated Hotels', ka: 'რჩეული სასტუმროები' },
  hotels_verified_count: { en: 'verified establishments available', ka: 'ვერიფიცირებული ობიექტი' },
  hotels_reserve_multi: { en: 'Reserve Multiple', ka: 'ჯგუფური დაჯავშნა' },
  hotels_loading: { en: 'Authenticating Inventory...', ka: 'ინვენტარის ავთენტიფიკაცია...' },
  hotels_premium_stay: { en: 'Premium Stay', ka: 'პრემიუმ ადგილი' },
  hotels_per_night: { en: 'per night', ka: 'ღამეში' },
  hotels_manager: { en: 'Property Manager', ka: 'მენეჯერი' },
  hotels_contact_reg: { en: 'Contact Registry', ka: 'საკონტაქტო რეესტრი' },
  hotels_secure: { en: 'Secure Placement', ka: 'ადგილის დაჯავშნა' },
  hotels_empty: { en: 'Inventory Empty', ka: 'ინვენტარი ცარიელია' },
  hotels_expanding: { en: 'Expanding local listings for...', ka: 'ადგილობრივი სიების განახლება...' },
  back_to_cities: { en: 'Back to Cities', ka: 'ქალაქებში დაბრუნება' },
  hotels_grid_view: { en: 'Grid View', ka: 'ბადისებრი ხედი' },
  hotels_map_canvas: { en: 'Map Canvas', ka: 'რუკა' },

  // Booking Modal
  booking_title: { en: 'Secure Booking', ka: 'უსაფრთხო დაჯავშნა' },
  booking_room_type: { en: 'Apartment / Room Type', ka: 'ბინის / ოთახის ტიპი' },
  booking_rooms_count: { en: 'Number of Rooms', ka: 'ოთახების რაოდენობა' },
  booking_name: { en: 'Guest Name', ka: 'სტუმრის სახელი' },
  booking_phone: { en: 'Phone Number', ka: 'ტელეფონის ნომერი' },
  booking_payment: { en: 'Payment Information', ka: 'გადახდის ინფორმაცია' },
  booking_card_number: { en: 'Card Number', ka: 'ბარათის ნომერი' },
  booking_expiry: { en: 'MM/YY', ka: 'თთ/წწ' },
  booking_cvv: { en: 'CVV', ka: 'CVV' },
  booking_confirm: { en: 'Confirm Reservation', ka: 'დაჯავშნის დადასტურება' },
  booking_success: { en: 'Reservation Secured', ka: 'დაჯავშნა დადასტურებულია' },
  booking_close: { en: 'Close', ka: 'დახურვა' },

  // Footer
  footer_platform: { en: 'GEORGIA STAY TRAVEL PLATFORM', ka: 'GEORGIA STAY სამოგზაურო პლატფორმა' },
  footer_terms: { en: 'Terms of Service', ka: 'წესები და პირობები' },
  footer_verified: { en: 'Verified by Google Auth', ka: 'ვერიფიცირებულია Google-ით' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('preferredLanguage') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
