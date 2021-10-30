import React from 'react'
import styles from "./styles.module.scss"



const Header = () => {
    return (
        <div className={styles.Header_wrapper}> 
            <div className={styles.logo__block}>
                <img src="./logo.png" alt="logo" />
            </div>

        </div>
    )
}

export default Header
