import { useNavigate } from 'react-router-dom';
import kemenkesLogo from '../../assets/images/kemenkeas-logo.svg';

const HeaderWithLogo = ({ children, contentPosition = 'center' }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div 
      className="w-full px-4 sm:px-8 lg:px-12 py-4 flex items-start"
    >
      <div className="flex-shrink-0">
        <img 
          src={kemenkesLogo}
          alt="Kemenkes Logo" 
          className="w-auto cursor-pointer hover:opacity-80 transition-opacity"
          style={{ height: 'clamp(96px, 10vw, 140px)' }}
          onClick={handleLogoClick}
        />
      </div>
      
      <div className={`flex-1 flex ${contentPosition === 'center' ? 'justify-center' : 'justify-end'}`}>
        {children}
      </div>
      
      {contentPosition === 'center' && <div className="flex-shrink-0" style={{ width: 'clamp(96px, 10vw, 140px)' }} />}
    </div>
  );
};

export default HeaderWithLogo;
