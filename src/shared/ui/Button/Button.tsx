import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@shared/lib';

export enum ButtonTheme {
  CLEAR = 'clear',
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ButtonSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button: FC<Props> = ({
  className = '', theme = ButtonTheme.CLEAR, children, onClick, size = ButtonSize.S,
}) => {

  const mode: Record<string, boolean> = {
    [cls[size]]: true,
  }

  return (
    <button
      type={'button'}
      className={classNames(cls.button, mode, [className, cls[theme]])}
      onClick={onClick}>
      {children}
    </button>);
};
