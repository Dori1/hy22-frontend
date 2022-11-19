import React from 'react';
import styles from './Card.module.scss';

export function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.cardBackgorund}>
			</div>
			<img alt="fruit" src="https://freepngimg.com/download/strawberry/1-strawberry-png-images.png"></img>
			<progress className={styles.progressBar} value="32" max="100"> 32% </progress>
		</div>)
}
