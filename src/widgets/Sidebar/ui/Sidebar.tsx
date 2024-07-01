import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { classNames } from '@shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@shared/ui/LangSwitcher/LangSwitcher';

import cls from './Sidebar.module.scss';

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleOnClick = () => setCollapsed((collapsed) => !collapsed);

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button theme={ThemeButton.DARK} onClick={handleOnClick}>{t('переключить')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
