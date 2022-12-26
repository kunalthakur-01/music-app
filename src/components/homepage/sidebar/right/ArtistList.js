import React from 'react'
import { Link } from 'react-router-dom';

import styles from './ArtistList.module.css';

const ArtistList = (props) => {
  return (
    <li className={styles['artist_listItems']}>
      <Link to="/">
        <img src={require('../../../../assests/song2.jpg')} alt="track-img" />
      </Link>
    </li>
  )
}

export default ArtistList; 