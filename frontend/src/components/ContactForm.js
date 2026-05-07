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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          numero: formData.phone,
          sujet: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Message envoyé avec succès! Vous recevrez une confirmation par email.');
        setMessageType('success');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setMessage(`❌ Erreur: ${data.error || 'Une erreur est survenue'}`);
        setMessageType('error');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setMessage('❌ Erreur de connexion au serveur. Veuillez réessayer.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
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
            {message && (
              <div className={`form-message ${messageType}`}>
                {message}
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              <i className="fas fa-paper-plane"></i>
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
