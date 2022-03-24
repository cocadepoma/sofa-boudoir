import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const ToastContext = React.createContext({});

export const ToastContextProvider = ({ children }) => {
  const [customStyleOn, setCustomStyleOn] = useState(false);

  const toastError = (message = 'Algo salió mal', id = 'toast-error') => {
    toast.error(message, { id });
  };

  const toastSuccess = (message = 'Todo correcto', id = 'toast-success') => {
    toast.success(message, { id });
  };

  const defaultStyles = {
    duration: 3000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  };

  const customStyles = {
    duration: 5000,
    style: {
      position: 'absolute',
      top: '200px',
      left: '1000px',
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  };

  return (
    <ToastContext.Provider
      value={{
        toastError,
        toastSuccess,
        setCustomStyleOn,
        toast,
      }}>
      {children}
      <>
        {customStyleOn
          ? (
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 5000,
                style: {
                  // position: 'absolute',
                  // top: '200px',
                  // left: '1000px',
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
          )
          : (
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
          )
        }
      </>

    </ToastContext.Provider>
  );
};