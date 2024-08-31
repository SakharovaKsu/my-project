import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return <Button theme={ButtonTheme.LIGHT} onClick={toggle}>{t('язык')}</Button>;
};

