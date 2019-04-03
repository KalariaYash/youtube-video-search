import React from 'react';
import TextField from '@material-ui/core/TextField';
import {passwordRegex} from '../config/Constants';


class PasswordField extends React.Component {
   state = {
       value:''
   }

   forBlur = (message) => {
      this.setState({errormessage:message})
   }
    
   focusForEveryInputElement = (event) => {
    this.setState({errormessage:''});
    if(event.target.classList.contains("invalid")) {
        this.setState({errormessage:''});
    }
   }

   validationForPassword = () => {
    if(!(passwordRegex.test(this.state.value))) {
       this.forBlur("Password must be atleast of length 8");
    }
    else{
        this.props.methodToUpdateStateValue(this.props.nameOfStateProperty, this.state.value);
    }
   }

    onInputForPassword = (event) => {
        this.setState({value:event.target.value});
        if(!(passwordRegex.test(this.state.value))){
            event.target.classList.add('invalid');
        }
        else{
            event.target.classList.remove('invalid');
        }
    }

    render() {
        return (
            <React.Fragment>
            <TextField
               label={this.props.label}
               type="password"
               value={this.state.value}
               autoComplete="current-password"
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               onChange={this.onInputForPassword}
               onBlur={this.validationForPassword}
               onFocus={this.focusForEveryInputElement}
            />
               <div style={{color:'red'}}> {this.state.errormessage} </div>
            </React.Fragment>
        );
    }
}

export default PasswordField;