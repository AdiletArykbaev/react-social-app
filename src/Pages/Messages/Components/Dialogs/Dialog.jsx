import React from 'react'
import styles from "./Dialog.module.scss"

const Dialog = (props) => {

    return (
        <div className={styles.dialog}>
            <div className={styles.user}>
                <div className={styles.user_info}>
                <img src={props.userAvatar} alt="user-avatar" />
                <li>
                    {props.userName}
                </li>
                </div>
            
                <div className={styles.messages}>
                    <div className={props.id%2==0?styles.message_end:styles.message_start}>
                       {props.message}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialog
