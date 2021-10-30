import React from 'react'
import styles from "./Profile.module.scss"

const ProfileInfo = (props) => {
    return (
        <div className={styles.Profile__main}>
                <div className={styles.Profile__img}>
                    <img src={props.avatar} alt="avatar" />
                </div>
                <div className={styles.ProfileInfo}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                           Name: {props.name}
                        </li>
                        <li className={styles.item}>
                            birth date:{props.date}
                        </li>
                        <li className={styles.item}>
                            city:{props.city}

                        </li>
                        <li className={styles.item}>
                            education:{props.education}
                        </li>

                    </ul>
                </div>
        </div>
    )
}

export default ProfileInfo
