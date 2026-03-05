import BaseLayout from '../components/layout/BaseLayout';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import number3Img from '../assets/images/11/number3.svg';
import posterImg from '../assets/images/11/poster.png';

const Page11 = () => {
  return (
    <BaseLayout currentPage={11} showLogo={false}>
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-1 flex-row px-4 sm:px-8 lg:px-16 py-4 gap-6 overflow-hidden">
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

          {/* Number 3 + Text Row */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={number3Img} 
              alt="Number 3"
              style={{ width: 'clamp(60px, 6vw, 88.8px)', height: 'clamp(60px, 6vw, 88.8px)' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: 'clamp(20px, 3vw, 39.5px)',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Pencegahan Infeksi
            </h2>
          </div>

          {/* Content Box */}
          <div 
            className="rounded-3xl p-6 border-4 border-black"
            style={{ 
              backgroundColor: '#ffc2a4',
              width: 'clamp(300px, 90vw, 770.8px)',
              maxWidth: '100%'
            }}
          >
            <ul 
              className="text-gray-800 space-y-3"
              style={{ fontSize: 'clamp(16px, 2.5vw, 25px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Jauhkan bayi dari orang yang sedang sakit</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Gunakan masker serta pakaian bersih saat merawat bayi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Jaga kebersihan tangan, alat, dan lingkungan</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Batasi jumlah orang yang kontak dengan bayi.</span>
              </li>
            </ul>
          </div>

          {/* Video Guide Text with Arrows */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            {/* Left Arrow */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 'clamp(20px, 2vw, 30px)', height: 'clamp(20px, 2vw, 30px)' }}
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
                fontSize: 'clamp(16px, 2vw, 26.3px)',
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
              style={{ width: 'clamp(20px, 2vw, 30px)', height: 'clamp(20px, 2vw, 30px)' }}
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
              href="https://bit.ly/6LangkahCuciiTangan"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
              style={{ 
                backgroundColor: '#ffde59',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                fontFamily: '"Open Sans", sans-serif',
                color: '#000000',
                wordBreak: 'break-all'
              }}
            >
              https://bit.ly/6LangkahCuciiTangan
            </a>
          </div>
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

        {/* Number 3 + Title */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={number3Img} 
            alt="Number 3"
            style={{ width: 'clamp(50px, 12vw, 70px)', height: 'clamp(50px, 12vw, 70px)' }}
          />
          <h2 
            className="font-bold text-gray-800"
            style={{ 
              fontSize: 'clamp(16px, 4vw, 24px)',
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            Pencegahan Infeksi
          </h2>
        </div>

        {/* Content Box - Mobile */}
        <div 
          className="rounded-2xl p-4 border-2 border-black mb-4"
          style={{ 
            backgroundColor: '#ffc2a4',
            width: '100%'
          }}
        >
          <ul 
            className="text-gray-800 space-y-2"
            style={{ fontSize: 'clamp(12px, 3.5vw, 16px)', fontFamily: '"Open Sans", sans-serif' }}
          >
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Jauhkan bayi dari orang yang sedang sakit</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Gunakan masker serta pakaian bersih saat merawat bayi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Jaga kebersihan tangan, alat, dan lingkungan</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Batasi jumlah orang yang kontak dengan bayi.</span>
            </li>
          </ul>
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
            href="https://bit.ly/6LangkahCuciiTangan"
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
            https://bit.ly/6LangkahCuciiTangan
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page11;
