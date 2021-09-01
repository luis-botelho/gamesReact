import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Games from './components/Games'



ReactDOM.render(
  <React.StrictMode>


    <App />
    <Games />
    <footer><span>Todos direitos reservados:<a href="https://github.com/luis-botelho" target="_blank">Luis Botelho</a></span></footer>
  </React.StrictMode>,
  document.getElementById('root')
);


