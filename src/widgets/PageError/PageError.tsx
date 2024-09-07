import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames/classNames';
import { Button } from '@shared/ui/Button/Button';
import { Svg } from '@shared/assets';

import cls from './PageError.module.scss';

interface Props {
  className?: string
}

export const PageError: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => { location.reload(); };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <Svg.Img.UnexpectedError />
      <p className={cls.title}>{t('произошла непредвиденная ошибка')}</p>
      <Button className={cls.button} onClick={reloadPage}>
        {t('обновить страницу')}
      </Button>
    </div>
  );
};
