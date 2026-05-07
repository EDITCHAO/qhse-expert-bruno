import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Projet Route - Sécurité Routière',
      description: 'Mise en place d\'un système de sécurité complet pour un projet routier',
      tags: ['Sécurité', 'Routes', 'ISO 45001']
    },
    {
      title: 'Projet Bâtiment - Conformité Environnementale',
      description: 'Gestion environnementale et certification ISO 14001',
      tags: ['Environnement', 'Bâtiment', 'ISO 14001']
    },
    {
      title: 'Formation QHSE - 3000+ Ouvriers',
      description: 'Programme de formation complet pour les équipes de terrain',
      tags: ['Formation', 'QHSE', 'Ouvriers']
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>Mes Projets</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
