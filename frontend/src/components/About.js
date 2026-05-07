import './About.css';
import brunoImage from '../assets/images/BRUNO.jpeg';

const About = () => {
  const achievements = [
    { number: '45+', label: 'Projets réalisés', icon: 'fa-chart-line' },
    { number: '3K+', label: 'Ouvriers formés', icon: 'fa-users' },
    { number: '12+', label: 'Années d\'expérience', icon: 'fa-hourglass-end' },
    { number: '0', label: 'Accidents mortels', icon: 'fa-shield-alt' }
  ];

  const certifications = [
    { name: 'ISO 45001', desc: 'Santé et Sécurité', icon: 'fa-certificate' },
    { name: 'ISO 14001', desc: 'Environnement', icon: 'fa-leaf' },
    { name: 'NEBOSH IGC', desc: 'Certification', icon: 'fa-award' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">À propos de moi</h2>
              <p className="section-subtitle">
                Responsable QHSE spécialisé en génie civil
              </p>
            </div>

            <p className="about-description">
              Avec plus de 12 ans d'expérience dans le domaine de la Qualité, Hygiène, Sécurité et Environnement, 
              je mets à disposition mes compétences pour accompagner les organisations vers l'excellence opérationnelle.
            </p>

            <p className="about-description">
              Spécialisé en génie civil (Routes, Bâtiments & Ouvrages d'art), j'ai développé une expertise 
              reconnue dans la gestion des risques et la conformité réglementaire.
            </p>

            <div className="certifications-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-badge">
                    <i className={`fas ${cert.icon}`}></i>
                  </div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-desc">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src={brunoImage} 
                  alt="Etey BRUNO"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h3>Etey BRUNO</h3>
                <p>Responsable QHSE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon">
                <i className={`fas ${achievement.icon}`}></i>
              </div>
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
