import './App.css';
import {
 
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import  Profile  from "./Pages/Profile/Profile";
import Messages from "./Pages/Messages/Messages";
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Setings";

const App = (props) => {
  console.log("Props in Profile page",props)
  return (
       <div className="App">
       <Header/>
       <div className="app__content">
         {/* friendsList={props.state.navBar.friends} */}
       <NavBar />
          <div className="content__wrapper">
           <Route path="/profile" render={()=>{
            return  <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
           }}/>
           <Route path="/messages" render={()=>{
             return <Messages state={props.state.messagePage} dispatch={props.dispatch}/>
           }}/>
           <Route path="/news" component={News}/>
           <Route path="/music" component={Music}/>
           <Route path="/settings" component={Settings}/>
          </div>
       </div>
    
      </div>

  )
}

export default App


