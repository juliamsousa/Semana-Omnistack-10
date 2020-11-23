import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// renderiza, ou seja, coloca nossos elementos em tela
// coloca o elemento App dentro do elemento de id 'root'
// um componente no react é uma funcao que retorna html
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

