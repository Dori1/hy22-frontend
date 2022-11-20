import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/Store';
import { Provider } from 'react-redux';

window.appConfig = {
	foodServiceManager: "http://localhost:3000/api"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);