import React from 'react';
import styles from './App.module.scss';
import { Home } from './home/Home';
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="test" element={ <Home/> } />
			</Routes>
		</div>
	);
}

export default App;
