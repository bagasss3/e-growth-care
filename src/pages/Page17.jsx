import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import qrImg from '../assets/images/17/qr.png';

const Page17 = () => {
  return (
    <BaseLayout 
      currentPage={17} 
      showLogo={false}
      showBackToMenu={true}
    >
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="font-bold text-center leading-tight"
          style={{ color: '#000000', fontSize: '42px' }}
        >
          MENGUKUR ANTROPOMETRI BAYI KECIL
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <img 
          src={qrImg} 
          alt="QR Code Antropometri BBLR"
          className="w-full max-w-lg h-auto object-contain mb-8"
        />

        <a 
          href="https://bit.ly/AntropometriBBLR"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 transition-colors"
          style={{ fontSize: '34px', color: '#000000' }}
        >
          https://bit.ly/AntropometriBBLR
        </a>
      </div>
    </BaseLayout>
  );
};

export default Page17;
