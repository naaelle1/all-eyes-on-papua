import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Reformasi from './pages/Reformasi';
import Comparison from './pages/Comparison';
import Analysis from './pages/Analysis';
import Archive from './pages/Archive';
import Forum from './pages/Forum';
import GrainOverlay from './components/ui/GrainOverlay';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-pri-bg text-soft-white selection:bg-blood-red selection:text-white">
        {/* Grain Texture Applied Everywhere */}
        <GrainOverlay />
        
        {/* Main Structural Layout */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reformasi" element={<Reformasi />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;