import React from 'react';
import styles from './HouseHold.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { Card } from '../component/card/Card';

export function HouseHold() {

	return (
		<div className={styles.container}>
			<div className={styles.sideContainer}>
				<Sidebar></Sidebar>
			</div>
			<div className={styles.mainContainer}>
				<Card></Card>
			</div>
		</div>)
}