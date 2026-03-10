import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import Logo from '../components/layout/Logo';
import pertumbuhanImg from '../assets/images/3/pertumbuhan-bayi.png';
import perkembanganImg from '../assets/images/3/perkembangan-bayi.png';

const Page3 = () => {
  const sections = [
    {
      id: 1,
      title: 'PERTUMBUHAN BAYI',
      image: pertumbuhanImg,
      outlineColor: '#ff2828',
      path: '/apa-itu-kurva-fenton',
      animationClass: 'animate-slide-up-delay-1',
    },
    {
      id: 2,
      title: 'PERKEMBANGAN BAYI',
      image: perkembanganImg,
      outlineColor: '#4e6aff',
      path: '/perkembangan-bayi',
      animationClass: 'animate-slide-up-delay-2',
    },
  ];

  return (
    <BaseLayout currentPage={3} showLogo={false} hideNext={true}>
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold text-center animate-slide-up"
            style={{ 
              color: '#004aad',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontFamily: '"ITC Motter Corpus", "Motter Corpus", Impact, sans-serif',
              fontWeight: 900,
              letterSpacing: '2px'
            }}
          >
            <div>PERTUMBUHAN &</div>
            <div>PERKEMBANGAN BBLR</div>
          </h1>
        </HeaderWithLogo>
      </div>

      {/* Mobile: Logo */}
      <div className="lg:hidden py-2">
        <Logo className="mb-4" />
      </div>

      {/* Mobile Header - Hidden on desktop */}
      <div className="lg:hidden flex flex-col py-4">
        <h1 
          className="font-bold text-center animate-slide-up"
          style={{ 
            color: '#004aad',
            fontSize: 'clamp(28px, 8vw, 40px)',
            fontFamily: '"ITC Motter Corpus", "Motter Corpus", Impact, sans-serif',
            fontWeight: 900,
            letterSpacing: '2px'
          }}
        >
          <div>PERTUMBUHAN &</div>
          <div>PERKEMBANGAN BBLR</div>
        </h1>
      </div>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-2 overflow-hidden min-h-[calc(100vh-180px)]">
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 max-w-4xl w-full">
            {sections.map((section) => (
              section.path ? (
                <a
                  key={section.id}
                  href={section.path}
                  className={`rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all transform hover:scale-105 ${section.animationClass}`}
                  style={{ 
                    backgroundColor: 'transparent',
                    border: `4px solid ${section.outlineColor}`,
                    minHeight: 'clamp(160px, 28vh, 260px)'
                  }}
                >
                  <div className="mb-4 lg:mb-6 flex items-center justify-center">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      style={{ 
                        width: 'clamp(120px, 40vw, 220px)', 
                        height: 'auto',
                        maxHeight: 'clamp(120px, 40vw, 220px)',
                        objectFit: 'contain' 
                      }}
                    />
                  </div>
                  
                  <h3 
                    className="font-bold text-gray-800"
                    style={{ 
                      fontSize: 'clamp(18px, 5vw, 31.3px)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {section.title}
                  </h3>
                </a>
              ) : (
                <div
                  key={section.id}
                  className={`rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center text-center opacity-60 ${section.animationClass}`}
                  style={{ 
                    backgroundColor: 'transparent',
                    border: `4px solid ${section.outlineColor}`,
                    minHeight: 'clamp(160px, 28vh, 260px)'
                  }}
                >
                  <div className="mb-4 lg:mb-6 flex items-center justify-center">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      style={{ 
                        width: 'clamp(120px, 40vw, 220px)', 
                        height: 'auto',
                        maxHeight: 'clamp(120px, 40vw, 220px)',
                        objectFit: 'contain' 
                      }}
                    />
                  </div>
                  
                  <h3 
                    className="font-bold text-gray-800"
                    style={{ 
                      fontSize: 'clamp(18px, 5vw, 31.3px)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {section.title}
                  </h3>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page3;
