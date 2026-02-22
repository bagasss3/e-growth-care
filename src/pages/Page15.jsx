import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import image1 from '../assets/images/15/1.png';
import image2 from '../assets/images/15/2.png';
import image3 from '../assets/images/15/3.png';

const Page15 = () => {
  return (
    <BaseLayout 
      currentPage={15} 
      showLogo={false}
      footerText={<em>Kemenkes, 2021</em>}
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
          PENGUKURAN PANJANG BADAN
        </h2>

        <div className="flex items-start justify-center gap-2 w-full">
          <div className="flex-1 flex flex-col items-center">
            <img 
              src={image1} 
              alt="Pengukuran Panjang 1"
              className="w-full h-auto max-h-[45vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-4 px-2"
              style={{ fontSize: '20px' }}
            >
              Gunakan alat ukur panjang badan yang terstandar.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center" style={{ marginTop: '60px' }}>
            <img 
              src={image2} 
              alt="Pengukuran Panjang 2"
              className="w-full h-auto max-h-[45vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-4 px-2"
              style={{ fontSize: '20px' }}
            >
              Kepala bayi dipegang dengan kedua tangan dan menempel pada titik nol alat ukur. Luruskan kedua kaki bayi.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <img 
              src={image3} 
              alt="Pengukuran Panjang 3"
              className="w-full h-auto max-h-[45vh] object-contain"
            />
            <p 
              className="text-gray-800 text-center leading-relaxed mt-4 px-2"
              style={{ fontSize: '20px' }}
            >
              Kedua tumit harus menempel, usahakan hingga 90°. Lakukan pengukuran panjang badan 2-3 kali dan catat nilai reratanya.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page15;
