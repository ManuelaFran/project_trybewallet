import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestValuesApi, requestApi } from '../redux/actions';

class ButtonForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  async onClick() {
    const { states, dispatch, ratesDispatch, reset } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const addRates = await ratesDispatch();
    const result = { ...states, id, addRates };
    dispatch(result);
    reset();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.onClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

ButtonForm.propTypes = {
  states: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    coin: PropTypes.string,
    payment: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
  ratesDispatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(requestValuesApi()),
  ratesDispatch: () => dispatch(requestApi()),
});

export default connect(null, mapDispatchToProps)(ButtonForm);
