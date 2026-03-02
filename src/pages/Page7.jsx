import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import equationImg from '../assets/images/7/Equation.png';

const Page7 = () => {
  return (
    <BaseLayout currentPage={7} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <div 
          className="rounded-2xl px-8 py-3"
          style={{ backgroundColor: '#ffde59' }}
        >
          <h1 
            className="font-bold animate-slide-right-header"
            style={{ 
              color: '#000000',
              fontSize: '52.2px',
              fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif'
            }}
          >
            USIA KOREKSI
          </h1>
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div 
          className="rounded-3xl p-8 animate-slide-left"
          style={{ 
            backgroundColor: '#16b4a9',
            border: '2px solid #000000',
            width: '1529.7px'
          }}
        >
          <p 
            className="text-white leading-relaxed text-center mb-6"
            style={{ fontSize: '21.6px', fontFamily: '"Open Sans", sans-serif' }}
          >
            Usia koreksi adalah penyesuaian usia pada BBLR (&lt;2.500 gr) jika kelahiran &lt; 37 Minggu agar penilaian pertumbuhan dan perkembangannya sesuai dengan usia seharusnya
          </p>

          <div className="flex justify-center mb-6">
            <img 
              src={equationImg} 
              alt="Usia Koreksi Equation"
              style={{ width: '1043.3px', height: '84.3px', objectFit: 'contain' }}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 
                className="text-white font-bold mb-3"
                style={{ fontSize: '21px', fontFamily: 'Poppins, sans-serif' }}
              >Keterangan</h3>
              <ul 
                className="text-white space-y-2"
                style={{ fontSize: '19.5px', fontFamily: 'Poppins, sans-serif' }}
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
                style={{ fontSize: '21px', fontFamily: 'Poppins, sans-serif' }}
              >Contoh:</h3>
              <p 
                className="text-white leading-relaxed"
                style={{ fontSize: '19.5px', fontFamily: 'Poppins, sans-serif' }}
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
    </BaseLayout>
  );
};

export default Page7;
