import React from 'react';
import SimpleButton from '../components/SimpleButton';
import InputField from '../components/InputField';
import { connect } from 'react-redux';
import { signUp } from '../actions/actionCreaters';
import { label } from '../config/Constants';
import { notificationError, notificationSuccess, notificationWarn } from '../components/toastMessage';

const temp = {
  email: '',
  password: '',
  keepMeLoggedInFlag: false
}

class Login extends React.Component {
  updatUserInfo = (varName, value) => {
    temp[varName] = value;
  }

  checkCredentials = () => {
    let { userData } = this.props;
    if (userData['email'] == temp.email && userData['password'] == temp.password) {
      userData.keepMeLoggedInFlag = true;
      notificationError(label.loginSuccessful);
      this.props.signUp(userData);
      this.props.history.push('/home');
    }
    else {
      notificationError(label.loginValidationMsg);
    }
  }

  render() {
    const { userData } = this.props;

    if (userData != null && userData.keepMeLoggedInFlag === true) {
      this.props.history.push('/home');
    }

    return (
      <div style={{ width: '30%', position: 'absolute', top: '10%', left: '35%', zIndex: '5', backgroundColor: '(23,25,25)' }}>
        <h1>Login</h1>
        <form noValidate autoComplete="off"  >
          <InputField label='Email' updatUserInfo={this.updatUserInfo} nameOfStateProperty='email' type='email' />
          <InputField label='Password' updatUserInfo={this.updatUserInfo} nameOfStateProperty='password' type='password' />
          <br />
          <SimpleButton label='Login' onClick={this.checkCredentials} />
        </form>
        <a href='/signup'>New to our Website? Sign Up!</a>
      </div>
    );
  }
}

const mapStateToProps = state => { return { userData: state.userData }; };

export default connect(mapStateToProps, { signUp })(Login);