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
            className="rounded-3xl px-6 pb-6 pt-4 flex flex-col items-center gap-4 animate-slide-left lg:max-w-[500px] xl:max-w-[700px]"
            style={{ 
              backgroundColor: '#16b4a9', 
              marginTop: '24px',
              width: '100%'
            }}
          >
            <img 
              src={babyImg} 
              alt="Baby illustration"
              className="w-full max-w-[400px] xl:max-w-[550px]"
              style={{ 
                height: 'auto', 
                maxHeight: '201.2px',
                objectFit: 'contain' 
              }}
            />
            
            <p 
              className="text-white leading-relaxed text-center w-full max-w-[400px] xl:max-w-[550px]"
              style={{ 
                fontSize: 'clamp(14px, 2vw, 20px)', 
                fontFamily: 'Poppins, sans-serif',
                wordWrap: 'break-word',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Bayi Berat Badan Lahir Rendah (BBLR) adalah bayi yang lahir dengan berat badan kurang dari 2.500 gram, baik yang lahir cukup bulan (≥ 37 Minggu) maupun kurang bulan (&lt;37 minggu).
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
      <div className="lg:hidden flex flex-col px-4 py-2 overflow-hidden">
        <img 
          src={babyImg} 
          alt="Baby illustration"
          className="animate-slide-left border-2 border-black rounded-2xl mx-auto"
          style={{ 
            width: 'clamp(200px, 60vw, 400px)',
            height: 'auto',
            maxHeight: '150px',
            objectFit: 'contain',
            marginBottom: '16px'
          }}
        />
        <div 
          className="rounded-3xl px-6 py-4 flex flex-col items-center animate-slide-left border-2 border-black"
          style={{ 
            backgroundColor: 'transparent',
            width: 'clamp(300px, 90vw, 600px)',
            maxWidth: '100%'
          }}
        >
          <p 
            className="text-gray-800 leading-relaxed text-center"
            style={{ 
              fontSize: 'clamp(14px, 4vw, 18px)', 
              fontFamily: 'Poppins, sans-serif',
              wordWrap: 'break-word',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Bayi Berat Badan Lahir Rendah (BBLR) adalah bayi yang lahir dengan berat badan kurang dari 2.500 gram, baik yang lahir cukup bulan (≥ 37 Minggu) maupun kurang bulan (&lt;37 minggu).
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-8 xl:px-16 py-2 mt-2 overflow-hidden w-full">
        {/* Desktop: Wide box side by side */}
        <div className="hidden lg:flex w-full justify-center">
          <div 
            className="rounded-3xl p-6 animate-slide-right w-full lg:max-w-[700px] xl:max-w-[1000px] 2xl:max-w-[1400px]"
            style={{ 
              backgroundColor: '#16b4a9'
            }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-2 lg:p-3 xl:p-4">
                <div className="flex items-center justify-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <h3 
                    className="text-white font-bold"
                    style={{ 
                      fontSize: 'clamp(16px, 2vw, 28px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    DAMPAK JANGKA PENDEK
                  </h3>
                  <img 
                    src={clockIcon} 
                    alt="Clock icon" 
                    style={{ width: 'clamp(20px, 2.5vw, 28px)', height: 'clamp(20px, 2.5vw, 28px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1 lg:space-y-2" 
                  style={{ 
                    fontSize: 'clamp(14px, 1.8vw, 22px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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

              <div className="hidden lg:block w-px bg-white mx-2 xl:mx-4 self-stretch"></div>
              <div className="block lg:hidden h-px bg-white my-3"></div>

              <div className="flex-1 p-2 lg:p-3 xl:p-4">
                <div className="flex items-center justify-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <h3 
                    className="text-white font-bold"
                    style={{ 
                      fontSize: 'clamp(16px, 2vw, 28px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    DAMPAK JANGKA PANJANG
                  </h3>
                  <img 
                    src={stockUpIcon} 
                    alt="Stock up icon" 
                    style={{ width: 'clamp(20px, 2.5vw, 28px)', height: 'clamp(20px, 2.5vw, 28px)' }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1 lg:space-y-2" 
                  style={{ 
                    fontSize: 'clamp(14px, 1.8vw, 22px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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
              backgroundColor: '#169f96',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <div className="flex flex-row gap-2">
              {/* Dampak Jangka Pendek */}
              <div className="flex-1 p-1">
                <div className="flex items-center justify-center gap-1 mb-2 overflow-hidden">
                  <h3 
                    className="text-white font-bold text-center"
                    style={{ 
                      fontSize: 'clamp(8px, 2.5vw, 12px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.1)',
                      lineHeight: '1.2'
                    }}
                  >
                    DAMPAK<br/>JANGKA PENDEK
                  </h3>
                  <img 
                    src={clockIcon} 
                    alt="Clock icon" 
                    style={{ width: 'clamp(12px, 3.5vw, 18px)', height: 'clamp(12px, 3.5vw, 18px)', flexShrink: 0 }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1" 
                  style={{ 
                    fontSize: 'clamp(9px, 2.8vw, 12px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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

              <div className="w-px min-w-[2px] bg-white self-stretch mx-1"></div>

              {/* Dampak Jangka Panjang */}
              <div className="flex-1 p-1">
                <div className="flex items-center justify-center gap-1 mb-2 overflow-hidden">
                  <h3 
                    className="text-white font-bold text-center"
                    style={{ 
                      fontSize: 'clamp(8px, 2.5vw, 12px)',
                      fontFamily: '"Lilita One", "LilitaOne", Impact, sans-serif',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.1)',
                      lineHeight: '1.2'
                    }}
                  >
                    DAMPAK<br/>JANGKA PANJANG
                  </h3>
                  <img 
                    src={stockUpIcon} 
                    alt="Stock up icon" 
                    style={{ width: 'clamp(12px, 3.5vw, 18px)', height: 'clamp(12px, 3.5vw, 18px)', flexShrink: 0 }}
                  />
                </div>
                
                <ul 
                  className="text-white space-y-1" 
                  style={{ 
                    fontSize: 'clamp(9px, 2.8vw, 12px)', 
                    fontFamily: 'Poppins, sans-serif',
                    wordWrap: 'break-word',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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
