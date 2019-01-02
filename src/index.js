import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'
import { ThemeProvider } from 'styled-components'

class Main extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

ReactDOM.render((
  <ThemeProvider theme={theme}>
      <Main />
  </ThemeProvider>
), document.getElementById('root'))
