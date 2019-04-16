import React from 'react';
import InputField from '../components/InputField';
import SimpleButton from '../components/SimpleButton';
import { setUserData } from '../config/HelperFunctions';

class Signup extends React.Component {

  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    watchLater: [],
    history: [],
    keepMeLoggedInFlag: false
  };

  updatUserInfo = (varName, value) => {
    this.setState({ [varName]: value });
  }

  handleOnSubmit = () => {
    const { firstName, middleName, lastName, email, password } = this.state;
    if (firstName == '' || middleName == '' || lastName == '' || email == '' || password == '') {
      alert("Please fill the data correctly");
    }
    else {
      setUserData(this.state);
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div style={{ width: '30%', position: 'absolute', top: '10%', left: '35%', zIndex: '5', backgroundColor: '(23,25,25)' }}>
        <h1>Sign Up</h1>
        <form noValidate autoComplete="off" >
          <InputField label='First Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='firstName' type='text' />
          <InputField label='Middle Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='middleName' type='text' />
          <InputField label='Last Name' updatUserInfo={this.updatUserInfo} nameOfStateProperty='lastName' type='text' />
          <InputField label='Email' updatUserInfo={this.updatUserInfo} nameOfStateProperty='email' type='email' />
          <InputField label='Password' updatUserInfo={this.updatUserInfo} nameOfStateProperty='password' type='password' />
          <input type="checkbox" style={{ margin: '16px 0px 8px 0px' }} onClick={() => this.setState({ keepMeLoggedInFlag: !this.state.keepMeLoggedInFlag })} /> Keep me logged in<br />
          <SimpleButton label='Sign Up' onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

export default Signup;