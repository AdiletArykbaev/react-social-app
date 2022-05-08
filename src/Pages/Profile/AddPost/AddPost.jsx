import React from "react"
import styles from "./AddPost.module.scss"
import { addPostActionCreator,changePostActionCreator } from "../../../redux/profileReducer"
const AddPost = (props) => {
    const  inputValue = React.createRef()
    const changeInputPost = ()=>{
        props.dispatch(addPostActionCreator())
    }
    const getValue = (value)=>{
        props.dispatch(changePostActionCreator(value))
        
    }
    return (
        <div className={styles.AddPost}>
            <h4>Мои посты</h4>
            <div className={styles.add__post}>
               <input onChange={(e)=>{
                   getValue(e.target.value)
}} ref={inputValue} value={props.inputVal} placeholder="добавить пост " type="text" />
               <button    onClick={changeInputPost} className={styles.push}>добавить пост</button>
            </div>
  
        </div>
    )
}

export default AddPost
