export const logout = () => {
  localStorage.removeItem('Authorization');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
};

export const login = (token, username, email) => {
  localStorage.setItem('Authorization', token);
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
};

export const isLogin = () => {
  return localStorage.getItem('Authorization') === null ||
    localStorage.getItem('Authorization') === undefined
    ? false
    : true;
};
