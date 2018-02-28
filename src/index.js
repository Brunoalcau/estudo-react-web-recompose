import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import {store} from './store/configStore';
import {ThemeProvider} from 'styled-components';

import {theme} from './config';


ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>, 
document.getElementById('root'));

registerServiceWorker();
