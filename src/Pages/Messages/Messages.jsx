import React from 'react'
import styles from "./styles.module.scss"
import { NavLink } from 'react-router-dom';

const Messages = () => {
    return (
        <div className={styles.Messages_wrapper}>
          <div className={styles.users}>
            <div className={styles.user}>
              <NavLink activeClassName={styles.active} to="/messages/1">
              Adilet
             </NavLink>
              </div>
            <div className={styles.user}>
              <NavLink activeClassName={styles.active} to="/messages/2" >
                Bakai
             </NavLink>
            </div>
            <div className={styles.user}>
             <NavLink activeClassName={styles.active}  to="/messages/3">
              Kairat
             </NavLink>
            </div>
            <div className={styles.user}>
             <NavLink  activeClassName={styles.active} to="/messages/4">
              Karina
             </NavLink>
            </div>
            <div className={styles.user}>
             <NavLink activeClassName={styles.active} to="/messages/5">
              Mary
             </NavLink>
            </div>
            

          </div>
         
          <div className={styles.dialogs}>
            <div className={styles.dialog}>
              Hello,what are you doing?
            </div>
            <div className={styles.dialog}>
              where is my sait?!
            </div> 
            <div className={styles.dialog}>
              why are you smilling?
            </div>
          </div>
        </div>

    )
}

export default Messages
