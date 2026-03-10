import { useNavigate } from 'react-router-dom';
import kemenkesLogo from '../../assets/images/kemenkeas-logo.svg';

const Logo = ({ className = '', onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/');
    }
  };

  return (
    <div 
      className={`inline-flex items-center justify-start bg-white cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      style={{ 
        height: 'clamp(70px, 8vw, 100px)',
        padding: '6px clamp(40px, 6vw, 80px) 6px clamp(16px, 3vw, 32px)',
        borderRadius: '0 clamp(40px, 4vw, 60px) clamp(40px, 4vw, 60px) 0'
      }}
      onClick={handleClick}
    >
      <img 
        src={kemenkesLogo} 
        alt="Kemenkes Logo" 
        className="h-auto"
        style={{ width: 'clamp(180px, 20vw, 280px)' }}
      />
    </div>
  );
};

export default Logo;
