import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';


const Root = ({ store }) => (
	<I18nextProvider i18n={i18n}>
		<Provider store={store}>
			<Router>
				<Route path="/:path?" component={App} />
			</Router>
		</Provider>
	</I18nextProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
