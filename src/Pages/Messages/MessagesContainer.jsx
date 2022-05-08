import React from 'react'
import {changeMessageValueActionCreator,addNewMessageActionCreator}from "../../redux/messageReducer"
import Messages from './Messages'

const MessagesContainer = (props) => {
  return (
    <div>
        <Messages worker={props.dispatch} action1={changeMessageValueActionCreator} action2={addNewMessageActionCreator} messages={props.state.data} users={props.state.data} value={props.state.dialogAreaValue}/>
    </div>
  )
}

export default MessagesContainer