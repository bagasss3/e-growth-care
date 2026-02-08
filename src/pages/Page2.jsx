import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import alertLogo from '../assets/images/2/Alert-logo.svg';
import bblrImg from '../assets/images/2/Bayi Berat Badan Lahir Rendah.png';
import tumbuhKembangImg from '../assets/images/2/Tumbuh Kembang Bayi Berat Badan Lahir Rendah.png';
import tandaBahayaImg from '../assets/images/2/Tanda Bahaya BBLR.png';

const Page2 = () => {
  return (
    <BaseLayout currentPage={2} hideNext={true} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          style={{ 
            color: '#004aad',
            fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
          }}
        >
          MENU UTAMA
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-4">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <a
              href="/pertumbuhan-perkembangan"
              className="rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[360px]"
              style={{ backgroundColor: '#ffde59' }}
            >
              <div className="flex-1 flex items-center justify-center w-full mb-4">
                <img 
                  src={bblrImg} 
                  alt="Bayi Berat Badan Lahir Rendah"
                  style={{ width: '220px', height: '220px', objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                  Bayi Berat Lahir Rendah (BBLR)
                </span>
              </h3>
            </a>

            <a
              href="/pertumbuhan-perkembangan"
              className="rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[360px]"
              style={{ backgroundColor: '#ff7264' }}
            >
              <div className="flex-1 flex items-center justify-center w-full mb-4">
                <img 
                  src={tumbuhKembangImg} 
                  alt="Tumbuh Kembang Bayi"
                  style={{ width: '220px', height: '220px', objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                  Tumbuh Kembang Bayi Berat Badan Lahir Rendah (BBLR)
                </span>
              </h3>
            </a>
          </div>

          <div className="w-full md:w-1/2">
            <a
              href="/tanda-bahaya"
              className="rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105 min-h-[360px] relative"
              style={{ backgroundColor: '#00c99f' }}
            >
              <div className="flex-1 flex items-start justify-center w-full mb-4">
                <img 
                  src={tandaBahayaImg} 
                  alt="Tanda Bahaya BBLR"
                  style={{ width: '400px', height: '220px', objectFit: 'contain', marginLeft: '-40px', marginTop: '-20px' }}
                />
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <img 
                  src={alertLogo} 
                  alt="Warning" 
                  className="w-7 h-7"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
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
