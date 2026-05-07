import client from './client';

export const authAPI = {
  // Connexion admin
  login: (username, password) =>
    client.post('/auth/login', { username, password }),

  // Déconnexion
  logout: () => {
    localStorage.removeItem('admin_token');
    return Promise.resolve();
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: () => {
    return !!localStorage.getItem('admin_token');
  },

  // Récupérer le token
  getToken: () => localStorage.getItem('admin_token'),

  // Stocker le token
  setToken: (token) => localStorage.setItem('admin_token', token),
};

export default authAPI;
