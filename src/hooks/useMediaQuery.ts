import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  // Check if we are on the client side
  const isClient = typeof window === 'object';

  const [matches, setMatches] = useState<boolean>(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isClient) return; // Skip if not on client

    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query, isClient]);

  return matches;
}

export default useMediaQuery;
