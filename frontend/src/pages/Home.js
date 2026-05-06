import Header from '../components/Header';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Certifications from '../components/Certifications';
import About from '../components/About';
import Profiles from '../components/Profiles';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Statistics />
      <Certifications />
      <About />
      <Profiles />
    </div>
  );
};

export default Home;
