import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Footer';
import SideNav from './components/SideNav';
import Cursor from './components/Cursor';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main>
      <Cursor /> {/* Add the Cursor component here */}
      <SideNav />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
    </main>
  );
}