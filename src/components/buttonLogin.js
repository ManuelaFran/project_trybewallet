import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonLogin extends React.Component {
  render() {
    const { disabled, emailDispatch, email } = this.props;
    return (
      <div className="btn-entrar">
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => emailDispatch(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

ButtonLogin.propTypes = {
  disabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  emailDispatch: PropTypes.func.isRequired,
};

export default ButtonLogin;
