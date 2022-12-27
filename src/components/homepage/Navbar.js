import React from 'react';
import { useState } from 'react';
// import useAuth from '../../hooks/useAuth';

// import SpotifyWebApi from 'spotify-web-api-node';

import styles from './Navbar.module.css';

// import image from '../../public/images/logo.png'

import { AiOutlineHome } from 'react-icons/ai';
// import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Login from '../../authentication/Login';
import { useContext } from 'react';
import { contextManage } from '../../Context/ContextApi';
import { useEffect } from 'react';
import { useCallback } from 'react';

// const spotifyApi = new SpotifyWebApi({
//     clientId: 'd41d033c6bc44116be8f7a52be8cc081',
// });


const Navbar = ({code}) => {

    // const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    const ctx = useContext(contextManage);


    // useEffect(() => {
    //     if(!accessToken) return;

    //     spotifyApi.setAccessToken(accessToken);
    // }, [accessToken]);

    // useEffect(() => {
    //     if(!search) return setSearchResults([]);
    //     if(!accessToken) return;

    //     spotifyApi.searchTracks(search).then(res => {
    //         console.log(res);
    //     })
    // }, [search, accessToken])


    const changeHandler = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
    
    useEffect(() => {
        const timeOut = setTimeout(() => {
            ctx.getSearchedData(search);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [search, ctx]);
    // console.log('navbar');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* <Image src='/images/logo.png' alt="logo" width={80} height={80} /> */}
                <h2>SPOTIFY</h2>
            </div>
            <div className={styles.middleContent}>
                <Link><AiOutlineHome className={styles.homeIcon}/></Link>
                <input type="text" value={search} onChange={changeHandler} placeholder='🔍 What do you want to listen?'/>
            </div>
            <div className={styles.userIcon}>
                {/* <span><FiUser /></span> */}
                <Login />
            </div>
        </nav>
    )
}

export default Navbar;