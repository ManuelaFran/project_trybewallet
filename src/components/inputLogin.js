import React from 'react';
import PropTypes from 'prop-types';

class InputLogin extends React.Component {
  render() {
    const { email, password, handleInputChange } = this.props;
    return (
      <div className="Login">
        <h3 className="text-center">Login</h3>
        <input
          type="email"
          name="email"
          onChange={ handleInputChange }
          placeholder="Email"
          data-testid="email-input"
          value={ email }
        />
        <input
          type="password"
          name="password"
          onChange={ handleInputChange }
          placeholder="Senha"
          data-testid="password-input"
          value={ password }
        />
      </div>
    );
  }
}

InputLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputLogin;
