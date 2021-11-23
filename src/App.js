import './App.css';
import {
  BrowserRouter as Router,
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
  
  return (
    <Router>
       <div className="App">
       <Header/>
       <div className="app__content">
       <NavBar friendsList={props.state.navBar.friends}/>
          <div className="content__wrapper">
           <Route path="/profile" render={()=>{
            return  <Profile state={props.state.profilePage}/>
           }}/>
           <Route path="/messages" render={()=>{
             return <Messages state={props.state.messagePage}/>
           }}/>
           <Route path="/news" component={News}/>
           <Route path="/music" component={Music}/>
           <Route path="/settings" component={Settings}/>
          </div>
       </div>
    
      </div>
    </Router>

  )
}

export default App


