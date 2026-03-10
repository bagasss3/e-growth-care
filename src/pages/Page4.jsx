import BaseLayout from '../components/layout/BaseLayout';
import Logo from '../components/layout/Logo';
import ponderingWomanImg from '../assets/images/4/pondering-woman.png';
import questionMarkBox from '../assets/images/4/question-mark-text-box.svg';
import questionMarkVideo from '../assets/images/4/question-mark-animation-above-pondering-woman.gif';

const Page4 = () => {
  return (
    <BaseLayout currentPage={4} showLogo={false}>
      <div className="w-full py-4">
        <Logo />
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-2 lg:py-8 overflow-hidden min-h-[calc(100vh-180px)]">
        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex flex-1 flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-start" style={{ marginTop: '-40px' }}>
            <img 
              src={questionMarkVideo}
              alt="Question mark animation"
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
        <div className="flex lg:hidden flex-1 flex-col justify-center gap-2 overflow-hidden">
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

          {/* Woman - Below */}
          <div className="flex flex-col items-center justify-start">
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
