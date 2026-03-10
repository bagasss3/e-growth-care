import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import Logo from '../components/layout/Logo';
import headerImg from '../assets/images/18/header.svg';
import usia2Img from '../assets/images/18/usia2.svg';
import usia4Img from '../assets/images/18/usia4.svg';
import usia6Img from '../assets/images/18/usia6.svg';
import videoPanduanImg from '../assets/images/18/videopanduan.svg';

const Page18 = () => {
  return (
    <BaseLayout currentPage={18} showLogo={false}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <img 
            src={headerImg} 
            alt="PERTUMBUHAN BAYI"
            className="animate-pop-in"
            style={{ 
              width: 'clamp(300px, 80vw, 1134px)', 
              height: 'auto',
              maxHeight: '116.5px',
              objectFit: 'contain', 
              marginTop: '32px' 
            }}
          />
        </HeaderWithLogo>

        <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-4">
          <div 
            className="max-w-3xl mb-8 p-4 border-2 border-black rounded-xl"
          >
            <p 
              className="text-gray-700 leading-relaxed text-center italic"
              style={{ 
                fontSize: 'clamp(14px, 2vw, 20.2px)', 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
            <a 
              href="/usia-koreksi-2-bulan" 
              className="flex items-center justify-center animate-pop-in-delay-1 hover:scale-105 transition-transform"
            >
              <img 
                src={usia2Img} 
                alt="Usia 2"
                style={{ 
                  width: 'clamp(180px, 35vw, 400px)', 
                  height: 'auto',
                  maxHeight: '350px',
                  objectFit: 'contain' 
                }}
              />
            </a>

            <a 
              href="/usia-koreksi-4-bulan" 
              className="flex items-center justify-center animate-pop-in-delay-2 hover:scale-105 transition-transform"
            >
              <img 
                src={usia4Img} 
                alt="Usia 4"
                style={{ 
                  width: 'clamp(180px, 35vw, 400px)', 
                  height: 'auto',
                  maxHeight: '350px',
                  objectFit: 'contain' 
                }}
              />
            </a>

            <a 
              href="/usia-koreksi-6-bulan" 
              className="flex items-center justify-center animate-pop-in-delay-3 hover:scale-105 transition-transform"
            >
              <img 
                src={usia6Img} 
                alt="Usia 6"
                style={{ 
                  width: 'clamp(180px, 35vw, 400px)', 
                  height: 'auto',
                  maxHeight: '350px',
                  objectFit: 'contain' 
                }}
              />
            </a>

            <a 
              href="/video-stimulasi-bayi" 
              className="flex items-center justify-center animate-pop-in-delay-4 hover:scale-105 transition-transform"
            >
              <img 
                src={videoPanduanImg} 
                alt="Video Panduan"
                style={{ 
                  width: 'clamp(180px, 35vw, 400px)', 
                  height: 'auto',
                  maxHeight: '350px',
                  objectFit: 'contain' 
                }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: Logo */}
      <div className="lg:hidden py-2">
        <Logo className="mb-2" />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Header Image */}
        <div className="flex justify-center mb-3 animate-pop-in">
          <img 
            src={headerImg} 
            alt="PERTUMBUHAN BAYI"
            style={{ 
              width: 'clamp(250px, 70vw, 400px)', 
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Description */}
        <div 
          className="mb-4 p-3 border-2 border-black rounded-xl"
        >
          <p 
            className="text-gray-700 leading-relaxed text-center italic animate-pop-in-delay-1"
            style={{ 
              fontSize: 'clamp(11px, 3.2vw, 16px)', 
              fontFamily: 'Poppins, sans-serif',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
          </p>
        </div>

        {/* Images Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
          <a 
            href="/usia-koreksi-2-bulan" 
            className="animate-pop-in-delay-2 hover:scale-105 transition-transform"
          >
            <img 
              src={usia2Img} 
              alt="Usia 2"
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </a>

          <a 
            href="/usia-koreksi-4-bulan" 
            className="animate-pop-in-delay-3 hover:scale-105 transition-transform"
          >
            <img 
              src={usia4Img} 
              alt="Usia 4"
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </a>

          <a 
            href="/usia-koreksi-6-bulan" 
            className="animate-pop-in-delay-4 hover:scale-105 transition-transform"
          >
            <img 
              src={usia6Img} 
              alt="Usia 6"
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </a>

          <a 
            href="/video-stimulasi-bayi" 
            className="animate-pop-in-delay-5 hover:scale-105 transition-transform"
          >
            <img 
              src={videoPanduanImg} 
              alt="Video Panduan"
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain' 
              }}
            />
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page18;
