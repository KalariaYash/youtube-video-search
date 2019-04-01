import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputTextField from './InputTextField';
import { red } from '@material-ui/core/colors';

class Login extends React.Component {
   state = { value:''}

    onInputChange = (event) => {
        this.setState({value:event.target.value})
    }
    render() {
        return (
            <form noValidate autoComplete="off"  >
               <InputTextField label = 'Login ID' buttonName='login' id='loginId' />
               
               <TextField
               id="outlined-password-input"
               label="Password"
               type="password"
               autoComplete="current-password"
               margin="normal"
               variant="outlined"
               style={{width:'100%'}}
               />
               <Button id="login" variant="outlined" color="primary" size="large" style={{margin:'16px 0px'}} className="Login">
                Login
               </Button>
            </form>
        );
    }
}

export default Login;