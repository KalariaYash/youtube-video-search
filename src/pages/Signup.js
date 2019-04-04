import React from 'react';
import InputField from '../components/InputField';
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
          <InputField label='First Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='firstName' type = 'text' />
          <InputField label='Middle Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='middleName' type = 'text' />
          <InputField label='Last Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='lastName' type = 'text' />
          <InputField label='Email' updatUserInfo={this.updatUserInfo} nameOfStateProperty='email' type = 'email' />
          <InputField label='Password' updatUserInfo={this.updatUserInfo} nameOfStateProperty='password' type = 'password' />
          <SimpleButton label='Sign Up' onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

export default Signup;