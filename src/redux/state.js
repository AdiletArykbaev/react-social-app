let renderFunc = ()=>{
  console.log("state was changed")
}
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
        inputData:"adilet"
    },
    messagePage:{
        data:[
            {user:"Adilet",id:1,img:"/avatar.png",body:"сегодня буду целый день кодить,кайф"},
            {user:"Baha",id:2,img:"/ava-twitch-32.jpg",body:"assets1"},
            {user:"Ajar",id:3,img:"/avatar.png",body:"chill"},
            {user:"Dan",id:4,img:"/ava-twitch-32.jpg",body:"ok"},
            ],
       
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
addPost(){
  let newPost = {
    id:5,
    text:this._state.profilePage.inputData,
    avatar:"/avatar.png",
    likes:0,
    dislikes:2
  };
  this._state.profilePage.postData.push(newPost)
  this._state.profilePage.inputData=""
  this._callsubscriber()

},
changePost(value){
  this._state.profilePage.inputData = value
  this._callsubscriber()
},
subscriber(observer){
  this._callsubscriber = observer
},

}
export default store