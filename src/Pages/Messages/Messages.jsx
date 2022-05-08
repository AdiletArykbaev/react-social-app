import React from 'react'
import styles from "./styles.module.scss"
import DialogItem from './Components/DialogItem/DialogItem.jsx'
import Dialog from './Components/Dialogs/Dialog'
const Messages = (props) => {
    const testRef = React.createRef()
    const changeInputPost = (messageValue)=>{
        props.worker(props.action1(messageValue))
    }
    const addMessage = () =>{
      props.worker(props.action2())

    }
    let users =  props.users.map(item=>{
      return  <DialogItem name={item.user} link={item.id} img={item.img}/>           })

    return (
        <div className={styles.Messages_wrapper}>
            <div className={styles.users}>
           {users}
            </div>
           
         
          <div className={styles.dialogs}>
              {props.messages.map(item=>{
                              return <Dialog  id={item.id} userAvatar={item.img} userName={item.user} message={item.body} />


              })}
              <div className={styles.addText}>
                <textarea onChange={(e)=>{
                  changeInputPost(e.target.value)
                }} value={props.value} ref={testRef} className={styles.inputAreat}></textarea>
                <button onClick={()=>{
                  addMessage()
 }} className={styles.addBtn}>отправить</button>
              </div>
          </div>
        </div>

    )
}

export default Messages
