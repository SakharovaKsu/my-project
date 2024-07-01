import React, { FC } from 'react';
import { Button, ThemeButton } from '../../Button/Button';
import { Theme, useTheme } from '@/app/provider/themeProvider';
import { classNames } from '@shared/lib/classNames/classNames';
import {Svg} from '@/shared/assets';


interface Props {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const ThemeSwitcher: FC<Props> = ({ className = '', type = 'button' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type={type}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <Svg.Icon.ThemeDark/>
      ) : (
        <Svg.Icon.ThemeLight/>
      )}
    </Button>
  );
};
