import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import image1 from '../assets/images/16/1.png';
import image2 from '../assets/images/16/2.png';
import image3 from '../assets/images/16/3.png';
import image4 from '../assets/images/16/4.png';

const Page16 = () => {
  const items = [
    {
      image: image1,
      text: 'Gunakan tali ukur yang terstandar.',
      alt: 'Pengukuran Lingkar Kepala 1'
    },
    {
      image: image3,
      text: 'Tali ukur harus melewati bagian paling menonjol pada sisi belakang kepala bayi.',
      alt: 'Pengukuran Lingkar Kepala 3'
    },
    {
      image: image2,
      text: 'Tali ukur harus melewati bagian paling menonjol pada dahi bayi.',
      alt: 'Pengukuran Lingkar Kepala 2'
    },
    {
      image: image4,
      text: 'Lakukan pengukuran 2-3 kali kemudian catat nilai reratanya.',
      alt: 'Pengukuran Lingkar Kepala 4'
    }
  ];

  return (
    <BaseLayout 
      currentPage={16} 
      showLogo={false}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold text-center leading-tight mt-4 animate-fade-in"
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
          {/* Title */}
          <h2 
            className="mb-8 animate-fade-in-delay-1"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(14px, 2vw, 35.8px)', 
              fontFamily: '"Open Sans", sans-serif' 
            }}
          >
            PENGUKURAN LINGKAR KEPALA
          </h2>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-5xl">
            <div className="flex flex-col items-center animate-fade-in-delay-2">
              <img 
                src={image1} 
                alt="Pengukuran Lingkar Kepala 1"
                className="w-full h-auto max-h-[35vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-3 px-4"
                style={{ 
                  fontSize: 'clamp(10px, 1.5vw, 20px)', 
                  fontFamily: 'Poppins, sans-serif' 
                }}
              >
                Gunakan tali ukur yang terstandar.
              </p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-delay-3">
              <img 
                src={image3} 
                alt="Pengukuran Lingkar Kepala 3"
                className="w-full h-auto max-h-[35vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-3 px-4"
                style={{ 
                  fontSize: 'clamp(10px, 1.5vw, 20px)', 
                  fontFamily: 'Poppins, sans-serif' 
                }}
              >
                Tali ukur harus melewati bagian paling menonjol pada sisi belakang kepala bayi.
              </p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-delay-3">
              <img 
                src={image2} 
                alt="Pengukuran Lingkar Kepala 2"
                className="w-full h-auto max-h-[35vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-3 px-4"
                style={{ 
                  fontSize: 'clamp(10px, 1.5vw, 20px)', 
                  fontFamily: 'Poppins, sans-serif' 
                }}
              >
                Tali ukur harus melewati bagian paling menonjol pada dahi bayi.
              </p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-delay-4">
              <img 
                src={image4} 
                alt="Pengukuran Lingkar Kepala 4"
                className="w-full h-auto max-h-[35vh] object-contain"
              />
              <p 
                className="text-gray-800 text-center leading-relaxed mt-3 px-4"
                style={{ 
                  fontSize: 'clamp(10px, 1.5vw, 20px)', 
                  fontFamily: 'Poppins, sans-serif' 
                }}
              >
                Lakukan pengukuran 2-3 kali kemudian catat nilai reratanya.
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
          className="font-bold text-center leading-tight mb-1 animate-fade-in"
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
          className="text-center mb-4 animate-fade-in-delay-1"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(12px, 3.5vw, 20px)', 
            fontFamily: '"Open Sans", sans-serif' 
          }}
        >
          PENGUKURAN LINGKAR KEPALA
        </h2>

        {/* Content Rows - Image Left, Text Right */}
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-row items-center gap-3 animate-fade-in-delay-2"
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

export default Page16;
