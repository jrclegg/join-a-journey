import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
      <Main />
  </BrowserRouter>
), document.getElementById('root'))
