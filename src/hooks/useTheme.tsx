import { useState } from 'react';

const defaultThemes = [
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

export type Theme = (typeof defaultThemes)[number];

export const useTheme = (initialTheme = 'light', themes?: string[]) => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const availableThemes = themes && themes.length > 0 ? themes : defaultThemes;

  const handleThemeChange = (theme: string) => {
    if (availableThemes.includes(theme)) {
      setCurrentTheme(theme);
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      console.warn(`Theme "${theme}" is not available.`);
    }
  };

  return {
    currentTheme,
    handleThemeChange,
    themes: availableThemes,
  };
};
