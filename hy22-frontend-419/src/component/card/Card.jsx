import React from 'react';
import styles from './Card.module.scss';
import { useCallback } from 'react';

export function Card(props) {
	const {
		timeOfPurchase, 
		timeOfExpiration,
		productName
	} = props;

	const compostable = true;

	const onRemoveItem = useCallback(() => {
		// TODO
	}, [])

	const dateDiffInDays = useCallback((b, a) => {
		const _MS_PER_DAY = 1000 * 60 * 60 * 24;
		const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
		const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

		return Math.floor((utc2 - utc1) / _MS_PER_DAY);
	}, [])

	const remainingDays = dateDiffInDays(new Date(timeOfExpiration), new Date(timeOfPurchase));

	return (
		<div className={styles.card}>
			<div className={styles.cardBackgorund}></div>
			<div className={styles.flexContainer}>
				<div>
					<b className={styles.title}>{productName}</b>
				</div>
				<div className={styles.compostable}>
					<div className={styles.flexContainer2}>
						<img onClick={onRemoveItem} className={styles.compostableImage} alt="compostable" src="https://cdn-icons-png.flaticon.com/512/3481/3481306.png"></img>
						{
							compostable &&
							<img className={styles.compostableImage} alt="compostable" src="https://cdn-icons-png.flaticon.com/512/2029/2029349.png"></img>
						}
					</div>
				</div>
			</div>
			<div className={styles.flexContainer}>
				<div>
					<img alt="fruit" src="https://freepngimg.com/download/strawberry/1-strawberry-png-images.png"></img>
				</div>
				<div className={styles.infoSection}>
					<p className={styles.timeOfPurchase}><b>Purchase date: </b>{new Date(timeOfPurchase).toLocaleDateString()}</p>
					<p className={styles.timeOfExpiration}><b>Expiration date: </b>{new Date(timeOfExpiration).toLocaleDateString()}</p>
				</div>
			</div>
			<progress className={remainingDays > 30 ? styles.progressBarGreen : remainingDays > 15 ? styles.progressBarYellow : styles.progressBarRed } value={remainingDays*2} max="100"> 32% </progress>
		</div>)
}