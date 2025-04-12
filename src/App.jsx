import Navbar from './components/navbar/Navbar';
// sections
import Banner from './sections/banner/Banner';
import Features from './sections/features/Features';
import Projects from './sections/projects/Projects';
import Resume from './sections/resume/Resume';
import Certificates from './sections/certificates/Certificates';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
// scroll to top
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  // Set the lang attribute based on the current language
  document.documentElement.setAttribute('lang', i18n.language);
  return (
    <div className="w-full h-auto bg-bodyBg text-lightColor">
      <div className='max-w-screen-2xl mx-auto px-16'>
        <Navbar />
        {/* sections */}
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
        <Footer />
        {/* scroll to top */}
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App