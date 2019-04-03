import React from 'react';
import TextField from '@material-ui/core/TextField';
import { emailRegex } from '../config/Constants';

class Email extends React.Component {
  state = {
    value: '',
    errorMessage:''
  }
  validationForEmail = () => {
    const {value} = this.state;
    if (!emailRegex.test(value)) {
      this.setState({ errorMessage: "Please enter valid email address" });
    }
    else {
      this.props.updatUserInfo(this.props.nameOfStateProperty, value);
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
          onBlur={this.validationForEmail}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {errorMessage.length > 0 && <div style={{ color: 'red' }}> {errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default Email;