import React from 'react';
import { Shield, Lock, Wallet, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import TrezorHero from './components/TrezorHero';
import Features from './components/Features';
import TrezorContent from './components/TrezorContent';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <TrezorHero />
        <Features />
        <TrezorContent />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;