import React from 'react'
import ArtistList from './ArtistList';

import styles from './RightSidebar.module.css';
import SongList from './SongList';

const RightSidebar = React.memo((props) => {
    const top_tracks = [
        {
            trackArtist: "Karan Aujla",
            trackName: "2am",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
        {
            trackArtist: "Sidhu Moose Wala",
            trackName: "295",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
        {
            trackArtist: "Karan Aujla",
            trackName: "Don't Worry",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
        {
            trackArtist: "Kaka",
            trackName: "Temporary Pyar",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
        {
            trackArtist: "Khan Bhaini",
            trackName: "Numb",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
        {
            trackArtist: "Parmish Verma",
            trackName: "Shadaa",
            trackDuration: 257149,
            trackUrl: "Karan Aujla",
        },
    ];

    const top_artists = ['Karan Aujla', 'Parmish Verma', 'Khan Bhaini', 'Kaka', 'Sidhu Moose Wala', 'Shubh'];
    return (
        <div className={`${styles['right_sidebar']} section`}>
            <div className={styles['top_charts']}>
                <div className={styles.heading}>
                    <span>Top <span>Charts</span></span>
                    <button>see more</button>
                </div>
                <div className={styles.songs}>
                    <ul>
                        {top_tracks.map(track => <SongList key={track.trackName} track={track}/>)}
                    </ul>
                </div>
            </div>
            <div className={styles['top_artists']}>
                <div className={styles.heading}>
                    <span>Top <span>Artists</span></span>
                    <button>see more</button>
                </div>
                <div className={styles.artists}>
                    <ul className={styles['artist_lists']}>
                        {top_artists.map(artist => <ArtistList key={artist} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
});

export default RightSidebar;