import React from 'react';
import styles from './App.module.scss';
import { Home } from './home/Home';
import { Routes, Route, HashRouter } from "react-router-dom"
import { HouseHold } from './household/HouseHold';

function App() {
	return (
		<div className={styles.app}>
			<HashRouter>
				<Routes>
					<Route path="/" element={ <Home/> } />
					<Route path="/my-household" element={ <HouseHold/> } />
				</Routes>
			</HashRouter>
		</div>)
}

export default App;