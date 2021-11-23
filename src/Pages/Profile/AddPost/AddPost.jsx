import styles from "./AddPost.module.scss"

const AddPost = () => {
    
    return (
        <div className={styles.AddPost}>
            <h4>Мои посты</h4>
            <div className={styles.add__post}>
               <input placeholder="добавить пост " type="text" />
               <button lassName={styles.push}>добавить пост</button>
            </div>
  
        </div>
    )
}

export default AddPost
