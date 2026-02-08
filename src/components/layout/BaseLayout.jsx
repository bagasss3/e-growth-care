import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageNavigation from './PageNavigation';
import kemenkesLogo from '../../assets/images/kemenkeas-logo.svg';

const BaseLayout = ({ 
  children, 
  currentPage, 
  hidePrevious = false, 
  hideNext = false,
  showNavbar = true,
  showLogo = true,
  showBackToMenu = false,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      {showNavbar && <Navbar />}

      {showLogo && (
        <div className="w-full px-4 sm:px-8 lg:px-12 py-4">
          <img 
            src={kemenkesLogo} 
            alt="Kemenkes Logo" 
            className="h-20 sm:h-24 lg:h-28 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          />
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-1 flex flex-col ${className}`}>
        {children}
      </main>

      {(currentPage) && (
        <PageNavigation 
          currentPage={currentPage} 
          hidePrevious={hidePrevious}
          hideNext={hideNext}
          showBackToMenu={showBackToMenu}
        />
      )}
    </div>
  );
};

export default BaseLayout;
