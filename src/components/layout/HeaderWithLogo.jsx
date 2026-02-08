import { useNavigate } from 'react-router-dom';
import kemenkesLogo from '../../assets/images/kemenkeas-logo.svg';

const HeaderWithLogo = ({ children, contentPosition = 'center' }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div 
      className="w-full px-4 sm:px-8 lg:px-12 py-4 grid items-start"
      style={{ 
        gridTemplateColumns: contentPosition === 'center' ? '1fr auto 1fr' : 'auto 1fr auto'
      }}
    >
      <img 
        src={kemenkesLogo}
        alt="Kemenkes Logo" 
        className="h-20 sm:h-24 lg:h-28 w-auto cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleLogoClick}
      />
      
      <div className={`flex ${contentPosition === 'center' ? 'justify-center' : 'justify-end'}`}>
        {children}
      </div>
      
      {contentPosition === 'center' && <div />}
    </div>
  );
};

export default HeaderWithLogo;
