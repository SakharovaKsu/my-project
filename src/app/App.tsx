import React, { Suspense } from 'react';
import { useTheme, AppRouter } from '@app/provider';
import { Navbar, Sidebar } from '@/widgets';
import { classNames } from '@shared/lib';

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
