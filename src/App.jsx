import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/menu" element={<Page2 />} />
        <Route path="/pertumbuhan-perkembangan" element={<Page3 />} />
        <Route path="/apa-itu-bblr" element={<Page4 />} />
        <Route path="/definisi-bblr" element={<Page5 />} />
        <Route path="/penyebab-bblr" element={<Page6 />} />
        <Route path="/usia-koreksi" element={<Page7 />} />
        <Route path="/buku-kia" element={<Page8 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
