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
          className="w-auto cursor-pointer hover:opacity-80 transition-opacity"
          style={{ height: 'clamp(96px, 10vw, 140px)' }}
          onClick={handleLogoClick}
        />
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-2 lg:py-8 overflow-hidden min-h-[calc(100vh-180px)]">
        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex flex-1 flex-row items-center justify-center gap-4">
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
              className="w-full max-w-sm lg:max-w-md h-auto animate-slide-left"
            />
          </div>
        </div>

        {/* Mobile Layout - Stacked vertically */}
        <div className="flex lg:hidden flex-1 flex-col items-center justify-center gap-2 overflow-hidden">
          {/* Question Mark Box - On top for mobile */}
          <div className="flex justify-center animate-slide-left">
            <img 
              src={questionMarkBox} 
              alt="Question mark illustration"
              style={{ 
                width: 'clamp(200px, 70vw, 320px)', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </div>

          {/* Video + Woman - Below */}
          <div className="flex flex-col items-center justify-start">
            <video 
              src={questionMarkVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: 'clamp(80px, 20vw, 120px)', height: 'auto' }}
              className="mb-1"
            />
            
            <img 
              src={ponderingWomanImg} 
              alt="Woman thinking about BBLR"
              style={{ 
                width: 'clamp(150px, 45vw, 200px)', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page4;
