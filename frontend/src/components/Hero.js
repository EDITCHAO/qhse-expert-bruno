import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Expert QHSE depuis 12 ans</span>
          </div>

          <h1 className="hero-title">
            Sécurité & Excellence
            <span className="highlight"> Opérationnelle</span>
          </h1>

          <p className="hero-description">
            Spécialiste en Qualité, Hygiène, Sécurité et Environnement. 
            Accompagnement complet pour l'excellence de vos projets.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">45+</div>
              <div className="stat-label">Projets</div>
            </div>
            <div className="stat">
              <div className="stat-number">3K+</div>
              <div className="stat-label">Ouvriers</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Accidents</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleContactClick}>
              <i className="fas fa-phone"></i>
              <span>Me contacter</span>
            </button>
            <button className="btn btn-secondary" onClick={handleProjectsClick}>
              <i className="fas fa-folder-open"></i>
              <span>Voir mes projets</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="card-content">
              <h3>Certification ISO</h3>
              <p>45001 & 14001</p>
            </div>
          </div>
          <div className="hero-card card-2">
            <div className="card-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="card-content">
              <h3>Expertise</h3>
              <p>Génie Civil</p>
            </div>
          </div>
          <div className="hero-card card-3">
            <div className="card-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="card-content">
              <h3>Excellence</h3>
              <p>Opérationnelle</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Découvrir</span>
        <div className="scroll-icon">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
