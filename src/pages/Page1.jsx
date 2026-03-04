import { useNavigate } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import babySvg from '../assets/images/1/Baby.svg';
import babyMobileSvg from '../assets/images/1/Baby-mobile.svg';

const Page1 = () => {
  const navigate = useNavigate();

  const handleMulaiClick = () => {
    navigate('/menu');
  };

  return (
    <BaseLayout showNavbar={true} hidePrevious={true} hideNext={true}>
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:flex flex-1 items-center px-4 sm:px-8 lg:px-12">
        <div className="w-full flex flex-row items-center justify-between gap-8 h-full">
          
          <div className="flex-1 w-1/2 text-left flex flex-col justify-center items-start z-10">
            <h1 
              className="font-bold mb-4 lg:mb-6"
              style={{ 
                color: '#16b4a9',
                fontSize: '76px',
                fontFamily: '"Archivo Black", sans-serif'
              }}
            >
              E-GROWTHCARE
            </h1>
            
            <p 
              className="font-bold text-black mb-6 lg:mb-8"
              style={{
                fontSize: '34px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              GROW SMART, CARE BETTER
            </p>
            
            <p 
              className="text-gray-700 mb-8 lg:mb-12 max-w-2xl mx-0 leading-relaxed italic"
              style={{
                fontSize: '20px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Panduan praktis untuk memantau pertumbuhan dan perkembangan 
              Bayi Berat Lahir Rendah (BBLR) secara mandiri, mudah, dan berkelanjutan
            </p>
            
            <div className="w-full flex justify-center">
              <button
                onClick={handleMulaiClick}
                className="px-24 py-6 text-3xl lg:text-4xl font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105"
                style={{ 
                  backgroundColor: '#4e6aff',
                  border: '4px solid #ede9e9',
                  color: '#ffffff'
                }}
              >
                <span 
                  className="underline underline-offset-4"
                  style={{
                    textShadow: '3px 3px 0px #000000, 6px 6px 0px rgba(0,0,0,0.4)',
                    fontSize: '58.4px',
                    fontFamily: '"Lilita One", cursive'
                  }}
                >
                  MULAI
                </span>
              </button>
            </div>
          </div>

          <div className="flex-1 w-1/2 flex justify-end items-end h-full relative overflow-visible">
            <img 
              src={babySvg} 
              alt="Baby Illustration" 
              className="w-full h-auto object-contain"
              style={{ 
                maxHeight: 'calc(100% + 100px)',
                marginTop: '-100px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="flex lg:hidden flex-1 flex-col items-center px-6 py-4 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Baby Mobile Image - Center */}
        <div className="flex items-center justify-center w-full" style={{ maxHeight: '35vh' }}>
          <img 
            src={babyMobileSvg} 
            alt="Baby Illustration" 
            className="w-full h-auto object-contain"
            style={{ maxHeight: '40vh' }}
          />
        </div>

        {/* Description Text */}
        <p 
          className="text-gray-700 text-center leading-relaxed italic mb-4 px-4"
          style={{
            fontSize: 'clamp(16px, 5vw, 22px)',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Panduan praktis untuk memantau pertumbuhan dan perkembangan Bayi Berat Lahir Rendah (BBLR) secara mandiri, mudah, dan berkelanjutan
        </p>

        {/* MULAI Button */}
        <button
          onClick={handleMulaiClick}
          className="font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105 px-8 py-4"
          style={{ 
            backgroundColor: '#4e6aff',
            border: '3px solid #ede9e9',
            color: '#ffffff',
            minWidth: '200px',
            width: '70vw',
            maxWidth: '400px'
          }}
        >
          <span 
            className="underline underline-offset-4"
            style={{
              textShadow: '2px 2px 0px #000000, 4px 4px 0px rgba(0,0,0,0.4)',
              fontSize: 'clamp(24px, 8vw, 36px)',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            MULAI
          </span>
        </button>
      </div>
    </BaseLayout>
  );
};

export default Page1;
