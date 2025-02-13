import { Button } from '@/components';
import { useTheme } from '@/hooks';

export const ButtonThemeController = () => {
  const { currentTheme, toggleTheme } = useTheme({
    themes: ['light', 'dark'],
  });

  return (
    <Button onClick={toggleTheme}>
      {currentTheme === 'light' ? '☾ Dark' : '☼ Light'}
    </Button>
  );
};
