import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// About submenu pages
import Vision from './pages/about/Vision';
import Overview from './pages/about/Overview';
import Team from './pages/about/Team';

// Services submenu pages
import Construction from './pages/services/Construction';
import Architecture from './pages/services/Architecture';
import Interior from './pages/services/Interior';
import Vastu from './pages/services/Vastu';

// Properties submenu pages
import ROI from './pages/properties/ROI';
import Residential from './pages/properties/Residential';
import Commercial from './pages/properties/Commercial';
import Updates from './pages/properties/Updates';

import './App.css';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/architecture" element={<Architecture />} />
            <Route path="/services/interior" element={<Interior />} />
            <Route path="/services/vastu" element={<Vastu />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/roi" element={<ROI />} />
            <Route path="/properties/residential" element={<Residential />} />
            <Route path="/properties/commercial" element={<Commercial />} />
            <Route path="/properties/villa" element={<Updates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleblog/:id" element={<SingleBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;