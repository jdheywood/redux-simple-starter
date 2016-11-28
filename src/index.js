import React from 'react';
import ReactDOM from 'react-dom';

// First react component
const App = () => {
  return <div>Hello world</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));