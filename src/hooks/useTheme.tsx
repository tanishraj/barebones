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

export const useTheme = (initialTheme = 'light', themes?: string[]) => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const availableThemes = themes && themes.length > 0 ? themes : defaultThemes;

  const firstTheme = availableThemes[0];
  const secondTheme = availableThemes[1];

  console.log('currentTheme', currentTheme);

  const handleThemeChange = (theme: string) => {
    if (availableThemes.includes(theme)) {
      setCurrentTheme(theme);
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      console.warn(`Theme "${theme}" is not available.`);
    }
  };

  const toggleTheme = () => {
    console.log('TOGGLE THEME SELECETED');
    const newTheme = currentTheme === firstTheme ? secondTheme : firstTheme;
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return {
    currentTheme,
    handleThemeChange,
    toggleTheme,
    themes: availableThemes,
  };
};
