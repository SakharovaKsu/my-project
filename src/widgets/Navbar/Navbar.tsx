import React, {FC, useCallback, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames/classNames';
import {Button, ButtonTheme, Modal} from '@shared/ui';

import cls from './Navbar.module.scss';

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [iaAuthModal, setIaAuthModal] = useState(false);

  const onToggleModal = useCallback(() => setIaAuthModal(!iaAuthModal), [iaAuthModal]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal}>{t('войти')}</Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={iaAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Modal>
    </div>
  );
};
