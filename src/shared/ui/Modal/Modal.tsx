import React, {FC, ReactNode, useRef, useState} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import {Button} from '@shared/ui';
import {Svg} from '@shared/assets';
import cls from './Modal.module.scss';

const ANIMATION_DURATION = 300;

type Props = {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal:FC<Props> = ({className = '', children, isOpen, onClose}) => {

  const timerReef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isClosed, setIsClosed] = useState<boolean>(false)

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen && !isClosed,
    [cls.opened]: isOpen,
  }

  const handleClose = () => {
    if (onClose) {
      setIsClosed(true);

      timerReef.current = setTimeout(() => {
        onClose();
        setIsClosed(false);
      }, ANIMATION_DURATION)
    }
  }

  return (
    <div className={classNames(cls.modal, mods, [className])}>
      <div className={cls.overlay}>
        <div className={classNames(cls.content, {[cls.isClosing]: isClosed}, [className])}>
          <Button className={cls.close} onClick={handleClose}>
            <Svg.Icon.Close/>
          </Button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
