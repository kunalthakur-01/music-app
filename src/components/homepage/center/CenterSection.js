import React from 'react'

import styles from './CenterSection.module.css';

const CenterSection = () => {
    return (
        <div className={`${styles['centered_section']} section`}>
            <h1>Centered</h1>
        </div>
    )
}

export default CenterSection;