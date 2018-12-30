import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'))
