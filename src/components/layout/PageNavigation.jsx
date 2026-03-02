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
  13: '/apa-itu-kurva-fenton',
  14: '/pengukuran-berat-badan',
  15: '/pengukuran-panjang-badan',
  16: '/pengukuran-lingkar-kepala',
  17: '/mengukur-antropometri-bayi-kecil',
  18: '/pertumbuhan-bayi',
  19: '/usia-koreksi-2-bulan',
  20: '/usia-koreksi-4-bulan',
  21: '/usia-koreksi-6-bulan',
  22: '/video-stimulasi-bayi',
  23: '/tanda-bahaya-bblr',
  24: '/lapor-faskes',
};

// Special page routing (for branching navigation)
const SPECIAL_NEXT_PAGES = {
  7: 9,    // Page 7 -> Page 9
  12: 8,   // Page 12 -> Page 8
  13: 14,  // Page 13 -> Page 14
  14: 15,  // Page 14 -> Page 15
  15: 16,  // Page 15 -> Page 16
  16: 17,  // Page 16 -> Page 17
  18: 19,  // Page 18 -> Page 19
  19: 20,  // Page 19 -> Page 20
  20: 21,  // Page 20 -> Page 21
  21: 22,  // Page 21 -> Page 22
  22: 23,  // Page 22 -> Page 23
  23: 24,  // Page 23 -> Page 24
};

const SPECIAL_PREV_PAGES = {
  4: 2,    // Page 4 -> back to Page 2 (Menu)
  9: 7,    // Page 9 -> back to Page 7
  8: 12,   // Page 8 -> back to Page 12
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
  23: 2,   // Page 23 -> back to Page 2 (Menu)
  24: 23,  // Page 24 -> back to Page 23
};

const PageNavigation = ({ currentPage, hidePrevious = false, hideNext = false, showBackToMenu = false, footerText = null }) => {
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

      {/* Footer Text in middle */}
      {footerText && (
        <div className="flex-1 px-4 text-center">
          <div 
            className="text-gray-700"
            style={{ fontSize: '23.6px' }}
          >
            {footerText}
          </div>
        </div>
      )}

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
