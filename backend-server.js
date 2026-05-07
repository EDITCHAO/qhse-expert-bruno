const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.66:3000', 'https://qhse-expert-bruno.vercel.app'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration Email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'editchaosam@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password-here'
  }
});

// Stockage temporaire des contacts (en mémoire)
let contacts = [];

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API is running' });
});

// Créer un contact et envoyer un email
app.post('/api/contacts', async (req, res) => {
  try {
    const { nom, email, numero, sujet, message } = req.body;

    // Validation
    if (!nom || !email || !sujet || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Créer l'objet contact
    const contact = {
      id: Date.now(),
      nom,
      email,
      numero,
      sujet,
      message,
      created_at: new Date().toISOString()
    };

    // Ajouter au stockage
    contacts.push(contact);

    // Formater la date et l'heure
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const timeFormatted = now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Envoyer l'email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'editchaosam@gmail.com',
      to: 'editchaosam@gmail.com',
      subject: `📧 Nouveau message de contact: ${sujet}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f5f5f5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
              font-size: 14px;
            }
            .content {
              padding: 30px;
            }
            .info-box {
              background-color: #f9f9f9;
              border-left: 4px solid #667eea;
              padding: 15px;
              margin-bottom: 20px;
              border-radius: 4px;
            }
            .info-row {
              display: flex;
              margin-bottom: 12px;
              align-items: flex-start;
            }
            .info-label {
              font-weight: bold;
              color: #333;
              min-width: 120px;
              flex-shrink: 0;
            }
            .info-value {
              color: #555;
              word-break: break-word;
              flex: 1;
            }
            .message-section {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #eee;
            }
            .message-title {
              font-size: 18px;
              font-weight: bold;
              color: #333;
              margin-bottom: 15px;
            }
            .message-content {
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 4px;
              line-height: 1.6;
              color: #555;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
              border-top: 1px solid #eee;
              font-size: 12px;
              color: #999;
            }
            .timestamp {
              background-color: #e8f4f8;
              padding: 15px;
              border-radius: 4px;
              text-align: center;
              margin-top: 20px;
              color: #0066cc;
              font-weight: bold;
            }
            .badge {
              display: inline-block;
              background-color: #667eea;
              color: white;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nouveau Message de Contact</h1>
              <p>Portfolio QHSE - Etey BRUNO</p>
            </div>
            
            <div class="content">
              <div class="info-box">
                <div class="info-row">
                  <div class="info-label">👤 Nom:</div>
                  <div class="info-value">${nom}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">📧 Email:</div>
                  <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">📱 Téléphone:</div>
                  <div class="info-value">${numero || '<em>Non fourni</em>'}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">📌 Sujet:</div>
                  <div class="info-value"><span class="badge">${sujet}</span></div>
                </div>
              </div>

              <div class="message-section">
                <div class="message-title">💬 Message:</div>
                <div class="message-content">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
              </div>

              <div class="timestamp">
                📅 ${dateFormatted}<br>
                🕐 ${timeFormatted}
              </div>
            </div>

            <div class="footer">
              <p>Ce message a été envoyé via le formulaire de contact du Portfolio QHSE</p>
              <p>© 2024 Etey BRUNO - Expert QHSE. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    // Envoyer aussi un email de confirmation au client
    const confirmationEmail = {
      from: process.env.EMAIL_USER || 'editchaosam@gmail.com',
      to: email,
      subject: '✅ Confirmation de réception - Portfolio QHSE',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f5f5f5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
              font-size: 14px;
            }
            .content {
              padding: 30px;
            }
            .greeting {
              font-size: 16px;
              color: #333;
              margin-bottom: 20px;
              line-height: 1.6;
            }
            .success-box {
              background-color: #e8f5e9;
              border-left: 4px solid #4caf50;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
              color: #2e7d32;
            }
            .info-box {
              background-color: #f9f9f9;
              border-left: 4px solid #667eea;
              padding: 15px;
              margin-bottom: 20px;
              border-radius: 4px;
            }
            .info-row {
              display: flex;
              margin-bottom: 12px;
              align-items: flex-start;
            }
            .info-label {
              font-weight: bold;
              color: #333;
              min-width: 100px;
              flex-shrink: 0;
            }
            .info-value {
              color: #555;
              word-break: break-word;
              flex: 1;
            }
            .message-section {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #eee;
            }
            .message-title {
              font-size: 16px;
              font-weight: bold;
              color: #333;
              margin-bottom: 15px;
            }
            .message-content {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 4px;
              line-height: 1.6;
              color: #555;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
              border-top: 1px solid #eee;
              font-size: 12px;
              color: #999;
            }
            .signature {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              color: #666;
              font-size: 14px;
            }
            .timestamp {
              background-color: #e3f2fd;
              padding: 12px;
              border-radius: 4px;
              text-align: center;
              margin-top: 15px;
              color: #0066cc;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Merci pour votre Message !</h1>
              <p>Portfolio QHSE - Etey BRUNO</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                <p>Bonjour <strong>${nom}</strong>,</p>
                <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
              </div>

              <div class="success-box">
                <strong>✓ Votre message a été reçu avec succès</strong><br>
                Nous vous répondrons dans les plus brefs délais.
              </div>

              <div class="message-section">
                <div class="message-title">📋 Résumé de votre message:</div>
                
                <div class="info-box">
                  <div class="info-row">
                    <div class="info-label">📌 Sujet:</div>
                    <div class="info-value">${sujet}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">📧 Email:</div>
                    <div class="info-value">${email}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">📱 Téléphone:</div>
                    <div class="info-value">${numero || '<em>Non fourni</em>'}</div>
                  </div>
                </div>

                <div class="message-title">💬 Votre Message:</div>
                <div class="message-content">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

                <div class="timestamp">
                  📅 ${dateFormatted}<br>
                  🕐 ${timeFormatted}
                </div>
              </div>

              <div class="signature">
                <p>Cordialement,</p>
                <p><strong>Etey BRUNO</strong><br>
                Expert QHSE<br>
                Qualité • Hygiène • Sécurité • Environnement</p>
              </div>
            </div>

            <div class="footer">
              <p>Cet email a été généré automatiquement. Veuillez ne pas répondre directement à cet email.</p>
              <p>© 2024 Etey BRUNO - Expert QHSE. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      success: true,
      message: 'Message envoyé avec succès',
      contact: contact
    });

  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      error: 'Erreur lors de l\'envoi du message',
      details: error.message
    });
  }
});

// Récupérer tous les contacts (protégé)
app.get('/api/contacts', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  res.json(contacts);
});

// Supprimer un contact (protégé)
app.delete('/api/contacts/:id', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  const id = parseInt(req.params.id);
  contacts = contacts.filter(c => c.id !== id);
  
  res.json({ success: true, message: 'Contact supprimé' });
});

// Statistiques (protégé)
app.get('/api/contacts/stats', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  res.json({
    totalContacts: contacts.length,
    lastContact: contacts[contacts.length - 1] || null
  });
});

// Admin Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password123';
  
  if (username === adminUsername && password === adminPassword) {
    res.json({
      success: true,
      token: process.env.ADMIN_TOKEN || 'admin-token-12345',
      message: 'Connexion réussie'
    });
  } else {
    res.status(401).json({
      error: 'Identifiants invalides'
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Backend API démarré sur http://localhost:${PORT}`);
  console.log(`📝 Endpoints disponibles:`);
  console.log(`   POST   /api/contacts          - Créer un contact`);
  console.log(`   POST   /api/auth/login        - Connexion admin`);
  console.log(`   GET    /api/contacts          - Récupérer les contacts (protégé)`);
  console.log(`   DELETE /api/contacts/:id      - Supprimer un contact (protégé)`);
  console.log(`   GET    /api/contacts/stats    - Statistiques (protégé)`);
  console.log(`   GET    /health                - Health check`);
  console.log(`\n📧 Email configuré: ${process.env.EMAIL_USER || 'editchaosam@gmail.com'}`);
});
