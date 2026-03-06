import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import pregnantImg from '../assets/images/6/Pregnant.svg';
import faktorIbuMobile from '../assets/images/6/faktor-ibu-mobile.png';
import faktorJaninMobile from '../assets/images/6/faktor-janin-mobile.png';
import faktorLingkunganMobile from '../assets/images/6/faktor-lingkungan-mobile.png';

const Page6 = () => {
  const boxes = [
    {
      id: 1,
      title: 'FAKTOR IBU',
      items: [
        'Riwayat penyakit ibu dan komplikasi kehamilan',
        'Usia ibu terlalu muda atau terlalu tua',
        'Status gizi kurang',
        'Jarak kehamilan terlalu dekat dan riwayat melahirkan BBLR',
        'Kebiasaan tidak sehat (merokok, alkohol, narkoba)'
      ],
      image: faktorIbuMobile
    },
    {
      id: 2,
      title: 'FAKTOR JANIN',
      items: [
        'Kelainan genetik atau kromosom bawaan',
        'Infeksi pada janin sejak dalam kandungan',
        'Kehamilan kembar atau lebih',
        'Kelainan pembentukan organ tubuh sejak lahir'
      ],
      image: faktorJaninMobile
    },
    {
      id: 3,
      title: 'FAKTOR LINGKUNGAN',
      items: [
        'Tinggal di daerah dataran tinggi',
        'Terpapar radiasi',
        'Terkena zat atau bahan beracun'
      ],
      image: faktorLingkunganMobile
    }
  ];

  return (
    <BaseLayout currentPage={6} showLogo={false}>
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <div className="flex items-center gap-4">
            <h1 
              className="font-bold"
              style={{ 
                color: '#004aad',
                fontSize: 'clamp(32px, 3.5vw, 52.2px)',
                fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
              }}
            >
              HAL HAL YANG MENYEBABKAN BBLR
            </h1>
            <img 
              src={pregnantImg} 
              alt="Pregnant woman illustration" 
              style={{ width: '161.9px', height: '258.7px' }}
            />
          </div>
        </HeaderWithLogo>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden py-2 px-4">
        <div className="flex items-center justify-start gap-3">
          <h1 
            className="font-bold text-left"
            style={{ 
              color: '#004aad',
              fontSize: 'clamp(24px, 6vw, 36px)',
              fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
            }}
          >
            HAL HAL YANG<br/>MENYEBABKAN BBLR
          </h1>
          <img 
            src={pregnantImg} 
            alt="Pregnant woman illustration" 
            style={{ width: 'clamp(50px, 14vw, 80px)', height: 'auto' }}
          />
        </div>
      </div>

      <div className="flex-1 flex items-start lg:items-center justify-center px-4 sm:px-8 lg:px-16 pt-2 lg:py-8 overflow-hidden">
        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl w-full">
          {boxes.map((box, index) => (
            <div 
              key={box.id}
              className={`rounded-3xl flex flex-col overflow-hidden ${
                index === 1 ? 'animate-slide-left' : index === 2 ? 'animate-slide-right-delay' : 'animate-slide-left-delay'
              }`}
              style={{ 
                backgroundColor: '#16b4a9',
                border: '2px solid #000000'
              }}
            >
              {/* Title */}
              <h2 
                className="text-white font-bold text-center p-4"
                style={{ 
                  fontSize: 'clamp(24px, 2.5vw, 39.4px)',
                  fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
                }}
              >
                {box.title}
              </h2>
              
              <div className="w-full h-px" style={{ backgroundColor: '#000000' }}></div>
              
              <ul 
                className="text-white space-y-2 flex-1 p-4"
                style={{ fontSize: 'clamp(14px, 1.5vw, 21.6px)', fontFamily: 'Poppins, sans-serif' }}
              >
                {box.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked with images outside box on left - 40/60 ratio */}
        <div className="lg:hidden flex flex-col gap-4 w-full max-w-md px-2 overflow-hidden flex-1 justify-center py-4">
          {boxes.map((box, index) => (
            <div key={box.id} className="flex flex-row items-stretch gap-3">
              {/* Image outside box on left - 45% */}
              <div 
                className={`flex items-center justify-center ${
                  index === 1 ? 'animate-slide-left' : index === 2 ? 'animate-slide-right-delay' : 'animate-slide-left-delay'
                }`}
                style={{ width: '45%', minWidth: '120px' }}
              >
                <img 
                  src={box.image} 
                  alt={box.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '150px' }}
                />
              </div>

              {/* Box on right - 55% */}
              <div 
                className={`rounded-xl flex flex-col overflow-hidden ${
                  index === 1 ? 'animate-slide-left' : index === 2 ? 'animate-slide-right-delay' : 'animate-slide-left-delay'
                }`}
                style={{ 
                  backgroundColor: '#16b4a9',
                  border: '2px solid #000000',
                  width: '55%'
                }}
              >
                {/* Title */}
                <h2 
                  className="text-white font-bold text-center p-1"
                  style={{ 
                    fontSize: 'clamp(12px, 3.5vw, 16px)',
                    fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
                  }}
                >
                  {box.title}
                </h2>
                
                <div className="w-full h-px" style={{ backgroundColor: '#000000' }}></div>
                
                <ul 
                  className="text-white space-y-1 p-2 flex-1 flex flex-col justify-center"
                  style={{ fontSize: 'clamp(9px, 2.8vw, 12px)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {box.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page6;
