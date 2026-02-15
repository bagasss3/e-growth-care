import BaseLayout from '../components/layout/BaseLayout';
import number1Img from '../assets/images/9/number1.svg';
import qrImg from '../assets/images/9/qr.png';
import posterImg from '../assets/images/9/poster.png';

const Page9 = () => {
  return (
    <BaseLayout currentPage={9} showLogo={false}>
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 py-8 gap-8">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"
            style={{ color: '#16b4a9' }}
          >
            Cara Perawatan Bayi BBLR<br />
            agar Tumbuh Kembang<br />
            Optimal
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={number1Img} 
              alt="Number 1"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Pemberian Nutrisi Bayi
            </h2>
          </div>

          <div className="mb-4 flex justify-center">
            <img 
              src={qrImg} 
              alt="QR Code"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
            />
          </div>

          <a 
            href="https://bit.ly/CaraMenyusuiYangBenar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm sm:text-base hover:text-blue-800 text-center"
          >
            https://bit.ly/CaraMenyusuiYangBenar
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={posterImg} 
              alt="Poster"
              className="w-full max-w-md h-auto max-h-[70vh] object-contain"
            />
            <p className="absolute bottom-2 left-2 text-sm font-bold text-gray-800">
              (RSI, 2026)
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page9;
