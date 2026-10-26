import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import NewPatients from './pages/NewPatients';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Accessibility from './pages/Accessibility';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
