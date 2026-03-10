import Logo from './Logo';

const HeaderWithLogo = ({ children, contentPosition = 'center' }) => {
  return (
    <div 
      className="w-full py-4 flex items-start"
    >
      <div className="flex-shrink-0">
        <Logo />
      </div>
      
      <div className={`flex-1 flex ${contentPosition === 'center' ? 'justify-center' : 'justify-end'}`}>
        {children}
      </div>
      
      {contentPosition === 'center' && <div className="flex-shrink-0" style={{ width: 'clamp(180px, 20vw, 280px)' }} />}
    </div>
  );
};

export default HeaderWithLogo;
