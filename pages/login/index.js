import { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from 'next/router';

import { ToastContext } from '../../contexts/toastContext/ToastContext';
import { useForm } from '../../hooks/useForm';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import isEmail from 'validator/lib/isEmail';

import styles from './Login.module.scss';
import { waitFor } from '../../helpers/helpers';

export default function Login() {
  const router = useRouter();
  const { toastError, toast, setCustomStyleOn } = useContext(ToastContext);

  const { values, handleChange } = useForm({ email: '', password: '', rememberMe: false });
  const { email, password, rememberMe } = values;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const emailInput = useRef(null);
  const passswordInput = useRef(null);

  useEffect(() => {
    const emailLocal = localStorage.getItem('email');
    if (emailLocal) {
      handleChange({ target: { name: 'email', value: emailLocal } });
    }
  }, []);

  const handleClickTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const checkFields = () => {
    let isValid = true;

    if (!isEmail(email)) {
      isValid = false;
      emailInput.current.classList.add('input-error');
    } else {
      emailInput.current.classList.remove('input-error');
    }

    if (password.length < 6) {
      isValid = false;
      passswordInput.current.classList.add('input-error');
    } else {
      passswordInput.current.classList.remove('input-error');
    }

    return isValid;
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    const areFieldsValid = checkFields();

    if (rememberMe) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }

    if (!areFieldsValid) {
      toastError('Por favor, revise los campos marcados en rojo.');
      // TODO: show error message
      return;
    }

    // TODO: Log in
    // toast.promise(
    //   setTimeout(() => { }, 3000),
    //   {
    //     loading: 'Loading',
    //     success: (data) => `Successfully saved ${data.name}`,
    //     error: (err) => `This just happened: ${err.toString()}`,
    //   },
    //   {
    //     style: {
    //       minWidth: '250px',
    //     },
    //     success: {
    //       duration: 5000,
    //       icon: '🔥',
    //     },
    //   }
    // );
    setCustomStyleOn(true);

    toast.promise(waitFor(5000), {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching',

      style: {

        position: 'absolute',
        top: '200px',
        background: '#00b894',

      },

    });
    console.log({ values });
  };



  return (
    <div className={styles.loginMainContainer}>

      <div className={styles.formContainer}>

        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmitLogin}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.closeIcon}
            onClick={() => router.push('/')}
          />

          <div className={styles.formGroup}>
            <FontAwesomeIcon
              icon={faUser}
              className={styles.inputIcon}
            />
            <input
              ref={emailInput}
              value={email}
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div className={styles.formGroup}>
            {/* <FontAwesomeIcon icon={faLockOpen} /> */}
            <FontAwesomeIcon
              icon={faLock}
              className={styles.inputIcon}
            />
            <input
              ref={passswordInput}
              value={password}
              name="password"
              type={isPasswordVisible ? 'text' : 'password'}
              onChange={handleChange}
              placeholder="Password"
            />

            {
              isPasswordVisible
                ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className={styles.inputEyeIcon}
                    onClick={handleClickTogglePassword}
                  />
                )
                : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={styles.inputEyeIconSlash}
                    onClick={handleClickTogglePassword}
                  />
                )
            }
          </div>

          <div className={styles.checkGroup}>

            <label className={styles.checkbox}>
              <input type="checkbox" value={rememberMe} name="rememberMe" onChange={handleChange} />
              <svg viewBox="0 0 21 18">
                <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                </symbol>
                <defs>
                  <mask id="tick">
                    <use className={`${styles.tick} ${styles.mask}`} href="#tick-path" />
                  </mask>
                </defs>
                <use className={styles.tick} href="#tick-path" stroke="currentColor" />
                <path fill="white" mask="url(#tick)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
              </svg>
              <svg className={styles.lines} viewBox="0 0 11 11">
                <path d="M5.88086 5.89441L9.53504 4.26746" />
                <path d="M5.5274 8.78838L9.45391 9.55161" />
                <path d="M3.49371 4.22065L5.55387 0.79198" />
              </svg>
            </label>

            <label htmlFor="rememberMe" className={styles.checkboxText}>Recordarme</label>
          </div>

          <div className={styles.buttonGroup}>
            <button>
              Login

            </button>
          </div>

        </form>

      </div>
    </div>
  );
};