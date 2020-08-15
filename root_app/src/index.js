import React from 'react';
import { render } from 'react-dom';
import App from './App';
import MfeConfig from './hofmann-root-config';
import './assets/css/app.css';

const rootEl = document.getElementById('root');
render(<App />, rootEl);
MfeConfig();
