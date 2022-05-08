import React from 'react'
import Profile from './Profile'
import StoreContext from '../../StoreContext'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


//props.profilePage.inputData
const ProfileContainer = (props) => {
 
  let state = useSelector(state=>(state))
  let dispatch = useDispatch()
  console.log("ProfileState",state)
  return (
    <Profile inputValue={state.inputValue} callback={dispatch}  posts={state.postData}/>

     
  )
}

export default ProfileContainer