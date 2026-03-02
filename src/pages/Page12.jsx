import BaseLayout from '../components/layout/BaseLayout';
import number4Img from '../assets/images/12/number4.svg';
import posterImg from '../assets/images/12/poster.png';

const Page12 = () => {
  return (
    <BaseLayout currentPage={12} showLogo={false}>
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

          {/* Number 4 + Text Row */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={number4Img} 
              alt="Number 4"
              style={{ width: '88.8px', height: '88.8px' }}
            />
            <h2 
              className="font-bold text-gray-800"
              style={{ 
                fontSize: '39.5px',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              Pemantauan Pertumbuhan
            </h2>
          </div>

          {/* Content Box */}
          <div 
            className="rounded-3xl p-8 border-4 border-black"
            style={{ 
              backgroundColor: '#ffc2a4',
              width: '770.8px'
            }}
          >
            <p 
              className="text-gray-800 leading-relaxed"
              style={{ fontSize: '25px', fontFamily: '"Open Sans", sans-serif' }}
            >
              Berat badan menunjukkan status gizi dan kesehatan bayi, sehingga perlu ditimbang secara rutin 1 bulan sekali untuk memantau pertumbuhan.
            </p>
          </div>
        </div>

        {/* Right Column - Poster */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={posterImg} 
              alt="Poster"
              style={{ width: '634.3px', height: '896.5px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page12;
