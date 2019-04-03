import React from 'react';
import TextField from '@material-ui/core/TextField';
import {emailRegex} from '../config/Constants';

class Email extends React.Component {
   state = {
       value:''
   }

   forBlur = (message) => {
      this.setState({errormessage:message})
   }
    
   focusForEveryInputElement = (event) => {
    this.setState({errormessage:''});
    if(event.target.classList.contains("invalid")){
        this.setState({errormessage:''});
    }
   }
   validationForEmail = () => {
    
    if(!emailRegex.test(this.state.value)){
        this.forBlur("Please enter valid email address")
    }
    else{
        this.props.methodToUpdateStateValue(this.props.nameOfStateProperty, this.state.value);
    }
   }

   onInputForEmail = (event) => {
    this.setState({value:event.target.value});
    if(!emailRegex.test(this.state.value)){
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
               value={this.state.value}
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               onChange={this.onInputForEmail}
               onBlur={this.validationForEmail}
               onFocus={this.focusForEveryInputElement}
               />
               <div style={{color:'red'}}> {this.state.errormessage} </div>
            </React.Fragment>
        );
    }
}

export default Email;