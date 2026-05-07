# 📧 Configuration Email - Guide Complet

## 🎯 Objectif

Configurer l'envoi d'emails pour que vous receviez les messages de contact à `editchaosam@gmail.com`.

## 📋 Prérequis

- ✅ Compte Gmail
- ✅ Node.js installé
- ✅ Backend configuré

## 🔧 Étape 1 : Installer Nodemailer

```bash
npm install nodemailer
```

## 🔐 Étape 2 : Générer un Mot de Passe d'Application Gmail

### 2.1 Activer l'Authentification à Deux Facteurs

1. Allez sur: https://myaccount.google.com
2. Cliquez sur "Sécurité" (à gauche)
3. Activez "Authentification à deux facteurs"

### 2.2 Créer un Mot de Passe d'Application

1. Allez sur: https://myaccount.google.com/apppasswords
2. Sélectionnez :
   - **App:** Mail
   - **Device:** Windows PC (ou votre appareil)
3. Cliquez sur "Generate"
4. Copiez le mot de passe généré (16 caractères)

## 📝 Étape 3 : Configurer le Fichier .env

Ouvrez `.env` et mettez à jour :

```env
EMAIL_USER=editchaosam@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Remplacez `xxxx xxxx xxxx xxxx` par le mot de passe généré.

## 🧪 Étape 4 : Tester la Configuration

### 4.1 Redémarrer le Backend

```bash
npm run dev
```

### 4.2 Tester l'Envoi d'Email

Utilisez Postman ou curl :

```bash
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Test User",
    "email": "test@example.com",
    "numero": "1234567890",
    "sujet": "Test Email",
    "message": "Ceci est un message de test"
  }'
```

### 4.3 Vérifier l'Email

Allez dans votre boîte mail `editchaosam@gmail.com` et vérifiez que vous avez reçu le message.

## 📧 Emails Envoyés

### 1. Email à l'Admin (Vous)

**À:** editchaosam@gmail.com  
**Sujet:** Nouveau message de contact: [Sujet du client]  
**Contenu:** Détails complets du message

### 2. Email de Confirmation au Client

**À:** Email du client  
**Sujet:** Confirmation de réception - Portfolio QHSE  
**Contenu:** Confirmation que le message a été reçu

## 🔒 Sécurité

### ⚠️ Important

- ❌ Ne commitez JAMAIS le `.env` sur GitHub
- ✅ Utilisez des variables d'environnement en production
- ✅ Gardez le mot de passe d'application secret

### .gitignore

Vérifiez que `.env` est dans `.gitignore` :

```
.env
.env.local
.env.*.local
```

## 🚀 Déploiement sur Render

### 1. Ajouter les Variables d'Environnement

Dans le dashboard Render :
- Allez à "Environment"
- Ajoutez :
  ```
  EMAIL_USER=editchaosam@gmail.com
  EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
  ```

### 2. Redéployer

Le backend redéploiera automatiquement avec les nouvelles variables.

## 🆘 Dépannage

### Erreur: "Invalid login credentials"

1. Vérifiez que le mot de passe d'application est correct
2. Vérifiez que l'authentification à deux facteurs est activée
3. Régénérez le mot de passe d'application

### Erreur: "Less secure app access"

Gmail a bloqué l'accès. Utilisez un mot de passe d'application au lieu du mot de passe Gmail.

### Les emails ne sont pas envoyés

1. Vérifiez les logs du backend
2. Vérifiez que nodemailer est installé
3. Vérifiez les variables d'environnement

## 📊 Configuration Finale

| Élément | Valeur |
|---------|--------|
| Email | editchaosam@gmail.com |
| Service | Gmail |
| Port | 587 (TLS) |
| Authentification | Mot de passe d'application |

## 🎉 Résultat

Quand un client remplit le formulaire de contact :
1. ✅ Vous recevez un email avec le message
2. ✅ Le client reçoit une confirmation
3. ✅ Le message est stocké dans la base de données

---

**Status:** ✅ Prêt à Configurer  
**Email:** editchaosam@gmail.com  
**Prochaine Étape:** Générer le mot de passe d'application Gmail
