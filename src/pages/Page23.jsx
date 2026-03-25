import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import Logo from '../components/layout/Logo';
import warningImg from '../assets/images/23/warning.svg';
import baikImg from '../assets/images/23/baik.svg';
import hatiHatiImg from '../assets/images/23/hati-hati.svg';
import bahayaImg from '../assets/images/23/bahaya.svg';
import exclamationImg from '../assets/images/24/exclamatioin.svg';
import ambulanceSvg from '../assets/images/24/ambulance.svg';

const Page23 = () => {
  const boxes = [
    {
      id: 1,
      title: 'Pemantauan Pertumbuhan',
      color: '#169f96',
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
    <BaseLayout currentPage={23} showLogo={false} hideNext={true} showBackToMenu={true}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <div className="flex items-center gap-4">
            <img 
              src={warningImg} 
              alt="Warning" 
              className="animate-slide-up"
              style={{ width: 'clamp(60px, 8vw, 142.7px)', height: 'auto', objectFit: 'contain' }}
            />
            
            <h1 
              className="font-bold text-black animate-slide-up"
              style={{ fontSize: 'clamp(24px, 3vw, 64px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              TANDA BAHAYA
            </h1>
            
            <img 
              src={warningImg} 
              alt="Warning" 
              className="animate-slide-up"
              style={{ width: 'clamp(60px, 8vw, 142.7px)', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </HeaderWithLogo>
      </div>

      <div className="hidden lg:flex flex-1 flex-col items-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex gap-6 max-w-7xl w-full items-stretch justify-center">
          {boxes.map((box, index) => (
            <div 
              key={box.id} 
              className={`flex flex-col flex-1 ${index === 0 ? 'animate-slide-up-delay-1' : index === 1 ? 'animate-slide-up-delay-2' : index === 2 ? 'animate-slide-up-delay-3' : 'animate-slide-up-delay-4'}`}
              style={{ width: 'clamp(280px, 22vw, 406px)', maxWidth: '100%', flexShrink: 0 }}
            >
              <div style={{ height: '90px', display: 'flex', alignItems: 'flex-end' }} className="animate-slide-up-delay-1">
                <h2 
                  className="font-bold mb-2 text-black"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 32.7px)', fontFamily: '"Open Sans", sans-serif' }}
                >
                  {box.title}
                </h2>
              </div>
              
              <div 
                className="p-6 flex flex-col flex-1 rounded-2xl border-2 border-black"
                style={{ backgroundColor: box.color }}
              >
                {box.type === 'images' && (
                  <div className="flex flex-col items-center gap-3 justify-center flex-1">
                    {box.images.map((img, index) => (
                      <img 
                        key={index}
                        src={img.src} 
                        alt={img.alt}
                        style={{ width: 'clamp(180px, 20vw, 275.4px)', height: 'auto', maxHeight: '134.1px', objectFit: 'contain' }}
                        className="rounded-xl"
                      />
                    ))}
                  </div>
                )}
                
                {box.type === 'list' && box.id === 2 && (
                  <ul 
                    className="text-black font-bold space-y-2"
                    style={{ fontSize: 'clamp(14px, 1.8vw, 21.1px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'list' && box.id === 4 && (
                  <ul 
                    className="text-white font-bold space-y-2"
                    style={{ fontSize: 'clamp(14px, 1.8vw, 23px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'text' && (
                  <p 
                    className="text-black font-bold"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 33px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Guide Section - Merged from Page 24 */}
        <div className="flex flex-col items-center mt-12 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-3">
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
                fontSize: 'clamp(16px, 4vw, 26.3px)',
                fontFamily: '"Open Sans", sans-serif',
                color: '#000000'
              }}
            >
              Tonton Panduan Secara Video disini
            </p>
            
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

          <a 
            href="https://drive.google.com/file/d/1jiUuOn8dKwLLlEIsJ65CEi39ubEutTSr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:opacity-80 transition-opacity underline text-center mb-8"
            style={{ 
              backgroundColor: '#ffde59',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000',
              wordBreak: 'break-word'
            }}
          >
            Panduan Edukasi Tanda Bahaya pada BBLR
          </a>
        </div>

        {/* Lapor Faskes Section - Merged from Page 24 */}
        <div className="relative text-center mb-8 animate-slide-up">
          <div className="relative">
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(14px, 3.5vw, 39.9px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              APABILA MENEMUKAN{' '}
              <span className="text-red-600 relative inline-block">
                TANDA BAHAYA,
                <img 
                  src={exclamationImg} 
                  alt="Exclamation"
                  className="absolute animate-slide-up-delay-1 pointer-events-none"
                  style={{ 
                    width: 'clamp(30px, 8vw, 60px)', 
                    height: 'auto',
                    maxHeight: '60px',
                    transform: 'rotate(10deg)',
                    top: 'clamp(-50px, -12vw, -30px)',
                    right: 'clamp(5px, 2vw, 20px)',
                    zIndex: 10
                  }}
                />
              </span>
            </p>
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(20px, 3.5vw, 39.9px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              SEGERA LAPOR KE FASILITAS KESEHATAN TERDEKAT
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl animate-slide-up-delay-2">
          <img 
            src={ambulanceSvg}
            alt="Ambulance"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Mobile: Logo */}
      <div className="lg:hidden py-2">
        <Logo className="mb-2" />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden">
        {/* Header with Warning Icons */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-slide-up">
          <img 
            src={warningImg} 
            alt="Warning" 
            style={{ width: 'clamp(40px, 10vw, 60px)', height: 'auto', objectFit: 'contain' }}
          />
          <h1 
            className="font-bold text-black"
            style={{ fontSize: 'clamp(20px, 6vw, 32px)', fontFamily: '"Open Sans", sans-serif' }}
          >
            TANDA BAHAYA
          </h1>
          <img 
            src={warningImg} 
            alt="Warning" 
            style={{ width: 'clamp(40px, 10vw, 60px)', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Content Boxes - Stacked */}
        <div className="flex flex-col gap-4 items-center mb-8">
          {boxes.map((box, index) => (
            <div 
              key={box.id} 
              className={`flex flex-col ${index === 0 ? 'animate-slide-up-delay-1' : index === 1 ? 'animate-slide-up-delay-2' : index === 2 ? 'animate-slide-up-delay-3' : 'animate-slide-up-delay-4'}`}
              style={{ width: '90%' }}
            >
              <h2 
                className="font-bold mb-2 text-black"
                style={{ fontSize: 'clamp(16px, 5vw, 24px)', fontFamily: '"Open Sans", sans-serif' }}
              >
                {box.title}
              </h2>
              
              <div 
                className="p-4 flex flex-col rounded-xl border-2 border-black"
                style={{ backgroundColor: box.color }}
              >
                {box.type === 'images' && (
                  <div className="flex flex-row items-center justify-center gap-2">
                    {box.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img.src} 
                        alt={img.alt}
                        style={{ width: '32%', height: 'auto', objectFit: 'contain' }}
                        className="rounded-lg"
                      />
                    ))}
                  </div>
                )}
                
                {box.type === 'list' && box.id === 2 && (
                  <ul 
                    className="text-black font-bold space-y-1"
                    style={{ fontSize: 'clamp(12px, 4vw, 16px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'list' && box.id === 4 && (
                  <ul 
                    className="text-white font-bold space-y-1"
                    style={{ fontSize: 'clamp(12px, 4vw, 16px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {box.type === 'text' && (
                  <p 
                    className="text-black font-bold"
                    style={{ fontSize: 'clamp(14px, 4.5vw, 18px)', fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {box.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Guide Section - Merged from Page 24 (Mobile) */}
        <div className="flex flex-col items-center mb-8 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-3">
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
                fontSize: 'clamp(14px, 4vw, 20px)',
                fontFamily: '"Open Sans", sans-serif',
                color: '#000000'
              }}
            >
              Tonton Panduan Secara Video disini
            </p>
            
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

          <a 
            href="https://drive.google.com/file/d/1jiUuOn8dKwLLlEIsJ65CEi39ubEutTSr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg hover:opacity-80 transition-opacity underline text-center mb-6"
            style={{ 
              backgroundColor: '#ffde59',
              fontSize: 'clamp(12px, 3.5vw, 16px)',
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000',
              wordBreak: 'break-word'
            }}
          >
            Panduan Edukasi Tanda Bahaya pada BBLR
          </a>
        </div>

        {/* Lapor Faskes Section - Merged from Page 24 (Mobile) */}
        <div className="relative text-center mb-6 animate-slide-up">
          <div className="relative">
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(12px, 3.5vw, 18px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              APABILA MENEMUKAN{' '}
              <span className="text-red-600 relative inline-block">
                TANDA BAHAYA,
                <img 
                  src={exclamationImg} 
                  alt="Exclamation"
                  className="absolute animate-slide-up-delay-1 pointer-events-none"
                  style={{ 
                    width: 'clamp(25px, 6vw, 40px)', 
                    height: 'auto',
                    maxHeight: '40px',
                    transform: 'rotate(10deg)',
                    top: 'clamp(-35px, -10vw, -20px)',
                    right: 'clamp(2px, 1vw, 10px)',
                    zIndex: 10
                  }}
                />
              </span>
            </p>
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              SEGERA LAPOR KE FASILITAS KESEHATAN TERDEKAT
            </p>
          </div>
        </div>

        <div className="w-full max-w-xl mx-auto animate-slide-up-delay-2 mb-8">
          <img 
            src={ambulanceSvg}
            alt="Ambulance"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page23;
