import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { About, Contact, Home } from './pages';
import { Globals } from '@react-spring/web';
import Projects from './pages/Project';

// Đặt frameLoop thành 'demand' để cho phép điều khiển thủ công
Globals.assign({ frameLoop: 'demand' });

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
