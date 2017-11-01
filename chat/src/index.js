import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import reducers from './modules';
import {Provider} from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
