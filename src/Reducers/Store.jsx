// store.jsx

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

// Crée le magasin Redux
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Ajoutez d'autres reducers ici si nécessaire
  },
});

export default(store); // Exportez le magasin en tant qu'export par défaut
