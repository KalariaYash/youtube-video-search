import React from 'react';
import InputTextField from './InputTextField';
import PasswordField from './PasswordField';
import Email from './Email';
import SimpleButton from './SimpleButton';

class Signup extends React.Component {

    state = {
        valueOfFirstName:'',
        valueOfMiddleName:'',
        valueOfLastName:'',
        valueOfEmail:'',
        valueOfPassword:''
      };
      
    methodToUpdateStateValue = (varName, value) => {
        this.setState({[varName]:value});
    }

   handleOnSubmit = () => {
       if (this.state.valueOfFirstName == '' || this.state.valueOfMiddleName == '' || this.state.valueOfLastName == '' || this.state.valueOfEmail == '' || this.state.valueOfPassword == '') {
           alert("Please fill the data correctly");
       }
       else {
           localStorage.setItem('userData', JSON.stringify(this.state));
       }
   }

    render() {
        return (
            <form noValidate autoComplete="off" >
               <InputTextField label = 'First Name' methodToUpdateStateValue ={this.methodToUpdateStateValue} nameOfStateProperty = 'valueOfFirstName' />
               <InputTextField label = 'Middle Name' methodToUpdateStateValue ={this.methodToUpdateStateValue} nameOfStateProperty = 'valueOfMiddleName' />
               <InputTextField label = 'Last Name' methodToUpdateStateValue ={this.methodToUpdateStateValue} nameOfStateProperty = 'valueOfLastName' />
               <Email label = 'Email' methodToUpdateStateValue ={this.methodToUpdateStateValue} nameOfStateProperty = 'valueOfEmail' />
               <PasswordField label = 'Password' methodToUpdateStateValue ={this.methodToUpdateStateValue} nameOfStateProperty = 'valueOfPassword' />
               <SimpleButton label='Sign Up' onClick={this.handleOnSubmit} />
            </form>
        );
    }
}

export default Signup;