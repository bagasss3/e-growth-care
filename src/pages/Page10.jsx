import BaseLayout from '../components/layout/BaseLayout';
import number2Img from '../assets/images/10/number2.svg';
import qrImg from '../assets/images/10/qr.png';
import posterImg from '../assets/images/10/poster.png';

const Page10 = () => {
  return (
    <BaseLayout currentPage={10} showLogo={false}>
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

          {/* Number 2 + Text Row */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={number2Img} 
              alt="Number 2"
              style={{ width: 'clamp(60px, 6vw, 88.8px)', height: 'clamp(60px, 6vw, 88.8px)' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: 'clamp(20px, 3vw, 39.5px)',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Mempertahankan Suhu Tubuh Bayi
            </h2>
          </div>

          {/* QR Code - Centered */}
          <div className="flex items-center justify-center mb-3">
            <img 
              src={qrImg} 
              alt="QR Code"
              style={{ width: 'clamp(250px, 30vw, 402.3px)', height: 'auto', aspectRatio: '1/1' }}
            />
          </div>

          {/* Link under QR */}
          <a 
            href="https://bit.ly/MetodeKangguruu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:opacity-80 transition-opacity underline"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(16px, 2vw, 21.8px)',
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            https://bit.ly/MetodeKangguruu
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

export default Page10;
