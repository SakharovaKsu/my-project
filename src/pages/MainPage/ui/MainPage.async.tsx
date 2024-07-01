import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ ОБУЧЕНИЯ!
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
