import React from 'react'

import styles from './SongList.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SongList = (props) => {

    const { trackArtist, trackName} = props.track;
    return (
        <li className={styles['song_listItem']}>
            <Link to={'/'}>
                <div className={styles['song_img']}>
                    <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </div>
                <div className={styles['about_song']}>
                    <p className={styles['song_name']}>{trackName}</p>
                    <p className={styles['artist']}>{trackArtist}</p>
                </div>
                <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']} /></button>
            </Link>
        </li>
    )
};

export default SongList; 