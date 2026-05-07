# ⚡ Configuration Email - Démarrage Rapide

## 🎯 Objectif

Configurer l'envoi d'emails en 5 minutes.

## 📋 Étapes Rapides

### 1. Installer Nodemailer

```bash
npm install nodemailer
```

### 2. Générer un Mot de Passe d'Application Gmail

1. Allez sur: https://myaccount.google.com/apppasswords
2. Sélectionnez Mail et Windows PC
3. Cliquez sur "Generate"
4. Copiez le mot de passe (16 caractères)

### 3. Configurer le .env

Ouvrez `.env` et mettez à jour :

```env
EMAIL_USER=editchaosam@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Remplacez `xxxx xxxx xxxx xxxx` par le mot de passe généré.

### 4. Redémarrer le Backend

```bash
npm run dev
```

### 5. Tester

Remplissez le formulaire de contact sur http://localhost:3000 et vérifiez que vous recevez l'email.

## ✅ Résultat

- ✅ Vous recevez les messages de contact par email
- ✅ Les clients reçoivent une confirmation
- ✅ Prêt pour la production

## 📧 Emails Reçus

**Email 1 - À Vous:**
- Sujet: Nouveau message de contact: [Sujet]
- Contenu: Détails complets du message

**Email 2 - Au Client:**
- Sujet: Confirmation de réception - Portfolio QHSE
- Contenu: Confirmation que le message a été reçu

## 🔒 Sécurité

- ❌ Ne commitez JAMAIS le `.env` sur GitHub
- ✅ Utilisez des variables d'environnement en production
- ✅ Gardez le mot de passe secret

---

**Temps:** ~5 minutes  
**Difficulté:** ⭐ Facile  
**Status:** ✅ Prêt à Configurer
