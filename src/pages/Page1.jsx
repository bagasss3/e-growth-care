import BaseLayout from '../components/layout/BaseLayout';
import babySvg from '../assets/images/1/Baby.svg';
import babyMobileSvg from '../assets/images/1/Baby-mobile.svg';

const Page1 = () => {
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
                fontSize: 'clamp(48px, 6vw, 76px)',
                fontFamily: '"Archivo Black", sans-serif'
              }}
            >
              E-GROWTHCARE
            </h1>
            
            <p 
              className="font-bold text-black mb-6 lg:mb-8"
              style={{
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              GROW SMART, CARE BETTER
            </p>
            
            <p 
              className="text-gray-700 mb-8 lg:mb-12 max-w-2xl mx-0 leading-relaxed italic"
              style={{
                fontSize: 'clamp(14px, 2vw, 20px)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Panduan praktis untuk memantau pertumbuhan dan perkembangan 
              Bayi Berat Lahir Rendah (BBLR) secara mandiri, mudah, dan berkelanjutan
            </p>
            

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
      <div className="flex lg:hidden flex-1 flex-col px-6 py-4 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Baby Mobile Image - Center */}
        <div className="flex items-center justify-center w-full" style={{ maxHeight: '35vh', marginBottom: 'clamp(24px, 6vh, 48px)' }}>
          <img 
            src={babyMobileSvg} 
            alt="Baby Illustration" 
            className="w-full h-auto object-contain"
            style={{ maxHeight: '40vh' }}
          />
        </div>

        {/* Description Text */}
        <p 
          className="text-gray-700 text-left leading-relaxed italic mb-4 px-4"
          style={{
            fontSize: 'clamp(16px, 5vw, 22px)',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Panduan praktis untuk memantau pertumbuhan dan perkembangan Bayi Berat Lahir Rendah (BBLR) secara mandiri, mudah, dan berkelanjutan
        </p>
      </div>
    </BaseLayout>
  );
};

export default Page1;
