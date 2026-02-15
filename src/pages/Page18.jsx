import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import usia2Img from '../assets/images/18/usia2.svg';
import usia4Img from '../assets/images/18/usia4.svg';
import usia6Img from '../assets/images/18/usia6.svg';

const Page18 = () => {
  return (
    <BaseLayout currentPage={18} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-8"
          style={{ 
            color: '#99eb94',
            WebkitTextStroke: '2px #000000'
          }}
        >
          PERTUMBUHAN BAYI
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center max-w-3xl mb-12 italic">
          Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
        </p>

        <div className="flex items-end justify-center gap-8 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <img 
              src={usia2Img} 
              alt="Usia 2"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>

          <div className="flex-shrink-0" style={{ marginBottom: '-40px' }}>
            <img 
              src={usia4Img} 
              alt="Usia 4"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>

          <div className="flex-shrink-0">
            <img 
              src={usia6Img} 
              alt="Usia 6"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page18;
