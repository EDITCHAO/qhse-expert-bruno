import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
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
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>À propos de moi</h2>
              <p className={styles.sectionSubtitle}>
                Responsable QHSE spécialisé en génie civil
              </p>
            </div>

            <p className={styles.aboutDescription}>
              Avec plus de 12 ans d'expérience dans le domaine de la Qualité, Hygiène, Sécurité et Environnement, 
              je mets à disposition mes compétences pour accompagner les organisations vers l'excellence opérationnelle.
            </p>

            <p className={styles.aboutDescription}>
              Spécialisé en génie civil (Routes, Bâtiments & Ouvrages d'art), j'ai développé une expertise 
              reconnue dans la gestion des risques et la conformité réglementaire.
            </p>

            <div className={styles.certificationsList}>
              {certifications.map((cert, idx) => (
                <div key={idx} className={styles.certItem}>
                  <div className={styles.certBadge}>
                    <i className={`fas ${cert.icon}`}></i>
                  </div>
                  <div>
                    <div className={styles.certName}>{cert.name}</div>
                    <div className={styles.certDesc}>{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <img 
                  src="/images/BRUNO.jpeg" 
                  alt="Etey BRUNO"
                  className={styles.profilePhoto}
                />
              </div>
              <div className={styles.profileInfo}>
                <h3>Etey BRUNO</h3>
                <p>Responsable QHSE</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.achievements}>
          {achievements.map((achievement, idx) => (
            <div key={idx} className={styles.achievementCard}>
              <div className={styles.achievementIcon}>
                <i className={`fas ${achievement.icon}`}></i>
              </div>
              <div className={styles.achievementNumber}>{achievement.number}</div>
              <div className={styles.achievementLabel}>{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
