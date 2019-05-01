import React from 'react';
import Router from './router/Router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { ToastContainer } from 'react-toastify';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f44336'
    },
    secondary: green,
  },
});

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#212121',
//       dark: '#212121'
//     },
//     secondary: {
//       main: '#212121',
//       dark: '#212121'
//     }
//   },
// });

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router />
        <ToastContainer className='toast-container' style={{ backgroundColor: '(0,0,0)' }} />
      </MuiThemeProvider>

    );
  }
}

export default App;