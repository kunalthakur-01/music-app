import React from 'react'

import styles from './LeftSidebar.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { GiHeartInside } from 'react-icons/gi';
import { TiChartBar } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const LeftSidebar = React.memo(() => {
    return (
        <div className={`${styles['left_sidebar']} section`}>
            <ul>
                <li><Link href=""><span><BiHomeAlt className={styles.icon}/></span> Discover</Link></li>
                <li><Link href=""><span><MdFavorite className={styles.icon}/></span> Your favorites</Link></li>
                <li><Link href=""><span><GiHeartInside className={styles.icon}/></span> Top Artists</Link></li>
                <li><Link href=""><span><TiChartBar className={styles.icon}/></span> Top Charts</Link></li>
            </ul>
        </div>
    )
});

export default LeftSidebar;