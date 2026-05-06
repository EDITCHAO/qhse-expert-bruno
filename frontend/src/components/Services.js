import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-magnifying-glass',
      title: 'Audit QHSE',
      description: 'Diagnostic complet de vos processus QHSE pour identifier les points d\'amélioration.',
      features: ['Analyse détaillée', 'Recommandations', 'Plan d\'action']
    },
    {
      id: 2,
      icon: 'fa-clipboard-check',
      title: 'Conformité Réglementaire',
      description: 'Assurer la conformité totale de votre entreprise avec les normes en vigueur.',
      features: ['Normes ISO', 'Réglementations', 'Documentation']
    },
    {
      id: 3,
      icon: 'fa-users',
      title: 'Formation & Sensibilisation',
      description: 'Formation du personnel aux normes et bonnes pratiques QHSE.',
      features: ['Ateliers', 'Certification', 'Suivi']
    },
    {
      id: 4,
      icon: 'fa-award',
      title: 'Certification ISO',
      description: 'Accompagnement complet vers l\'obtention des certifications ISO.',
      features: ['ISO 45001', 'ISO 14001', 'Audit']
    },
    {
      id: 5,
      icon: 'fa-exclamation-triangle',
      title: 'Gestion des Risques',
      description: 'Identification et mitigation des risques pour une sécurité optimale.',
      features: ['Analyse', 'Prévention', 'Monitoring']
    },
    {
      id: 6,
      icon: 'fa-chart-bar',
      title: 'Reporting & Suivi',
      description: 'Suivi continu et reporting détaillé de vos indicateurs QHSE.',
      features: ['Tableaux de bord', 'KPIs', 'Rapports']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Services Professionnels</h2>
          <p className="section-subtitle">
            Solutions complètes en Qualité, Hygiène, Sécurité et Environnement
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="service-btn">
                <span>En savoir plus</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
