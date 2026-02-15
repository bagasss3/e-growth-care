import BaseLayout from '../components/layout/BaseLayout';
import number4Img from '../assets/images/12/number4.svg';
import posterImg from '../assets/images/12/poster.png';

const Page12 = () => {
  return (
    <BaseLayout currentPage={12} showLogo={false}>
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 py-8 gap-8">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"
            style={{ color: '#16b4a9' }}
          >
            Cara Perawatan Bayi BBLR<br />
            agar Tumbuh Kembang<br />
            Optimal
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={number4Img} 
              alt="Number 4"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Pemberian Nutrisi Bayi
            </h2>
          </div>

          <div 
            className="rounded-2xl p-8 w-full max-w-lg mb-4 border-4 border-black"
            style={{ backgroundColor: '#ffc2a4' }}
          >
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Berat badan menunjukkan status gizi dan kesehatan bayi, sehingga perlu ditimbang secara rutin 1 bulan sekali untuk memantau pertumbuhan.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={posterImg} 
              alt="Poster"
              className="w-full max-w-md h-auto max-h-[70vh] object-contain"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page12;
