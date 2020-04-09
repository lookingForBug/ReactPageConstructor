import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './components/TestPage/TestPage';

const App = (props) => (
  <React.Fragment>
    <TestPage />
  </React.Fragment>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
