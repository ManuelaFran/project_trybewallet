import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import totalExpense from '../tests/helpers/totalExpense';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      walletCurrency: 'BRL',
    };
  }

  render() {
    const { walletCurrency } = this.state;
    const { userEmail, despesaTotal } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ `Email: ${userEmail}` }</span>
          {' '}
          <span data-testid="total-field">
            { `Despesa total: R$${despesaTotal}` }
          </span>
          {' '}
          <span data-testid="header-currency-field">{ walletCurrency }</span>
          {' '}
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  despesaTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  despesaTotal: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
