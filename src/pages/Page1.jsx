import { useNavigate } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import babySvg from '../assets/images/1/Baby.svg';

const Page1 = () => {
  const navigate = useNavigate();

  const handleMulaiClick = () => {
    navigate('/menu');
  };

  return (
    <BaseLayout showNavbar={true} hidePrevious={true} hideNext={true}>
      <div className="flex-1 flex items-center px-4 sm:px-8 lg:px-12">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 h-full">
          
          <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start z-10">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6"
              style={{ color: '#16b4a9' }}
            >
              E-GROWTHCARE
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 lg:mb-8">
              GROW SMART, CARE BETTER
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Panduan praktis untuk memantau pertumbuhan dan perkembangan 
              Bayi Berat Lahir Rendah (BBLR) secara mandiri, mudah, dan berkelanjutan
            </p>
            
            <div className="w-full flex justify-center lg:justify-center">
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
                    textShadow: '3px 3px 0px #000000, 6px 6px 0px rgba(0,0,0,0.4)'
                  }}
                >
                  MULAI
                </span>
              </button>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-full relative overflow-visible">
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
    </BaseLayout>
  );
};

export default Page1;
