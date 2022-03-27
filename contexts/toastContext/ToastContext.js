import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const ToastContext = React.createContext({});

export const ToastContextProvider = ({ children }) => {
  const toastError = (message = 'Algo salió mal', id = 'toast-error') => {
    toast.error(message, { id });
  };

  const toastSuccess = (message = 'Todo correcto', id = 'toast-success') => {
    toast.success(message, { id });
  };

  return (
    <ToastContext.Provider
      value={{
        toastError,
        toastSuccess,
        toast,
      }}>
      {children}

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </ToastContext.Provider>
  );
};