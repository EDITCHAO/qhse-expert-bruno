# 🎨 Structure visuelle du site QHSEPRO

## 📱 Vue d'ensemble du site

```
┌─────────────────────────────────────────────────────────┐
│                      HEADER                             │
│  QHSEPRO (PRO en orange)          [Admin Button]        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      HERO SECTION                       │
│                                                         │
│              🏢 NEBOSH IGC                              │
│                                                         │
│         [ME CONTACTER]  [VOIR MES PROJETS]             │
│                                                         │
│                    DÉCOUVRIR                            │
│                       ∨                                 │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   STATISTICS                            │
│                                                         │
│    💼 45+              👥 3 000+         🛡️ 0           │
│  Projets réalisés   Ouvriers formés   Accidents mortels │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                 CERTIFICATIONS                          │
│                                                         │
│  ILS M'ONT FAIT CONFIANCE                              │
│                                                         │
│  Bureau Veritas    SGS    TÜV Rheinland    Sogea-Satom │
│  Bouygues TP    Razel-Bec    OPPRTP    NEBOSH          │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      ABOUT                              │
│                                                         │
│  QUI SUIS-JE                                            │
│  À propos                                               │
│                                                         │
│  [Photo]              Atayi BRUNO                       │
│                       Responsable QHSE...              │
│                       Description...                    │
│                       🏆 ISO 45001 Certifié             │
│                       🏆 ISO 14001 Certifié             │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                    PROFILES                             │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │ [Photo]                                          │  │
│  │ Atayi BRUNO                                      │  │
│  │ Responsable QHSE spécialisé en génie civil      │  │
│  │ Description...                                   │  │
│  │ 🏆 ISO 45001 Certifié                           │  │
│  │ 🏆 ISO 14001 Certifié                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│                                                         │
│  QHSEPRO          Navigation        Contact             │
│  Excellence...    Accueil           Email: ...          │
│                   À propos          Tél: ...            │
│                   Projets                               │
│                   Contact                               │
│                                                         │
│  © 2026 QHSEPRO. Tous droits réservés.                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Palette de couleurs

```
┌─────────────────────────────────────────────────────────┐
│ COULEUR PRIMAIRE (Orange)                               │
│ #ff6b35                                                 │
│ Utilisée pour: Boutons, accents, logo "PRO"            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ COULEUR SOMBRE (Bleu-gris)                              │
│ #1a2332                                                 │
│ Utilisée pour: Header, footer, texte sombre            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ COULEUR CLAIRE (Gris)                                   │
│ #f5f5f5                                                 │
│ Utilisée pour: Fond des sections                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TEXTE PRINCIPAL                                         │
│ #555555                                                 │
│ Utilisée pour: Texte principal                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TEXTE CLAIR                                             │
│ #95a5a6                                                 │
│ Utilisée pour: Texte secondaire, certifications        │
└─────────────────────────────────────────────────────────┘
```

## 📐 Dimensions et espacements

```
HEADER
├── Hauteur: 60px
├── Padding: 16px 20px
└── Logo: 24px

HERO
├── Hauteur: 600px
├── Padding: 60px 20px
└── Boutons: 14px font, 40px padding

STATISTICS
├── Padding: 60px 20px
├── Gap: 50px
└── Icônes: 80px × 80px

CERTIFICATIONS
├── Padding: 60px 20px
├── Grid: auto-fit, minmax(200px, 1fr)
└── Gap: 30px

ABOUT
├── Padding: 80px 20px
├── Grid: 1fr 1fr
├── Gap: 60px
└── Image: max-width 350px

PROFILES
├── Padding: 80px 20px
├── Grid: auto-fit, minmax(300px, 1fr)
└── Gap: 40px

FOOTER
├── Padding: 60px 20px 20px
├── Grid: auto-fit, minmax(250px, 1fr)
└── Gap: 40px
```

## 📱 Responsive Breakpoints

```
MOBILE (< 768px)
├── Header: 12px padding
├── Hero: 500px height
├── Statistics: 40px padding
├── Certifications: 2 colonnes
├── About: 1 colonne
└── Profiles: 1 colonne

TABLET (768px - 1199px)
├── Header: 14px padding
├── Hero: 550px height
├── Statistics: 50px padding
├── Certifications: 3 colonnes
├── About: 1 colonne
└── Profiles: 2 colonnes

DESKTOP (1200px+)
├── Header: 16px padding
├── Hero: 600px height
├── Statistics: 60px padding
├── Certifications: 4 colonnes
├── About: 2 colonnes
└── Profiles: 3 colonnes
```

## 🎬 Animations

```
FADE IN UP
├── Durée: 0.6s
├── Délai: 0s
└── Easing: ease-out

BOUNCE
├── Durée: 2s
├── Délai: 0s
└── Répétition: infinite

SLIDE DOWN
├── Durée: 1.5s
├── Délai: 0s
└── Répétition: infinite

HOVER EFFECTS
├── Transform: translateY(-2px)
├── Durée: 0.3s
└── Easing: ease
```

## 🔤 Typographie

```
H1 (Titre principal)
├── Font-size: 48px
├── Font-weight: 700
└── Letter-spacing: 1px

H2 (Sous-titre)
├── Font-size: 32px
├── Font-weight: 700
└── Letter-spacing: 1px

H3 (Titre section)
├── Font-size: 24px
├── Font-weight: 700
└── Letter-spacing: 0px

BODY (Texte principal)
├── Font-size: 16px
├── Font-weight: 400
└── Line-height: 1.6

SMALL (Texte petit)
├── Font-size: 14px
├── Font-weight: 600
└── Letter-spacing: 1px
```

## 🎯 Hiérarchie visuelle

```
NIVEAU 1 (Plus important)
├── Logo QHSEPRO
├── Titre "À propos"
├── Statistiques principales
└── Boutons d'action

NIVEAU 2 (Important)
├── Sous-titres
├── Noms de profil
├── Certifications
└── Descriptions

NIVEAU 3 (Moins important)
├── Texte secondaire
├── Texte clair
├── Petits détails
└── Footer
```

## 🖼️ Zones de contenu

```
┌─────────────────────────────────────────────────────────┐
│ ZONE 1: HEADER (Fixe)                                   │
│ Hauteur: 60px                                           │
│ Couleur: #1a2332                                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 2: HERO (Pleine largeur)                           │
│ Hauteur: 600px                                          │
│ Couleur: Dégradé #2c3e50 → #34495e                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 3: CONTENU (Centré, max 1200px)                    │
│ Padding: 60px 20px                                      │
│ Couleur: Alternée (blanc, gris)                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ZONE 4: FOOTER (Pleine largeur)                         │
│ Hauteur: Auto                                           │
│ Couleur: #1a2332                                        │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Exemple de composant

```
STAT CARD
┌──────────────────────────┐
│                          │
│    ┌────────────────┐    │
│    │      💼       │    │
│    └────────────────┘    │
│                          │
│        45+               │
│                          │
│   Projets réalisés       │
│                          │
└──────────────────────────┘

PROFILE CARD
┌──────────────────────────┐
│                          │
│    ┌────────────────┐    │
│    │                │    │
│    │     [Photo]    │    │
│    │                │    │
│    └────────────────┘    │
│                          │
│   Atayi BRUNO            │
│   Responsable QHSE...    │
│   Description...         │
│   🏆 ISO 45001 Certifié  │
│   🏆 ISO 14001 Certifié  │
│                          │
└──────────────────────────┘
```

## 📊 Grilles

```
DESKTOP (1200px+)
┌─────────────────────────────────────────────────────────┐
│ [1/3]          [1/3]          [1/3]                     │
│ Stat 1         Stat 2         Stat 3                    │
└─────────────────────────────────────────────────────────┘

TABLET (768px - 1199px)
┌─────────────────────────────────────────────────────────┐
│ [1/2]                    [1/2]                          │
│ Stat 1                   Stat 2                         │
│                                                         │
│ [Full]                                                  │
│ Stat 3                                                  │
└─────────────────────────────────────────────────────────┘

MOBILE (< 768px)
┌─────────────────────────────────────────────────────────┐
│ [Full]                                                  │
│ Stat 1                                                  │
│                                                         │
│ [Full]                                                  │
│ Stat 2                                                  │
│                                                         │
│ [Full]                                                  │
│ Stat 3                                                  │
└─────────────────────────────────────────────────────────┘
```

---

**Créé le**: 4 mai 2026
**Version**: 1.0.0
