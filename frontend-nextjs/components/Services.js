import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    {
      icon: 'fa-shield-alt',
      title: 'Sécurité au Travail',
      description: 'Évaluation des risques et mise en place de mesures de prévention'
    },
    {
      icon: 'fa-leaf',
      title: 'Environnement',
      description: 'Gestion environnementale et conformité réglementaire'
    },
    {
      icon: 'fa-check-circle',
      title: 'Qualité',
      description: 'Systèmes de management de la qualité et amélioration continue'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Formation',
      description: 'Formation du personnel aux normes QHSE'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.sectionTitle}>Mes Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
