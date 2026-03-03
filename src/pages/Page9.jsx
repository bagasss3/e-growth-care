import BaseLayout from '../components/layout/BaseLayout';
import number1Img from '../assets/images/9/number1.svg';
import qrImg from '../assets/images/9/qr.png';
import posterImg from '../assets/images/9/poster.png';

const Page9 = () => {
  return (
    <BaseLayout currentPage={9} showLogo={false}>
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 py-4 gap-6 overflow-hidden">
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

          {/* QR Code + Box Row - Always side by side */}
          <div className="flex items-center justify-center gap-4 mb-3" style={{ flexWrap: 'nowrap' }}>
            <img 
              src={qrImg} 
              alt="QR Code"
              style={{ 
                width: 'clamp(200px, 28vw, 402.3px)', 
                height: 'auto', 
                aspectRatio: '1/1',
                flexShrink: 0 
              }}
            />
            
            <div 
              className="flex items-center justify-center p-4 rounded-2xl"
              style={{ 
                backgroundColor: '#ffc2a4',
                width: 'clamp(200px, 32vw, 420px)',
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
    </BaseLayout>
  );
};

export default Page9;
