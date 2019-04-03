import React from 'react';
import TextField from '@material-ui/core/TextField';
import { emailRegex } from '../config/Constants';

class Email extends React.Component {
  state = {
    value: '',
    errorMessage:''
  }
  validationForEmail = () => {
    if (!emailRegex.test(this.state.value)) {
      this.setState({ errorMessage: "Please enter valid email address" });
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
          onBlur={this.validationForEmail}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {this.state.errorMessage.length > 0 && <div style={{ color: 'red' }}> {this.state.errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default Email;