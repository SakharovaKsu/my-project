import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps{
  className?: string
  to: string
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = ({
  className = '', children, to, theme = AppLinkTheme.PRIMARY,
}) => (
  <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} to={to}>
    {children}
  </Link>
);
