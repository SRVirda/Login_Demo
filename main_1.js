import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import cookie from 'react-cookie';
import App from './Router.jsx';
import Home from './Home1.jsx';
import Login from './Login.jsx';
import Contact from './Contact.jsx';

function requireAuth() {
  var userId= cookie.load('userId'); 	
  console.log("hello",userId);
  if(userId)
  {
  	console.log("done");
  }
  else
  {
  	alert("Your are not login");
  	browserHistory.push("/login");
  	//console.log("not done");
  }

}
ReactDOM.render((
   <Router history = {browserHistory}>
      
      <Route path = "/" component = {App}>
      	<IndexRoute component = {Home} />
      	<Route path = "home" component = {Home} />
        <Route path = "login" component = {Login} />
        <Route path = "contact" component = {Contact} onEnter={requireAuth} />
      </Route>
        
   </Router>

   
), document.getElementById('app'));