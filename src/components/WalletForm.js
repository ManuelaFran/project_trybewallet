import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApi, requestValuesApi } from '../redux/actions';

const alimentacao = 'Alimentação';
class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setChange = this.setChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setChange = this.setChange.bind(this);
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  async onClick(target) {
    console.log(target.value);
    const { expenseDispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const objeto = { id, value, description, currency, method, tag };
    expenseDispatch(objeto);
    this.setState({ id: id + 1 });
    // const addRates = await ratesDispatch();
    // const result = { ...states, id, addRates };
    this.setChange();
  }

  setChange() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    console.log(name);
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { valueCurrencies } = this.props;
    return (
      <div>
        <form>
          <h3>WalletForm</h3>
          <input
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleInputChange }
            placeholder="Valor"
          />

          <input
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleInputChange }
            placeholder="Descrição"
          />
          {/* <label htmlFor="currency">
            Moeda: */}
          <select
            // id="currency"
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleInputChange }
          >
            {valueCurrencies.map((element, index) => (
              <option
                key={ index }
                value={ element }
              >
                { element }
              </option>
            ))}
          </select>
          {/* </label> */}
          <label htmlFor="payment-method">
            Método de pagamento:
            <select
              id="payment-method"
              name="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleInputChange }
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
              name="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleInputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ ({ target }) => this.onClick(target) }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valueCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (state) => dispatch(requestApi(state)),
  currenciesDispatch: () => dispatch(requestValuesApi()),
});

WalletForm.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
  valueCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currenciesDispatch: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
