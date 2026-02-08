import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/menu" element={<Page2 />} />
        <Route path="/pertumbuhan-perkembangan" element={<Page3 />} />
        <Route path="/apa-itu-bblr" element={<Page4 />} />
        <Route path="/definisi-bblr" element={<Page5 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
