import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/projects'; // 👈 Import Projects
import CarouselSection from "./components/CarouselSection";
import Footer from './components/Footer';

import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
            <Projects /> {/* 👈 Add Projects below Skills */}

          </>
        } />
        <Route path="/click2earn" element={<Click2Earn />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
