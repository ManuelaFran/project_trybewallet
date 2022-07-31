import React from 'react';
import WalletForm from '../../components/WalletForm';
import { renderWithRouterAndRedux } from './renderWith';
import dataTestId from './dataTestId';

describe('Testando o componente WalletForm', () => {
  it('testa se tem o pathname igual a /', () => {
    const { history } = renderWithRouterAndRedux(<WalletForm />);
    expect(history.location.pathname).toBe('/');
  });

  it('testa todos os data-testid dos elementos', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
    dataTestId.forEach((i) => expect(getByTestId(i)).toBeDefined());
  });

  it('testa se existe o botão "Adicionar Despesa"', () => {
    const { getByRole } = renderWithRouterAndRedux(<WalletForm />);
    const button = getByRole('button', { name: /adicionar despesa/i });
    expect(button).toBeDefined();
  });
});
