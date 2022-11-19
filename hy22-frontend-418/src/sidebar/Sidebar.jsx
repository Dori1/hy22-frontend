import React from 'react';
import styles from './Sidebar.module.scss';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
	const navigate = useNavigate();

	const onClickOverview = useCallback(() => {
		navigate('/')
	}, [navigate])

	const onClickMyHousehold = useCallback(() => {
		navigate('/my-household')
	}, [navigate])

	return (
		<div>
			<p className={styles.title}>Title</p>
			<p className={styles.menuitem} onClick={onClickOverview}>Overview</p>
			<p className={styles.menuitem} onClick={onClickMyHousehold}>My household</p>
		</div>)
}
