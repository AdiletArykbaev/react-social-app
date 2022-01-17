import React from "react"
import styles from "./AddPost.module.scss"
const AddPost = (props) => {
    const  inputValue = React.createRef()
    const addPost = ()=>{
        props.addPost()
    }
    return (
        <div className={styles.AddPost}>
            <h4>Мои посты</h4>
            <div className={styles.add__post}>
               <input onChange={(e)=>{
                   props.func(e.target.value)
}} ref={inputValue} value={props.inputVal} placeholder="добавить пост " type="text" />
               <button  onClick={addPost} className={styles.push}>добавить пост</button>
            </div>
  
        </div>
    )
}

export default AddPost
