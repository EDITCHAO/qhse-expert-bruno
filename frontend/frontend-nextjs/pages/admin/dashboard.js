import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/AdminDashboard.module.css';

export default function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchData(token);
  }, []);

  const fetchData = async (token) => {
    try {
      const [contactsRes, statsRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts/stats`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setContacts(contactsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      localStorage.removeItem('adminToken');
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <>
      <Head>
        <title>Admin Dashboard - Portfolio QHSE</title>
      </Head>
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout}>Déconnexion</button>
        </header>

        {stats && (
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>Total Contacts</h3>
              <p>{stats.totalContacts}</p>
            </div>
          </div>
        )}

        <div className={styles.contacts}>
          <h2>Contacts</h2>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Sujet</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.nom}</td>
                  <td>{contact.email}</td>
                  <td>{contact.sujet}</td>
                  <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
