import React from 'react'
import ArtistList from './ArtistList';

import styles from './RightSidebar.module.css';
import SongList from './SongList';

const RightSidebar = () => {
    return (
        <div className={`${styles['right_sidebar']} section`}>
            <div className={styles['top_charts']}>
                <div className={styles.heading}>
                    <span>Top <span>Charts</span></span>
                    <button>see more</button>
                </div>
                <div className={styles.songs}>
                    <SongList />
                </div>
            </div>
            <div className={styles['top_artists']}>
                <div className={styles.heading}>
                    <span>Top <span>Artists</span></span>
                    <button>see more</button>
                </div>
                <div className={styles.artists}>
                    <ArtistList />
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;