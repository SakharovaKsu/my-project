import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

// берем значения из локал стораж, если не взяли, то по умолчанию присваиваем light
const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren<object>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValueProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValueProps}>
      {children}
    </ThemeContext.Provider>
  );
};
