import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  render() {
    const world ="world";
    return (
       <div className="App">
         <h1>Hello, {world} Padawans!</h1>
       </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));