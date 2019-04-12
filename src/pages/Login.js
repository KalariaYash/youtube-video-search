import React from 'react';
import SimpleButton from '../components/SimpleButton';
import InputField from '../components/InputField';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    keepMeLoggedInFlag: false
  }

  updatUserInfo = (varName, value) => {
    this.setState({ [varName]: value });
  }

  updateFlag = () => {
    this.setState({ keepMeLoggedInFlag: !this.state.keepMeLoggedInFlag });
  }
  checkCredentials = () => {
    let temp = JSON.parse(localStorage.getItem('userData'));
    if (temp['email'] == this.state.email && temp['password'] == this.state.password) {
      localStorage.setItem('userData', JSON.stringify(JSON.parse(localStorage.getItem('userData')).keepMeLoggedInFlag = this.state.keepMeLoggedInFlag));
      this.props.history.push('/home');

    }
    else {
      alert('Please enter valid email id and password');
    }
  }

  render() {
    const temp = JSON.parse(localStorage.getItem('userData'));

    if (temp.keepMeLoggedInFlag == true) {
      this.props.history.push('/home');
    }

    return (
      <div style={{ width: '30%', position: 'absolute', top: '10%', left: '35%', zIndex: '5', backgroundColor: '(23,25,25)' }}>
        <h1>Login</h1>
        <form noValidate autoComplete="off"  >
          <InputField label='Email' updatUserInfo={this.updatUserInfo} nameOfStateProperty='email' type='email' />
          <InputField label='Password' updatUserInfo={this.updatUserInfo} nameOfStateProperty='password' type='password' />
          <input type="checkbox" style={{ margin: '16px 0px 8px 0px' }} onClick={this.updateFlag} /> Keep me logged in<br />
          <SimpleButton label='Login' onClick={this.checkCredentials} />
        </form>
        <a href='/signup'>New to our Website? Sign Up!</a>
      </div>
    );

  }
}
export default Login;