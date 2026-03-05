import BaseLayout from '../components/layout/BaseLayout';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import number1Img from '../assets/images/9/number1.svg';
import qrImg from '../assets/images/9/qr.png';
import posterImg from '../assets/images/9/poster.png';

const Page9 = () => {
  return (
    <BaseLayout currentPage={9} showLogo={false}>
      {/* Desktop Layout - Responsive: side-by-side on xl+, stacked on lg-xl */}
      <div className="hidden lg:flex flex-1 flex-col xl:flex-row px-4 sm:px-8 lg:px-16 py-4 gap-6 overflow-y-auto">
        {/* Left Column */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Title - Top Left */}
          <h1 
            className="font-bold mb-4 animate-slide-left"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(32px, 4vw, 52.2px)',
              fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
            }}
          >
            CARA PERAWATAN BAYI BBLR<br />
            AGAR TUMBUH KEMBANG<br />
            OPTIMAL
          </h1>

          {/* Number 1 + Text Row */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={number1Img} 
              alt="Number 1"
              style={{ width: 'clamp(60px, 6vw, 88.8px)', height: 'clamp(60px, 6vw, 88.8px)' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: 'clamp(20px, 3vw, 39.5px)',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Pemberian Nutrisi dan meningkatkan daya tahan tubuh bayi
            </h2>
          </div>

          {/* QR Code + Box Row */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <img 
              src={qrImg} 
              alt="QR Code"
              style={{ 
                width: 'clamp(150px, 20vw, 250px)', 
                height: 'auto', 
                aspectRatio: '1/1',
                flexShrink: 0 
              }}
            />
            
            <div 
              className="flex items-center justify-center p-4 rounded-2xl"
              style={{ 
                backgroundColor: '#ffc2a4',
                width: 'clamp(180px, 28vw, 350px)',
                minHeight: '150px',
                flexShrink: 0 
              }}
            >
              <p 
                className="text-gray-800 leading-relaxed"
                style={{ 
                  fontSize: 'clamp(14px, 1.5vw, 17.2px)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Bayi dapat diberikan ASI saat setelah lahir dan untuk memastikan asupan yang cukup, ibu perlu menyusui secara teratur setiap sekitar 4 jam sekali.
              </p>
            </div>
          </div>

          {/* Link under QR */}
          <a 
            href="https://bit.ly/CaraMenyusuiYangBenar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:opacity-80 transition-opacity underline"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(16px, 2vw, 21.8px)',
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            https://bit.ly/CaraMenyusuiYangBenar
          </a>
        </div>

        {/* Right Column - Poster */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={posterImg} 
              alt="Poster"
              style={{ 
                width: 'auto', 
                height: 'clamp(400px, 70vh, 896.5px)', 
                objectFit: 'contain',
                maxWidth: 'clamp(300px, 30vw, 634.3px)'
              }}
            />
            <p className="absolute bottom-2 left-2 text-sm font-bold text-gray-800">
              (RSI, 2026)
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-180px)]">
        {/* Logo */}
        <a href="/" className="mb-4">
          <img 
            src={kemenkesLogo} 
            alt="Kemenkes Logo" 
            className="w-auto"
            style={{ height: 'clamp(96px, 10vw, 140px)' }}
          />
        </a>

        {/* Header */}
        <h1 
          className="font-bold mb-4 animate-slide-left"
          style={{ 
            color: '#000000',
            fontSize: 'clamp(24px, 6vw, 36px)',
            fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
          }}
        >
          CARA PERAWATAN BAYI BBLR AGAR TUMBUH KEMBANG OPTIMAL
        </h1>

        {/* Number 1 + Title */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={number1Img} 
            alt="Number 1"
            style={{ width: 'clamp(50px, 12vw, 70px)', height: 'clamp(50px, 12vw, 70px)' }}
          />
          <h2 
            className="font-bold text-gray-800"
            style={{ 
              fontSize: 'clamp(16px, 4vw, 24px)',
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            Pemberian Nutrisi Bayi
          </h2>
        </div>

        {/* Poster */}
        <div className="flex justify-center mb-4">
          <img 
            src={posterImg} 
            alt="Poster"
            style={{ 
              width: '100%', 
              maxWidth: '400px',
              height: 'auto', 
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Video Guide Text with Arrows */}
        <div className="flex items-center justify-center gap-2 mb-2">
          {/* Left Arrow */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 'clamp(20px, 5vw, 30px)', height: 'clamp(20px, 5vw, 30px)' }}
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          
          <p 
            className="text-center"
            style={{ 
              fontSize: 'clamp(16px, 4vw, 26.3px)',
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000'
            }}
          >
            Tonton Panduan Secara Video disini
          </p>
          
          {/* Right Arrow */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 'clamp(20px, 5vw, 30px)', height: 'clamp(20px, 5vw, 30px)' }}
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Link Box */}
        <div className="flex justify-center">
          <a 
            href="https://bit.ly/CaraMenyusuiYangBenar"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ 
              backgroundColor: '#ffde59',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000',
              wordBreak: 'break-all'
            }}
          >
            https://bit.ly/CaraMenyusuiYangBenar
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page9;
