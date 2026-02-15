import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import babyImg from '../assets/images/19/baby.svg';

const Page19 = () => {
  const boxes = [
    {
      id: 1,
      title: 'MOTORIK KASAR',
      body: 'Dapat mengangkat kepala dan dada saat tengkurap',
      bodyColor: '#e33a3a'
    },
    {
      id: 2,
      title: 'MOTORIK HALUS',
      body: 'Dapat membuka tangan dan mengepal',
      bodyColor: '#00bf63'
    },
    {
      id: 3,
      title: 'BAHASA & SOSIAL',
      body: 'Dapat mengangkat kepala dan dada saat tengkurap',
      bodyColor: '#004aad'
    }
  ];

  return (
    <BaseLayout currentPage={19} showLogo={false}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex items-center gap-4">
          <div 
            className="rounded-2xl px-8 py-4  mt-8"
            style={{ backgroundColor: '#2ebbbf' }}
          >
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ 
                WebkitTextStroke: '1px #000000'
              }}
            >
              USIA KOREKSI 2 BULAN
            </h1>
          </div>
          
          <img 
            src={babyImg} 
            alt="Baby"
            className="w-48 h-48 sm:w-32 sm:h-32 lg:w-50 lg:h-32"
          />
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {boxes.map((box) => (
            <div 
              key={box.id}
              className="overflow-hidden flex flex-col"
            >
              <div 
                className="p-6 text-center"
                style={{ backgroundColor: '#5d7dff' }}
              >
                <h2 
                  className="text-white text-xl sm:text-2xl lg:text-3xl font-bold whitespace-pre-line"
                  style={{ WebkitTextStroke: '0.5px #000000', fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif' }}
                >
                  {box.title}
                </h2>
              </div>
              
              <div 
                className="p-8 flex-1 flex items-center justify-center"
                style={{ backgroundColor: box.bodyColor }}
              >
                <p className="text-white text-lg sm:text-xl lg:text-2xl text-center leading-relaxed">
                  {box.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page19;
