import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFounPage';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import React from 'react';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_PAGE = 'notPage'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_PAGE]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RouterPath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RouterPath.about, element: <AboutPage /> },
  [AppRoutes.NOT_PAGE]: { path: RouterPath.notPage, element: <NotFoundPage /> },
};
