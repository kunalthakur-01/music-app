import React from 'react';

import styles from './Navbar.module.css';

// import image from '../../public/images/logo.png'

import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* <Image src='/images/logo.png' alt="logo" width={80} height={80} /> */}
                <h2>SPOTIFY</h2>
            </div>
            <div className={styles.middleContent}>
                <Link><AiOutlineHome className={styles.homeIcon}/></Link>
                <input type="text" placeholder='🔍 What do you want to listen?'/>
            </div>
            <div className={styles.userIcon}>
                <span><FiUser /></span>
            </div>
        </nav>
    )
}

export default Navbar;