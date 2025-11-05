export const Cobwebs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-15 overflow-hidden">
      {/* Top left cobweb */}
      <svg className="absolute top-0 left-0 w-64 h-64 opacity-40" viewBox="0 0 200 200">
        <path d="M0 0 L100 100 M50 0 L100 100 M100 0 L100 100 M150 0 L100 100 M200 0 L100 100" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="1" fill="none"/>
        <path d="M0 50 L100 100 M0 100 L100 100 M0 150 L100 100" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="1" fill="none"/>
        <ellipse cx="100" cy="100" rx="80" ry="60" 
          stroke="hsl(0 0% 80% / 0.2)" strokeWidth="1" fill="none" transform="rotate(-30 100 100)"/>
        <ellipse cx="100" cy="100" rx="50" ry="35" 
          stroke="hsl(0 0% 80% / 0.2)" strokeWidth="1" fill="none" transform="rotate(-30 100 100)"/>
      </svg>

      {/* Top right cobweb */}
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-40" viewBox="0 0 200 200" style={{ transform: 'scaleX(-1)' }}>
        <path d="M0 0 L100 100 M50 0 L100 100 M100 0 L100 100 M150 0 L100 100 M200 0 L100 100" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="1" fill="none"/>
        <path d="M0 50 L100 100 M0 100 L100 100 M0 150 L100 100" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="1" fill="none"/>
        <ellipse cx="100" cy="100" rx="80" ry="60" 
          stroke="hsl(0 0% 80% / 0.2)" strokeWidth="1" fill="none" transform="rotate(-30 100 100)"/>
      </svg>

      {/* Random smaller cobwebs */}
      <svg className="absolute top-1/4 left-1/3 w-32 h-32 opacity-30 animate-pulse" viewBox="0 0 100 100">
        <path d="M0 0 L50 50 M25 0 L50 50 M50 0 L50 50" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="0.5" fill="none"/>
        <ellipse cx="50" cy="50" rx="30" ry="20" 
          stroke="hsl(0 0% 80% / 0.2)" strokeWidth="0.5" fill="none"/>
      </svg>

      <svg className="absolute top-1/3 right-1/4 w-40 h-40 opacity-25 animate-pulse" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
        <path d="M100 0 L50 50 M75 0 L50 50 M50 0 L50 50" 
          stroke="hsl(0 0% 80% / 0.3)" strokeWidth="0.5" fill="none"/>
        <ellipse cx="50" cy="50" rx="35" ry="25" 
          stroke="hsl(0 0% 80% / 0.2)" strokeWidth="0.5" fill="none"/>
      </svg>
    </div>
  );
};
