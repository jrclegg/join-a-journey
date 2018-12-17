import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <Header/>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'))
