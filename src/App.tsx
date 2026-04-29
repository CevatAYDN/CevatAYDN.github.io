import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Summary from './sections/Summary';
import Apps from './sections/Apps';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <Summary />
        <Apps />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
