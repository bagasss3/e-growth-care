import { useNavigate } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import ponderingWomanImg from '../assets/images/4/pondering-woman.png';
import questionMarkBox from '../assets/images/4/question-mark-text-box.svg';
import questionMarkVideo from '../assets/images/4/question-mark-animation-above-pondering-woman.mp4';

const Page4 = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <BaseLayout currentPage={4} showLogo={false}>
      <div className="w-full px-4 sm:px-8 lg:px-12 py-4 flex items-center">
        <img 
          src={kemenkesLogo}
          alt="Kemenkes Logo" 
          className="h-20 sm:h-24 lg:h-28 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        />
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-start" style={{ marginTop: '-40px' }}>
            <video 
              src={questionMarkVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-28 h-28 sm:w-32 sm:h-32 mb-1"
            />
            
            <img 
              src={ponderingWomanImg} 
              alt="Woman thinking about BBLR"
              className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] h-auto"
            />
          </div>

          <div className="flex justify-center">
            <img 
              src={questionMarkBox} 
              alt="Question mark illustration"
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page4;
