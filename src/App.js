import './App.css';
import {
 
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import  ProfileContainer  from "./Pages/Profile/ProfileContainer";
import MessagesContainer from "./Pages/Messages/MessagesContainer";
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Setings";

const App = (props) => {
  return (
       <div className="App">
       <Header/>
       <div className="app__content">
         {/* friendsList={props.state.navBar.friends} */}
       <NavBar />
          <div className="content__wrapper">
           <Route path="/profile" render={()=>{
            return  <ProfileContainer />
           }}/>
           <Route path="/messages" render={()=>{
             return <MessagesContainer />
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


