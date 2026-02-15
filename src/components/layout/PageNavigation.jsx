import { Link } from 'react-router-dom';
import nextPageLogo from '../../assets/images/next-page-logo.svg';
import previousPageLogo from '../../assets/images/previous-page-logo.svg';

const PAGE_ROUTES = {
  1: '/',
  2: '/menu',
  3: '/pertumbuhan-perkembangan',
  4: '/apa-itu-bblr',
  5: '/definisi-bblr',
  6: '/penyebab-bblr',
  7: '/usia-koreksi',
  8: '/buku-kia',
  9: '/cara-perawatan-bblr',
  10: '/cara-perawatan-bblr-2',
  11: '/cara-perawatan-bblr-3',
  12: '/cara-perawatan-bblr-4',
  18: '/pertumbuhan-bayi',
  19: '/usia-koreksi-2-bulan',
  20: '/usia-koreksi-4-bulan',
  21: '/usia-koreksi-6-bulan',
};

// Special page routing (for branching navigation)
const SPECIAL_NEXT_PAGES = {
  7: 9,    // Page 7 -> Page 9
  12: 8,   // Page 12 -> Page 8
  18: 19,  // Page 18 -> Page 19
  19: 20,  // Page 19 -> Page 20
  20: 21,  // Page 20 -> Page 21
};

const SPECIAL_PREV_PAGES = {
  9: 7,    // Page 9 -> back to Page 7
  8: 12,   // Page 8 -> back to Page 12
  18: 3,   // Page 18 -> back to Page 3
  19: 18,  // Page 19 -> back to Page 18
  20: 19,  // Page 20 -> back to Page 19
  21: 20,  // Page 21 -> back to Page 20
};

const PageNavigation = ({ currentPage, hidePrevious = false, hideNext = false, showBackToMenu = false }) => {
  // Use special routing if defined, otherwise use default
  const prevPage = SPECIAL_PREV_PAGES[currentPage] || (currentPage > 1 ? currentPage - 1 : null);
  const nextPageNum = SPECIAL_NEXT_PAGES[currentPage] || (currentPage < Object.keys(PAGE_ROUTES).length ? currentPage + 1 : null);

  return (
    <div className="flex items-center justify-between w-full py-6 px-4 sm:px-8 lg:px-12">
      <div className="flex items-center gap-4">
        {!hidePrevious && prevPage && (
          <Link
            to={PAGE_ROUTES[prevPage]}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous page"
          >
            <img 
              src={previousPageLogo} 
              alt="Previous" 
              className="w-6 h-6"
            />
          </Link>
        )}

        {!hideNext && nextPageNum && (
          <Link
            to={PAGE_ROUTES[nextPageNum]}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next page"
          >
            <img 
              src={nextPageLogo} 
              alt="Next" 
              className="w-6 h-6"
            />
          </Link>
        )}
      </div>

      <div>
        {showBackToMenu && (
          <Link
            to="/menu"
            className="px-6 py-3 bg-[#16b4a9] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
          >
            Kembali Ke Menu Utama
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
