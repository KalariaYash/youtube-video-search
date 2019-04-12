import React from 'react';
import Router from './router/Router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f44336'
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>

    );
  }
}

export default App;