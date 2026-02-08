const Navbar = () => {
  return (
    <nav className="w-full" style={{ backgroundColor: '#16b4a9' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ff2828' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ffa100' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#4e6aff' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
