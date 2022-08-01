// Coloque aqui suas actions
// import fetchApi from '../../service/fetchApi';
import { USER_LOGIN, USER_EXPENSE, REQUEST_VALUES } from './actionTypes';

export const userLogin = (payload) => ({ type: USER_LOGIN, payload });

// Req3 Puxa os valores da chave currencies através de uma Requisisão à API
export const requestValues = (payload) => ({ type: REQUEST_VALUES, payload });

// Req4 Faz ums requisição à API e busca a cotação no momento que o botão de Adicionar despesa for apertado.
export const userExpense = (payload) => ({
  type: USER_EXPENSE,
  payload,
  price: Number(payload.value) * Number(payload.exchangeRates[payload.currency].ask),
});

// export const requestValuesApi = () => (dispatch) => fetchApi()
//   .then((data) => dispatch(requestValues(Object.keys(data)
//     .filter((value) => value !== 'USDT'))));

// export const requestApi = () => () => fetchApi()
//   .then((data) => data);

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
