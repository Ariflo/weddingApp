import React from 'react';
import { render } from 'react-dom';

// load our css
import './styles/main.scss';

const rootElement = document.getElementById('root');

render(
  <div>
    <h1>Hello Web World!</h1>
  </div>, rootElement,
);
