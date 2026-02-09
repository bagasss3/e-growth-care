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
};

const PageNavigation = ({ currentPage, hidePrevious = false, hideNext = false, showBackToMenu = false }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPageNum = currentPage < Object.keys(PAGE_ROUTES).length ? currentPage + 1 : null;

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
