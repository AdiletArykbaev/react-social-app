const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"
const initialState = {
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

}
const profileReducer = (state = initialState,action)=>{
    switch(action.type){
      case ADD_POST: 
        let newPost = {
            id:5,
            text:state.inputData,
            avatar:"/avatar.png",
            likes:0,
            dislikes:2
          };
          state.postData.push(newPost)
          state.inputData=""
          return state
       case CHANGE_POST:
         state.inputData = action.value
         return state
        default:
         return state
    }
  
}
export const addPostActionCreator = ()=>({type:ADD_POST})
export const changePostActionCreator=(text)=>({type:CHANGE_POST,value:text})
export default profileReducer