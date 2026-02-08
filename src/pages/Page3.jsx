import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import pertumbuhanImg from '../assets/images/3/pertumbuhan-bayi.png';
import perkembanganImg from '../assets/images/3/perkembangan-bayi.png';

const Page3 = () => {
  const sections = [
    {
      id: 1,
      title: 'Pertumbuhan Bayi',
      image: pertumbuhanImg,
      outlineColor: '#ff2828',
      path: '/apa-itu-bblr',
    },
    {
      id: 2,
      title: 'Perkembangan Bayi',
      image: perkembanganImg,
      outlineColor: '#4e6aff',
      path: '/perkembangan',
    },
  ];

  return (
    <BaseLayout currentPage={3} showLogo={false} hideNext={true}>
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
          style={{ 
            color: '#004aad',
            fontFamily: '"ITC Motter Corpus", "Motter Corpus", Georgia, serif'
          }}
        >
          <div>PERTUMBUHAN &</div>
          <div>PERKEMBANGAN BBLR</div>
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl w-full">
            {sections.map((section) => (
              <a
                key={section.id}
                href={section.path}
                className="rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all transform hover:scale-105 min-h-[400px]"
                style={{ 
                  backgroundColor: 'transparent',
                  border: `4px solid ${section.outlineColor}`
                }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    style={{ width: '220px', height: '220px', objectFit: 'contain' }}
                  />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  <span className="underline underline-offset-4 decoration-2" style={{ textDecorationSkipInk: 'none', WebkitTextDecorationSkip: 'none' }}>
                    {section.title}
                  </span>
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page3;
