import Image from 'next/image';
import Header from '@/components/Sections/Header';
import AboutMe from '@/components/Sections/AboutMe';
import Footer from '@/components/Sections/Footer';
import Contact from '@/components/Sections/Contact';
import Projects from '@/components/Sections/Projects';
import Skills from '@/components/Sections/Skills';
import Experiences from '@/components/Sections/Experiences';

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <Header />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
