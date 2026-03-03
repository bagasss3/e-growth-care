import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import qrImg from '../assets/images/17/qr.png';

const Page17 = () => {
  return (
    <BaseLayout 
      currentPage={17} 
      showLogo={false}
      showBackToMenu={true}
      hideNext={true}
    >
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="font-bold text-center leading-tight mt-4 animate-slide-up"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(24px, 4vw, 42px)', 
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
            width: 'clamp(200px, 50vw, 626.6px)', 
            height: 'auto',
            maxHeight: '50vh',
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
            fontSize: 'clamp(16px, 3vw, 34px)', 
            color: '#000000', 
            fontFamily: '"Open Sans", sans-serif',
            wordWrap: 'break-word'
          }}
        >
          https://bit.ly/AntropometriBBLR
        </a>
      </div>
    </BaseLayout>
  );
};

export default Page17;
