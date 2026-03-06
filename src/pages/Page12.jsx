import BaseLayout from '../components/layout/BaseLayout';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import number4Img from '../assets/images/12/number4.svg';
import posterImg from '../assets/images/12/poster.png';

const Page12 = () => {
  return (
    <BaseLayout currentPage={12} showLogo={false}>
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

          {/* Number 4 + Text Row */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={number4Img} 
              alt="Number 4"
              style={{ width: 'clamp(60px, 6vw, 88.8px)', height: 'clamp(60px, 6vw, 88.8px)' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: 'clamp(20px, 3vw, 39.5px)',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Pemantauan Pertumbuhan
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
            <p 
              className="text-gray-800 leading-relaxed"
              style={{ fontSize: 'clamp(16px, 2.5vw, 25px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              Berat badan menunjukkan status gizi dan kesehatan bayi, sehingga perlu ditimbang secara rutin <strong>1 bulan sekali</strong> untuk memantau pertumbuhan.
            </p>
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

        {/* Number 4 + Title */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={number4Img} 
            alt="Number 4"
            style={{ width: 'clamp(50px, 12vw, 70px)', height: 'clamp(50px, 12vw, 70px)' }}
          />
          <h2 
            className="font-bold text-gray-800"
            style={{ 
              fontSize: 'clamp(16px, 4vw, 24px)',
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            Pemantauan Pertumbuhan
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
          <p 
            className="text-gray-800 leading-relaxed"
            style={{ fontSize: 'clamp(12px, 3.5vw, 16px)', fontFamily: '"Open Sans", sans-serif' }}
          >
            Berat badan menunjukkan status gizi dan kesehatan bayi, sehingga perlu ditimbang secara rutin <strong>1 bulan sekali</strong> untuk memantau pertumbuhan.
          </p>
        </div>

        {/* Poster */}
        <div className="flex justify-center">
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
      </div>
    </BaseLayout>
  );
};

export default Page12;
