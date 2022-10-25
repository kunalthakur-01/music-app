import React from 'react'
import { Link } from 'react-router-dom';

import styles from './ArtistList.module.css';

const ArtistList = () => {
    return (
        <ul className={styles['artist_lists']}>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
            <li>
                <Link href="">
                  <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
                </Link>
            </li>
        </ul>
    )
}

export default ArtistList; 