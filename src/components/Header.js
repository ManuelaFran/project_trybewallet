import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import totalExpense from '../tests/helpers/totalExpense';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      walletCurrency: 'BRL',
    };
  }

  render() {
    const { walletCurrency } = this.state;
    const { userEmail, expensesDispatch } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${userEmail}`}</span>
          {' '}
          <span data-testid="total-field">
            { `Despesa total: R$${Number(totalExpense(expensesDispatch)).toFixed(2)}` }
          </span>
          {' '}
          <span data-testid="header-currency-field">{ walletCurrency }</span>
          {' '}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesDispatch: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesDispatch: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
