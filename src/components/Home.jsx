// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from "../pages/Navbar"
import HeroSection from "../pages/HeroSection"
import HowItWorks from "../pages/HowItWorks"
import Templates from "../pages/Templates"
import Footer from "../pages/Footer"
import BlessingSection from "../pages/BlessingSection"
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  if (location.state?.scrollTo) {
    if (location.state.scrollTo === 'templates') {
      const el = document.getElementById('templates');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state.scrollTo === 'how-it-works') {
      const el = document.getElementById('how-it-works');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state.scrollTo === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navigate(location.pathname, { replace: true });
  }
  }, [location, navigate]);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Templates id="templates" />
      <HowItWorks id="how-it-works" />
      <BlessingSection />
      <Footer />
    </>
  );
}

export default Home;
