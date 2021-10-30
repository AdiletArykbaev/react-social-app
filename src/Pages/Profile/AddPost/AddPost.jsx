import React, { useState } from 'react'
import styles from "./AddPost.module.scss"
import Post from './Post/Post'

const AddPost = () => {
    const post = []
    const [value,setValue] = useState("")
    return (
        <div className={styles.AddPost}>
            <h4>Мои посты</h4>
            <div className={styles.add__post}>
               <input onChange={(e)=>{
                   setValue(e.target.value)
               }} placeholder="добавить пост " type="text" />
               <button onClick={()=>{
                   post.push(value)
               }} className={styles.push}>добавить пост</button>
            </div>
            <div className={styles.posts}>
           
            </div>
        </div>
    )
}

export default AddPost
