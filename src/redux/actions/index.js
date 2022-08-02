// Coloque aqui suas actions
import { USER_LOGIN, USER_EXPENSE, REQUEST_VALUES, DELETE_EXPENSES } from './actionTypes';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

// Req3 Puxa os valores da chave currencies através de uma Requisisão à API
export const requestValues = (payload) => ({
  type: REQUEST_VALUES,
  payload,
});

// Req4 Faz uma requisição à API e busca a cotação no momento que o botão de Adicionar despesa for apertado.
export const userExpense = (payload) => ({
  type: USER_EXPENSE,
  payload,
  price: Number(payload.value) * Number(payload.exchangeRates[payload.currency].ask),
});

export const deleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  delete: payload,
  price: payload.reduce((acc, cur) => Number(acc) + (Number(cur.value) * Number(cur
    .exchangeRates[cur.currency].ask)), 0),
});

export function requestValuesApi() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(requestValues(Object.keys(data).filter((i) => i !== 'USDT')));
  };
}

export function requestApi(payload) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(userExpense({ ...payload, exchangeRates: data }));
  };
}
