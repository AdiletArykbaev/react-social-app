import React from 'react'
import styles from "./Profile.module.scss"
import ProfileInfo from './Profile-info/ProfileInfo'
import AddPost from './AddPost/AddPost';
import Post from './Post/Post'


const Profile = (props) => {
   
    return (
        <div className={styles.Profile}>
            <div className={styles.Profile_img}>
                <img src="./Raster.jpeg" alt="Raster" />
            </div>
            <div className={styles.Profile_info}>
                <ProfileInfo 
                    avatar="./avatar.png"
                    name="Adilet"
                    date="26.09.2002"
                    city="bishkek"
                    education="self educated"

                    />
            </div>
            <div className={styles.Profile_post}>
                <AddPost/>
                {props.state.postData.map((item)=>{
                    return <Post avatar={item.avatar} text={item.text} likescount={item.likes} dislikecount={item.dislikes}/>
                })}
            </div>
        </div>
    )
}

export default Profile
