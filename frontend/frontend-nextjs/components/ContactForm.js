import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    numero: '',
    sujet: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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
    setError('');
    setSuccess(false);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`,
        formData
      );
      setSuccess(true);
      setFormData({
        nom: '',
        email: '',
        numero: '',
        sujet: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erreur lors de l\'envoi du message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className={styles.contactForm}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Me Contacter</h2>
        
        {success && <div className={styles.successMessage}>Message envoyé avec succès!</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              name="numero"
              placeholder="Votre numéro"
              value={formData.numero}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="sujet"
              placeholder="Sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
}
