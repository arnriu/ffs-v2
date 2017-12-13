import React from 'react';
import { render } from 'react-dom';

import Root from './Root';
import configureStore from './configureStore';

import './css/styles.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
