import React from 'react';
import InputField from '../components/InputField';
import SimpleButton from '../components/SimpleButton';
import { connect } from 'react-redux';
import { signUp } from '../actions/actionCreaters';
import { label } from '../config/Constants';
import { notificationError, notificationSuccess, notificationWarn } from '../components/toastMessage';

const userData = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  password: '',
  watchLater: [],
  history: [],
  keepMeLoggedInFlag: true,
};

class Signup extends React.Component {
  componentWillMount() {
    if (this.props.userData != null ? this.props.userData.keepMeLoggedInFlag == true : false) {
      this.props.history.push('/home');
    }
  }

  updatUserInfo = (varName, value) => {
    userData[varName] = value;
  }

  handleOnSubmit = () => {
    const { firstName, middleName, lastName, email, password } = userData;
    if (firstName == '' || middleName == '' || lastName == '' || email == '' || password == '') {
      notificationError(label.signupValidationMsg);
    }
    else {
      notificationError(label.signUpSuccess);
      this.props.signUp(userData);
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
          <SimpleButton label='Sign Up' onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => { return { userData: state.userData }; };

export default connect(mapStateToProps, { signUp })(Signup);
