import React from 'react';
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import Email from '../components/Email';
import SimpleButton from '../components/SimpleButton';

class Signup extends React.Component {

  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: ''
  };

  updatUserInfo = (varName, value) => {
    this.setState({ [varName]: value });
  }

  handleOnSubmit = () => {
    const {firstName, middleName, lastName, email, password} = this.state;
    if (firstName == '' || middleName == '' || lastName == '' || email == '' || password == '') {
      alert("Please fill the data correctly");
    }
    else {
      localStorage.setItem('userData', JSON.stringify(this.state));
    }
  }

  render() {
    return (
      <div style={{ width: '30%', position: 'absolute', top: '10%', left: '35%', zIndex: '5', backgroundColor: '(23,25,25)' }}>
        <h1>Sign Up</h1>
        <form noValidate autoComplete="off" >
          <InputTextField label='First Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='firstName' />
          <InputTextField label='Middle Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='middleName' />
          <InputTextField label='Last Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='lastName' />
          <Email label='Email' updatUserInfo={this.updatUserInfo} nameOfStateProperty='email' />
          <PasswordField label='Password' updatUserInfo={this.updatUserInfo} nameOfStateProperty='password' />
          <SimpleButton label='Sign Up' onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

export default Signup;