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
    return (
      <React.Fragment>
        <TextField
          label={this.props.label}
          value={this.state.value}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={(event) => this.setState({ value: event.target.value })}
          onBlur={this.validationForName}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {this.state.errorMessage.length > 0 && <div style={{ color: 'red' }}> {this.state.errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default InputTextField;