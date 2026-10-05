export const countriesData = [
    { id: 'egypt', nameEn: 'Egypt', nameAr: 'مصر', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80' },
    { id: 'turkey', nameEn: 'Turkey', nameAr: 'تركيا', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
    { id: 'france', nameEn: 'France', nameAr: 'فرنسا', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' },
    { id: 'italy', nameEn: 'Italy', nameAr: 'إيطاليا', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80' },
    { id: 'spain', nameEn: 'Spain', nameAr: 'إسبانيا', image: 'https://images.unsplash.com/photo-1539037116277-4db2020280a8?auto=format&fit=crop&w=800&q=80' },
    { id: 'greece', nameEn: 'Greece', nameAr: 'اليونان', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
    { id: 'uae', nameEn: 'United Arab Emirates', nameAr: 'الإمارات', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80' },
    { id: 'japan', nameEn: 'Japan', nameAr: 'اليابان', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
    { id: 'switzerland', nameEn: 'Switzerland', nameAr: 'سويسرا', image: 'https://images.unsplash.com/photo-1527668752968-14ce70704971?auto=format&fit=crop&w=800&q=80' },
    { id: 'uk', nameEn: 'United Kingdom', nameAr: 'المملكة المتحدة', image: 'https://images.unsplash.com/photo-1513635269975-59693e2d09aa?auto=format&fit=crop&w=800&q=80' },
  ];
  
  // اترك باقي الملف (tripLocations و tripsData) كما هو دون تغيير
  
  // اترك باقي الملف (tripLocations و tripsData) كما هو دون تغيير
  
  // Helper function to generate 5 trips per country dynamically to keep code clean, 
  // resulting in exactly 50 trips.
  const tripLocations = {
    egypt: [
      { en: 'Cairo & Giza', ar: 'القاهرة والجيزة' }, { en: 'Nile Cruise', ar: 'رحلة النيل البحرية' }, 
      { en: 'Hurghada', ar: 'الغردقة' }, { en: 'Sharm El Sheikh', ar: 'شرم الشيخ' }, { en: 'Luxor & Aswan', ar: 'الأقصر وأسوان' }
    ],
    turkey: [
      { en: 'Istanbul', ar: 'إسطنبول' }, { en: 'Cappadocia', ar: 'كابادوكيا' }, 
      { en: 'Antalya', ar: 'أنطاليا' }, { en: 'Bodrum', ar: 'بودروم' }, { en: 'Trabzon', ar: 'طرابزون' }
    ],
    france: [
      { en: 'Paris', ar: 'باريس' }, { en: 'Nice', ar: 'نيس' }, 
      { en: 'Lyon', ar: 'ليون' }, { en: 'Bordeaux', ar: 'بوردو' }, { en: 'Marseille', ar: 'مارسيليا' }
    ],
    italy: [
      { en: 'Rome', ar: 'روما' }, { en: 'Venice', ar: 'البندقية' }, 
      { en: 'Florence', ar: 'فلورنسا' }, { en: 'Amalfi Coast', ar: 'ساحل أمالفي' }, { en: 'Milan', ar: 'ميلانو' }
    ],
    spain: [
      { en: 'Madrid', ar: 'مدريد' }, { en: 'Barcelona', ar: 'برشلونة' }, 
      { en: 'Seville', ar: 'إشبيلية' }, { en: 'Valencia', ar: 'فالنسيا' }, { en: 'Ibiza', ar: 'إيبيزا' }
    ],
    greece: [
      { en: 'Athens', ar: 'أثينا' }, { en: 'Santorini', ar: 'سانتوريني' }, 
      { en: 'Mykonos', ar: 'ميكونوس' }, { en: 'Crete', ar: 'كريت' }, { en: 'Rhodes', ar: 'رودس' }
    ],
    uae: [
      { en: 'Dubai', ar: 'دبي' }, { en: 'Abu Dhabi', ar: 'أبو ظبي' }, 
      { en: 'Sharjah', ar: 'الشارقة' }, { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' }, { en: 'Fujairah', ar: 'الفجيرة' }
    ],
    japan: [
      { en: 'Tokyo', ar: 'طوكيو' }, { en: 'Kyoto', ar: 'كيوتو' }, 
      { en: 'Osaka', ar: 'أوساكا' }, { en: 'Hokkaido', ar: 'هوكايدو' }, { en: 'Okinawa', ar: 'أوكيناوا' }
    ],
    switzerland: [
      { en: 'Zurich', ar: 'زيورخ' }, { en: 'Geneva', ar: 'جنيف' }, 
      { en: 'Lucerne', ar: 'لوسيرن' }, { en: 'Zermatt', ar: 'زيرمات' }, { en: 'Interlaken', ar: 'إنترلاكن' }
    ],
    uk: [
      { en: 'London', ar: 'لندن' }, { en: 'Edinburgh', ar: 'إدنبرة' }, 
      { en: 'Manchester', ar: 'مانشستر' }, { en: 'Bath', ar: 'باث' }, { en: 'Cornwall', ar: 'كورنوال' }
    ]
  };
  
  export const tripsData = [];
  let tripId = 1;
  
  countriesData.forEach(country => {
    tripLocations[country.id].forEach(location => {
      tripsData.push({
        id: tripId++,
        countryId: country.id,
        countryEn: country.nameEn,
        countryAr: country.nameAr,
        titleEn: location.en,
        titleAr: location.ar,
        image: country.image, // Inheriting country image for minimal aesthetic
        durationEn: '5-7 Days',
        durationAr: '٥-٧ أيام',
        descEn: `Explore the profound beauty and architectural marvels of ${location.en}.`,
        descAr: `استكشف الجمال العميق والروائع المعمارية في ${location.ar}.`
      });
    });
  });