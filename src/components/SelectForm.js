import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectForm extends Component {
  render() {
    const { valueCurrencies, paymentMethod, currency, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currencies"
            value={ currency }
            onChange={ onChange }
            data-testid="currency-input"
          >
            {valueCurrencies.map((value, index) => (
              <option
                key={ index }
                value={ value }
                data-testid={ value }
              >
                { value }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select
            id="payment-method"
            name="payment-methods"
            value={ paymentMethod }
            onChange={ onChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categories">
          Categoria:
          <select
            id="categories"
            name="category"
            value={ tag }
            onChange={ onChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valueCurrencies: state.wallet.currencies,
});

SelectForm.propTypes = {
  valueCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  paymentMethod: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(SelectForm);
