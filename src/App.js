import React, { Component } from 'react';
import './App.css';
import Login from './component/login/login.component';
import { BrowserRouter as Router, Route ,Switch,Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Home from './component/home/home.component';

class App extends Component{

  constructor(props)
  {
    super(props)
    this.state = {
      loggedIn : false 
    }
  }
  isLoggedIn(token)
  {
    // let e = loginData[0].val; 
    // let p = loginData[1].val;
    // if( e === "a@gmail.com" && p === "123")
    if( token)
        this.setState({loggedIn:true})
    else
        console.log(token)
  }
  render()
  {
    let {loggedIn} = this.state;
    console.log(loggedIn);
    return (
      <Router>
        <div className="App">
        <Switch>
              <Route exact path="/">
                {loggedIn ? <Home/> : <Login isLoggedIn = {this.isLoggedIn.bind(this)}></Login>}
              </Route>
              <Route path="*" render={()=>
              <div className="notFound">oops!! You lost??
                <div>
                  Lets get back to home!! Click 
                  &nbsp;&nbsp;
                  <Button variant = 'contained' color = 'primary' onClick = {()=>this.notFound()} >
                          Here 
                          </Button>
                  </div>
                </div>}/>
              </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
