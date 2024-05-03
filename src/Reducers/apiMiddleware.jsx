// apiMiddleware.jsx

import { baseQuery } from './apiSlice'; 

export const login = async (username, password) => {
  
   
    const response = await baseQuery.fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Identifiants invalides');
    }

    const data = await response.json();
    return data;
  
};
