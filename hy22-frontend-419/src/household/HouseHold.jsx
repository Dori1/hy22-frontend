import React, {useEffect} from 'react';
import styles from './HouseHold.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from './HouseHold.action';
import { Card } from '../component/card/Card';

export function HouseHold() {
	const dispatch = useDispatch();
	const foods = useSelector((state) => (state.houseHoldReducer.foods));

	useEffect(() => {
		console.log('asdf')
		dispatch(getFoods());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<div className={styles.sideContainer}>
				<Sidebar></Sidebar>
			</div>
			<div className={styles.mainContainer}>
				{
					foods.map(food => (
						<Card
							timeOfPurchase={food.insertDate}
							timeOfExpiration={food.expirationDate}
							productName={food.productName}
						>
						</Card>
					))
				}
			</div>
		</div>)
}