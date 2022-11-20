import React, {useEffect} from 'react';
import styles from './HouseHold.module.scss';
import { Sidebar } from '../sidebar/Sidebar';
import { useDispatch } from "react-redux";
import { getFoods } from './HouseHold.action';

export function HouseHold() {
	const dispatch = useDispatch();

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
				household
			</div>
		</div>)
}