import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import qrImg from '../assets/images/17/qr.png';

const Page17 = () => {
  return (
    <BaseLayout 
      currentPage={17} 
      showLogo={false}
      showBackToMenu={true}
      hideNext={true}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold text-center leading-tight mt-4 animate-slide-up"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(16px, 2.2vw, 42px)', 
              fontFamily: '"Open Sans", sans-serif',
              wordWrap: 'break-word'
            }}
          >
            MENGUKUR ANTROPOMETRI BAYI KECIL
          </h1>
        </HeaderWithLogo>

        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 animate-slide-up-delay-1">
          <img 
            src={qrImg} 
            alt="QR Code Antropometri BBLR"
            style={{ 
              width: 'clamp(200px, 30vw, 400px)', 
              height: 'auto',
              maxHeight: '40vh',
              objectFit: 'contain', 
              marginBottom: '32px',
              flexShrink: 0 
            }}
          />

          <a 
            href="https://bit.ly/AntropometriBBLR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ 
              fontSize: 'clamp(14px, 2vw, 28px)', 
              color: '#000000', 
              fontFamily: '"Open Sans", sans-serif',
              wordWrap: 'break-word'
            }}
          >
            https://bit.ly/AntropometriBBLR
          </a>
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

        {/* Header */}
        <h1 
          className="font-bold text-center leading-tight mb-3 animate-slide-up"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(14px, 4vw, 24px)', 
            fontFamily: '"Open Sans", sans-serif'
          }}
        >
          MENGUKUR ANTROPOMETRI BAYI KECIL
        </h1>

        {/* Guide Text */}
        <p 
          className="text-center mb-4 animate-slide-up-delay-1"
          style={{ 
            fontSize: 'clamp(12px, 3.5vw, 18px)', 
            fontFamily: 'Poppins, sans-serif',
            color: '#000000'
          }}
        >
          Anda dapat Mengikuti panduan Antropometri Bayi Kecil Secara Video Dibawah ini
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-4 animate-slide-up-delay-1">
          <img 
            src={qrImg} 
            alt="QR Code Antropometri BBLR"
            style={{ 
              width: 'clamp(180px, 50vw, 280px)', 
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Link */}
        <div className="flex justify-center">
          <a 
            href="https://bit.ly/AntropometriBBLR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity text-center"
            style={{ 
              fontSize: 'clamp(12px, 3.5vw, 18px)', 
              color: '#000000', 
              fontFamily: '"Open Sans", sans-serif',
              wordBreak: 'break-all'
            }}
          >
            https://bit.ly/AntropometriBBLR
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page17;
