export const setAuthentication = () => {
  localStorage.setItem('authentication', 'ok');
};

export const authenticate = () => {
  const token = localStorage.getItem('authentication');
  if (token) return true;
  return false;
};
