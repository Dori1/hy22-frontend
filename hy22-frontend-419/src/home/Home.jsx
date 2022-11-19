import React from 'react';
import styles from './Home.module.scss';
import { Sidebar } from '../sidebar/Sidebar';

export function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.sideContainer}>
				<Sidebar></Sidebar>
			</div>
			<div className={styles.mainContainer}>
				test
			</div>
		</div>
	)
}