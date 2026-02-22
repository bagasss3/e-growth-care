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
        <>
          Kurva Fenton digunakan sampai usia koreksi 50 minggu, kemudian dilanjutkan dengan kurva<br />
          WHO (Buku KIA) dengan tetap memakai usia koreksi hingga bayi berusia 24 bulan (2 tahun)
        </>
      }
    >
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 pt-0 pb-8 gap-4">
        {/* Left Side - 30% */}
        <div className="lg:w-[30%] flex flex-col">
          <h1 
            className="font-bold text-black mb-4 leading-tight"
            style={{ fontSize: '51px', lineHeight: '1.1' }}
          >
            APA ITU KURVA<br />FENTON ?
          </h1>

          <div 
            className="rounded-2xl p-6 mb-6 w-full max-w-md"
            style={{ backgroundColor: '#004aad' }}
          >
            <p 
              className="text-white leading-relaxed"
              style={{ fontSize: '20.3px' }}
            >
              Kurva Fenton adalah standar pengukuran pertumbuhan yang direkomendasikan Kemenkes untuk Bayi BBLR dengan usia kehamilan &lt;37 minggu. Pertumbuhan didefinisikan sebagai perubahan ukuran, jumlah, dan besar tubuh yang dapat diukur melalui berat badan dan panjang badan.
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src={trademarkImg} 
              alt="Trademark"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>
        </div>

        {/* Right Side - 70% */}
        <div className="lg:w-[70%] flex flex-col items-center justify-center" style={{ marginTop: '-20px' }}>
          <div className="flex flex-row items-center justify-center gap-1 w-full">
            <img 
              src={kurvaPerempuanImg} 
              alt="Kurva Perempuan"
              className="w-1/2 h-auto max-h-[70vh] object-contain"
            />
            <img 
              src={kurvaLakiImg} 
              alt="Kurva Laki-laki"
              className="w-1/2 h-auto max-h-[70vh] object-contain"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page13;
