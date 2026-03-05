import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import alertLogo from '../assets/images/2/Alert-logo.svg';
import bblrImg from '../assets/images/2/Bayi Berat Badan Lahir Rendah.png';
import tumbuhKembangImg from '../assets/images/2/Tumbuh Kembang Bayi Berat Badan Lahir Rendah.png';
import tandaBahayaImg from '../assets/images/2/Tanda Bahaya BBLR.png';

const Page2 = () => {
  return (
    <BaseLayout currentPage={2} hideNext={true} showLogo={false}>
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold animate-slide-up"
            style={{ 
              color: '#004aad',
              fontSize: 'clamp(36px, 4vw, 61.7px)',
              fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
            }}
          >
            MENU UTAMA
          </h1>
        </HeaderWithLogo>
      </div>

      {/* Mobile Header - Hidden on desktop */}
      <div className="lg:hidden text-center py-4">
        <h1 
          className="font-bold animate-slide-up"
          style={{ 
            color: '#004aad',
            fontSize: 'clamp(36px, 10vw, 61.7px)',
            fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
          }}
        >
          MENU UTAMA
        </h1>
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-4 overflow-hidden min-h-[calc(100vh-180px)]">
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
                  style={{ 
                    width: 'clamp(200px, 80vw, 409.5px)', 
                    height: 'auto',
                    maxHeight: '231.3px',
                    objectFit: 'contain' 
                  }}
                />
              </div>
              <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                  Bayi Berat Lahir Rendah (BBLR)
                </span>
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
                    width: 'clamp(200px, 80vw, 409.5px)', 
                    height: 'auto',
                    maxHeight: '231.3px',
                    objectFit: 'contain' 
                  }}
                />
              </div>
              <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                  Tumbuh Kembang Bayi Berat Badan Lahir Rendah (BBLR)
                </span>
              </h3>
            </a>
          </div>

          <div className="w-full md:w-1/2">
            <a
              href="/tanda-bahaya-bblr"
              className="rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[200px] lg:min-h-[360px] relative"
              style={{ backgroundColor: '#00c99f' }}
            >
              <div className="flex-1 flex items-start justify-center w-full mb-4">
                <img 
                  src={tandaBahayaImg} 
                  alt="Tanda Bahaya BBLR"
                  style={{ 
                    width: 'clamp(200px, 80vw, 409.5px)', 
                    height: 'auto',
                    maxHeight: '231.3px',
                    objectFit: 'contain' 
                  }}
                />
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <img 
                  src={alertLogo} 
                  alt="Warning" 
                  style={{ width: 'clamp(20px, 6vw, 28px)', height: 'clamp(20px, 6vw, 28px)' }}
                />
                <h3 className="font-bold text-gray-800 leading-tight" style={{ fontSize: 'clamp(16px, 5vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}>
                  <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                    Tanda Bahaya BBLR
                  </span>
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page2;
