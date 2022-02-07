const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"
const CHANGE_INPUT_MESSAGE = "CHANGE-INPUT-MESSAGE"

export const addPostActionCreator = ()=>({type:ADD_POST})
export const changePostActionCreator=(text)=>({type:CHANGE_POST,value:text})
export const changeMessageValueActionCreator = (text)=>({type:CHANGE_INPUT_MESSAGE,value:text})
let store = {
  _state:{
    profilePage:{
        postData:[{
            id:1,
            text:"hello now body loves me",
            avatar:"/avatar.png",
            likes:16,
            dislikes:19
          },
          {
            id:2,
            text:"hello i am Adilet",
            avatar:"/avatar.png",
            likes:16,
            dislikes:19
          
          },
          {
            id:3,
            text:"hello JavaScript is Andry",
            avatar:"/avatar.png",
            likes:16,
            dislikes:19
          
          },
          {
            id:4,
            text:"buy",
            avatar:"/avatar.png",
            likes:16,
            dislikes:19
          
          }
          ],
        inputData:"",
    },
    messagePage:{
        data:[
            {user:"Adilet",id:1,img:"/avatar.png",body:"сегодня буду целый день кодить,кайф"},
            {user:"Baha",id:2,img:"/ava-twitch-32.jpg",body:"assets1"},
            {user:"Ajar",id:3,img:"/avatar.png",body:"chill"},
            {user:"Dan",id:4,img:"/ava-twitch-32.jpg",body:"ok"},
            ],
        dialogAreaValue:"ваше сообщение"

    },
    navBar:{
      friends:[{name:"Adilet",avatar:"/avatar.png"},{name:"Sultan",avatar:"/ava-twitch-32.jpg"},{name:"kairat",avatar:"/avatar.png"}]
    },
          

},
getState(){
  
  return this._state
},
_callsubscriber (){
  console.log("state was changed")
},
subscriber(observer){
  
  
  this._callsubscriber = observer
},
dispatch(action){
  if(action.type === ADD_POST){
    let newPost = {
      id:5,
      text:this._state.profilePage.inputData,
      avatar:"/avatar.png",
      likes:0,
      dislikes:2
    };
    this._state.profilePage.postData.push(newPost)
    this._state.profilePage.inputData=""
    this._callsubscriber(this._state)
  }else if(action.type === CHANGE_POST){
    this._state.profilePage.inputData = action.value
    this._callsubscriber(this._state)
  }
  else if(action.type === CHANGE_INPUT_MESSAGE){
    this._state.messagePage.dialogAreaValue = action.value
  }
}




}
export default store