export const saveOrCleanEmailInStorage = (rememberMe, email) => {
  if (rememberMe && email) {
    localStorage.setItem('email', email);
  } else {
    localStorage.removeItem('email');
  }
};

export const saveTokenInStorage = (token) => {
  if (!token) return;

  localStorage.setItem('token', token);
};