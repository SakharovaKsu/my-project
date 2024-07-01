import React, { FC } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import { Loader } from '@shared/ui/Loader/Loader';

import cls from './PageLoader.module.scss';

interface Props {
  className?: string
}

export const PageLoader: FC<Props> = ({ className = '' }) => (
  <div className={classNames(cls.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
