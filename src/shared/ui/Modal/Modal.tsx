import React, {FC, ReactNode} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import {Button} from '@shared/ui';
import {Svg} from '@shared/assets';
import cls from './Modal.module.scss';

type Props = {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal:FC<Props> = ({className = '', children, isOpen, onClose}) => {

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className={classNames(cls.modal, mods, [className])}>
      <div className={cls.overlay}>
        <div className={cls.content}>
          <Button className={cls.close} onClick={handleClose}>
            <Svg.Icon.Close/>
          </Button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
