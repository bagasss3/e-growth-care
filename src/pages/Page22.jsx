import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';

const videos = [
  { id: 'lVHXbDFzpWg', title: 'Video 1' },
  { id: 'J_C83JPvv4w', title: 'Video 2' },
  { id: 'r26TkoqZD_0', title: 'Video 3' },
  { id: 'nhG98hk4jjA', title: 'Video 4' },
  { id: 'WdfKQ9CdP0U', title: 'Video 5' },
  { id: 'Y9KiPl9jWCo', title: 'Video 6' },
];

const Page22 = () => {
  return (
    <BaseLayout 
      currentPage={22} 
      showLogo={false}
      showBackToMenu={true}
    >
      <HeaderWithLogo contentPosition="center">
        <h1 
          className="font-bold text-center leading-tight"
          style={{ color: '#000000', fontSize: '42px' }}
        >
          BEBERAPA REKOMENDASI VIDEO STIMULASI BAYI
        </h1>
      </HeaderWithLogo>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8">
        {/* 3x2 Grid of YouTube Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page22;
