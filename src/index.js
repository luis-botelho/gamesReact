import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Games from './components/Games'
import Header from './components/Header'



ReactDOM.render(
  <React.StrictMode>

    <Header />
    <Games />
    <footer><span>Todos direitos reservados:<a href="https://github.com/luis-botelho" target="_blank">Luis Botelho</a></span></footer>
  </React.StrictMode>,
  document.getElementById('root')
);


