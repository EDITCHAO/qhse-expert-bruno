import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
