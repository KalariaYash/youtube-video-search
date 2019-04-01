import React from 'react';
import TextField from '@material-ui/core/TextField';

const nameRegex = /^[a-z]+$/i ;

class InputTextField extends React.Component {
   state = {
       value:''
   }

   forBlur = (message) => {
      this.setState({errormessage:message})
   }
    
   focusForEveryInputElement = (event) => {
    if(event.target.classList.contains("invalid")){
        this.setState({errormessage:''});
    }
   }

    validationForName = () => {
     if(!(nameRegex.test(this.state.value))){
       if(!this.state.value){
            this.forBlur("Please only enter alphabets");
       }
       else{
            this.forBlur("Field must not be empty");
       }
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
               id={this.props.id}
               label={this.props.label}
               value={this.state.value}
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               onChange={this.onInputChange}
               onBlur={this.validationForName}
               onFocus={this.focusForEveryInputElement}
               
               />
               <div id='errorloginId' style={{color:'red'}}> {this.state.errormessage} </div>
            </React.Fragment>
        );
    }
}

export default InputTextField;