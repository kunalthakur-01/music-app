import React from 'react'

import styles from './SongList.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SongList = () => {
    return (
        <ul className={styles['song_lists']}>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha tha vha pr jha pr</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
            <li>
                <Link href="">
                    <div className={styles['song_img']}>
                        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                    </div>    
                    <div className={styles['about_song']}>
                        <p className={styles['song_name']}>Ek Lamha</p>
                        <p className={styles['artist']}>vilen</p>
                    </div>
                    <button className={styles['play_btn']}><AiFillPlayCircle className={styles['play']}/></button>
                </Link>
            </li>
        </ul>
    )
}

export default SongList; 