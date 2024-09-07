import React, {Suspense, useState} from 'react';
import { useTheme, AppRouter } from '@app/provider';
import { Navbar, Sidebar } from '@/widgets';
import { Modal } from '@shared/ui';
import { classNames } from '@shared/lib';

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Modal>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
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
