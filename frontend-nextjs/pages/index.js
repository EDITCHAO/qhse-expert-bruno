import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio QHSE - Etey BRUNO</title>
        <meta name="description" content="Portfolio QHSE - Expert en Qualité, Hygiène, Sécurité et Environnement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
