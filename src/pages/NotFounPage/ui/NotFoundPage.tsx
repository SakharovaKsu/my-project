import React from 'react';
import { useTranslation } from 'react-i18next';
import { Svg } from '@/shared/assets';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage)}>
      <Svg.Img.NotFoundPage />
      {t('нет страницы')}
    </div>
  );
};
