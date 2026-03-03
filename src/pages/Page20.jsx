import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import babyImg from '../assets/images/20/baby.svg';

const Page20 = () => {
  const boxes = [
    {
      id: 1,
      title: 'MOTORIK KASAR',
      items: [
        'Menopang dada dengan siku dan pergelangan tangan saat tengkurap',
        'Berguling (tengkurap ke telentang)'
      ],
      bodyColor: '#e33a3a'
    },
    {
      id: 2,
      title: 'MOTORIK HALUS',
      items: [
        'Telapak tangan tidak mengepal, Bermain dengan jari-jari di tengah tubuh,',
        'Menggenggam benda'
      ],
      bodyColor: '#00bf63'
    },
    {
      id: 3,
      title: 'BAHASA & SOSIAL',
      items: [
        'Bersuara / cooing panjang (aah, uuh)',
        'Tertawa spontan dan keras',
        'Menoleh ke arah suara'
      ],
      bodyColor: '#004aad'
    }
  ];

  return (
    <BaseLayout currentPage={20} showLogo={false} hideNext={false}>
      <HeaderWithLogo contentPosition="center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div 
            className="rounded-2xl px-8 py-3 flex items-center justify-center"
            style={{ 
              backgroundColor: '#2ebbbf',
              width: 'clamp(280px, 70vw, 806.6px)',
              maxWidth: '100%'
            }}
          >
            <h1 
              className="font-bold text-white"
              style={{ 
                fontSize: 'clamp(24px, 4vw, 47.7px)',
                fontFamily: 'Poppins, sans-serif',
                WebkitTextStroke: '1px #000000'
              }}
            >
              USIA KOREKSI 4 BULAN
            </h1>
          </div>
          
          <img 
            src={babyImg} 
            alt="Baby"
            className="animate-slide-left"
            style={{ 
              width: 'clamp(120px, 20vw, 276.5px)', 
              height: 'auto',
              maxHeight: '20vh',
              objectFit: 'contain',
              flexShrink: 0 
            }}
          />
        </div>
      </HeaderWithLogo>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full justify-center items-center lg:items-stretch">
          {boxes.map((box) => (
            <div 
              key={box.id}
              className="overflow-hidden flex flex-col"
              style={{ 
                width: 'clamp(280px, 30vw, 519.9px)', 
                maxWidth: '100%',
                flexShrink: 0 
              }}
            >
              <div 
                className="p-4 text-center flex items-center justify-center"
                style={{ backgroundColor: '#5d7dff', minHeight: '120px' }}
              >
                <h2 
                  className="text-white whitespace-pre-line"
                  style={{ 
                    fontSize: 'clamp(20px, 3vw, 46.3px)',
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
                  style={{ 
                    fontSize: 'clamp(14px, 2vw, 31.2px)', 
                    fontFamily: '"Open Sans", sans-serif',
                    wordWrap: 'break-word'
                  }}
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

export default Page20;
