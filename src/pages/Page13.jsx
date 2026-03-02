import BaseLayout from '../components/layout/BaseLayout';
import trademarkImg from '../assets/images/13/trademark.svg';
import kurvaPerempuanImg from '../assets/images/13/kurva-perempuan.png';
import kurvaLakiImg from '../assets/images/13/kurva-laki.png';

const Page13 = () => {
  return (
    <BaseLayout 
      currentPage={13} 
      hideNext={false}
      footerText={
        <span className="animate-slide-up-delay-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '23.6px' }}>
          Kurva Fenton digunakan sampai usia koreksi 50 minggu, kemudian dilanjutkan dengan kurva<br />
          WHO (Buku KIA) dengan tetap memakai usia koreksi hingga bayi berusia 24 bulan (2 tahun)
        </span>
      }
    >
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 pt-0 pb-8 gap-4">
        {/* Left Side - 30% */}
        <div className="lg:w-[30%] flex flex-col">
          <h1 
            className="font-bold text-black mb-4 animate-slide-up"
            style={{ fontSize: '51.4px', fontFamily: '"Open Sans", sans-serif' }}
          >
            APA ITU KURVA FENTON?
          </h1>

          <div 
            className="rounded-2xl p-5 mb-6"
            style={{ 
              backgroundColor: '#004aad',
              width: '480px'
            }}
          >
            <p 
              className="text-white leading-relaxed text-center"
              style={{ fontSize: '20.3px', fontFamily: '"Open Sans", sans-serif' }}
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
              style={{ width: '500px', height: '685px', objectFit: 'contain' }}
            />
            <img 
              src={kurvaLakiImg} 
              alt="Kurva Laki-laki"
              style={{ width: '500px', height: '685px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page13;
