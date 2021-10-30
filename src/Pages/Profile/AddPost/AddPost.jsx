import styles from "./AddPost.module.scss"
import Post from './Post/Post'

const AddPost = () => {
    
    return (
        <div className={styles.AddPost}>
            <h4>Мои посты</h4>
            <div className={styles.add__post}>
               <input placeholder="добавить пост " type="text" />
               <button lassName={styles.push}>добавить пост</button>
            </div>
            <div className={styles.posts}>
              <Post avatar="./avatar.png" text="hello now body loves me"/>
            </div>
        </div>
    )
}

export default AddPost
