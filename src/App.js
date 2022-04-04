import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
export default class App extends Component {
  constructor(){
    super();
    this.state ={
     
     
      bttext:"Enable Dark Mode",
      co:"light",
      dm:"dark"
    }
  }
  
/* toogle=()=>{
    if(this.state.bttext == "Enable Dark Mode")
   { this.setState({
      bttext:"Enable Light Mode",
     
    co:"dark" ,
  dm:"light"   }
      )}
    else{
      this.setState({
        bttext:"Enable Dark Mode",
      co:"light",
      dm:"dark"
      }
        )
      }
    }*/
    render() {
    return (
      <div>
        <Router>  
                <Navbar  dm={this.state.dm} co={this.state.co} bttext={this.state.bttext} />
                
        <Routes>
        
    < Route exact path="/" element={<News key={"general"} pageSize={6} country = {"in"} category = {"General"}/>}/>
          <Route exact path="/business" element={<News key={"business"}  pageSize={6} country = {"in"} category = {"Business"}/>}/>
          <Route exact path="/entertainment" element={<News key={"entertainment"}  pageSize={6} country = {"in"} category = {"Entertainment"}/>}/>
          <Route exact path="/sports" element={<News key={"sports"}  pageSize={6} country = {"in"} category = {"Sports"}/>}/>
          <Route exact path="/science" element={<News key={"science"} pageSize={6} country = {"in"} category = {"Science"}/>}/>
          <Route exact path="/technology" element={<News key={"technology"} pageSize={6} country = {"in"} category = {"Technology"}/>}/>
          <Route exact path="/health" element={<News key={"health"} pageSize={6} country = {"in"} category = {"Health"}/>}/>

        
    
      </Routes>
      </Router></div>
    )
  }
}
