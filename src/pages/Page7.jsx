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
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            style={{ color: '#000000' }}
          >
            USIA KOREKSI
          </h1>
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div 
          className="rounded-3xl p-8 w-full max-w-5xl"
          style={{ backgroundColor: '#16b4a9' }}
        >
          <p className="text-white text-base sm:text-lg leading-relaxed text-center mb-6">
            Usia koreksi adalah penyesuaian usia pada BBLR (&lt;2.500 gr) jika kelahiran &lt; 37 Minggu agar penilaian pertumbuhan dan perkembangannya sesuai dengan usia seharusnya
          </p>

          <div className="flex justify-center mb-6">
            <img 
              src={equationImg} 
              alt="Usia Koreksi Equation"
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-white text-lg font-bold mb-3">Keterangan</h3>
              <ul className="text-white text-sm sm:text-base space-y-2">
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
              <h3 className="text-white text-lg font-bold mb-3">Contoh:</h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
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
