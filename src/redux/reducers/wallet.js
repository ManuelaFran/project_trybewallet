// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_EXPENSE, REQUEST_VALUES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_VALUES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
