

<?php $__env->startSection('title', 'QHSEPRO - Atayi Bruno - Expert QHSE'); ?>

<?php $__env->startSection('content'); ?>
<nav class="navbar">
    <div class="container">
        <div class="logo">
            <span class="logo-shield"><i class="fas fa-shield-alt"></i></span>
            <span class="logo-text"><span class="qhse">QHSE</span><span class="pro">PRO</span></span>
        </div>
        <ul class="nav-links">
            <li><a href="#home">ACCUEIL</a></li>
            <li><a href="#about">À PROPOS</a></li>
            <li><a href="#competences">COMPÉTENCES</a></li>
            <li><a href="#projets">PROJETS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        <a href="<?php echo e(route('admin.login')); ?>" class="admin-btn"><i class="fas fa-user-shield"></i> Admin</a>
    </div>
</nav>

<section id="home" class="hero">
    <div class="hero-overlay"></div>je veux voir le
    <div class="container">
        <div class="hero-content">
            <div class="hero-badge-line">
                <span class="badge-icon"><i class="fas fa-hard-hat"></i></span>
                <span class="badge-text">QUALITÉ • HYGIÈNE • SÉCURITÉ • ENVIRONNEMENT</span>
            </div>
            <h1 class="hero-name">
                <span class="first-name">Atayi</span> 
                <span class="last-name">BRUNO</span>
            </h1>
            <p class="hero-subtitle">
                Responsable QHSE spécialisé en génie civil — Routes, Bâtiments & Ouvrages d'art. 
                Plus de 12 ans d'expérience au service de la sécurité et de l'excellence opérationnelle.
            </p>
            <div class="certifications">
                <span class="cert-badge"><i class="fas fa-award"></i> ISO 45001 Certifié</span>
                <span class="cert-badge"><i class="fas fa-award"></i> ISO 14001 Certifié</span>
                <span class="cert-badge"><i class="fas fa-award"></i> NEBOSH IGC</span>
            </div>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-orange">
                    <i class="fas fa-envelope"></i> ME CONTACTER
                </a>
                <a href="#projets" class="btn btn-outline">
                    <i class="fas fa-briefcase"></i> VOIR MES PROJETS
                </a>
            </div>
        </div>
    </div>
    <div class="scroll-indicator">
        <span>DÉCOUVRIR</span>
        <i class="fas fa-chevron-down"></i>
    </div>
</section>

<section class="clients">
    <div class="container">
        <h3 class="clients-title">ILS M'ONT FAIT CONFIANCE</h3>
        <div class="clients-grid">
            <div class="client-logo">BUREAU VERITAS</div>
            <div class="client-logo">SGS</div>
            <div class="client-logo">TÜV RHEINLAND</div>
            <div class="client-logo">SOGEA-SATOM</div>
            <div class="client-logo">BOUYGUES TP</div>
            <div class="client-logo">RAZEL-BEC</div>
            <div class="client-logo">OPPRTP</div>
            <div class="client-logo">NEBOSH</div>
        </div>
    </div>
</section>

<section id="about" class="about">
    <div class="container">
        <div class="section-header">
            <span class="section-label">QUI SUIS-JE</span>
            <h2 class="section-title">À propos</h2>
        </div>
        <div class="about-grid">
            <div class="about-image-container">
                <div class="about-image">
                    <img src="<?php echo e(asset('images/atayi-bruno.jpeg')); ?>" alt="Atayi Bruno - Responsable QHSE">
                </div>
            </div>
            <div class="about-content">
                <p class="about-text">
                    Fort de plus de 12 années d'expérience dans le domaine du génie civil, je suis un professionnel passionné par 
                    <strong>la qualité, la sécurité et la protection de l'environnement</strong> sur les chantiers de construction routière et de bâtiment.
                </p>
                <p class="about-text">
                    Mon expertise couvre l'élaboration et la mise en œuvre de systèmes de management QHSE, la conduite d'audits, 
                    la formation des équipes terrain et le suivi réglementaire. J'ai contribué à la réalisation de projets majeurs 
                    d'infrastructure en Afrique de l'Ouest, garantissant le respect des normes internationales et la sécurité de tous les intervenants.
                </p>
                <div class="about-info-grid">
                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="info-content">
                            <h4>LOCALISATION</h4>
                            <p>TOGO, Lomé</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-briefcase"></i></div>
                        <div class="info-content">
                            <h4>EXPÉRIENCE</h4>
                            <p>+12 ans en QHSE</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-graduation-cap"></i></div>
                        <div class="info-content">
                            <h4>FORMATION</h4>
                            <p>Ingénieur Génie Civil</p>
                        </div>
                    </div>
                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-calendar-check"></i></div>
                        <div class="info-content">
                            <h4>DISPONIBILITÉ</h4>
                            <p>Immédiate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="stats-section">
    <div class="container">
        <div class="stats-cards">
            <div class="stat-box">
                <div class="stat-icon-box">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="stat-number">45+</div>
                <div class="stat-label">Projets réalisés</div>
            </div>
            
            <div class="stat-box">
                <div class="stat-icon-box">
                    <i class="fas fa-users"></i>
                </div>
                <div class="stat-number">3 000+</div>
                <div class="stat-label">Ouvriers formés</div>
            </div>
            
            <div class="stat-box">
                <div class="stat-icon-box">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="stat-number">0</div>
                <div class="stat-label">Accidents mortels</div>
            </div>
            
            <div class="stat-box">
                <div class="stat-icon-box">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="stat-number">12</div>
                <div class="stat-label">Années d'expérience</div>
            </div>
        </div>
    </div>
</section>

<section id="competences" class="services">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">SAVOIR-FAIRE</span>
            <h2 class="section-title">Domaines de compétences</h2>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon quality">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3>Système de Management QHSE</h3>
                <p>Conception et déploiement de SMQ selon ISO 9001, ISO 14001 et ISO 45001.</p>
            </div>

            <div class="service-card">
                <div class="service-icon hygiene">
                    <i class="fas fa-clipboard-list"></i>
                </div>
                <h3>Audits & Inspections</h3>
                <p>Audits internes et externes, inspections de chantier, plans d'actions correctives.</p>
            </div>

            <div class="service-card">
                <div class="service-icon environment">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Analyse des Risques</h3>
                <p>DUERP, études de dangers, plans de prévention et évaluation des risques professionnels.</p>
            </div>

            <div class="service-card">
                <div class="service-icon quality">
                    <i class="fas fa-leaf"></i>
                </div>
                <h3>Management Environnemental</h3>
                <p>Études d'impact, gestion des déchets, conformité réglementaire environnementale.</p>
            </div>

            <div class="service-card">
                <div class="service-icon hygiene">
                    <i class="fas fa-hard-hat"></i>
                </div>
                <h3>Sécurité Chantier</h3>
                <p>Plans HSE, PPSPS, coordination SPS, gestion du travail et coactivité.</p>
            </div>

            <div class="service-card">
                <div class="service-icon environment">
                    <i class="fas fa-users"></i>
                </div>
                <h3>Formation & Sensibilisation</h3>
                <p>Sécurité sécurité, formations EPI, exercices d'évacuation et premiers secours.</p>
            </div>

            <div class="service-card">
                <div class="service-icon quality">
                    <i class="fas fa-tasks"></i>
                </div>
                <h3>Contrôle Qualité</h3>
                <p>Plans de contrôle, essais matériaux, réception des ouvrages, fiches de non-conformité.</p>
            </div>

            <div class="service-card">
                <div class="service-icon hygiene">
                    <i class="fas fa-building"></i>
                </div>
                <h3>Génie Civil</h3>
                <p>Expertise technique en construction routes, bâtiments, ouvrages d'art et terrassements.</p>
            </div>
        </div>
    </div>
</section>

<section id="projets" class="portfolio">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Réalisations</span>
            <h2 class="section-title">Projets à Impact</h2>
        </div>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Qualité</span>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3>Certification ISO 9001</h3>
                    <p>Accompagnement d'une entreprise industrielle de 200 employés vers la certification ISO 9001 en 8 mois.</p>
                    <div class="portfolio-tags">
                        <span class="tag">ISO 9001</span>
                        <span class="tag">Industrie</span>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Hygiène</span>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3>Audit HACCP Complet</h3>
                    <p>Mise en conformité HACCP pour une chaîne de restauration avec formation de 50 collaborateurs.</p>
                    <div class="portfolio-tags">
                        <span class="tag">HACCP</span>
                        <span class="tag">Restauration</span>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Environnement</span>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3>Transition Écologique</h3>
                    <p>Stratégie environnementale et certification ISO 14001 pour un site de production pharmaceutique.</p>
                    <div class="portfolio-tags">
                        <span class="tag">ISO 14001</span>
                        <span class="tag">Pharma</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <span class="section-badge">Contact</span>
                <h2 class="section-title">Démarrons Votre Projet</h2>
                <p class="contact-description">
                    Vous avez un projet QHE ? Discutons de vos besoins et trouvons ensemble les meilleures solutions.
                </p>
                <div class="contact-details">
                    <div class="contact-detail-item">
                        <div class="detail-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4>Localisation</h4>
                            <p>France, Disponible Nationalement</p>
                        </div>
                    </div>
                    <div class="contact-detail-item">
                        <div class="detail-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <h4>Téléphone</h4>
                            <p>+33 (0)6 XX XX XX XX</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <form id="contactForm" class="contact-form">
                <?php echo csrf_field(); ?>
                <div class="form-row">
                    <div class="form-group">
                        <label for="nom">Nom complet</label>
                        <input type="text" id="nom" name="nom" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="numero">Téléphone</label>
                        <input type="tel" id="numero" name="numero" required>
                    </div>
                    <div class="form-group">
                        <label for="sujet">Sujet</label>
                        <input type="text" id="sujet" name="sujet" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full">
                    <i class="fas fa-paper-plane"></i> Envoyer le Message
                </button>
                <div id="formMessage"></div>
            </form>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="logo">
                    <span class="logo-shield"><i class="fas fa-shield-alt"></i></span>
                    <span>QHE Excellence</span>
                </div>
                <p>Expert en Qualité, Hygiène et Environnement</p>
            </div>
            <div class="footer-links">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#competences">Services</a></li>
                    <li><a href="#projets">Réalisations</a></li>
                    <li><a href="<?php echo e(route('admin.login')); ?>">Admin</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contact</h4>
                <p><i class="fas fa-envelope"></i> contact@qhe-excellence.fr</p>
                <p><i class="fas fa-phone"></i> +33 (0)6 XX XX XX XX</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo e(date('Y')); ?> QHE Excellence. Tous droits réservés.</p>
        </div>
    </div>
</footer>

<!-- Bouton WhatsApp flottant -->
<a href="https://wa.me/92465477" 
   class="whatsapp-float" 
   target="_blank" 
   rel="noopener noreferrer"
   title="Contactez-nous sur WhatsApp"
   aria-label="Contactez-nous sur WhatsApp au 92465477">
    <i class="fab fa-whatsapp"></i>
</a>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const messageDiv = document.getElementById('formMessage');
            
            // Afficher un message de chargement
            messageDiv.className = 'alert alert-info';
            messageDiv.textContent = 'Envoi en cours...';
            
            try {
                const response = await fetch('<?php echo e(route("contact.store")); ?>', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    messageDiv.className = 'alert alert-success';
                    messageDiv.textContent = result.message;
                    form.reset();
                } else {
                    messageDiv.className = 'alert alert-error';
                    messageDiv.textContent = result.message || 'Une erreur est survenue';
                }
                
                setTimeout(() => {
                    messageDiv.textContent = '';
                    messageDiv.className = '';
                }, 5000);
            } catch (error) {
                console.error('Error:', error);
                messageDiv.className = 'alert alert-error';
                messageDiv.textContent = 'Erreur de connexion. Veuillez réessayer.';
            }
        });
    }
</script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampps\htdocs\projet\portfolio hse\resources\views/home.blade.php ENDPATH**/ ?>