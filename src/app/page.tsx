import Header from '@/components/Sections/Header';
import Jumbotron from '@/components/Sections/Jumbotron';
import AboutMe from '@/components/Sections/AboutMe';
import Skills from '@/components/Sections/Skills';
import Experiences from '@/components/Sections/Experiences';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import Footer from '@/components/Sections/Footer';

const Home = () => {
  return (
    <main className="flex flex-col overflow-hidden min-h-screen">
      <Header />
      <Jumbotron />
      <div className='space-y-[5rem] md:space-y-[10rem]'>
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default Home;
