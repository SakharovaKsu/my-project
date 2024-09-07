import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode
  element?: HTMLElement
}

export const Portal:FC<Props> = ({children, element = document.body}) => {
  return createPortal(children, element)
}
