import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginOrSignup from '../pages/LoginOrSignup';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
               <CssBaseline/>
                 <LoginOrSignup/>
            </React.Fragment>
        );
    }
}

export default App;