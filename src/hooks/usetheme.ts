import { useThemeStore } from "@/stores/themeStore";

export const useTheme = () => {
  const { setTheme, theme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  const getThemeSaved = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add("light");
    }
  };

  return {
    theme,
    toggleTheme,
    getThemeSaved,
  };
};
