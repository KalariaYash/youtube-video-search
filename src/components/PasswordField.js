import React from 'react';
import TextField from '@material-ui/core/TextField';
import { passwordRegex } from '../config/Constants';

class PasswordField extends React.Component {
  state = {
    value: '',
    errorMessage:''
  }

  validationForPassword = () => {
    const {value} = this.state;
    if (!(passwordRegex.test(this.state.value))) {
      this.setState({ errorMessage: "Password must be atleast of length 8" });
    }
    else {
      this.props.updatUserInfo(this.props.nameOfStateProperty, this.state.value);
    }
  }

  onInputChangeForPassword = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const {errorMessage,value} = this.state;
    return (
      <React.Fragment>
        <TextField
          label={this.props.label}
          type="password"
          value={value}
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={(event) => { this.setState({ value: event.target.value }) }}
          onBlur={this.validationForPassword}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {errorMessage.length > 0 && <div style={{ color: 'red' }}> {errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default PasswordField;