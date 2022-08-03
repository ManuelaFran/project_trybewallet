import React from 'react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../../components/WalletForm';
import Wallet from '../../pages/Wallet';
import mockData from './mockData';
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
  it('testa se o campo "total" muda depois que a despesa for adicionada', () => {
    const { getByTestId, getByRole } = renderWithRouterAndRedux(<WalletForm />);
    const value = getByTestId('value-input');
    const description = getByTestId('description-input');
    userEvent.type(value, '3000');
    expect(value.value).toBe('3000');
    userEvent.type(description, 'computador');
    expect(description.value).toBe('computador');
    const button = getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(button);
    expect(value.value).toBe('');
    expect(description.value).toBe('');
  });

  it('testa WalletForm e Table', async () => {
    const { getByTestId, getByRole, findByText, findAllByRole, queryByRole } = renderWithRouterAndRedux(<Wallet />, {initialState: {wallet: { currencies: Object.keys(mockData), expenses: []}}});
    
    const valueInput = getByTestId('value-input');
    const descriptionInput = getByTestId('description-input');
    const currencyInput = getByTestId('currency-input');
    const methodInput = getByTestId('method-input');
    const tagInput = getByTestId('tag-input');
    const addBtn = getByRole('button', {name: 'Adicionar despesa'});
    
    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    
    const tableHeaders = getByRole('table').children[0];
    expect(tableHeaders).toHaveTextContent('DescriçãoTagMétodo de pagamentoValorMoedaCâmbio utilizadoValor convertidoMoeda de conversãoEditar/Excluir');
    
    userEvent.type(valueInput, 1);
    userEvent.type(descriptionInput, 'teste1');
    userEvent.click(addBtn);
    
    expect(valueInput).toHaveTextContent('');
    expect(descriptionInput).toHaveTextContent('');
    
    userEvent.type(valueInput, 3);
    userEvent.type(descriptionInput, 'teste3');
    userEvent.click(addBtn);
    const secondDescription = await findByText('teste3');
    expect(secondDescription).toBeInTheDocument();
    
    const deleteExpBtns = await findAllByRole('button', {name: 'Excluir'});
    userEvent.click(deleteExpBtns[0]);
    const firstExpense = queryByRole('cell', { name: /2\.00/i })
    expect(firstExpense).not.toBeInTheDocument();
    });
});
