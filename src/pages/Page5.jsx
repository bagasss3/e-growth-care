import BaseLayout from '../components/layout/BaseLayout';
import HeaderWithLogo from '../components/layout/HeaderWithLogo';
import babyImg from '../assets/images/5/baby.png';
import clockIcon from '../assets/images/5/clock-icon.svg';
import stockUpIcon from '../assets/images/5/stock-up-icon.svg';

const Page5 = () => {
  return (
    <BaseLayout currentPage={5} showLogo={false} hideNext={false}>
      {/* Desktop Header with Baby inside */}
      <div className="hidden lg:block">
        <HeaderWithLogo contentPosition="center">
          <div 
            className="rounded-3xl px-6 pb-6 pt-4 flex flex-col items-center gap-4 animate-slide-left"
            style={{ 
              backgroundColor: '#16b4a9', 
              marginTop: '24px',
              width: 'clamp(320px, 80vw, 848.2px)',
              maxWidth: '100%'
            }}
          >
            <img 
              src={babyImg} 
              alt="Baby illustration"
              style={{ 
                width: '100%', 
                maxWidth: '550.8px',
                height: 'auto', 
                maxHeight: '201.2px',
                objectFit: 'contain' 
              }}
            />
            
            <p 
              className="text-white leading-relaxed text-center"
              style={{ 
                fontSize: 'clamp(16px, 2.5vw, 22px)', 
                fontFamily: 'Poppins, sans-serif',
                width: '100%',
                maxWidth: '550.8px',
                wordWrap: 'break-word'
              }}
            >
              Bayi Berat Badan Lahir Rendah (BBLR) adalah bayi yang lahir dengan berat badan kurang dari 2.500 gram
            </p>
          </div>
        </HeaderWithLogo>
      </div>

      {/* Mobile: Just logo in header */}
      <div className="lg:hidden">
        <HeaderWithLogo contentPosition="center">
          <div />
        </HeaderWithLogo>
      </div>

      {/* Mobile: Baby and Box below header */}
      <div className="lg:hidden flex flex-col items-center px-4 py-2 overflow-hidden">
        <img 
          src={babyImg} 
          alt="Baby illustration"
          className="animate-slide-left"
          style={{ 
            width: 'clamp(200px, 60vw, 400px)',
            height: 'auto',
            maxHeight: '150px',
            objectFit: 'contain',
            marginBottom: '16px'
          }}
        />
        <div 
          className="rounded-3xl px-6 py-4 flex flex-col items-center animate-slide-left"
          style={{ 
            backgroundColor: '#16b4a9',
            width: 'clamp(300px, 90vw, 600px)',
            maxWidth: '100%'
          }}
        >
          <p 
            className="text-white leading-relaxed text-center"
            style={{ 
              fontSize: 'clamp(14px, 4vw, 18px)', 
              fontFamily: 'Poppins, sans-serif',
              wordWrap: 'break-word'
            }}
          >
            Bayi Berat Badan Lahir Rendah (BBLR) adalah bayi yang lahir dengan berat badan kurang dari 2.500 gram
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-2 mt-2 overflow-hidden">
        {/* Desktop: Wide box side by side */}
        <div className="hidden lg:block">
          <div 
            className="rounded-3xl p-6 animate-slide-right"
            style={{ 
              backgroundColor: '#16b4a9',
              width: 'clamp(320px, 95vw, 1499.6px)',
              maxWidth: '100%'
            }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 
                    className="text-white font-bold"
                    style={{ 
                      fontSize: 'clamp(20px, 3vw, 31.8px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                    }}
                  >
                    DAMPAK JANGKA PENDEK
                  </h3>
                  <img 
                    src={clockIcon} 
                    alt="Clock icon" 
                    style={{ width: 'clamp(24px, 3vw, 32px)', height: 'clamp(24px, 3vw, 32px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-2" 
                  style={{ 
                    fontSize: 'clamp(16px, 2.5vw, 30.1px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Hipotermia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Hipoglikemia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Penyakit Kuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Infeksi Berat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Gangguan Pernapasan</span>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block w-px bg-white mx-4 self-stretch"></div>
              <div className="block md:hidden h-px bg-white my-4"></div>

              <div className="flex-1 p-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 
                    className="text-white font-bold"
                    style={{ 
                      fontSize: 'clamp(20px, 3vw, 31.8px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                    }}
                  >
                    DAMPAK JANGKA PANJANG
                  </h3>
                  <img 
                    src={stockUpIcon} 
                    alt="Stock up icon" 
                    style={{ width: 'clamp(24px, 3vw, 32px)', height: 'clamp(24px, 3vw, 32px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-2" 
                  style={{ 
                    fontSize: 'clamp(16px, 2.5vw, 30.1px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Keterlambatan Perkembangan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Stunting dan wasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Daya Tahan Tubuh rendah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Gangguan Pernapasan berulang</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Side by side columns */}
        <div className="lg:hidden w-full overflow-hidden">
          <div 
            className="rounded-3xl p-3 animate-slide-right"
            style={{ 
              backgroundColor: '#16b4a9',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <div className="flex flex-row gap-2">
              {/* Dampak Jangka Pendek */}
              <div className="flex-1 p-1">
                <div className="flex items-center justify-center gap-1 mb-2 flex-wrap">
                  <h3 
                    className="text-white font-bold text-center"
                    style={{ 
                      fontSize: 'clamp(10px, 3vw, 14px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                    }}
                  >
                    DAMPAK JANGKA PENDEK
                  </h3>
                  <img 
                    src={clockIcon} 
                    alt="Clock icon" 
                    style={{ width: 'clamp(14px, 4vw, 20px)', height: 'clamp(14px, 4vw, 20px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1" 
                  style={{ 
                    fontSize: 'clamp(9px, 2.8vw, 12px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Hipotermia</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Hipoglikemia</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Penyakit Kuning</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Infeksi Berat</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Gangguan Pernapasan</span>
                  </li>
                </ul>
              </div>

              <div className="w-px bg-white"></div>

              {/* Dampak Jangka Panjang */}
              <div className="flex-1 p-1">
                <div className="flex items-center justify-center gap-1 mb-2 flex-wrap">
                  <h3 
                    className="text-white font-bold text-center"
                    style={{ 
                      fontSize: 'clamp(10px, 3vw, 14px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                    }}
                  >
                    DAMPAK JANGKA PANJANG
                  </h3>
                  <img 
                    src={stockUpIcon} 
                    alt="Stock up icon" 
                    style={{ width: 'clamp(14px, 4vw, 20px)', height: 'clamp(14px, 4vw, 20px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1" 
                  style={{ 
                    fontSize: 'clamp(9px, 2.8vw, 12px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word'
                  }}
                >
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Keterlambatan Perkembangan</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Stunting dan wasting</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Daya Tahan Tubuh rendah</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span>•</span>
                    <span>Gangguan Pernapasan berulang</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page5;
