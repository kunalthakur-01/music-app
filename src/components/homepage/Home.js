import React from 'react'
import CenterSection from './center/CenterSection';

import styles from './Home.module.css';
import Navbar from './Navbar';
import LeftSidebar from './sidebar/left/LeftSidebar';
import RightSidebar from './sidebar/right/RightSidebar';

const Home = () => {
    return (
        <section className={styles.app}>
            <Navbar />
            <section className={styles['main_section']}>
                <LeftSidebar />
                <CenterSection />
                <RightSidebar />
            </section>
        </section>
    )
}

export default Home;