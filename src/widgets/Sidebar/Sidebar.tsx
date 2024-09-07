import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher, ThemeSwitcher, Button, ButtonSize, ButtonTheme, AppLink } from '@shared/ui';
import { Svg } from '@shared/assets';
import { RouterPath } from '@shared/config/routerConfig/routerConfig';
import { classNames } from '@shared/lib';

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
      <div className={cls.links}>
        <AppLink className={cls.link} to={RouterPath.main}>
          <Svg.Icon.Home/>
          {!collapsed &&<span>{t('главная')}</span>}
        </AppLink>
        <AppLink className={cls.link} to={RouterPath.about}>
          <Svg.Icon.Website/>
          {!collapsed && <span>{t('о сайте')}</span>}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <Button theme={ButtonTheme.DARK}
          size={ButtonSize.S}
          onClick={handleOnClick}>
          {collapsed ? '>' : '<'}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
