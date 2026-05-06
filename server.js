const http = require('http');
const { spawn } = require('child_process');
const path = require('path');

const PORT = process.env.PORT || 8000;

// Démarrer le serveur PHP intégré
const phpProcess = spawn('php', ['-S', `localhost:${PORT}`, '-t', 'public'], {
  cwd: __dirname,
  stdio: 'inherit'
});

phpProcess.on('error', (err) => {
  console.error('Erreur lors du démarrage du serveur PHP:', err);
  process.exit(1);
});

phpProcess.on('exit', (code) => {
  console.log(`Serveur PHP arrêté avec le code ${code}`);
  process.exit(code);
});

console.log(`\n✅ Serveur API démarré sur http://localhost:${PORT}\n`);

// Gérer l'arrêt gracieux
process.on('SIGINT', () => {
  console.log('\n\n🛑 Arrêt du serveur...\n');
  phpProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n\n🛑 Arrêt du serveur...\n');
  phpProcess.kill();
  process.exit(0);
});
