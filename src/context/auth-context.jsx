import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = JSON.parse(localStorage.getItem('_auth_token_'));
  const [token, setToken] = useState(localToken);

  useEffect(() => {
    if (token) {
      return localStorage.setItem('_auth_token_', JSON.stringify(token));
    }

    localStorage.removeItem('_auth_token_');
  }, [token]);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
