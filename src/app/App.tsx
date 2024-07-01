import React, { Suspense } from 'react';
import {useTheme} from './provider/themeProvider';
import {classNames} from '@shared/lib/classNames/classNames';
import {Navbar} from '@widgets/Navbar';
import {Sidebar} from '@widgets/Sidebar';
import {AppRouter} from './provider/router';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
