import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import babyImg from '../assets/images/19/baby.svg';

const Page19 = () => {
  const boxes = [
    {
      id: 1,
      title: 'MOTORIK KASAR',
      body: 'Dapat mengangkat kepala dan dada saat tengkurap',
      bodyColor: '#e33a3a'
    },
    {
      id: 2,
      title: 'MOTORIK HALUS',
      body: 'Dapat membuka tangan dan mengepal',
      bodyColor: '#00bf63'
    },
    {
      id: 3,
      title: 'BAHASA & SOSIAL',
      body: 'Dapat mengangkat kepala dan dada saat tengkurap',
      bodyColor: '#004aad'
    }
  ];

  return (
    <BaseLayout currentPage={19} showLogo={false}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <div className="flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
            <div 
              className="rounded-2xl px-8 py-3 flex items-center justify-center"
              style={{ 
                backgroundColor: '#2ebbbf',
                width: 'clamp(200px, 50vw, 600px)',
                maxWidth: '100%'
              }}
            >
              <h1 
                className="font-bold text-white"
                style={{ 
                  fontSize: 'clamp(16px, 2.5vw, 47.7px)',
                  fontFamily: 'Poppins, sans-serif',
                  WebkitTextStroke: '1px #000000'
                }}
              >
                USIA KOREKSI 2 BULAN
              </h1>
            </div>
            
            <img 
              src={babyImg} 
              alt="Baby"
              className="animate-slide-left flex-shrink-0 hidden lg:block"
              style={{ 
                width: 'clamp(80px, 12vw, 200px)', 
                height: 'auto',
                maxHeight: '15vh',
                objectFit: 'contain'
              }}
            />
          </div>
        </HeaderWithLogo>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8 overflow-hidden">
          <div className="flex flex-row gap-4 xl:gap-6 w-full justify-center items-stretch">
            {boxes.map((box) => (
              <div 
                key={box.id}
                className="overflow-hidden flex flex-col"
                style={{ 
                  width: 'clamp(200px, 30vw, 380px)',
                  minHeight: 'clamp(220px, 35vh, 400px)'
                }}
              >
                <div 
                  className="p-4 text-center flex items-center justify-center"
                  style={{ backgroundColor: '#5d7dff', minHeight: '120px' }}
                >
                  <h2 
                    className="text-white whitespace-pre-line"
                    style={{ 
                      fontSize: 'clamp(16px, 2vw, 46.3px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      WebkitTextStroke: '0.5px #000000'
                    }}
                  >
                    {box.title}
                  </h2>
                </div>
                
                <div 
                  className="p-8 flex items-center justify-center flex-1"
                  style={{ backgroundColor: box.bodyColor }}
                >
                  <p 
                    className="text-white text-center leading-relaxed font-bold"
                    style={{ 
                      fontSize: 'clamp(12px, 1.5vw, 31.2px)', 
                      fontFamily: '"Open Sans", sans-serif',
                      wordWrap: 'break-word'
                    }}
                  >
                    {box.body}
                  </p>
                </div>
              </div>
            ))}
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

        {/* Header with Text and Baby Image */}
        <div className="flex flex-row items-center justify-center gap-3 mb-4">
          <div 
            className="rounded-xl px-4 py-2 flex items-center justify-center"
            style={{ 
              backgroundColor: '#2ebbbf'
            }}
          >
            <h1 
              className="font-bold text-white"
              style={{ 
                fontSize: 'clamp(18px, 5vw, 28px)',
                fontFamily: 'Poppins, sans-serif',
                WebkitTextStroke: '0.5px #000000'
              }}
            >
              USIA KOREKSI 2 BULAN
            </h1>
          </div>
          
          <img 
            src={babyImg} 
            alt="Baby"
            className="animate-slide-left"
            style={{ 
              width: 'clamp(60px, 15vw, 100px)', 
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Content Boxes - Stacked */}
        <div className="flex flex-col gap-3 items-center">
          {boxes.map((box, index) => (
            <div 
              key={box.id}
              className="overflow-hidden rounded-xl animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                width: '85%'
              }}
            >
              {/* Title */}
              <div 
                className="p-3 text-center"
                style={{ backgroundColor: '#5d7dff' }}
              >
                <h2 
                  className="text-white"
                  style={{ 
                    fontSize: 'clamp(16px, 5vw, 24px)',
                    fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                    WebkitTextStroke: '0.5px #000000'
                  }}
                >
                  {box.title}
                </h2>
              </div>
              
              {/* Body */}
              <div 
                className="p-4 flex items-center justify-center"
                style={{ backgroundColor: box.bodyColor }}
              >
                <p 
                  className="text-white text-center leading-relaxed font-bold"
                  style={{ 
                    fontSize: 'clamp(12px, 4vw, 18px)', 
                    fontFamily: '"Open Sans", sans-serif'
                  }}
                >
                  {box.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page19;
