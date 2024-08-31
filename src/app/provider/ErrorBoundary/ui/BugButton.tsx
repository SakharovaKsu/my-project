import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Button, ButtonTheme} from '@shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<boolean>(false);

  const onTrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button theme={ButtonTheme.DARK} onClick={onTrow}>
      {t('имитация ошибки')}
    </Button>
  );
};
