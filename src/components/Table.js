import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fields } from './TableField';
import { deleteExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenseState, deleteDispatch } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {fields.map((index, el) => <th key={ el }>{ index }</th>)}
          </tr>
        </thead>
        <tbody>
          {expenseState.map((element) => (
            <tr key={ element.id }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{Number(element.value).toFixed(2)}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
              <td>
                {Number(element.value * element.exchangeRates[element.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="submit"
                  value={ element }
                  onClick={
                    () => deleteDispatch(expenseState
                      .filter((del) => del.id !== element.id))
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (payload) => dispatch(deleteExpenses(payload)),
});

Table.defaultProps = { expenseState: [] };
Table.propTypes = { expenseState: PropTypes.arrayOf(PropTypes.shape(
  {
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  },
)),
deleteDispatch: PropTypes.func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Table);
