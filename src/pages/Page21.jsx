import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import babyImg from '../assets/images/21/baby.svg';

const Page21 = () => {
  const boxes = [
    {
      id: 1,
      title: 'MOTORIK KASAR',
      items: [
        'Duduk sebentar tanpa ditopang',
        'Berguling dari tengkurap ke telentang dan sebaliknya.'
      ],
      bodyColor: '#e33a3a'
    },
    {
      id: 2,
      title: 'MOTORIK HALUS',
      items: [
        'Meraih dan memindahkan benda dari satu tangan ke tangan yang lain',
        'Meraup objek dengan 4 jari',
        'Mencoba memasukkan makanan atau benda ke mulut'
      ],
      bodyColor: '#00bf63'
    },
    {
      id: 3,
      title: 'BAHASA & SOSIAL',
      items: [
        'Tersenyum ketika melihat wajah di cermin',
        'Menoleh ketika namanya dipanggil, Mulai mengucapkan bunyi konsonan ("m", "b")',
        'Mengeluarkan vokal saat mengoceh ("ah", "eh", "oh")'
      ],
      bodyColor: '#004aad'
    }
  ];

  return (
    <BaseLayout currentPage={21} showLogo={false} showBackToMenu={true} hideNext={true}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex items-center gap-4">
          <div 
            className="rounded-2xl px-8 py-4 mt-8"
            style={{ backgroundColor: '#2ebbbf' }}
          >
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ 
                WebkitTextStroke: '1px #000000'
              }}
            >
              USIA KOREKSI 6 BULAN
            </h1>
          </div>
          
          <img 
            src={babyImg} 
            alt="Baby"
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
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
                  style={{ fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif', WebkitTextStroke: '1px #000000' }}
                >
                  {box.title}
                </h2>
              </div>
              
              <div 
                className="p-8 flex-1 flex items-center justify-center"
                style={{ backgroundColor: box.bodyColor }}
              >
                <ul className="text-white text-lg sm:text-xl lg:text-2xl text-left leading-relaxed space-y-2">
                  {box.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page21;
