import { useEffect, useState } from 'react';

export const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export type Theme = (typeof themes)[number];

export type UseThemeOptions = {
  themes: Theme[];
  defaultTheme?: string;
};

export const useTheme = ({ defaultTheme, themes }: UseThemeOptions) => {
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
