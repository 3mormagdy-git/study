import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs uppercase tracking-caps font-mono text-ashGray mb-4">Error 404</span>
      <h1 className="text-5xl md:text-7xl font-light tracking-editorial mb-6">Destination Not Found</h1>
      <p className="text-graphite dark:text-ashGray max-w-md mb-8 font-light">
        The coordinates you are looking for do not exist or have been relocated across our global atlas.
      </p>
      <Link to="/" className="px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
        Back To Home
      </Link>
    </div>
  );
}