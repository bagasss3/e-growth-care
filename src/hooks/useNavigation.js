import { useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Page routes in order - MUST MATCH App.jsx EXACTLY
const PAGE_ROUTES = [
  '/',                    // Page 1
  '/menu',                // Page 2
  '/pertumbuhan-perkembangan', // Page 3
  '/apa-itu-bblr',        // Page 4
  '/definisi-bblr',       // Page 5
  '/penyebab-bblr',       // Page 6
  '/usia-koreksi',        // Page 7
  '/buku-kia',            // Page 8
  '/cara-perawatan-bblr', // Page 9 (no number!)
  '/cara-perawatan-bblr-2', // Page 10
  '/cara-perawatan-bblr-3', // Page 11
  '/cara-perawatan-bblr-4', // Page 12
  '/apa-itu-kurva-fenton',  // Page 13
  '/pengukuran-berat-badan', // Page 14
  '/pengukuran-panjang-badan', // Page 15
  '/pengukuran-lingkar-kepala', // Page 16
  '/mengukur-antropometri-bayi-kecil', // Page 17
  '/perkembangan-bayi',    // Page 18
  '/usia-koreksi-2-bulan', // Page 19
  '/usia-koreksi-4-bulan', // Page 20
  '/usia-koreksi-6-bulan', // Page 21
  '/video-stimulasi-bayi', // Page 22
  '/tanda-bahaya-bblr',   // Page 23
  '/lapor-faskes',        // Page 24
];

// Special navigation mappings - MUST MATCH PageNavigation.jsx
const SPECIAL_NEXT_PAGES = {
  // Empty - normal flow now
};

const SPECIAL_PREV_PAGES = {
  4: 1,    // Page 4 -> back to Page 1 (Home/Menu)
  9: 8,    // Page 9 -> back to Page 8
  13: 3,   // Page 13 -> back to Page 3
  14: 13,  // Page 14 -> back to Page 13
  15: 14,  // Page 15 -> back to Page 14
  16: 15,  // Page 16 -> back to Page 15
  17: 16,  // Page 17 -> back to Page 16
  18: 3,   // Page 18 -> back to Page 3
  19: 18,  // Page 19 -> back to Page 18
  20: 19,  // Page 20 -> back to Page 19
  21: 20,  // Page 21 -> back to Page 20
  22: 21,  // Page 22 -> back to Page 21
  23: 1,   // Page 23 -> back to Page 1 (Home/Menu)
  24: 23,  // Page 24 (redirect) -> back to Page 23
};

// Pages that should NOT have NEXT navigation (no next button)
const PAGES_WITHOUT_NEXT = [
  1,   // Home/Landing - now includes menu, no next button
  12,  // Page 12 - has Kembali Ke Menu button
  17,  // Antropometri - hideNext=true
  22,  // Video Stimulasi - hideNext=true
  23,  // Tanda Bahaya - merged with Lapor Faskes, last page
];

// Pages that should NOT have PREVIOUS navigation (no prev button)
const PAGES_WITHOUT_PREV = [
  1,   // Landing page - no prev (merged with menu)
  24,  // Redirect page - no prev button needed
];

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const isMultiTouch = useRef(false);

  // Get current page number
  const getCurrentPage = useCallback(() => {
    const index = PAGE_ROUTES.findIndex(route => route === location.pathname);
    return index !== -1 ? index + 1 : 1;
  }, [location.pathname]);

  // Check if NEXT navigation is enabled for current page
  const isNextEnabled = useCallback(() => {
    const currentPage = getCurrentPage();
    return !PAGES_WITHOUT_NEXT.includes(currentPage);
  }, [getCurrentPage]);

  // Check if PREV navigation is enabled for current page
  const isPrevEnabled = useCallback(() => {
    const currentPage = getCurrentPage();
    return !PAGES_WITHOUT_PREV.includes(currentPage);
  }, [getCurrentPage]);

  // Navigate to next page
  const goToNext = useCallback(() => {
    const currentPage = getCurrentPage();
    const nextPage = SPECIAL_NEXT_PAGES[currentPage] || (currentPage < 24 ? currentPage + 1 : null);
    
    if (nextPage && nextPage <= 24) {
      navigate(PAGE_ROUTES[nextPage - 1]);
    }
  }, [getCurrentPage, navigate]);

  // Navigate to previous page
  const goToPrev = useCallback(() => {
    const currentPage = getCurrentPage();
    const prevPage = SPECIAL_PREV_PAGES[currentPage] || (currentPage > 1 ? currentPage - 1 : null);
    
    if (prevPage && prevPage >= 1) {
      navigate(PAGE_ROUTES[prevPage - 1]);
    }
  }, [getCurrentPage, navigate]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Space bar
          // Only go next if next navigation is enabled
          if (!isNextEnabled()) return;
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          // Only go prev if prev navigation is enabled
          if (!isPrevEnabled()) return;
          e.preventDefault();
          goToPrev();
          break;
        case 'Home':
          e.preventDefault();
          navigate(PAGE_ROUTES[0]);
          break;
        case 'End':
          e.preventDefault();
          navigate(PAGE_ROUTES[PAGE_ROUTES.length - 1]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, navigate, isNextEnabled, isPrevEnabled]);

  // Handle touch swipe
  useEffect(() => {
    const handleTouchStart = (e) => {
      // Track if this is a multi-touch gesture (pinch zoom)
      isMultiTouch.current = e.touches.length > 1;
      
      touchStartX.current = e.touches[0].screenX;
      touchStartY.current = e.touches[0].screenY;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e) => {
      // If at any point we have multiple touches, mark as multi-touch
      if (e.touches.length > 1) {
        isMultiTouch.current = true;
      }
    };

    const handleTouchEnd = (e) => {
      // Don't navigate if this was a multi-touch gesture (zoom)
      if (isMultiTouch.current) return;
      
      // Don't navigate if touch was too brief (likely a tap) or too long (likely a scroll)
      const touchDuration = Date.now() - touchStartTime.current;
      if (touchDuration < 100 || touchDuration > 800) return;
      
      // Get the end position
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      
      // Calculate horizontal and vertical distance
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;
      
      // Only handle horizontal swipes (ignore vertical scrolling)
      if (Math.abs(diffX) > Math.abs(diffY)) {
        handleSwipe(diffX);
      }
    };

    const handleSwipe = (diffX) => {
      const swipeThreshold = 150; // Minimum distance for swipe

      if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          // Swiped left - go to next page (if enabled)
          if (!isNextEnabled()) return;
          goToNext();
        } else {
          // Swiped right - go to previous page (if enabled)
          if (!isPrevEnabled()) return;
          goToPrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNext, goToPrev, isNextEnabled, isPrevEnabled]);

  // Handle click on screen edges (desktop)
  useEffect(() => {
    const handleClick = (e) => {
      // Ignore clicks on interactive elements (buttons, links, inputs, etc.)
      const target = e.target;
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.tagName === 'A' || 
                            target.tagName === 'BUTTON' ||
                            target.tagName === 'INPUT' ||
                            target.tagName === 'TEXTAREA' ||
                            target.tagName === 'SELECT';
      
      if (isInteractive) return;

      const screenWidth = window.innerWidth;
      const clickX = e.clientX;
      const edgeThreshold = screenWidth * 0.15; // 15% of screen width

      // Click on left edge - go to previous (if enabled)
      if (clickX < edgeThreshold) {
        if (!isPrevEnabled()) return;
        goToPrev();
      }
      // Click on right edge - go to next (if enabled)
      else if (clickX > screenWidth - edgeThreshold) {
        if (!isNextEnabled()) return;
        goToNext();
      }
    };

    // Only enable edge clicking on desktop (no touch)
    if (!('ontouchstart' in window)) {
      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
    }
  }, [goToNext, goToPrev, isNextEnabled, isPrevEnabled]);

  return { goToNext, goToPrev, currentPage: getCurrentPage(), isNextEnabled, isPrevEnabled };
};

export default useNavigation;
