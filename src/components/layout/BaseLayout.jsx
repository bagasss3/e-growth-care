import Navbar from './Navbar';
import PageNavigation from './PageNavigation';
import Logo from './Logo';

const BaseLayout = ({ 
  children, 
  currentPage, 
  hidePrevious = false, 
  hideNext = false,
  showNavbar = true,
  showLogo = true,
  showBackToMenu = false,
  backToMenuUrl = '/menu',
  footerText = null,
  className = ''
}) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e7f9f1' }}>
      {/* Navbar */}
      {showNavbar && <Navbar />}

      {showLogo && (
        <div className="w-full py-4">
          <Logo />
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
          backToMenuUrl={backToMenuUrl}
          footerText={footerText}
        />
      )}
    </div>
  );
};

export default BaseLayout;
