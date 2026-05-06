import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact-form" className="contact-form">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2 className="contact-form-title">Contactez-moi</h2>
          <p className="contact-form-subtitle">Discutons de votre projet QHSE</p>
        </div>

        <div className="contact-form-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-text">
                <h3>Téléphone</h3>
                <p><a href="tel:+22892465477">+228 92465477</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p><a href="mailto:contact@qhsepro.com">contact@qhsepro.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Localisation</h3>
                <p>Lomé, Togo</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="info-text">
                <h3>WhatsApp</h3>
                <p><a href="https://wa.me/22892465477" target="_blank" rel="noopener noreferrer">Discuter sur WhatsApp</a></p>
              </div>
            </div>
          </div>

          <form className="contact-form-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
