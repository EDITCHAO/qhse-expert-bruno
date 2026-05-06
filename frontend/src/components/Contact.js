import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Partenaires & Certifications</h2>
          <p className="contact-subtitle">Reconnu par les plus grands organismes</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="contact-name">SGS</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="contact-name">TÜV Rheinland</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="contact-name">SOGEA-SATOM</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-hard-hat"></i>
            </div>
            <div className="contact-name">Bouyques TP</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-road"></i>
            </div>
            <div className="contact-name">Razel-Bec</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="contact-name">OPPRTP</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="contact-name">NEBOSH</div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="contact-name">Bureau Veritas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
