import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';

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
        <Route path="/cara-perawatan-bblr" element={<Page9 />} />
        <Route path="/cara-perawatan-bblr-2" element={<Page10 />} />
        <Route path="/cara-perawatan-bblr-3" element={<Page11 />} />
        <Route path="/cara-perawatan-bblr-4" element={<Page12 />} />
        <Route path="/pertumbuhan-bayi" element={<Page18 />} />
        <Route path="/usia-koreksi-2-bulan" element={<Page19 />} />
        <Route path="/usia-koreksi-4-bulan" element={<Page20 />} />
        <Route path="/usia-koreksi-6-bulan" element={<Page21 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
