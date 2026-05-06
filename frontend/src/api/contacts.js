import client from './client';

export const contactsAPI = {
  // Créer un nouveau contact
  create: (data) => client.post('/contacts', data),

  // Récupérer tous les contacts (admin)
  getAll: () => client.get('/contacts'),

  // Supprimer un contact (admin)
  delete: (id) => client.delete(`/contacts/${id}`),

  // Récupérer les statistiques (admin)
  getStats: () => client.get('/contacts/stats'),
};

export default contactsAPI;
