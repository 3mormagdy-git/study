import React, { useEffect, useState } from 'react';

// <img> with graceful failure: tries `fallbackSrc` once, then shows a quiet
// text placeholder instead of the browser's broken-image icon.
export default function SmartImage({ src, fallbackSrc, alt, className = '', ...rest }) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setCurrent(src);
    setFailed(!src);
  }, [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex items-center justify-center text-center p-4 bg-graphite/10 dark:bg-graphite/30 text-ashGray font-mono text-xs uppercase tracking-caps"
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc);
        else setFailed(true);
      }}
      {...rest}
    />
  );
}
