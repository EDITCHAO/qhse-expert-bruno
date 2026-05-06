import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Projet Routes Nationales',
      category: 'Génie Civil',
      impact: '500+ km de routes sécurisées',
      stats: { workers: '250+', duration: '18 mois', safety: '0 accidents' },
      icon: 'fa-road',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Construction Complexe Immobilier',
      category: 'Bâtiments',
      impact: '2000+ ouvriers formés',
      stats: { workers: '2000+', duration: '24 mois', safety: '0 accidents' },
      icon: 'fa-building',
      color: 'orange'
    },
    {
      id: 3,
      title: 'Ouvrages d\'Art Majeurs',
      category: 'Ponts & Viaducs',
      impact: '100% conformité ISO',
      stats: { workers: '150+', duration: '12 mois', safety: '0 accidents' },
      icon: 'fa-bridge',
      color: 'green'
    },
    {
      id: 4,
      title: 'Certification ISO Complète',
      category: 'Audit & Conformité',
      impact: '3 certifications obtenues',
      stats: { companies: '15+', audits: '45+', success: '100%' },
      icon: 'fa-certificate',
      color: 'purple'
    },
    {
      id: 5,
      title: 'Programme Formation QHSE',
      category: 'Formation',
      impact: '3000+ professionnels formés',
      stats: { sessions: '120+', participants: '3000+', satisfaction: '98%' },
      icon: 'fa-graduation-cap',
      color: 'red'
    },
    {
      id: 6,
      title: 'Gestion Risques Industriels',
      category: 'Prévention',
      impact: 'Réduction 85% des incidents',
      stats: { sites: '25+', incidents: '-85%', savings: '€2M+' },
      icon: 'fa-shield-alt',
      color: 'teal'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projets Impactants</h2>
          <p className="section-subtitle">
            Réalisations marquantes et résultats concrets
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card project-${project.color}`}>
              <div className="project-header">
                <div className="project-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-impact">
                <i className="fas fa-star"></i>
                <span>{project.impact}</span>
              </div>

              <div className="project-stats">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <span className="stat-value">{value}</span>
                    <span className="stat-key">{key}</span>
                  </div>
                ))}
              </div>

              <button className="project-btn">
                <span>Voir détails</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
