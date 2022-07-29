import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      walletCurrency: 'BRL',
    };
  }

  render() {
    const { walletCurrency } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${userEmail}`}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">{ walletCurrency }</span>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
