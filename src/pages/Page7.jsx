import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import equationImg from '../assets/images/7/Equation.png';
import babyMobileImg from '../assets/images/7/baby-mobile.png';

const Page7 = () => {
  return (
    <BaseLayout currentPage={7} showLogo={false}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <div 
            className="rounded-2xl px-8 py-3"
            style={{ backgroundColor: '#ffde59' }}
          >
            <h1 
              className="font-bold animate-slide-right-header"
              style={{ 
                color: '#000000',
                fontSize: 'clamp(28px, 5vw, 52.2px)',
                fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
              }}
            >
              USIA KOREKSI
            </h1>
          </div>
        </HeaderWithLogo>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-4 overflow-hidden min-h-[calc(100vh-200px)]">
          <div 
            className="rounded-3xl p-8 animate-slide-left"
            style={{ 
              backgroundColor: '#16b4a9',
              border: '2px solid #000000',
              width: 'clamp(320px, 95vw, 1529.7px)',
              maxWidth: '100%'
            }}
          >
            <p 
              className="text-white leading-relaxed text-center mb-4"
              style={{ 
                fontSize: 'clamp(14px, 2vw, 21.6px)', 
                fontFamily: '"Open Sans", sans-serif',
                wordWrap: 'break-word'
              }}
            >
              Usia koreksi adalah penyesuaian usia pada BBLR (&lt;2.500 gr) jika kelahiran &lt; 37 Minggu agar penilaian pertumbuhan dan perkembangannya sesuai dengan usia seharusnya
            </p>

            <div className="flex justify-center mb-4">
              <img 
                src={equationImg} 
                alt="Usia Koreksi Equation"
                style={{ 
                  width: '100%', 
                  maxWidth: '1043.3px', 
                  height: 'auto',
                  maxHeight: '84.3px',
                  objectFit: 'contain' 
                }}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 
                  className="text-white font-bold mb-3"
                  style={{ fontSize: 'clamp(16px, 2vw, 21px)', fontFamily: 'Poppins, sans-serif' }}
                >Keterangan</h3>
                <ul 
                  className="text-white space-y-2"
                  style={{ 
                    fontSize: 'clamp(14px, 1.8vw, 19.5px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Usia koreksi:</strong> usia yang menunjukkan tingkat kematangan bayi seharusnya jika lahir cukup bulan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Usia bayi saat ini:</strong> usia bayi dihitung sejak lahir sampai saat ini (dalam minggu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Usia kehamilan:</strong> usia janin saat bayi dilahirkan (dalam minggu)</span>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h3 
                  className="text-white font-bold mb-3"
                  style={{ fontSize: 'clamp(16px, 2vw, 21px)', fontFamily: 'Poppins, sans-serif' }}
                >Contoh:</h3>
                <p 
                  className="text-white leading-relaxed"
                  style={{ 
                    fontSize: 'clamp(14px, 1.8vw, 19.5px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  Bayi lahir pada usia kehamilan 32 minggu.<br />
                  Saat ini usia bayi 3 bulan (12 minggu).<br />
                  Usia koreksi = (12 minggu + 32 minggu) − 40 minggu<br />
                  <span className="ml-20">= 4 minggu (1 bulan).</span><br /><br />
                  Jadi, pertumbuhan dan perkembangan bayi dinilai seperti bayi usia 1 bulan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden">
        {/* Header under logo - Same style as web */}
        <div className="flex justify-center py-2">
          <div 
            className="rounded-2xl px-6 py-2"
            style={{ backgroundColor: '#ffde59' }}
          >
            <h1 
              className="font-bold animate-slide-right-header"
              style={{ 
                color: '#000000',
                fontSize: 'clamp(24px, 7vw, 36px)',
                fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
              }}
            >
              USIA KOREKSI
            </h1>
          </div>
        </div>

        {/* Baby Image - Bigger */}
        <div className="flex justify-center py-2">
          <img 
            src={babyMobileImg} 
            alt="Baby"
            style={{ 
              width: 'clamp(200px, 65vw, 350px)', 
              height: 'auto',
              objectFit: 'contain' 
            }}
          />
        </div>

        {/* Description Text - Italic, smaller, with bold part */}
        <p 
          className="text-gray-700 text-center leading-relaxed py-2 italic"
          style={{ 
            fontSize: 'clamp(14px, 4vw, 18px)', 
            fontFamily: '"Open Sans", sans-serif',
            wordWrap: 'break-word'
          }}
        >
          Usia koreksi adalah penyesuaian usia <strong>pada BBLR (&lt;2.500 gr) jika kelahiran &lt; 37 Minggu</strong> untuk penilaian pertumbuhan dan perkembangannya
        </p>

        {/* Formula Box */}
        <div 
          className="rounded-xl p-3 my-2 mx-auto"
          style={{ 
            backgroundColor: '#141e80',
            width: 'clamp(280px, 90vw, 400px)'
          }}
        >
          <p 
            className="text-white text-center font-bold"
            style={{ 
              fontSize: 'clamp(16px, 4.5vw, 23px)', 
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            Usia Koreksi = (Usia Bayi saat ini + Usia Kehamilan) - 40 Minggu
          </p>
        </div>

        {/* Gap */}
        <div className="h-4"></div>

        {/* KETERANGAN */}
        <div className="px-2">
          <h3 
            className="font-bold mb-2"
            style={{ 
              fontSize: 'clamp(16px, 4.5vw, 20px)', 
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000'
            }}
          >
            KETERANGAN :
          </h3>
          <ul 
            className="space-y-2"
            style={{ 
              fontSize: 'clamp(14px, 4vw, 18px)', 
              fontFamily: '"Open Sans", sans-serif',
              color: '#000000'
            }}
          >
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Usia koreksi :</strong> usia yang menunjukkan tingkat kematangan bayi seharusnya jika lahir cukup bulan</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Usia bayi saat ini :</strong> usia bayi dihitung sejak lahir sampai saat ini. (dalam minggu)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span><strong>Usia kehamilan:</strong> usia janin saat bayi dilahirkan (dalam minggu).</span>
            </li>
          </ul>
        </div>

        {/* Gap */}
        <div className="h-4"></div>

        {/* CONTOH Box */}
        <div 
          className="rounded-xl p-4 mx-auto"
          style={{ 
            backgroundColor: '#141e80',
            width: 'clamp(280px, 90vw, 400px)'
          }}
        >
          <h3 
            className="text-white font-bold mb-2"
            style={{ 
              fontSize: 'clamp(16px, 4.5vw, 20px)', 
              fontFamily: '"Open Sans", sans-serif'
            }}
          >
            CONTOH :
          </h3>
          <div style={{ fontSize: 'clamp(13px, 3.8vw, 17px)', fontFamily: '"Open Sans", sans-serif' }}>
            <p className="text-white mb-1">Bayi lahir pada usia kehamilan 32 minggu.</p>
            <p className="text-white mb-2">Saat ini usia bayi 3 bulan (12 minggu).</p>
            <p className="text-white font-mono" style={{ whiteSpace: 'pre' }}>Usia koreksi = (12 + 32) − 40</p>
            <p className="text-white font-mono ml-24" style={{ whiteSpace: 'pre' }}>= 4 minggu (1 bulan).</p>
            <p className="text-white mt-2">Jadi, pertumbuhan dan perkembangan bayi dinilai seperti bayi usia 1 bulan.</p>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4"></div>
      </div>
    </BaseLayout>
  );
};

export default Page7;
