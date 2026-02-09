import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import bookKiaImg from '../assets/images/8/BookKia.png';
import bukuKBKImg from '../assets/images/8/BukuKBK.png';

const Page8 = () => {
  return (
    <BaseLayout currentPage={8} showLogo={false} showBackToMenu={true}>
      <HeaderWithLogo contentPosition="center">
        <div 
          className="rounded-2xl px-6 py-4 w-full max-w-3xl"
          style={{ backgroundColor: '#004aad' }}
        >
          <p className="text-white text-sm sm:text-base leading-relaxed">
            Buku KIA Khusus Bayi Kecil (Buku KBK) adalah panduan tambahan bagi ibu/pengasuh bayi dengan berat lahir &lt;2500 gram dengan usia kehamilan &lt;37 minggu, yang berisi pencatatan dan edukasi khusus, serta digunakan bersama dengan Buku KIA. jika bayi BBLR yang lahir cukup bulan tetap menggunakan Buku KIA untuk pemantauan tumbuh kembang dan kesehatan bayi.
          </p>
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl w-full">
          
          <div className="flex items-center gap-4">
            <h2 
              className="text-xl sm:text-2xl text-center"
              style={{ 
                color: '#000000',
                fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
              }}
            >
              BUKU<br />KIA
            </h2>
            <img 
              src={bookKiaImg} 
              alt="Buku KIA"
              className="w-48 h-auto sm:w-56 lg:w-64"
            />
          </div>

          <div className="flex items-center gap-4">
            <img 
              src={bukuKBKImg} 
              alt="Buku KIA Khusus Bayi Kecil"
              className="w-48 h-auto sm:w-56 lg:w-64"
            />
            <h2 
              className="text-xl sm:text-2xl text-center"
              style={{ 
                color: '#000000',
                fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
              }}
            >
              BUKU KIA<br />KHUSUS BAYI<br />KECIL (KBK)
            </h2>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page8;
