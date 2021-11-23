import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./styles.module.scss"
const NavBar = (props) => {
    debugger
    return (
        <div className={styles.NavBar__block}>
            <nav className={styles.NavBar__list}>
            <ul>
            <NavLink activeClassName={styles.active} to="/profile">
                    Profile
                </NavLink>
                <NavLink activeClassName={styles.active} to="/messages">
                    Messages
                </NavLink >
                <NavLink activeClassName={styles.active}  to="/news">
                    News
                </NavLink>
                <NavLink activeClassName={styles.active} to="/music">
                    Music
                </NavLink>
                <NavLink activeClassName={styles.active} to="/settings">
                    Settings
                </NavLink>
                <ul className={styles.friendsList}>
                   
                     Friends: 
                    
                    {props.friendsList.map((item)=>{
                        return <div className={styles.friend}>
                            <img src={item.avatar} alt="item-img" />
                          
                            <li>{item.name}</li>
                        </div>
                    })}
                </ul>
            </ul>
            </nav>
        
              
        </div>
    )
}

export default NavBar
