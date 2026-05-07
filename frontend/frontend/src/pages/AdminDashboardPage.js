import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import contactsAPI from '../api/contacts';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ total: 0 });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await contactsAPI.getAll();
      setContacts(response.data.data || []);
      setStats({ total: response.data.data?.length || 0 });
    } catch (err) {
      setError('Erreur lors du chargement des contacts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce message?')) {
      try {
        await contactsAPI.delete(id);
        setContacts(contacts.filter((c) => c.id !== id));
        setStats({ total: stats.total - 1 });
      } catch (err) {
        setError('Erreur lors de la suppression du message');
        console.error(err);
      }
    }
  };

  return (
    <div className="admin-dashboard-page">
      <Header isAdmin={true} />
      <main className="dashboard-container">
        <div className="container">
          <h1>Tableau de bord Admin</h1>

          {error && <div className="dashboard-error">{error}</div>}

          <div className="stats-section">
            <div className="stat-card">
              <h3>Total de messages</h3>
              <p className="stat-value">{stats.total}</p>
            </div>
          </div>

          <div className="contacts-section">
            <h2>Messages reçus</h2>

            {loading ? (
              <div className="loading">Chargement des messages...</div>
            ) : contacts.length === 0 ? (
              <div className="no-contacts">Aucun message reçu</div>
            ) : (
              <div className="contacts-table-wrapper">
                <table className="contacts-table">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Téléphone</th>
                      <th>Sujet</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{contact.nom}</td>
                        <td>
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </td>
                        <td>
                          <a href={`tel:${contact.numero}`}>{contact.numero}</a>
                        </td>
                        <td>{contact.sujet}</td>
                        <td className="message-cell">
                          <div className="message-preview">{contact.message}</div>
                        </td>
                        <td>{new Date(contact.created_at).toLocaleDateString('fr-FR')}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(contact.id)}
                            className="delete-btn"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
