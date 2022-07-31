import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

const [EMAIL_INPUT, PASSWORD_INPUT] = ['email-input', 'password-input'];

describe('Testando os componentes App e Login.', () => {
  it('testa se tem o pathname igual a /', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });

  it('testa se existe o placeholder Email', () => {
    const { getByPlaceholderText } = renderWithRouterAndRedux(<App />);
    const email = getByPlaceholderText(/email/i);
    expect(email).toBeDefined();
  });

  it('testa se existe o data-testid do Email e Senha.', () => {
    const { getByTestId } = renderWithRouterAndRedux(<App />);
    const [email, password] = [getByTestId(EMAIL_INPUT), getByTestId(PASSWORD_INPUT)];
    [email, password].forEach((i) => expect(i).toBeDefined());
  });

  it('testa se o botão permite mudar a rota ao clicar', () => {
    const { getByTestId, getByRole, history } = renderWithRouterAndRedux(<App />);
    const [email, password] = [getByTestId(EMAIL_INPUT), getByTestId(PASSWORD_INPUT)];
    const button = getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'manuelaalves26@gmail.com');
    userEvent.type(password, '123456');
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});