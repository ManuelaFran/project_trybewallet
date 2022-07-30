import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { value, description, handleInputChange } = this.props;
    return (
      <div>
        <input
          type="number"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ handleInputChange }
        />

        <input
          type="text"
          name="description"
          value={ description }
          data-testid="description-input"
          onChange={ handleInputChange }
        />
      </div>
    );
  }
}

InputForm.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputForm;
