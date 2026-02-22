import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import image1 from '../assets/images/16/1.png';
import image2 from '../assets/images/16/2.png';
import image3 from '../assets/images/16/3.png';
import image4 from '../assets/images/16/4.png';

const Page16 = () => {
  return (
    <BaseLayout 
      currentPage={16} 
      showLogo={false}
    >
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="font-bold text-center leading-tight"
          style={{ color: '#000000', fontSize: '42px' }}
        >
          CARA MENGUKUR ANTROPOMETRI YANG BENAR
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-4">
        {/* Title */}
        <h2 
          className="font-bold mb-8"
          style={{ color: '#000000', fontSize: '35.8px' }}
        >
          PENGUKURAN LINGKAR KEPALA
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-5xl">
          <div className="flex flex-col items-center">
            <img 
              src={image1} 
              alt="Pengukuran Lingkar Kepala 1"
              className="w-full h-auto max-h-[35vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-3 px-4"
              style={{ fontSize: '20px' }}
            >
              Gunakan tali ukur yang terstandar.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img 
              src={image3} 
              alt="Pengukuran Lingkar Kepala 3"
              className="w-full h-auto max-h-[35vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-3 px-4"
              style={{ fontSize: '20px' }}
            >
              Tali ukur harus melewati bagian paling menonjol pada sisi belakang kepala bayi.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img 
              src={image2} 
              alt="Pengukuran Lingkar Kepala 2"
              className="w-full h-auto max-h-[35vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-3 px-4"
              style={{ fontSize: '20px' }}
            >
              Tali ukur harus melewati bagian paling menonjol pada dahi bayi.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img 
              src={image4} 
              alt="Pengukuran Lingkar Kepala 4"
              className="w-full h-auto max-h-[35vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-3 px-4"
              style={{ fontSize: '20px' }}
            >
              Lakukan pengukuran 2-3 kali kemudian catat nilai reratanya.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page16;
