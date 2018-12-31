import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme/sizes'

class Main extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('root'))
