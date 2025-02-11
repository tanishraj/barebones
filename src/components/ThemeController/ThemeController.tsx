import { useMemo, FC } from 'react';

import { Dropdown, DropdownProps } from '../Dropdown';

import { useTheme, themes as defaultThemes } from '@/hooks/useTheme';

export interface ThemeControllerProps extends DropdownProps {
  themes?: string[];
}

export const ThemeController: FC<ThemeControllerProps> = ({
  themes = defaultThemes,
}) => {
  const { currentTheme, setTheme } = useTheme({
    themes,
    defaultTheme: themes[0],
  });

  const memoizedThemes = useMemo(() => themes, [themes]);

  const themeList = memoizedThemes.map(theme => {
    return {
      label: theme,
      onClick: () => {
        console.log('Theme', theme);
        setTheme(theme);
      },
    };
  });

  return (
    <div>
      <Dropdown
        label={currentTheme}
        items={themeList}
        behavior='clickOutsideClose'
      />
    </div>
  );
};
