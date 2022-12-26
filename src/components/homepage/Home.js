import React from 'react'
import { useEffect, useState } from 'react';

import styles from './Home.module.css';

import Navbar from './Navbar';
import LeftSidebar from './sidebar/left/LeftSidebar';
import CenterSection from './center/CenterSection';
import RightSidebar from './sidebar/right/RightSidebar';
import useAuth from '../../hooks/useAuth';

import SpotifyWebApi from 'spotify-web-api-node';
import { useContext } from 'react';
import { contextManage } from '../../Context/ContextApi';
import SearchResult from './search result/SearchResult';


const spotifyApi = new SpotifyWebApi({
    clientId: 'd41d033c6bc44116be8f7a52be8cc081',
});


const Home = (props) => {

    const ctx = useContext(contextManage);
    const accessToken = useAuth(props.code);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if(!accessToken) return;

        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if(!ctx.searchedData  || ctx.searchedData.length === 0) return setSearchResults([]);
        if(!accessToken) return;

        spotifyApi.searchTracks(ctx.searchedData)
        .then(res => {
            // console.log(res);
            const data = [];
            res.body.tracks.items.forEach(track => {
                data.push({
                    trackArtist: track.artists[0].name,
                    trackName: track.name,
                    trackUrl: track.uri,
                    trackDuration: track.duration_ms
                });                        
            });
            setSearchResults(data);
        });
        // spotifyApi.getMyTopTracks().then(res => {
        //   console.log(res);
        // })
    }, [ctx, accessToken]);
    // console.log('home');
    // console.log(searchResults);

    return (
        <section className={styles.app}>
            <Navbar code={props.code} />
            <section className={styles['main_section']}>
                <LeftSidebar />
                {searchResults.length > 0 ? <SearchResult searchResults={searchResults}/> : <CenterSection />}
                <RightSidebar />
            </section>
        </section>
    )
}

export default Home;