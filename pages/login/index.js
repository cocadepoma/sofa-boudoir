import { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from 'next/router';


import { ToastContext } from '../../contexts/toastContext/ToastContext';
import { useForm } from '../../hooks/useForm';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faXmark, faEye, faEyeSlash, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import isEmail from 'validator/lib/isEmail';

import styles from './Login.module.scss';

import { saveOrCleanEmailInStorage } from '../../helpers/storage';

import { AuthContext } from '../../contexts/authContext/AuthContext';
import { waitFor } from '../../helpers/helpers';

export default function Login() {
  const router = useRouter();
  const { toastError } = useContext(ToastContext);
  const { login } = useContext(AuthContext);

  const { values, handleChange } = useForm({ email: '', password: '', rememberMe: false });
  const { email, password, rememberMe } = values;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailInput = useRef(null);
  const passswordInput = useRef(null);

  useEffect(() => {
    const emailLocal = localStorage.getItem('email');
    if (emailLocal) {
      handleChange({ target: { name: 'rememberMe', checked: true, type: 'checkbox' } });
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

  const handleSubmitLogin = async () => {
    console.log(rememberMe);
    setIsLoading(true);

    await waitFor(1000)
    const areFieldsValid = checkFields();

    saveOrCleanEmailInStorage(rememberMe, email);

    if (!areFieldsValid) {
      setIsLoading(false);
      toastError('Por favor, revise los campos marcados en rojo.');
      return;
    }

    const loginResp = await login(email, password);

    if (!loginResp.ok) {
      setIsLoading(false);
      toastError(loginResp.error);
      return;
    }

    router.push('/admin/dashboard');
    setIsLoading(false);
  };

  return (
    <div className={styles.loginMainContainer}>

      <div className={styles.formContainer}>

        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleSubmitLogin} noValidate>
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
              <input
                type="checkbox"
                value={rememberMe}
                name="rememberMe"
                onChange={handleChange}
                checked={rememberMe}
              />
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
        </form>

        {/* <div className={styles.buttonGroup}>
          <AwesomeButton
            type="secondary"
            size="medium"
            action={handleSubmitLogin}
          >
            {
              isLoading && (
                <>
                  CARGANDO
                  <FontAwesomeIcon
                    style={{ marginLeft: '5px' }}
                    spin
                    icon={faRotateRight}
                  />
                </>
              )
            }
            {
              !isLoading && (
                <>
                  LOGIN
                </>
              )
            }
          </AwesomeButton>
        </div> */}



      </div>
    </div>
  );
};