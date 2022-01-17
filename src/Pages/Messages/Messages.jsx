import React from 'react'
import styles from "./styles.module.scss"
import DialogItem from './Components/DialogItem/DialogItem.jsx'
import Dialog from './Components/Dialogs/Dialog'
const Messages = (props) => {

    const testRef = React.createRef()
    let users =  props.state.data.map(item=>{
      return  <DialogItem name={item.user} link={item.id} img={item.img}/>           })

    return (
        <div className={styles.Messages_wrapper}>
            <div className={styles.users}>
           {users}
            </div>
           
         
          <div className={styles.dialogs}>
              {props.state.data.map(item=>{
                              return <Dialog data={props.state.data} id={item.id} userAvatar={item.img} userName={item.user} message={item.body} />


              })}
              <div className={styles.addText}>
                <textarea ref={testRef} placeholder="ваше сообщение" className={styles.inputAreat}></textarea>
                <button onClick={()=>{
                  alert(testRef.current.value)
                }} className={styles.addBtn}>отправить</button>
              </div>
          </div>
        </div>

    )
}

export default Messages
