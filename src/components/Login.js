import React from 'react';
import TextField from '@material-ui/core/TextField';
import SimpleButton from './SimpleButton';

class Login extends React.Component {
   state = { valueOfEmail:'',
             valueOfPassword:'',
             keepMeLoggedInFlag:false
          }
    checkCredentials = () => {
        let temp = JSON.parse(localStorage.getItem('userData'));
        if (temp['valueOfEmail'] == this.state.valueOfEmail && temp['valueOfPassword'] == this.state.valueOfPassword) {
            console.log(this.state);
            alert('login done');
        }
        else {
            alert('Please enter valid email id and password');
        }
    }
    render() {
        return (
            <form noValidate autoComplete="off"  >
            <TextField
               label='Email ID'
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               value={this.state.value}
               onChange={(event) => this.setState({valueOfEmail:event.target.value})}
            />
               
            <TextField
               label="Password"
               type="password"
               autoComplete="current-password"
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               value={this.state.value}
               onChange={(event) => this.setState({valueOfPassword:event.target.value})}
            />
            <input type="checkbox" style={{margin:'16px 0px 8px 0px'}} onClick={() => this.setState({keepMeLoggedInFlag: !this.state.keepMeLoggedInFlag})} /> Keep me logged in<br/>
            <SimpleButton label='Login' onClick={this.checkCredentials}/>
            </form>
        );
    }
}

export default Login;