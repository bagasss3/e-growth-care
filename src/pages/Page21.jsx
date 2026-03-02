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
    <BaseLayout currentPage={21} showLogo={false} hideNext={false}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex items-center gap-4">
          <div 
            className="rounded-2xl px-8 py-3 flex items-center justify-center"
            style={{ 
              backgroundColor: '#2ebbbf',
              width: '806.6px'
            }}
          >
            <h1 
              className="font-bold text-white"
              style={{ 
                fontSize: '47.7px',
                fontFamily: 'Poppins, sans-serif',
                WebkitTextStroke: '1px #000000'
              }}
            >
              USIA KOREKSI 6 BULAN
            </h1>
          </div>
          
          <img 
            src={babyImg} 
            alt="Baby"
            className="animate-slide-left"
            style={{ width: '276.5px', height: '249.2px', objectFit: 'contain' }}
          />
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex gap-6" style={{ alignItems: 'stretch' }}>
          {boxes.map((box) => (
            <div 
              key={box.id}
              className="overflow-hidden flex flex-col"
              style={{ width: '519.9px' }}
            >
              <div 
                className="p-4 text-center flex items-center justify-center"
                style={{ backgroundColor: '#5d7dff', minHeight: '180px' }}
              >
                <h2 
                  className="text-white whitespace-pre-line"
                  style={{ 
                    fontSize: '46.3px',
                    fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                    WebkitTextStroke: '0.5px #000000'
                  }}
                >
                  {box.title}
                </h2>
              </div>
              
              <div 
                className="p-8 flex-1 flex items-center justify-center"
                style={{ backgroundColor: box.bodyColor }}
              >
                <ul 
                  className="text-white text-left leading-relaxed space-y-2"
                  style={{ fontSize: '31.2px', fontFamily: '"Open Sans", sans-serif' }}
                >
                  {box.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 font-bold">
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
