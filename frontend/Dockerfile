FROM php:8.2-fpm

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . .

# Installer les dépendances
RUN composer install --no-dev --optimize-autoloader

# Définir les permissions
RUN chown -R www-data:www-data /app

# Exposer le port
EXPOSE 9000

# Commande de démarrage
CMD ["php-fpm"]
