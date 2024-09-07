import React, { FC } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className = '' }) => {
  return (
  // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.navbar, {}, [className])}>
      Navbar content
    </div>
  );
};
