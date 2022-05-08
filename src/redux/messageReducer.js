const CHANGE_INPUT_MESSAGE = "CHANGE-INPUT-MESSAGE"
const ADD_MESSAGE = "ADD_MESSAGE"
const initialState = {
  data:[
    {user:"Adilet",id:1,img:"/avatar.png",body:"сегодня буду целый день кодить,кайф"},
    {user:"Baha",id:2,img:"/ava-twitch-32.jpg",body:"assets1"},
    {user:"Ajar",id:3,img:"/avatar.png",body:"chill"},
    {user:"Dan",id:4,img:"/ava-twitch-32.jpg",body:"ok"},
    ],
  dialogAreaValue:"ваше сообщение"
 
}
const messageReducer = (state = initialState,action)=>{
     switch(action.type){
         case CHANGE_INPUT_MESSAGE:
            state.dialogAreaValue = action.value
            return state
          case ADD_MESSAGE:
            let message = {
                user:"testUser",
                id:6,
                body:state.dialogAreaValue,
                img:"/avatar.png",
               
              }
              state.data.push(message)
              state.dialogAreaValue = ""
              return state  
          default:
              return state
     }
    
}
export const changeMessageValueActionCreator = (text)=>({type:CHANGE_INPUT_MESSAGE,value:text})
export const addNewMessageActionCreator = ()=>({type:ADD_MESSAGE})
export default messageReducer