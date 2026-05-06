import './Logos.css';

const Logos = () => {
  const logos = [
    { id: 1, name: 'Bureau Veritas', icon: 'fa-certificate', color: 'blue' },
    { id: 2, name: 'SGS', icon: 'fa-check-circle', color: 'green' },
    { id: 3, name: 'TÜV Rheinland', icon: 'fa-shield-alt', color: 'red' },
    { id: 4, name: 'SOGEA-SATOM', icon: 'fa-building', color: 'orange' },
    { id: 5, name: 'Bouygues TP', icon: 'fa-hard-hat', color: 'yellow' },
    { id: 6, name: 'Razel-Bec', icon: 'fa-crane', color: 'purple' },
    { id: 7, name: 'OPPRTP', icon: 'fa-road', color: 'teal' },
    { id: 8, name: 'NEBOSH', icon: 'fa-award', color: 'pink' }
  ];

  return (
    <section className="logos">
      <div className="logos-container">
        <h2 className="logos-title">Partenaires & Certifications</h2>
        <p className="logos-subtitle">Reconnu par les plus grands organismes</p>
        
        <div className="logos-grid">
          {logos.map((logo) => (
            <div key={logo.id} className={`logo-item logo-${logo.color}`}>
              <div className="logo-icon">
                <i className={`fas ${logo.icon}`}></i>
              </div>
              <span className="logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
