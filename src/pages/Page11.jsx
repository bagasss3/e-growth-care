import BaseLayout from '../components/layout/BaseLayout';
import number3Img from '../assets/images/11/number3.svg';
import posterImg from '../assets/images/11/poster.png';

const Page11 = () => {
  return (
    <BaseLayout currentPage={11} showLogo={false}>
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
    </BaseLayout>
  );
};

export default Page11;
