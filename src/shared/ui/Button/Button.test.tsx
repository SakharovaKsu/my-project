import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from './Button';

// todo не настроено до конца, ошибки от TS

describe('Button', () => {
  const { t } = useTranslation();
  test('Adding text for a button', () => {
    render(<Button>{t('обновить страницу')}</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Adding a class to a button', () => {
    render(<Button theme={ButtonTheme.DARK}>{t('обновить страницу')}</Button>);
    expect(screen.getByText('TEST')).toHaveClass('dark');
    screen.debug();
  });
});
