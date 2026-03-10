import BaseLayout from '../components/layout/BaseLayout';
import exclamationImg from '../assets/images/24/exclamatioin.svg';
import ambulanceVideo from '../assets/images/24/ambulance.mp4';

const Page24 = () => {
  return (
    <BaseLayout currentPage={24} hideNext={true} showBackToMenu={true}>
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        {/* Video Guide Section */}
        <div className="flex flex-col items-center mb-16 animate-slide-up">
          {/* Text with down arrows */}
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Left Arrow */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block"
              style={{ width: 'clamp(20px, 2vw, 30px)', height: 'clamp(20px, 2vw, 30px)' }}
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden"
              style={{ width: 'clamp(20px, 5vw, 30px)', height: 'clamp(20px, 5vw, 30px)' }}
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <p 
              className="text-center"
              style={{ 
                fontSize: 'clamp(16px, 4vw, 26.3px)',
                fontFamily: '"Open Sans", sans-serif',
                color: '#000000'
              }}
            >
              Tonton Panduan Secara Video disini
            </p>
            
            {/* Right Arrow */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block"
              style={{ width: 'clamp(20px, 2vw, 30px)', height: 'clamp(20px, 2vw, 30px)' }}
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden"
              style={{ width: 'clamp(20px, 5vw, 30px)', height: 'clamp(20px, 5vw, 30px)' }}
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Link Box */}
          <a 
            href="https://drive.google.com/file/d/1jiUuOn8dKwLLlEIsJ65CEi39ubEutTSr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:opacity-80 transition-opacity underline text-center"
            style={{ 
              backgroundColor: '#ffde59',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000',
              wordBreak: 'break-word'
            }}
          >
            Panduan Edukasi Tanda Bahaya pada BBLR
          </a>
        </div>

        <div className="relative text-center mb-8 animate-slide-up">
          <div className="relative">
            <p 
              className="text-black font-bold leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(14px, 3.5vw, 39.9px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              APABILA MENEMUKAN{' '}
              <span className="text-red-600 relative inline-block">
                TANDA BAHAYA,
                <img 
                  src={exclamationImg} 
                  alt="Exclamation"
                  className="absolute animate-slide-up-delay-1 pointer-events-none"
                  style={{ 
                    width: 'clamp(30px, 8vw, 60px)', 
                    height: 'auto',
                    maxHeight: '60px',
                    transform: 'rotate(10deg)',
                    top: 'clamp(-50px, -12vw, -30px)',
                    right: 'clamp(5px, 2vw, 20px)',
                    zIndex: 10
                  }}
                />
              </span>
            </p>
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(20px, 3.5vw, 39.9px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              SEGERA LAPOR KE FASILITAS KESEHATAN TERDEKAT
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl animate-slide-up-delay-2">
          <video 
            src={ambulanceVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page24;
