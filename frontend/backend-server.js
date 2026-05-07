const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Stockage en mémoire (remplacer par une vraie base de données)
let contacts = [];
let adminToken = null;

// Routes API

// Créer un contact
app.post('/api/contacts', (req, res) => {
  try {
    const { nom, email, numero, sujet, message } = req.body;

    // Validation
    if (!nom || !email || !numero || !sujet || !message) {
      return res.status(422).json({
        success: false,
        message: 'Tous les champs sont requis'
      });
    }

    const contact = {
      id: contacts.length + 1,
      nom,
      email,
      numero,
      sujet,
      message,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    contacts.push(contact);

    res.status(201).json({
      success: true,
      message: 'Message envoyé avec succès!',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi du message'
    });
  }
});

// Connexion admin
app.post('/api/auth/login', (req, res) => {
  try {
    const { username, password } = req.body;

    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'password123';

    if (username !== adminUsername || password !== adminPassword) {
      return res.status(401).json({
        success: false,
        message: 'Identifiants incorrects'
      });
    }

    // Générer un token simple
    adminToken = 'token_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    res.json({
      success: true,
      message: 'Connexion réussie',
      token: adminToken
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la connexion'
    });
  }
});

// Middleware d'authentification
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token || token !== adminToken) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  next();
};

// Récupérer tous les contacts (protégé)
app.get('/api/contacts', authenticateToken, (req, res) => {
  try {
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors du chargement des contacts'
    });
  }
});

// Supprimer un contact (protégé)
app.delete('/api/contacts/:id', authenticateToken, (req, res) => {
  try {
    const id = parseInt(req.params.id);
    contacts = contacts.filter(c => c.id !== id);

    res.json({
      success: true,
      message: 'Message supprimé avec succès'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du message'
    });
  }
});

// Récupérer les statistiques (protégé)
app.get('/api/contacts/stats', authenticateToken, (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayContacts = contacts.filter(c => {
      const contactDate = new Date(c.created_at);
      contactDate.setHours(0, 0, 0, 0);
      return contactDate.getTime() === today.getTime();
    });

    res.json({
      success: true,
      data: {
        total: contacts.length,
        today: todayContacts.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors du chargement des statistiques'
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API is running' });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`\n✅ Backend API démarré sur http://localhost:${PORT}\n`);
  console.log(`📝 Endpoints disponibles:`);
  console.log(`   POST   /api/contacts          - Créer un contact`);
  console.log(`   POST   /api/auth/login        - Connexion admin`);
  console.log(`   GET    /api/contacts          - Récupérer les contacts (protégé)`);
  console.log(`   DELETE /api/contacts/:id      - Supprimer un contact (protégé)`);
  console.log(`   GET    /api/contacts/stats    - Statistiques (protégé)`);
  console.log(`   GET    /health                - Health check\n`);
});
