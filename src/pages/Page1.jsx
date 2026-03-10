import BaseLayout from '../components/layout/BaseLayout';
import babySvg from '../assets/images/1/Baby.svg';
import babyMobileSvg from '../assets/images/1/Baby-mobile.svg';
import bblrImg from '../assets/images/2/Bayi Berat Badan Lahir Rendah.png';
import tumbuhKembangImg from '../assets/images/2/Tumbuh Kembang Bayi Berat Badan Lahir Rendah.png';
import tandaBahayaImg from '../assets/images/2/Tanda Bahaya BBLR.png';

const Page1 = () => {
  return (
    <BaseLayout showNavbar={true} hidePrevious={true} hideNext={true}>
      {/* Desktop Layout - Landing Section */}
      <div className="hidden lg:flex flex-1 items-center px-4 sm:px-8 lg:px-12 min-h-screen">
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

      {/* Mobile Layout - Landing Section */}
      <div className="flex lg:hidden flex-col px-6 py-4 mb-4">
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

      {/* Menu Section - Desktop */}
      <div className="hidden lg:block pt-4 pb-12">
        <h1 
          className="font-bold text-center animate-slide-up mb-6"
          style={{ 
            color: '#004aad',
            fontSize: 'clamp(36px, 4vw, 61.7px)',
            fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
          }}
        >
          PILIH MATERI
        </h1>

        <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16">
          <div className="flex-1 flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <a
                href="/apa-itu-bblr"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[200px] lg:min-h-[360px]"
                style={{ backgroundColor: '#ffde59' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={bblrImg} 
                    alt="Bayi Berat Badan Lahir Rendah"
                    className="w-auto h-auto object-contain max-w-[140px] lg:max-w-[220px] max-h-[110px] lg:max-h-[165px]"
                  />
                </div>
                <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                  Bayi Berat Lahir Rendah (BBLR)
                </h3>
              </a>

              <a
                href="/pertumbuhan-perkembangan"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[200px] lg:min-h-[360px]"
                style={{ backgroundColor: '#ff7264' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={tumbuhKembangImg} 
                    alt="Tumbuh Kembang Bayi"
                    style={{ 
                      width: 'clamp(140.3px, 25vw, 280px)', 
                      height: 'auto',
                      maxHeight: '180px',
                      objectFit: 'contain' 
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                  Tumbuh Kembang Bayi Berat Badan Lahir Rendah (BBLR)
                </h3>
              </a>
            </div>

            <div className="w-full md:w-1/2">
              <a
                href="/tanda-bahaya-bblr"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[200px] lg:min-h-[360px] relative"
                style={{ backgroundColor: '#00c99f' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={tandaBahayaImg} 
                    alt="Tanda Bahaya BBLR"
                    style={{ 
                      width: 'clamp(140.3px, 25vw, 280px)', 
                      height: 'auto',
                      maxHeight: '180px',
                      objectFit: 'contain' 
                    }}
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                    Tanda Bahaya BBLR
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section - Mobile */}
      <div className="lg:hidden pt-2 pb-6">
        <div className="border-t-2 border-b-2 border-black py-3 mb-2">
          <h1 
            className="font-bold text-center animate-slide-up"
            style={{ 
              color: '#004aad',
              fontSize: 'clamp(28px, 8vw, 48px)',
              fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
            }}
          >
            PILIH MATERI
          </h1>
        </div>

        <div className="flex-1 flex flex-col px-4 py-4">
          <div className="flex-1 flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto w-full">
            
            <div className="grid grid-cols-1 gap-4 w-full">
              <a
                href="/apa-itu-bblr"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[180px]"
                style={{ backgroundColor: '#ffde59' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={bblrImg} 
                    alt="Bayi Berat Badan Lahir Rendah"
                    className="w-auto h-auto object-contain max-w-[140px] max-h-[110px]"
                  />
                </div>
                <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                  Bayi Berat Lahir Rendah (BBLR)
                </h3>
              </a>

              <a
                href="/pertumbuhan-perkembangan"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[180px]"
                style={{ backgroundColor: '#ff7264' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={tumbuhKembangImg} 
                    alt="Tumbuh Kembang Bayi"
                    style={{ 
                      width: 'clamp(140.3px, 25vw, 280px)', 
                      height: 'auto',
                      maxHeight: '180px',
                      objectFit: 'contain' 
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                  Tumbuh Kembang Bayi Berat Badan Lahir Rendah (BBLR)
                </h3>
              </a>

              <a
                href="/tanda-bahaya-bblr"
                className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[180px]"
                style={{ backgroundColor: '#00c99f' }}
              >
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <img 
                    src={tandaBahayaImg} 
                    alt="Tanda Bahaya BBLR"
                    style={{ 
                      width: 'clamp(140.3px, 25vw, 280px)', 
                      height: 'auto',
                      maxHeight: '180px',
                      objectFit: 'contain' 
                    }}
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                    Tanda Bahaya BBLR
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page1;
