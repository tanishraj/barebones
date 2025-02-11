import { useEffect, useState } from 'react';

type UseThemeOptions = {
  themes: string[];
  defaultTheme?: string;
};

export const useTheme = ({ themes, defaultTheme }: UseThemeOptions) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme || themes[0];
    const savedTheme = localStorage.getItem('theme');
    return themes.includes(savedTheme!)
      ? savedTheme!
      : defaultTheme || themes[0];
  });

  useEffect(() => {
    if (themes.length === 0) return;
    if (!themes.includes(currentTheme)) {
      setCurrentTheme(defaultTheme || themes[0]);
    }
  }, [currentTheme, defaultTheme, themes]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, [currentTheme]);

  const setTheme = (theme: string) => {
    if (themes.includes(theme)) setCurrentTheme(theme);
  };

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  return { currentTheme, setTheme, toggleTheme };
};
