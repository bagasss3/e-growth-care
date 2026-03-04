import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';
import bookKiaImg from '../assets/images/8/BookKia.png';
import bukuKBKImg from '../assets/images/8/BukuKBK.png';

const Page8 = () => {
  return (
    <BaseLayout currentPage={8} showLogo={false} showBackToMenu={true} hideNext={true}>
      {/* Very Large screens (1600px+): Logo left, Header center */}
      <div className="hidden 2xl:block">
        <HeaderWithLogo contentPosition="center">
          <div 
            className="rounded-2xl px-6 py-4 flex items-center justify-center animate-slide-up"
            style={{ 
              backgroundColor: '#004aad',
              width: 'clamp(320px, 85vw, 1185.6px)',
              maxWidth: '100%'
            }}
          >
            <p 
              className="text-white leading-relaxed text-center"
              style={{ 
                fontSize: 'clamp(14px, 2vw, 20px)', 
                fontFamily: 'Poppins, sans-serif',
                wordWrap: 'break-word'
              }}
            >
              Buku KIA Khusus Bayi Kecil (Buku KBK) adalah panduan tambahan bagi ibu/pengasuh bayi dengan berat lahir &lt;2500 gram dengan usia kehamilan &lt;37 minggu, yang berisi pencatatan dan edukasi khusus, serta digunakan bersama dengan Buku KIA. jika bayi BBLR yang lahir cukup bulan tetap menggunakan Buku KIA untuk pemantauan tumbuh kembang dan kesehatan bayi.
            </p>
          </div>
        </HeaderWithLogo>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-20 max-w-7xl w-full">
            
            {/* Buku KIA Column */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <h2 
                className="text-center font-bold animate-slide-left-delay-2 order-2 sm:order-1"
                style={{ 
                  color: '#000000',
                  fontSize: 'clamp(20px, 2.5vw, 32px)',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                BUKU KIA
              </h2>
              <div className="flex flex-col items-center gap-4 animate-slide-left-delay-1 order-1 sm:order-2">
                <div style={{ width: 'clamp(200px, 30vw, 400px)', height: 'auto', maxHeight: '50vh', flexShrink: 0 }}>
                  <img 
                    src={bookKiaImg} 
                    alt="Buku KIA"
                    style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'contain' }}
                  />
                </div>
                <a 
                  href="https://ayosehat.kemkes.go.id/buku-kia-kesehatan-ibu-dan-anak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: '#000000', fontSize: 'clamp(16px, 1.8vw, 20px)', fontFamily: '"Open Sans", sans-serif' }}
                >
                  DOWNLOAD DISINI
                </a>
              </div>
            </div>

            {/* Buku KBK Column */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-4 animate-slide-right-delay-1 order-1 sm:order-1">
                <div style={{ width: 'clamp(200px, 30vw, 400px)', height: 'auto', maxHeight: '50vh', flexShrink: 0 }}>
                  <img 
                    src={bukuKBKImg} 
                    alt="Buku KIA Khusus Bayi Kecil"
                    style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'contain' }}
                  />
                </div>
                <a 
                  href="https://repository.kemkes.go.id/book/893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: '#000000', fontSize: 'clamp(16px, 1.8vw, 20px)', fontFamily: '"Open Sans", sans-serif' }}
                >
                  DOWNLOAD DISINI
                </a>
              </div>
              <h2 
                className="text-center font-bold animate-slide-right-delay-2 order-2 sm:order-2"
                style={{ color: '#000000', fontSize: 'clamp(16px, 2vw, 25.3px)', fontFamily: '"Open Sans", sans-serif' }}
              >
                BUKU KIA KHUSUS BAYI KECIL
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Screens (1024px to 1600px): Logo left, Header right */}
      <div className="hidden md:block 2xl:hidden">
        <div className="flex flex-col px-4 sm:px-8 py-4">
          {/* Logo + Header Row */}
          <div className="flex flex-row items-start gap-4 mb-6">
            {/* Logo on Left */}
            <img 
              src={kemenkesLogo}
              alt="Kemenkes Logo" 
              style={{ height: 'clamp(96px, 10vw, 140px)' }}
              className="w-auto flex-shrink-0"
            />
            
            {/* Header Box - takes remaining space */}
            <div 
              className="flex-1 rounded-2xl px-4 py-3 animate-slide-up"
              style={{ backgroundColor: '#004aad' }}
            >
              <p 
                className="text-white leading-relaxed"
                style={{ 
                  fontSize: 'clamp(12px, 1.5vw, 16px)', 
                  fontFamily: 'Poppins, sans-serif',
                  wordWrap: 'break-word'
                }}
              >
                Buku KIA Khusus Bayi Kecil (Buku KBK) adalah panduan tambahan bagi ibu/pengasuh bayi dengan berat lahir &lt;2500 gram dengan usia kehamilan &lt;37 minggu, yang berisi pencatatan dan edukasi khusus, serta digunakan bersama dengan Buku KIA. jika bayi BBLR yang lahir cukup bulan tetap menggunakan Buku KIA untuk pemantauan tumbuh kembang dan kesehatan bayi.
              </p>
            </div>
          </div>

          {/* Books Section - Stacked */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Buku KIA */}
            <div className="flex flex-col items-center gap-3 animate-slide-left-delay-1">
              <h2 
                className="text-center font-bold"
                style={{ color: '#000000', fontSize: '24px', fontFamily: '"Open Sans", sans-serif' }}
              >
                BUKU KIA
              </h2>
              <div style={{ width: '250px', height: 'auto' }}>
                <img 
                  src={bookKiaImg} 
                  alt="Buku KIA"
                  style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain' }}
                />
              </div>
              <a 
                href="https://ayosehat.kemkes.go.id/buku-kia-kesehatan-ibu-dan-anak"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif' }}
              >
                DOWNLOAD DISINI
              </a>
            </div>

            {/* Buku KBK */}
            <div className="flex flex-col items-center gap-3 animate-slide-right-delay-1">
              <h2 
                className="text-center font-bold"
                style={{ color: '#000000', fontSize: '20px', fontFamily: '"Open Sans", sans-serif' }}
              >
                BUKU KIA KHUSUS BAYI KECIL
              </h2>
              <div style={{ width: '250px', height: 'auto' }}>
                <img 
                  src={bukuKBKImg} 
                  alt="Buku KIA Khusus Bayi Kecil"
                  style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain' }}
                />
              </div>
              <a 
                href="https://repository.kemkes.go.id/book/893"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: '#000000', fontSize: '16px', fontFamily: '"Open Sans", sans-serif' }}
              >
                DOWNLOAD DISINI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col px-4 py-4 overflow-hidden">
        {/* Box with description */}
        <div 
          className="rounded-2xl px-4 py-3 mb-6 animate-slide-up"
          style={{ backgroundColor: '#004aad' }}
        >
          <p 
            className="text-white leading-relaxed text-center"
            style={{ 
              fontSize: 'clamp(12px, 3.5vw, 16px)', 
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Buku KIA Khusus Bayi Kecil (Buku KBK) adalah panduan tambahan bagi ibu/pengasuh bayi dengan berat lahir &lt;2500 gram dengan usia kehamilan &lt;37 minggu, yang berisi pencatatan dan edukasi khusus, serta digunakan bersama dengan Buku KIA. jika bayi BBLR yang lahir cukup bulan tetap menggunakan Buku KIA untuk pemantauan tumbuh kembang dan kesehatan bayi.
          </p>
        </div>

        {/* Books Section */}
        <div className="flex flex-col gap-6">
          {/* Buku KIA */}
          <div className="flex flex-row items-center gap-4 animate-slide-left-delay-1">
            {/* Book Image Left */}
            <div style={{ width: '40%' }}>
              <img 
                src={bookKiaImg} 
                alt="Buku KIA"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            {/* Book Name & Download Right */}
            <div className="flex flex-col items-start" style={{ width: '60%' }}>
              <h2 
                className="font-bold mb-2"
                style={{ 
                  color: '#000000',
                  fontSize: 'clamp(18px, 5vw, 28px)',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                BUKU KIA
              </h2>
              <a 
                href="https://ayosehat.kemkes.go.id/buku-kia-kesehatan-ibu-dan-anak"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ 
                  color: '#000000',
                  fontSize: 'clamp(14px, 4vw, 20px)',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                DOWNLOAD DISINI
              </a>
            </div>
          </div>

          {/* Buku KBK */}
          <div className="flex flex-row items-center gap-4 animate-slide-right-delay-1">
            {/* Book Image Left */}
            <div style={{ width: '40%' }}>
              <img 
                src={bukuKBKImg} 
                alt="Buku KIA Khusus Bayi Kecil"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            {/* Book Name & Download Right */}
            <div className="flex flex-col items-start" style={{ width: '60%' }}>
              <h2 
                className="font-bold mb-2"
                style={{ 
                  color: '#000000',
                  fontSize: 'clamp(16px, 4.5vw, 24px)',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                BUKU KIA KHUSUS BAYI KECIL
              </h2>
              <a 
                href="https://repository.kemkes.go.id/book/893"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ 
                  color: '#000000',
                  fontSize: 'clamp(14px, 4vw, 20px)',
                  fontFamily: '"Open Sans", sans-serif'
                }}
              >
                DOWNLOAD DISINI
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page8;
