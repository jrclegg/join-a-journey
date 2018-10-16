import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';

class Main extends React.Component {
  render() {
    return (
      <Header/>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
