import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames/classNames';
import { AppLink } from '@shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div>
        <AppLink className={cls.link} to={'/'}>{t('главная')}</AppLink>
        <AppLink className={cls.link} to={'/about'}>{t('о сайте')}</AppLink>
      </div>
    </div>
  );
};
