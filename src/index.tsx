import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.scss';
import './styles/global.scss';
import './styles/fonts.scss';
import {App} from './app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
