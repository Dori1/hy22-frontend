import styles from './Sidebar.module.scss';
import { useCallback } from 'react';

export function Sidebar() {

    const onClickOverview = useCallback(() => {
        // TODO
    }, [])

    const onClickMyHousehold = useCallback(() => {
        // TODO
    }, [])

    return (
        <div>
        <p className={styles.title}>Title</p>
        <p className={styles.menuitem} onClick={onClickOverview}>Overview</p>
        <p className={styles.menuitem} onClick={onClickMyHousehold}>My household</p>
        </div>
    )
}