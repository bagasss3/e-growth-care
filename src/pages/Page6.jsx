import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import pregnantImg from '../assets/images/6/Pregnant.svg';

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
      ]
    },
    {
      id: 2,
      title: 'FAKTOR JANIN',
      items: [
        'Kelainan genetik atau kromosom bawaan',
        'Infeksi pada janin sejak dalam kandungan',
        'Kehamilan kembar atau lebih',
        'Kelainan pembentukan organ tubuh sejak lahir'
      ]
    },
    {
      id: 3,
      title: 'FAKTOR LINGKUNGAN',
      items: [
        'Tinggal di daerah dataran tinggi',
        'Terpapar radiasi',
        'Terkena zat atau bahan beracun'
      ]
    }
  ];

  return (
    <BaseLayout currentPage={6} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex items-center gap-4">
          <h1 
            className="font-bold"
            style={{ 
              color: '#004aad',
              fontSize: '52.2px',
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

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
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
                  fontSize: '39.4px',
                  fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
                }}
              >
                {box.title}
              </h2>
              
              <div className="w-full h-px" style={{ backgroundColor: '#000000' }}></div>
              
              <ul 
                className="text-white space-y-2 flex-1 p-4"
                style={{ fontSize: '21.6px', fontFamily: 'Poppins, sans-serif' }}
              >
                {box.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page6;
