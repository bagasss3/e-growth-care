import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import kemenkesLogo from '../assets/images/kemenkeas-logo.svg';

const videos = [
  { id: 'lVHXbDFzpWg', title: 'Video 1' },
  { id: 'J_C83JPvv4w', title: 'Video 2' },
  { id: 'r26TkoqZD_0', title: 'Video 3' },
  { id: 'nhG98hk4jjA', title: 'Video 4' },
  { id: 'WdfKQ9CdP0U', title: 'Video 5' },
  { id: 'Y9KiPl9jWCo', title: 'Video 6' },
];

const VideoCard = ({ video, index, animationClass }) => (
  <a
    key={video.id || index}
    href={`https://www.youtube.com/watch?v=${video.id}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block ${animationClass}`}
  >
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow mx-auto"
      style={{ 
        width: '100%', 
        maxWidth: '100%',
        aspectRatio: '16 / 9'
      }}
    >
      <img
        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  </a>
);

const Page22 = () => {
  const getAnimationClass = (index) => {
    const classes = [
      'animate-fade-in',
      'animate-fade-in-delay-1',
      'animate-fade-in-delay-2',
      'animate-fade-in-delay-3',
      'animate-fade-in-delay-4',
      'animate-fade-in-delay-5'
    ];
    return classes[index] || 'animate-fade-in';
  };

  return (
    <BaseLayout 
      currentPage={22} 
      showLogo={false}
      showBackToMenu={true}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <h1 
            className="font-bold text-center leading-tight mt-4"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(16px, 2.2vw, 39.2px)', 
              fontFamily: 'Poppins, sans-serif',
              wordWrap: 'break-word'
            }}
          >
            BEBERAPA REKOMENDASI VIDEO STIMULASI BAYI
          </h1>
        </HeaderWithLogo>

        <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8">
          {/* 3x2 Grid of YouTube Videos */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 w-full" 
            style={{ maxWidth: '1800px' }}
          >
            {videos.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                index={index} 
                animationClass={getAnimationClass(index)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Logo */}
        <a href="/" className="mb-2">
          <img 
            src={kemenkesLogo} 
            alt="Logo" 
            className="w-auto"
            style={{ height: 'clamp(72px, 8vw, 100px)' }}
          />
        </a>

        {/* Header */}
        <h1 
          className="font-bold text-center leading-tight mb-4"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(14px, 4vw, 22px)', 
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          BEBERAPA REKOMENDASI VIDEO STIMULASI BAYI
        </h1>

        {/* Section 1: 0-3 Bulan */}
        <div className="mb-4">
          <div 
            className="rounded-lg px-4 py-2 mb-2 text-center mx-auto"
            style={{ backgroundColor: '#ffde59', width: '70%' }}
          >
            <h2 
              className="font-bold"
              style={{ 
                fontSize: 'clamp(16px, 5vw, 24px)', 
                fontFamily: 'Poppins, sans-serif',
                color: '#000000'
              }}
            >
              0 - 3 Bulan
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <VideoCard video={videos[0]} index={0} animationClass="animate-fade-in" />
            <VideoCard video={videos[3]} index={3} animationClass="animate-fade-in-delay-1" />
          </div>
        </div>

        {/* Section 2: 3-6 Bulan */}
        <div className="mb-4">
          <div 
            className="rounded-lg px-4 py-2 mb-2 text-center mx-auto"
            style={{ backgroundColor: '#ffde59', width: '70%' }}
          >
            <h2 
              className="font-bold"
              style={{ 
                fontSize: 'clamp(16px, 5vw, 24px)', 
                fontFamily: 'Poppins, sans-serif',
                color: '#000000'
              }}
            >
              3 - 6 Bulan
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <VideoCard video={videos[1]} index={1} animationClass="animate-fade-in-delay-2" />
            <VideoCard video={videos[4]} index={4} animationClass="animate-fade-in-delay-3" />
          </div>
        </div>

        {/* Section 3: 6 Bulan */}
        <div className="mb-4">
          <div 
            className="rounded-lg px-4 py-2 mb-2 text-center mx-auto"
            style={{ backgroundColor: '#ffde59', width: '70%' }}
          >
            <h2 
              className="font-bold"
              style={{ 
                fontSize: 'clamp(16px, 5vw, 24px)', 
                fontFamily: 'Poppins, sans-serif',
                color: '#000000'
              }}
            >
              6 Bulan
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <VideoCard video={videos[2]} index={2} animationClass="animate-fade-in-delay-4" />
            <VideoCard video={videos[5]} index={5} animationClass="animate-fade-in-delay-5" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page22;
