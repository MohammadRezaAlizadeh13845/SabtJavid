export const applyThemeClassBody = (theme) => {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
};

export const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  applyThemeClassBody(theme);
};
