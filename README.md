# Aura Journeys

A bilingual (English / Arabic) travel website built with React, React Router and Tailwind CSS.

## Features

- Destinations catalog (10 countries) with 5 trips each, plus a details page per trip
- English / Arabic switch with full right-to-left layout
- Light / dark theme
- Sign in / sign up forms with Formik + Yup validation (front-end only — no backend yet)
- Contact / inquiry form

Language, theme and the signed-in user are saved in the browser's `localStorage`.

## Getting started

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm start`     | Run the development server                |
| `npm test`      | Run the tests                             |
| `npm run build` | Build an optimized version into `build/`  |

## Project structure

```
src/
  components/   Navbar, Footer, Reveal (scroll animation), world map background
  context/      Auth, Language and Theme providers
  data/         travelData.js — countries and trips
  pages/        One file per page (Home, Destinations, Trips, TripDetails, ...)
```
