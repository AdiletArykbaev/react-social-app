import React from 'react'
import styles from "./styles.module.scss"

const Post = (props) => {
    return (
        <div className={styles.post__wrapper}>
           <div className={styles.profile_avatar}>
               <img src={props.avatar} alt="profile-avatar" />
                
           </div>
           <div className={styles.post__text}>
               {props.text}
           </div>
           <div className={styles.likes_count}>
               <button>like: {props.likescount}</button>
               <button>dislike:{props.dislikecount}</button>

           </div>
        </div>
    )
}

export default Post
    