// أسماء الدول والأماكن موجودة في ملفات الترجمة (src/locales) تحت المفاتيح
// countries.<id> و places.<placeId>
export const countriesData = [
  { id: 'egypt', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80' },
  { id: 'turkey', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80' },
  { id: 'france', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' },
  { id: 'italy', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80' },
  { id: 'spain', image: 'https://images.unsplash.com/photo-1539037116277-4db2020280a8?auto=format&fit=crop&w=800&q=80' },
  { id: 'greece', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
  { id: 'uae', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80' },
  { id: 'japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
  { id: 'switzerland', image: 'https://images.unsplash.com/photo-1527668752968-14ce70704971?auto=format&fit=crop&w=800&q=80' },
  { id: 'uk', image: 'https://images.unsplash.com/photo-1513635269975-59693e2d09aa?auto=format&fit=crop&w=800&q=80' },
];

// 5 أماكن لكل دولة، والنتيجة 50 رحلة بالضبط
const tripLocations = {
  egypt: ['cairoGiza', 'nileCruise', 'hurghada', 'sharmElSheikh', 'luxorAswan'],
  turkey: ['istanbul', 'cappadocia', 'antalya', 'bodrum', 'trabzon'],
  france: ['paris', 'nice', 'lyon', 'bordeaux', 'marseille'],
  italy: ['rome', 'venice', 'florence', 'amalfiCoast', 'milan'],
  spain: ['madrid', 'barcelona', 'seville', 'valencia', 'ibiza'],
  greece: ['athens', 'santorini', 'mykonos', 'crete', 'rhodes'],
  uae: ['dubai', 'abuDhabi', 'sharjah', 'rasAlKhaimah', 'fujairah'],
  japan: ['tokyo', 'kyoto', 'osaka', 'hokkaido', 'okinawa'],
  switzerland: ['zurich', 'geneva', 'lucerne', 'zermatt', 'interlaken'],
  uk: ['london', 'edinburgh', 'manchester', 'bath', 'cornwall'],
};

export const tripsData = [];
let tripId = 1;

countriesData.forEach((country) => {
  tripLocations[country.id].forEach((placeId) => {
    tripsData.push({
      id: tripId++,
      countryId: country.id,
      placeId,
      image: country.image, // Inheriting country image for minimal aesthetic
    });
  });
});
