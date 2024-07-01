import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  LIGHT = 'light',
  DARK = 'dark',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<Props> = ({
  className = '', theme = ThemeButton.CLEAR, children, onClick,
}) => (
  <button
    type={'button'}
    className={classNames(cls.button, {}, [className, cls[theme]])}
    onClick={onClick}
  >
    {children}
  </button>
);
