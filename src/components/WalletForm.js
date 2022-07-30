import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userExpense } from '../redux/actions';
import InputForm from './inputForm';
import SelectForm from './SelectForm';
import ButtonForm from './ButtonForm';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setChange = this.setChange.bind(this);
  }

  setChange() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleInputChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  render() {
    const { value, description, currency, paymentMethod, tag } = this.state;
    const { expenseDispatch } = this.props;
    return (
      <form>
        <div>
          <h3>WalletForm</h3>
          <InputForm
            value={ value }
            description={ description }
            handleInputChange={ this.handleInputChange }
          />
          <SelectForm
            currency={ currency }
            paymentMethod={ paymentMethod }
            tag={ tag }
            onChange={ this.handleInputChange }
          />
        </div>

        <ButtonForm
          states={ this.state }
          dispatch={ expenseDispatch }
          reset={ this.setChange }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (state) => dispatch(userExpense(state)),
});

WalletForm.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
