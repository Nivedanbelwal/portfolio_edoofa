import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RajnitiPlatform from './components/RajnitiPlatform';
import CaseStudies from './components/CaseStudies';
import VideoShowcase from './components/VideoShowcase';
import CryptXClub from './components/CryptXClub';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import WhyEdoofa from './components/WhyEdoofa';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Hero />
        <About />
        <RajnitiPlatform />
        <CaseStudies />
        <VideoShowcase />
        <CryptXClub />
        <Skills />
        <Achievements />
        <WhyEdoofa />
        <Contact />
      </main>
    </>
  );
}

export default App;
