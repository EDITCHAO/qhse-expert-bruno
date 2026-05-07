import './Profiles.css';
import brunoImage from '../assets/images/BRUNO.jpeg';

const Profiles = () => {
  const profiles = [
    {
      id: 1,
      name: 'Ateyi BRUNO',
      title: 'Responsable QHSE spécialisé en génie civil',
      description: 'Routes, Bâtiments & Ouvrages d\'art. Plus de 12 ans d\'expérience au service de la sécurité et de l\'excellence opérationnelle.',
      image: brunoImage,
      certifications: ['ISO 45001 Certifié', 'ISO 14001 Certifié']
    }
  ];

  return (
    <section className="profiles">
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <div className="profile-image-wrapper">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h3 className="profile-title">{profile.name}</h3>
              <p className="profile-subtitle">{profile.title}</p>
              <p className="profile-text">{profile.description}</p>
              <div className="profile-certs">
                {profile.certifications.map((cert, idx) => (
                  <div key={idx} className="cert-badge">
                    <span className="cert-icon">🏆</span>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
