import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import headerImg from '../assets/images/18/header.svg';
import usia2Img from '../assets/images/18/usia2.svg';
import usia4Img from '../assets/images/18/usia4.svg';
import usia6Img from '../assets/images/18/usia6.svg';

const Page18 = () => {
  return (
    <BaseLayout currentPage={18} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <img 
          src={headerImg} 
          alt="PERTUMBUHAN BAYI"
          className="animate-pop-in"
          style={{ 
            width: 'clamp(300px, 80vw, 1134px)', 
            height: 'auto',
            maxHeight: '116.5px',
            objectFit: 'contain', 
            marginTop: '32px' 
          }}
        />
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-4">
        <p 
          className="text-gray-700 leading-relaxed text-center max-w-3xl mb-8 italic"
          style={{ fontSize: 'clamp(14px, 2vw, 20.2px)', fontFamily: 'Poppins, sans-serif' }}
        >
          Perkembangan adalah bertambahnya kemampuan (skill) dalam struktur dan fungsi pada anak. Stimulasi harus dilakukan setiap hari melalui kegiatan bermain yang menyenangkan dan sesuai dengan usia bayi
        </p>

        <div className="flex items-end justify-center gap-4 md:gap-8 w-full max-w-6xl flex-wrap">
          <div className="flex-shrink-0 animate-pop-in-delay-1">
            <img 
              src={usia2Img} 
              alt="Usia 2"
              style={{ 
                width: 'clamp(200px, 30vw, 509.5px)', 
                height: 'auto',
                maxHeight: '442.4px',
                objectFit: 'contain' 
              }}
            />
          </div>

          <div className="flex-shrink-0 animate-pop-in-delay-2" style={{ marginBottom: '-20px' }}>
            <img 
              src={usia4Img} 
              alt="Usia 4"
              style={{ 
                width: 'clamp(200px, 30vw, 509.5px)', 
                height: 'auto',
                maxHeight: '442.4px',
                objectFit: 'contain' 
              }}
            />
          </div>

          <div className="flex-shrink-0 animate-pop-in-delay-3">
            <img 
              src={usia6Img} 
              alt="Usia 6"
              style={{ 
                width: 'clamp(200px, 30vw, 509.5px)', 
                height: 'auto',
                maxHeight: '442.4px',
                objectFit: 'contain' 
              }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page18;
