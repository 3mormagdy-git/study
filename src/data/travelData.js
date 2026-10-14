// Country and place names live in the locale files (src/locales) under
// countries.<id> and places.<placeId>.
import egyptImg from 'assets/img/egypt-giza.jpeg';
import turkeyImg from 'assets/img/turkey-istanbul.jpeg';
import italyImg from 'assets/img/italy-rome-colosseum.jpeg';
import pisaImg from 'assets/img/italy-pisa.jpeg';
import greeceImg from 'assets/img/greece-santorini.jpeg';
import thailandImg from 'assets/img/thailand-lagoon.jpeg';
import indiaImg from 'assets/img/india-taj-mahal.jpeg';
import icelandImg from 'assets/img/iceland-aurora.jpeg';
import usaImg from 'assets/img/usa-golden-gate.jpeg';

const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

// image     -> cover shown on destination cards (local asset when we have one)
// tripImage -> default photo for that country's trips (falls back to `image`)
// featured  -> shown in the Home page destinations section
// isNew     -> gets the NEW badge
export const countriesData = [
  { id: 'egypt', image: egyptImg, tripImage: unsplash('photo-1572252009286-268acec5ca0a'), featured: true },
  { id: 'turkey', image: turkeyImg, tripImage: unsplash('photo-1541432901042-2d8bd64b4a9b'), featured: true },
  { id: 'france', image: unsplash('photo-1499856871958-5b9627545d1a') },
  { id: 'italy', image: italyImg, tripImage: unsplash('photo-1523906834658-6e24ef2386f9'), featured: true },
  { id: 'spain', image: unsplash('photo-1539037116277-4db2020280a8') },
  { id: 'greece', image: greeceImg, tripImage: unsplash('photo-1533105079780-92b9be482077'), featured: true },
  { id: 'uae', image: unsplash('photo-1512632578888-169bbbc64f33') },
  { id: 'japan', image: unsplash('photo-1493976040374-85c8e12f0c0e'), featured: true },
  { id: 'switzerland', image: unsplash('photo-1527668752968-14ce70704971') },
  { id: 'uk', image: unsplash('photo-1513635269975-59693e2d09aa') },
  { id: 'thailand', image: thailandImg, featured: true, isNew: true },
  { id: 'india', image: indiaImg, featured: true, isNew: true },
  { id: 'iceland', image: icelandImg, featured: true, isNew: true },
  { id: 'usa', image: usaImg, isNew: true },
];

// place(placeId, priceUSD, optionalImage). Prices are indicative per-traveler
// listing prices in USD and should be replaced with the agency's real rates.
const place = (placeId, price, image) => ({ placeId, price, image });

const tripLocations = {
  egypt: [place('cairoGiza', 1450, egyptImg), place('nileCruise', 2200), place('hurghada', 1350), place('sharmElSheikh', 1300), place('luxorAswan', 1900)],
  turkey: [place('istanbul', 1650, turkeyImg), place('cappadocia', 1800), place('antalya', 1500), place('bodrum', 1700), place('trabzon', 1400)],
  france: [place('paris', 2400), place('nice', 2600), place('lyon', 2100), place('bordeaux', 2300), place('marseille', 2000)],
  italy: [place('rome', 2300, italyImg), place('venice', 2700), place('florence', 2500), place('amalfiCoast', 3100), place('milan', 2200), place('pisa', 1900, pisaImg)],
  spain: [place('madrid', 2000), place('barcelona', 2300), place('seville', 1900), place('valencia', 1800), place('ibiza', 2600)],
  greece: [place('athens', 1900), place('santorini', 3000, greeceImg), place('mykonos', 3200), place('crete', 2400), place('rhodes', 2200)],
  uae: [place('dubai', 2800), place('abuDhabi', 2600), place('sharjah', 1700), place('rasAlKhaimah', 2100), place('fujairah', 1900)],
  japan: [place('tokyo', 3400), place('kyoto', 3300), place('osaka', 2900), place('hokkaido', 3600), place('okinawa', 3100)],
  switzerland: [place('zurich', 3600), place('geneva', 3500), place('lucerne', 3300), place('zermatt', 4200), place('interlaken', 3700)],
  uk: [place('london', 2900), place('edinburgh', 2500), place('manchester', 2100), place('bath', 2300), place('cornwall', 2400)],
  // The new destinations only have one verified local photograph each, so their
  // trips are chosen to match that photograph (islands, Taj Mahal, aurora, Golden Gate).
  thailand: [place('phuket', 1900), place('krabi', 1800), place('phiPhi', 2000), place('kohSamui', 2100)],
  india: [place('agra', 1400), place('goldenTriangle', 1900)],
  iceland: [place('reykjavik', 3200), place('goldenCircle', 3000), place('southCoast', 3400), place('akureyri', 3300)],
  usa: [place('sanFrancisco', 3300), place('californiaCoast', 3500), place('napaValley', 3100)],
};

export const tripsData = [];
let tripId = 1;

countriesData.forEach((country) => {
  (tripLocations[country.id] || []).forEach(({ placeId, price, image }) => {
    tripsData.push({
      id: tripId++,
      countryId: country.id,
      placeId,
      price,
      image: image || country.tripImage || country.image,
      fallbackImage: country.image,
    });
  });
});

export const tripsById = new Map(tripsData.map((trip) => [trip.id, trip]));

// Returns a positive number, or null when the price is missing or malformed.
export function getTripPrice(trip) {
  const price = Number(trip && trip.price);
  return Number.isFinite(price) && price > 0 ? price : null;
}

export function getCountrySummary(countryId) {
  const list = tripsData.filter((trip) => trip.countryId === countryId);
  const prices = list.map(getTripPrice).filter((price) => price !== null);
  return { count: list.length, fromPrice: prices.length ? Math.min(...prices) : null };
}
