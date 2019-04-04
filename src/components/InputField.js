import React from 'react';
import TextField from '@material-ui/core/TextField';
import {inputInfo} from './Validation';

class InputTextField extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }

  checkValidation = () => {
    const {type, updatUserInfo} = this.props;
    const {regex, errorMessage} = inputInfo[type];
    const{value} = this.state;

    if (!(regex.test(value))) {
      if (!(value == '')) {
        this.setState({ errorMessage: errorMessage });
      }
      else {
        this.setState({ errorMessage: "Field must not be empty" });
      }
    }
    else {
      updatUserInfo(this.props.nameOfStateProperty, value);
    }
  }

  render() {
    const {errorMessage,value} = this.state;
    return (
      <React.Fragment>
        <TextField
          label={this.props.label}
          type={this.props.type}
          value={value}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={(event) => this.setState({ value: event.target.value })}
          onBlur={this.checkValidation}
          onFocus={() => this.setState({ errorMessage: '' })}
        />
        {errorMessage.length > 0 && <div style={{ color: 'red' }}> {errorMessage} </div>}
      </React.Fragment>
    );
  }
}

export default InputTextField;