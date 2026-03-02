import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import bookKiaImg from '../assets/images/8/BookKia.png';
import bukuKBKImg from '../assets/images/8/BukuKBK.png';

const Page8 = () => {
  return (
    <BaseLayout currentPage={8} showLogo={false} showBackToMenu={true} hideNext={true}>
      <HeaderWithLogo contentPosition="center">
        <div 
          className="rounded-2xl px-6 py-4 flex items-center justify-center animate-slide-up"
          style={{ 
            backgroundColor: '#004aad',
            width: '1185.6px'
          }}
        >
          <p 
            className="text-white leading-relaxed text-center"
            style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}
          >
            Buku KIA Khusus Bayi Kecil (Buku KBK) adalah panduan tambahan bagi ibu/pengasuh bayi dengan berat lahir &lt;2500 gram dengan usia kehamilan &lt;37 minggu, yang berisi pencatatan dan edukasi khusus, serta digunakan bersama dengan Buku KIA. jika bayi BBLR yang lahir cukup bulan tetap menggunakan Buku KIA untuk pemantauan tumbuh kembang dan kesehatan bayi.
          </p>
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-40 max-w-7xl w-full">
          
          {/* Buku KIA Column */}
          <div className="flex items-center gap-8">
            <h2 
              className="text-center font-bold animate-slide-left-delay-2"
              style={{ 
                color: '#000000',
                fontSize: '32px',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              BUKU KIA
            </h2>
            <div className="flex flex-col items-center gap-6 animate-slide-left-delay-1">
              <div style={{ width: '459.2px', height: '658.6px' }}>
                <img 
                  src={bookKiaImg} 
                  alt="Buku KIA"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <a 
                href="https://ayosehat.kemkes.go.id/buku-kia-kesehatan-ibu-dan-anak"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ 
                  color: '#000000',
                  fontSize: '20px',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                DOWNLOAD DISINI
              </a>
            </div>
          </div>

          {/* Buku KBK Column */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-6 animate-slide-right-delay-1">
              <div style={{ width: '459.2px', height: '658.6px' }}>
                <img 
                  src={bukuKBKImg} 
                  alt="Buku KIA Khusus Bayi Kecil"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <a 
                href="https://repository.kemkes.go.id/book/893"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ 
                  color: '#000000',
                  fontSize: '20px',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                DOWNLOAD DISINI
              </a>
            </div>
            <h2 
              className="text-center font-bold animate-slide-right-delay-2"
              style={{ 
                color: '#000000',
                fontSize: '25.3px',
                fontFamily: '"Open Sans", sans-serif'
              }}
            >
              BUKU KIA KHUSUS BAYI KECIL
            </h2>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page8;
