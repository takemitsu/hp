const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = theme => localStorage.setItem('theme', theme);

function changeTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  setStoredTheme(theme);
}
changeTheme(getStoredTheme());
