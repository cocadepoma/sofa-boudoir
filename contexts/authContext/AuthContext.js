import React, { createContext } from 'react';
import { saveTokenInStorage } from '../../helpers/storage';
import { userLogin } from '../../services/loginService';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = async (email, password) => {
    const resp = await userLogin(email, password);

    if (resp.error) {
      console.error('HANDLE ERROR');
      return {
        ok: false,
        error: resp.error,
      };
    }

    saveTokenInStorage(resp.token);
    setUser(resp.user);

    return {
      ok: true,
      user: resp.user,
    };
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
    }}>
      {children}
    </AuthContext.Provider>
  );
};