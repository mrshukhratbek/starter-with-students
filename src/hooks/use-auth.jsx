import { useContext } from 'react';
import { AuthContext } from '@context/';

export const useAuth = (settrOnly) => {
  const { token, setToken } = useContext(AuthContext);

  return settrOnly ? [token] : [token, setToken];
};
