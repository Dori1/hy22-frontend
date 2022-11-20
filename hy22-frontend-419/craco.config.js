const path = require('path');
const fs = require('fs');
// const {
// 	getLoader,
// 	loaderByName
// } = require("@craco/craco");
const apiMocker = require('connect-api-mocker');
// const middlewares = require('./server/middlewares');

const devServer = (config) => {
	// Mocking backend APIs for local development
	const defaultConfig = { ...config };
	config.before = (app, server) => {
		defaultConfig.before(app, server);
		// middlewares.forEach(middleware => app.use(middleware()));

		app.use(apiMocker('/api', '/server/mocks'));

	};

	// wsServer.start();

	return config;
};


module.exports = () => ({
	// Create react app won't compile packages outside of the src folder as default
	// plugins: setUpConfig(),
	// // Set up API server for local development
	devServer
});