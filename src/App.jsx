// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";


// function App() {

//   return (
//     <>
//       <Navbar />

//       <main>

//         <Hero />

//         <About />

//         <Skills />

//         <Projects />

//         <Experience />

//         <Contact />

//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App;



import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        });
        const raf = (time) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch {
        // falls back to CSS smooth scroll
      }
    };
    initLenis();
    return () => lenis?.destroy();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#070B14' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}