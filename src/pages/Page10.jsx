import BaseLayout from '../components/layout/BaseLayout';
import number2Img from '../assets/images/10/number2.svg';
import qrImg from '../assets/images/10/qr.png';
import posterImg from '../assets/images/10/poster.png';

const Page10 = () => {
  return (
    <BaseLayout currentPage={10} showLogo={false}>
      <div className="flex-1 flex flex-row px-4 sm:px-8 lg:px-16 py-8 gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col">
          {/* Title - Top Left */}
          <h1 
            className="font-bold mb-6 animate-slide-left"
            style={{ 
              color: '#000000',
              fontSize: '52.2px',
              fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
            }}
          >
            CARA PERAWATAN BAYI BBLR<br />
            AGAR TUMBUH KEMBANG<br />
            OPTIMAL
          </h1>

          {/* Number 2 + Text Row */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={number2Img} 
              alt="Number 2"
              style={{ width: '88.8px', height: '88.8px' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: '39.5px',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Mempertahankan Suhu Tubuh Bayi
            </h2>
          </div>

          {/* QR Code - Centered */}
          <div className="flex items-center justify-center mb-4">
            <img 
              src={qrImg} 
              alt="QR Code"
              style={{ width: '402.3px', height: '410.2px' }}
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
              fontSize: '21.8px',
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
              style={{ width: '634.3px', height: '896.5px', objectFit: 'contain' }}
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
