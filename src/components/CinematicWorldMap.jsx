import React from 'react';

export default function CinematicWorldMap() {
  const destinations = [
    { name: 'London', cx: 470, cy: 140 },
    { name: 'Paris', cx: 485, cy: 155 },
    { name: 'Rome', cx: 520, cy: 170 },
    { name: 'Cairo', cx: 550, cy: 205 },
    { name: 'Dubai', cx: 620, cy: 220 },
    { name: 'Istanbul', cx: 560, cy: 160 },
    { name: 'New York', cx: 260, cy: 170 },
    { name: 'Tokyo', cx: 850, cy: 170 },
    { name: 'Singapore', cx: 770, cy: 290 },
    { name: 'Sydney', cx: 890, cy: 400 },
  ];

  const routes = [
    { id: 1, path: 'M 470,140 Q 510,160 550,205', duration: '7s', delay: '0s' },
    { id: 2, path: 'M 485,155 Q 550,180 620,220', duration: '9s', delay: '2s' },
    { id: 3, path: 'M 550,205 Q 700,180 850,170', duration: '11s', delay: '1s' },
    { id: 4, path: 'M 260,170 Q 360,110 470,140', duration: '10s', delay: '3s' },
    { id: 5, path: 'M 620,220 Q 700,260 770,290', duration: '8s', delay: '4s' },
    { id: 6, path: 'M 770,290 Q 830,350 890,400', duration: '9s', delay: '2.5s' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* إضاءة خلفية تتكيف مع الشاشات */}
      <div className="absolute w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] rounded-full bg-amber-500/10 dark:bg-zinc-600/10 blur-[100px] md:blur-[140px] animate-atmosphere" />

      {/* خريطة العالم متجاوبة (تصغر على الموبايل لتفادي أي خروج عن الشاشة) */}
      <div className="w-full h-full opacity-50 md:opacity-60 dark:opacity-30 animate-map-pan flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-[200%]: md:w-[130%] lg:w-[110%] h-auto max-w-none stroke-obsidian/40 dark:stroke-parchment/40 fill-none">
          
          <g className="stroke-obsidian/10 dark:stroke-parchment/10" strokeWidth="0.3">
            <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 4" />
            <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="4 4" />
          </g>

          <path d="M 120 120 Q 180 90 230 110 T 280 200 Q 250 320 220 380 Q 200 420 240 440 M 430 100 Q 520 70 580 110 T 630 250 Q 580 360 530 400 M 720 80 Q 820 90 890 160 T 800 350 Q 880 400 840 460" strokeWidth="0.8" className="opacity-40" />

          {routes.map((route) => (
            <path 
              key={`route-${route.id}`}
              d={route.path}
              strokeWidth="0.8"
              className="stroke-obsidian/30 dark:stroke-parchment/30 animate-route-draw"
              style={{ animationDelay: route.delay, animationDuration: route.duration }}
            />
          ))}

          {routes.map((route) => (
            <path 
              key={`light-${route.id}`}
              d={route.path}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stroke-obsidian dark:stroke-parchment animate-route-light"
              style={{ animationDelay: route.delay, animationDuration: route.duration }}
            />
          ))}

          {destinations.map((dest) => (
            <g key={dest.name}>
              <circle cx={dest.cx} cy={dest.cy} r="6" className="fill-obsidian dark:fill-parchment animate-dest-pulse" />
              <circle cx={dest.cx} cy={dest.cy} r="2" className="fill-obsidian dark:fill-parchment" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}