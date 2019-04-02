import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import Team from './Team'
import Admin from './Admin'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function SimpleAppBar(props) {
  return (
    <div >
      <AppBar position="static" color= "None">
        <Toolbar>
        <Link style = {{"color" :"Orange", "textDecoration": "none"}}to="/">
          <Typography variant="h5" color="inherit">
           <strong>CheckMate</strong>
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const linkstyle = (col)=> {return{
  "color" :"Orange",
  "textAlign":"center",
  "height": "40px" ,
   "width" : "300px",
   "backgroundColor": col,
   "float": "left",
   "marginLeft": "20px",
   "borderRadius": "8px",
   "paddingTop" : "7px",
   "fontSize": "1.6em",
   "textDecoration": "none"
}}
const stt = {
  "paddingTop" : "270px",
  "paddingLeft" : "380px",
}
const HOME = ()=>{
  return(
    <div style = {stt}>
      <div><Link style = {linkstyle("white")} to="/Admin">Admin</Link></div>
      <div><Link style = {linkstyle("white")} to="/Other">Other</Link></div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        {<SimpleAppBar/>}
        <switch>
          <Route path ="/admin" component = {Admin}/>
          <Route exact path ="/" component = {HOME} /> 
        </switch>
      </Router>
    );
  }
}

export default App;
