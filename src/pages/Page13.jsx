import BaseLayout from '../components/layout/BaseLayout';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import kurvaFentonMobileImg from '../assets/images/13/KurvaFenton-Mobile.png';
import trademarkImg from '../assets/images/13/trademark.svg';
import kurvaPerempuanImg from '../assets/images/13/kurva-perempuan.png';
import kurvaLakiImg from '../assets/images/13/kurva-laki.png';

const Page13 = () => {
  return (
    <BaseLayout 
      currentPage={13} 
      hideNext={false}
      showLogo={false}
      footerText={
        <span className="animate-slide-up-delay-2 hidden lg:inline" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(12px, 1.8vw, 23.6px)' }}>
          Kurva Fenton digunakan sampai usia koreksi 50 minggu, kemudian dilanjutkan dengan kurva<br />
          WHO (Buku KIA) dengan tetap memakai usia koreksi hingga bayi berusia 24 bulan (2 tahun)
        </span>
      }
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-1 flex-row px-4 sm:px-8 lg:px-16 pt-0 pb-8 gap-4">
        {/* Left Side - 30% */}
        <div className="lg:w-[30%] flex flex-col">
          <h1 
            className="font-bold text-black mb-4 animate-slide-up"
            style={{ fontSize: 'clamp(20px, 3vw, 51.4px)', fontFamily: '"Open Sans", sans-serif' }}
          >
            APA ITU KURVA FENTON?
          </h1>

          <div 
            className="rounded-2xl p-5 mb-6"
            style={{ 
              backgroundColor: '#004aad',
              width: '100%',
              maxWidth: '480px'
            }}
          >
            <p 
              className="text-white leading-relaxed text-center"
              style={{ fontSize: 'clamp(12px, 1.8vw, 20.3px)', fontFamily: '"Open Sans", sans-serif' }}
            >
              Kurva Fenton adalah standar pengukuran pertumbuhan yang direkomendasikan Kemenkes untuk Bayi BBLR dengan usia kehamilan &lt;37 minggu. Pertumbuhan didefinisikan sebagai perubahan ukuran, jumlah, dan besar tubuh yang dapat diukur melalui berat badan dan panjang badan.
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src={trademarkImg} 
              alt="Trademark"
              style={{ width: '200px', height: '136px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Right Side - 70% */}
        <div className="lg:w-[70%] flex flex-col items-center justify-center" style={{ marginTop: '-20px' }}>
          <div className="flex flex-row items-center justify-center gap-1 w-full animate-slide-up-delay-1">
            <img 
              src={kurvaPerempuanImg} 
              alt="Kurva Perempuan"
              style={{ 
                width: 'clamp(250px, 45vw, 500px)', 
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain' 
              }}
            />
            <img 
              src={kurvaLakiImg} 
              alt="Kurva Laki-laki"
              style={{ 
                width: 'clamp(250px, 45vw, 500px)', 
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain' 
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-180px)]">
        {/* Logo */}
        <a href="/" className="mb-4">
          <img 
            src={kemenkesLogo} 
            alt="Kemenkes Logo" 
            className="w-auto"
            style={{ height: 'clamp(96px, 10vw, 140px)' }}
          />
        </a>

        {/* Kurva Fenton Image + Trademark Row - Header */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <img 
            src={kurvaFentonMobileImg} 
            alt="Kurva Fenton"
            style={{ 
              width: 'clamp(200px, 55vw, 300px)', 
              height: 'auto',
              objectFit: 'contain' 
            }}
          />
          <img 
            src={trademarkImg} 
            alt="Trademark"
            style={{ 
              width: 'clamp(100px, 25vw, 150px)', 
              height: 'auto',
              objectFit: 'contain' 
            }}
          />
        </div>

        {/* Content Box - Smaller width */}
        <div 
          className="rounded-xl p-3 mb-3 mx-auto"
          style={{ 
            backgroundColor: '#004aad',
            width: '90%'
          }}
        >
          <p 
            className="text-white leading-relaxed text-center"
            style={{ 
              fontSize: 'clamp(11px, 3vw, 14px)', 
              fontFamily: '"Open Sans", sans-serif' 
            }}
          >
            Kurva Fenton adalah standar pengukuran pertumbuhan yang direkomendasikan Kemenkes untuk Bayi BBLR dengan usia kehamilan &lt;37 minggu. Pertumbuhan didefinisikan sebagai perubahan ukuran, jumlah, dan besar tubuh yang dapat diukur melalui berat badan dan panjang badan.
          </p>
        </div>

        {/* Kurva Images Side by Side - Bigger */}
        <div className="flex flex-row items-center justify-center gap-2 mb-4">
          <img 
            src={kurvaPerempuanImg} 
            alt="Kurva Perempuan"
            style={{ 
              width: '48%', 
              maxWidth: '280px',
              height: 'auto',
              objectFit: 'contain' 
            }}
          />
          <img 
            src={kurvaLakiImg} 
            alt="Kurva Laki-laki"
            style={{ 
              width: '48%', 
              maxWidth: '280px',
              height: 'auto',
              objectFit: 'contain' 
            }}
          />
        </div>

        {/* Footer Text - Mobile */}
        <p 
          className="text-center text-gray-800 leading-relaxed lg:hidden"
          style={{ 
            fontSize: 'clamp(9px, 2.5vw, 12px)', 
            fontFamily: 'Poppins, sans-serif' 
          }}
        >
          Kurva Fenton digunakan sampai usia koreksi 50 minggu, kemudian dilanjutkan dengan kurva WHO (Buku KIA) dengan tetap memakai usia koreksi hingga bayi berusia 24 bulan (2 tahun)
        </p>
      </div>
    </BaseLayout>
  );
};

export default Page13;
