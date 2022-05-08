import messageReducer from "./messageReducer"
import navbarReducer from "./navbarReducer"
import profileReducer from "./profileReducer"





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
   this._state.profilePage = profileReducer(this._state.profilePage,action)
   this._state.navBar =  navbarReducer(this._state.navBar,action)
   this._state.messagePage =  messageReducer(this._state.messagePage,action)
   this._callsubscriber(this._state)

}




}
export default store