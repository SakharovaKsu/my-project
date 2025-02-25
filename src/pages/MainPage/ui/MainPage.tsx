import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@app/provider/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('главная страница')}
    </div>
  );
};

export default MainPage;
