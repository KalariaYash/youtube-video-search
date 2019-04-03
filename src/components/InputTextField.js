import React from 'react';
import TextField from '@material-ui/core/TextField';
import {nameRegex} from '../config/Constants';


class InputTextField extends React.Component {
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

    validationForName = () => {
     if(!(nameRegex.test(this.state.value))){
       if(!(this.state.value == '')){
            this.forBlur("Please only enter alphabets");
       }
       else{
            this.forBlur("Field must not be empty");
       }
     }
     else{
         this.props.methodToUpdateStateValue(this.props.nameOfStateProperty, this.state.value);
     }
    }

    onInputChange = (event) => {
        this.setState({value:event.target.value});
        if(!(nameRegex.test(this.state.value))){
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
               onChange={this.onInputChange}
               onBlur={this.validationForName}
               onFocus={this.focusForEveryInputElement}
               />
               <div style={{color:'red'}}> {this.state.errormessage} </div>
            </React.Fragment>
        );
    }
}

export default InputTextField;