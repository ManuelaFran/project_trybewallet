// Coloque aqui suas actions
import fetchApi from '../../service/fetchApi';
import { USER_LOGIN, USER_EXPENSE, REQUEST_VALUES } from './actionTypes';

export const userLogin = (payload) => ({ type: USER_LOGIN, payload });

export const userExpense = (payload) => ({ type: USER_EXPENSE, payload });

export const requestValues = (payload) => ({ type: REQUEST_VALUES, payload });

export const requestValuesApi = () => (dispatch) => fetchApi()
  .then((data) => dispatch(requestValues(Object.keys(data)
    .filter((value) => value !== 'USDT'))));

export const requestApi = () => () => fetchApi()
  .then((data) => data);
