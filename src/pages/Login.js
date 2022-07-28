import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonLogin from '../components/buttonLogin';
import InputLogin from '../components/inputLogin';
import userLogin from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value },
      this.buttonValidation);
  }

  buttonValidation() {
    const { email, password } = this.state;
    const SIX = 6;
    const validPassword = password.length >= SIX;
    const validEmail = email.includes('@') && email.includes('.com');

    if (validPassword && validEmail) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { emailDispatch } = this.props;
    return (
      <div>
        <form>
          <InputLogin
            email={ email }
            password={ password }
            handleInputChange={ this.handleInputChange }
          />
          <ButtonLogin
            email={ email }
            disabled={ disabled }
            emailDispatch={ emailDispatch }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
