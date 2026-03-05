import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import headerImg from '../assets/images/18/header.svg';
import usia2Img from '../assets/images/18/usia2.svg';
import usia4Img from '../assets/images/18/usia4.svg';
import usia6Img from '../assets/images/18/usia6.svg';

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
          <p 
            className="text-gray-700 leading-relaxed text-center max-w-3xl mb-8 italic"
            style={{ fontSize: 'clamp(14px, 2vw, 20.2px)', fontFamily: 'Poppins, sans-serif' }}
          >
            Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
          </p>

          <div className="flex items-end justify-center gap-4 md:gap-8 w-full max-w-6xl flex-wrap">
            <div className="flex-shrink-0 animate-pop-in-delay-1">
              <img 
                src={usia2Img} 
                alt="Usia 2"
                style={{ 
                  width: 'clamp(200px, 30vw, 509.5px)', 
                  height: 'auto',
                  maxHeight: '442.4px',
                  objectFit: 'contain' 
                }}
              />
            </div>

            <div className="flex-shrink-0 animate-pop-in-delay-2" style={{ marginBottom: '-20px' }}>
              <img 
                src={usia4Img} 
                alt="Usia 4"
                style={{ 
                  width: 'clamp(200px, 30vw, 509.5px)', 
                  height: 'auto',
                  maxHeight: '442.4px',
                  objectFit: 'contain' 
                }}
              />
            </div>

            <div className="flex-shrink-0 animate-pop-in-delay-3">
              <img 
                src={usia6Img} 
                alt="Usia 6"
                style={{ 
                  width: 'clamp(200px, 30vw, 509.5px)', 
                  height: 'auto',
                  maxHeight: '442.4px',
                  objectFit: 'contain' 
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Logo */}
        <a href="/" className="mb-2">
          <img 
            src={kemenkesLogo} 
            alt="Logo" 
            className="w-auto"
            style={{ height: 'clamp(72px, 8vw, 100px)' }}
          />
        </a>

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
        <p 
          className="text-gray-700 leading-relaxed text-center mb-4 italic animate-pop-in-delay-1"
          style={{ 
            fontSize: 'clamp(11px, 3.2vw, 16px)', 
            fontFamily: 'Poppins, sans-serif' 
          }}
        >
          Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
        </p>

        {/* Images Grid - 2 on top, 1 below */}
        <div className="flex flex-col items-center gap-3">
          {/* Row 1: Usia 2 and Usia 4 */}
          <div className="flex flex-row justify-center gap-3 w-full">
            <div className="animate-pop-in-delay-2" style={{ width: '48%' }}>
              <img 
                src={usia2Img} 
                alt="Usia 2"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'contain' 
                }}
              />
            </div>
            <div className="animate-pop-in-delay-3" style={{ width: '48%' }}>
              <img 
                src={usia4Img} 
                alt="Usia 4"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'contain' 
                }}
              />
            </div>
          </div>

          {/* Row 2: Usia 6 */}
          <div className="animate-pop-in-delay-4" style={{ width: '48%' }}>
            <img 
              src={usia6Img} 
              alt="Usia 6"
              style={{ 
                width: '100%', 
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

export default Page18;
