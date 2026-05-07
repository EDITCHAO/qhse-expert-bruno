<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Dashboard Admin - HSE Bruno</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: #0f172a;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.3), transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.2), transparent 50%);
            z-index: 0;
        }

        .dashboard-container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
        }

        .header {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.1);
            padding: 1.5rem 2.5rem;
            border-radius: 24px;
            margin-bottom: 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .logo {
            font-size: 2rem;
            font-weight: 900;
            background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
        }

        .header-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f1f5f9;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .header-actions {
            display: flex;
            gap: 1rem;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s;
            font-size: 0.95rem;
        }

        .btn-home {
            background: rgba(99, 102, 241, 0.1);
            color: #a5b4fc;
            border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .btn-home:hover {
            background: rgba(99, 102, 241, 0.2);
            border-color: rgba(99, 102, 241, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .btn-logout {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .btn-logout:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 2.5rem;
        }

        .stat-card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.1);
            padding: 2.5rem;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 2rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
            opacity: 0;
            transition: opacity 0.4s;
        }

        .stat-card:hover::before {
            opacity: 1;
        }

        .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 30px 80px rgba(99, 102, 241, 0.3);
        }

        .stat-icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            background: linear-gradient(135deg, #6366f1, #a855f7);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
            position: relative;
            z-index: 1;
        }

        .stat-info {
            position: relative;
            z-index: 1;
        }

        .stat-info h3 {
            color: #94a3b8;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .stat-info p {
            font-size: 3rem;
            font-weight: 900;
            color: #f1f5f9;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .contacts-section {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid rgba(148, 163, 184, 0.1);
        }

        .section-title {
            font-size: 1.75rem;
            font-weight: 800;
            color: #f1f5f9;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 0.5rem;
        }

        thead tr {
            background: linear-gradient(135deg, #6366f1, #a855f7);
        }

        th {
            padding: 1.25rem 1.5rem;
            text-align: left;
            font-weight: 700;
            color: white;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        th:first-child {
            border-radius: 12px 0 0 12px;
        }

        th:last-child {
            border-radius: 0 12px 12px 0;
        }

        tbody tr {
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(148, 163, 184, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        tbody tr:hover {
            transform: translateX(8px);
            background: rgba(30, 41, 59, 0.8);
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        td {
            padding: 1.5rem;
            color: #cbd5e1;
            font-size: 0.95rem;
            border-bottom: 1px solid rgba(148, 163, 184, 0.05);
        }

        td:first-child {
            border-radius: 12px 0 0 12px;
        }

        td:last-child {
            border-radius: 0 12px 12px 0;
        }

        .badge {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
        }

        .badge-new {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .btn-delete {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 700;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .btn-delete:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(239, 68, 68, 0.5);
        }

        .empty-state {
            text-align: center;
            padding: 5rem 2rem;
            color: #94a3b8;
        }

        .empty-icon {
            font-size: 5rem;
            margin-bottom: 1.5rem;
            opacity: 0.4;
        }

        .empty-text {
            font-size: 1.25rem;
            font-weight: 600;
            color: #cbd5e1;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .stat-card, .contacts-section {
            animation: fadeIn 0.8s ease-out;
        }

        .stat-card:nth-child(1) {
            animation-delay: 0.1s;
        }

        .stat-card:nth-child(2) {
            animation-delay: 0.2s;
        }

        .stat-card:nth-child(3) {
            animation-delay: 0.3s;
        }

        tbody tr {
            animation: slideIn 0.5s ease-out;
        }

        .btn-view {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 700;
            transition: all 0.3s;
            margin-right: 0.5rem;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-view:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }

        .modal-content {
            background: rgba(30, 41, 59, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.2);
            margin: 3% auto;
            padding: 3rem;
            border-radius: 24px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.3s;
        }

        .modal-content::-webkit-scrollbar {
            width: 10px;
        }

        .modal-content::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.4);
            border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
            background: rgba(99, 102, 241, 0.5);
            border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.7);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid rgba(148, 163, 184, 0.1);
        }

        .modal-title {
            font-size: 1.75rem;
            font-weight: 800;
            color: #f1f5f9;
        }

        .close {
            color: #94a3b8;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }

        .close:hover {
            color: #ef4444;
            transform: rotate(90deg);
        }

        .modal-body {
            color: #cbd5e1;
        }

        .modal-field {
            margin-bottom: 1.5rem;
        }

        .modal-label {
            display: block;
            font-weight: 600;
            color: #94a3b8;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
        }

        .modal-value {
            color: #f1f5f9;
            font-size: 1.1rem;
            padding: 1rem;
            background: rgba(15, 23, 42, 0.6);
            border-radius: 12px;
            border: 1px solid rgba(148, 163, 184, 0.1);
            word-wrap: break-word;
            overflow-wrap: break-word;
            max-height: 300px;
            overflow-y: auto;
        }

        .modal-value::-webkit-scrollbar {
            width: 8px;
        }

        .modal-value::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.4);
            border-radius: 10px;
        }

        .modal-value::-webkit-scrollbar-thumb {
            background: rgba(99, 102, 241, 0.5);
            border-radius: 10px;
        }

        .modal-value::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.7);
        }

        @media (max-width: 768px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .header {
                flex-direction: column;
                gap: 1rem;
                padding: 1.2rem 1.5rem;
            }

            .header-left {
                flex-direction: column;
                text-align: center;
                width: 100%;
            }

            .header-actions {
                flex-direction: column;
                width: 100%;
            }

            .btn {
                width: 100%;
                justify-content: center;
            }

            .logo {
                font-size: 1.5rem;
            }

            .header-title {
                font-size: 1.2rem;
            }
            
            .table-container {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }

            table {
                min-width: 800px;
            }

            th, td {
                padding: 1rem 0.8rem;
                font-size: 0.85rem;
            }

            .stat-card {
                padding: 2rem 1.5rem;
            }

            .stat-icon {
                width: 70px;
                height: 70px;
                font-size: 2rem;
            }

            .stat-info h3 {
                font-size: 0.85rem;
            }

            .stat-info p {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 1.5rem;
            }

            .contacts-section {
                padding: 2rem 1.5rem;
            }

            .modal-content {
                width: 95%;
                padding: 2rem 1.5rem;
                margin: 10% auto;
            }

            .modal-title {
                font-size: 1.4rem;
            }

            .modal-value {
                font-size: 1rem;
                padding: 0.8rem;
            }

            .btn-view, .btn-delete {
                padding: 0.6rem 1rem;
                font-size: 0.85rem;
                margin-bottom: 0.5rem;
            }
        }

        @media (max-width: 480px) {
            .dashboard-container {
                padding: 1rem;
            }

            .header {
                padding: 1rem;
                border-radius: 16px;
            }

            .logo {
                font-size: 1.3rem;
            }

            .header-title {
                font-size: 1.1rem;
            }

            .btn {
                padding: 0.6rem 1.2rem;
                font-size: 0.85rem;
            }

            .stats-grid {
                gap: 1rem;
            }

            .stat-card {
                padding: 1.5rem 1rem;
                gap: 1rem;
            }

            .stat-icon {
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
            }

            .stat-info h3 {
                font-size: 0.8rem;
            }

            .stat-info p {
                font-size: 2rem;
            }

            .contacts-section {
                padding: 1.5rem 1rem;
                border-radius: 16px;
            }

            .section-title {
                font-size: 1.3rem;
            }

            th, td {
                padding: 0.8rem 0.5rem;
                font-size: 0.8rem;
            }

            .btn-view, .btn-delete {
                padding: 0.5rem 0.8rem;
                font-size: 0.8rem;
                display: block;
                width: 100%;
                margin-bottom: 0.3rem;
            }

            .modal-content {
                padding: 1.5rem 1rem;
                border-radius: 16px;
            }

            .modal-title {
                font-size: 1.2rem;
            }

            .modal-label {
                font-size: 0.8rem;
            }

            .modal-value {
                font-size: 0.95rem;
                padding: 0.7rem;
            }

            .close {
                font-size: 1.5rem;
            }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .dashboard-container {
                padding: 1.5rem;
            }
        }

        @media (min-width: 1400px) {
            .dashboard-container {
                max-width: 1800px;
            }

            .stats-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <div class="header">
            <div class="header-left">
                <div class="logo">🛡️ HSE BRUNO</div>
                <h1 class="header-title">Dashboard Admin</h1>
            </div>
            <div class="header-actions">
                <a href="<?php echo e(route('home')); ?>" class="btn btn-home">
                    🏠 Retour au site
                </a>
                <form method="POST" action="<?php echo e(route('admin.logout')); ?>" style="display: inline;">
                    <?php echo csrf_field(); ?>
                    <button type="submit" class="btn btn-logout">
                        🚪 Déconnexion
                    </button>
                </form>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">📧</div>
                <div class="stat-info">
                    <h3>Total Messages</h3>
                    <p><?php echo e($totalMessages); ?></p>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">📊</div>
                <div class="stat-info">
                    <h3>Aujourd'hui</h3>
                    <p><?php echo e($contacts->where('created_at', '>=', now()->startOfDay())->count()); ?></p>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">📈</div>
                <div class="stat-info">
                    <h3>Cette Semaine</h3>
                    <p><?php echo e($contacts->where('created_at', '>=', now()->startOfWeek())->count()); ?></p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">📅</div>
                <div class="stat-info">
                    <h3>Ce Mois</h3>
                    <p><?php echo e($contacts->where('created_at', '>=', now()->startOfMonth())->count()); ?></p>
                </div>
            </div>
        </div>

        <div class="contacts-section">
            <div class="section-header">
                <h2 class="section-title">📬 Messages de Contact</h2>
            </div>

            <?php if($contacts->count() > 0): ?>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Sujet</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $contacts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $contact): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr id="contact-<?php echo e($contact->id); ?>">
                                    <td><strong><?php echo e($contact->nom); ?></strong></td>
                                    <td><?php echo e($contact->email); ?></td>
                                    <td><?php echo e($contact->numero); ?></td>
                                    <td><?php echo e($contact->sujet); ?></td>
                                    <td><?php echo e(Str::limit($contact->message, 60)); ?></td>
                                    <td>
                                        <?php echo e($contact->created_at->format('d/m/Y H:i')); ?>

                                        <?php if($contact->created_at->isToday()): ?>
                                            <span class="badge badge-new">Nouveau</span>
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <button class="btn-view" 
                                                data-id="<?php echo e($contact->id); ?>"
                                                data-nom="<?php echo e($contact->nom); ?>"
                                                data-email="<?php echo e($contact->email); ?>"
                                                data-numero="<?php echo e($contact->numero); ?>"
                                                data-sujet="<?php echo e($contact->sujet); ?>"
                                                data-message="<?php echo e($contact->message); ?>"
                                                data-date="<?php echo e($contact->created_at->format('d/m/Y H:i')); ?>"
                                                onclick="viewContact(this)">
                                            <i class="fas fa-eye"></i> Voir
                                        </button>
                                        <button class="btn-delete" onclick="deleteContact(<?php echo e($contact->id); ?>)">
                                            <i class="fas fa-trash"></i> Supprimer
                                        </button>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <p class="empty-text">Aucun message pour le moment</p>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- Modal pour voir les détails -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title"><i class="fas fa-envelope-open-text"></i> Détails du Message</h2>
                <span class="close" onclick="closeModal()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-user"></i> Nom</label>
                    <div class="modal-value" id="modal-nom"></div>
                </div>
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-envelope"></i> Email</label>
                    <div class="modal-value" id="modal-email"></div>
                </div>
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-phone"></i> Téléphone</label>
                    <div class="modal-value" id="modal-numero"></div>
                </div>
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-tag"></i> Sujet</label>
                    <div class="modal-value" id="modal-sujet"></div>
                </div>
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-comment-dots"></i> Message</label>
                    <div class="modal-value" id="modal-message" style="white-space: pre-wrap;"></div>
                </div>
                <div class="modal-field">
                    <label class="modal-label"><i class="fas fa-clock"></i> Date</label>
                    <div class="modal-value" id="modal-date"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function viewContact(button) {
            // Récupérer les données depuis les attributs data
            const nom = button.getAttribute('data-nom');
            const email = button.getAttribute('data-email');
            const numero = button.getAttribute('data-numero');
            const sujet = button.getAttribute('data-sujet');
            const message = button.getAttribute('data-message');
            const date = button.getAttribute('data-date');

            // Afficher les données dans le modal
            document.getElementById('modal-nom').textContent = nom;
            document.getElementById('modal-email').textContent = email;
            document.getElementById('modal-numero').textContent = numero;
            document.getElementById('modal-sujet').textContent = sujet;
            document.getElementById('modal-message').textContent = message;
            document.getElementById('modal-date').textContent = date;
            
            // Afficher le modal
            document.getElementById('contactModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('contactModal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('contactModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Fermer le modal avec la touche Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        function deleteContact(id) {
            if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
                return;
            }

            fetch(`/admin/contacts/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const row = document.getElementById(`contact-${id}`);
                    row.style.opacity = '0';
                    row.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        location.reload();
                    }, 300);
                }
            })
            .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>
<?php /**PATH C:\xampps\htdocs\projet\portfolio hse\resources\views/admin/dashboard.blade.php ENDPATH**/ ?>