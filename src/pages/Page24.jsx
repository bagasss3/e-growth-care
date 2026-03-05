import BaseLayout from '../components/layout/BaseLayout';
import exclamationImg from '../assets/images/24/exclamatioin.svg';
import ambulanceVideo from '../assets/images/24/ambulance.mp4';

const Page24 = () => {
  return (
    <BaseLayout currentPage={24} hideNext={true} showBackToMenu={true}>
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="relative text-center mb-8 animate-slide-up">
          <div className="relative">
            <p 
              className="text-black font-bold leading-tight"
              style={{ fontSize: 'clamp(20px, 3.5vw, 39.9px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              APABILA MENEMUKAN{' '}
              <span className="text-red-600 relative inline-block">
                TANDA BAHAYA,
                <img 
                  src={exclamationImg} 
                  alt="Exclamation"
                  className="absolute animate-slide-up-delay-1"
                  style={{ 
                    width: 'clamp(50px, 8vw, 120px)', 
                    height: 'auto',
                    maxHeight: '100px',
                    transform: 'rotate(25deg)',
                    top: '-80px',
                    right: '-10px'
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
          <video 
            src={ambulanceVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page24;
