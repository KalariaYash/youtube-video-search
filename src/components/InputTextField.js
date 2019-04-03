import React from 'react';
import TextField from '@material-ui/core/TextField';
import { nameRegex } from '../config/Constants';

class InputTextField extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }

  validationForName = () => {
    if (!(nameRegex.test(this.state.value))) {
      if (!(this.state.value == '')) {
        this.setState({ errorMessage: "Please only enter alphabets" });
      }
      else {
        this.setState({ errorMessage: "Field must not be empty" });
      }
    }
    else {
      this.props.updatUserInfo(this.props.nameOfStateProperty, this.state.value);
    }
  }

  render() {
    const {errorMessage,value} = this.state;
    return (
      <React.Fragment>
        <TextField
          label={this.props.label}
          value={value}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={(event) => this.setState({ value: event.target.value })}
          onBlur={this.validationForName}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {errorMessage.length > 0 && <div style={{ color: 'red' }}> {errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default InputTextField;