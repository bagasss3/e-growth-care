import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import image1 from '../assets/images/14/1.png';
import image2 from '../assets/images/14/2.png';
import image3 from '../assets/images/14/3.png';

const Page14 = () => {
  const items = [
    {
      image: image1,
      text: 'Gunakan timbangan bayi yang terstandar. Lebih baik menggunakan timbangan bayi digital bila tersedia.',
      alt: 'Timbangan Bayi 1'
    },
    {
      image: image2,
      text: 'Pastikan timbangan telah ditara terlebih dahulu sehingga menunjukkan angka nol sebelum bayi ditimbang',
      alt: 'Timbangan Bayi 2'
    },
    {
      image: image3,
      text: 'Timbang bayi dengan keadaan tanpa busana. Lakukan penimbangan 2-3 kali dan catat nilai reratanya.',
      alt: 'Timbangan Bayi 3'
    }
  ];

  return (
    <BaseLayout 
      currentPage={14} 
      showLogo={false}
      footerText={<em className="animate-reveal-left-right">Kemenkes, 2021</em>}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold text-center mt-4 animate-reveal-left-right px-2"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(16px, 2.2vw, 42px)', 
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            CARA MENGUKUR ANTROPOMETRI YANG BENAR
          </h1>
        </HeaderWithLogo>

        <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-4">
          <h2 
            className="mb-8 animate-reveal-left-right"
            style={{ color: '#000000', fontSize: 'clamp(14px, 2vw, 35.8px)', fontFamily: '"Open Sans", sans-serif' }}
          >
            PENGUKURAN BERAT BADAN
          </h2>

          <div className="flex items-start justify-center gap-2 w-full animate-reveal-left-right">
            <div className="flex-1 flex flex-col items-center">
              <img 
                src={image1} 
                alt="Timbangan Bayi 1"
                className="w-full h-auto max-h-[45vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-4 px-2"
                style={{ fontSize: 'clamp(10px, 1.5vw, 20px)', fontFamily: 'Poppins, sans-serif' }}
              >
                Gunakan timbangan bayi yang terstandar. Lebih baik menggunakan timbangan bayi digital bila tersedia.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center" style={{ marginTop: '60px' }}>
              <img 
                src={image2} 
                alt="Timbangan Bayi 2"
                className="w-full h-auto max-h-[45vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-4 px-2"
                style={{ fontSize: 'clamp(10px, 1.5vw, 20px)', fontFamily: 'Poppins, sans-serif' }}
              >
                Pastikan timbangan telah ditara terlebih dahulu sehingga menunjukkan angka nol sebelum bayi ditimbang
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <img 
                src={image3} 
                alt="Timbangan Bayi 3"
                className="w-full h-auto max-h-[45vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-4 px-2"
                style={{ fontSize: 'clamp(10px, 1.5vw, 20px)', fontFamily: 'Poppins, sans-serif' }}
              >
                Timbang bayi dengan keadaan tanpa busana. Lakukan penimbangan 2-3 kali dan catat nilai reratanya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-180px)]">
        {/* Logo */}
        <a href="/" className="mb-2">
          <img 
            src={kemenkesLogo} 
            alt="Logo" 
            className="w-auto"
            style={{ height: 'clamp(72px, 8vw, 100px)' }}
          />
        </a>

        {/* Main Header */}
        <h1 
          className="font-bold text-center leading-tight mb-1 animate-reveal-left-right"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(14px, 4vw, 22px)', 
            fontFamily: '"Open Sans", sans-serif' 
          }}
        >
          CARA MENGUKUR ANTROPOMETRI YANG BENAR
        </h1>

        {/* Sub Header */}
        <h2 
          className="text-center mb-4 animate-reveal-left-right"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(12px, 3.5vw, 20px)', 
            fontFamily: '"Open Sans", sans-serif' 
          }}
        >
          PENGUKURAN BERAT BADAN
        </h2>

        {/* Content Rows - Image Left, Text Right */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-row items-center gap-3 animate-reveal-left-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                style={{ 
                  width: '48%', 
                  height: 'auto',
                  objectFit: 'contain' 
                }}
              />
              <p 
                className="text-gray-800 leading-relaxed"
                style={{ 
                  width: '48%',
                  fontSize: 'clamp(10px, 3vw, 16px)', 
                  fontFamily: 'Poppins, sans-serif' 
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page14;
