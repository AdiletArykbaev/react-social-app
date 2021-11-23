import React from 'react'
import styles from "./DialogItem.module.scss"
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/messages/" + props.link;
    return (
        <div className={styles.user}>
             <NavLink activeClassName={styles.active} to={path}>
                 <img src={props.img} alt="img" />
                <span> {props.name}</span>
             </NavLink>
        </div>
    )
}

export default DialogItem
