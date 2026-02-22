import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import warningImg from '../assets/images/23/warning.svg';
import statisticImg from '../assets/images/23/statistic.svg';
import baikImg from '../assets/images/23/baik.svg';
import hatiHatiImg from '../assets/images/23/hati-hati.svg';
import bahayaImg from '../assets/images/23/bahaya.svg';

const Page23 = () => {
  const boxes = [
    {
      id: 1,
      title: 'Pemantauan Pertumbuhan',
      color: '#00c99f',
      type: 'images',
      images: [
        { src: baikImg, alt: 'Baik' },
        { src: hatiHatiImg, alt: 'Hati-hati' },
        { src: bahayaImg, alt: 'Bahaya' }
      ]
    },
    {
      id: 2,
      title: 'Gangguan Pencernaan',
      color: '#ffa100',
      type: 'list',
      items: [
        'Muntah darah',
        'BAB berdarah',
        'Muntah hijau',
        'Diare',
        'Tidak BAB >7 hari (ASI eksklusif) / >3 hari (susu formula) disertai perut membuncit dan mengganggu menyusu.'
      ]
    },
    {
      id: 3,
      title: 'Infeksi Lokal',
      color: '#ffde59',
      type: 'text',
      text: 'Tali pusat kemerahan, berbau, atau bernanah.'
    },
    {
      id: 4,
      title: 'Tanda Bahaya Lainnya',
      color: '#e33a3a',
      type: 'list',
      items: [
        'Sesak napas (>60 kali/menit disertai tarikan dinding dada)',
        'Hipotermia (suhu <36,5°C dan tidak aktif)',
        'Demam (>37,5°C)',
        'Kejang',
        'Mata dan kulit kuning sampai lutut atau siku',
        'Kulit tampak pucat',
        'Tampak lemas',
        'Tidak mau menyusu'
      ]
    }
  ];

  return (
    <BaseLayout currentPage={23} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex items-center gap-4">
          <img 
            src={warningImg} 
            alt="Warning" 
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"
          >
            TANDA BAHAYA
          </h1>
          
          <img 
            src={warningImg} 
            alt="Warning" 
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
          
          <img 
            src={statisticImg} 
            alt="Statistic" 
            className="w-10 h-10 sm:w-12 sm:h-12 ml-4"
          />
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl w-full items-stretch">
          {boxes.map((box) => (
            <div key={box.id} className="flex flex-col h-full">
              <h2 
                className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-black"
              >
                {box.title}
              </h2>
              
              <div 
                className="p-6 flex flex-col flex-1 rounded-2xl"
                style={{ backgroundColor: box.color }}
              >
                {box.type === 'images' && (
                  <div className="flex flex-col items-center gap-0 justify-center flex-1">
                    {box.images.map((img, index) => (
                      <img 
                        key={index}
                        src={img.src} 
                        alt={img.alt}
                        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain rounded-xl"
                      />
                    ))}
                  </div>
                )}
                
                {box.type === 'list' && box.id === 2 && (
                  <ul className="text-black text-base sm:text-lg lg:text-xl font-bold space-y-2">
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'list' && box.id === 4 && (
                  <ul className="text-white text-base sm:text-lg lg:text-xl font-bold space-y-2">
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'text' && (
                  <p className="text-black text-base sm:text-lg lg:text-xl font-bold">
                    {box.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page23;
