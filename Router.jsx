import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './Home1.jsx';
import Login from './Login.jsx';
import Contact from './Contact.jsx';

class App extends Component {
   render() {
      var userId= cookie.load('userId') ;
         return (
             <div>                                                                                  
               <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                     <div className="navbar-header">
                        <span className="navbar-brand" ><Link to="/home">Home</Link></span>
                     </div>
                      
                        { !  userId ? 
                           <ul className="nav navbar-nav">
                              <li><Link to="/login">Login</Link></li><li><Link to="/contact">Contact</Link></li>
                           </ul>
                           :
                           <ul className="nav navbar-nav">
                              <li><Link to="/contact">Contact</Link></li><li><Link to="/contact">LogOut</Link></li>
                           </ul>
                        }
                  </div>
               </nav>
               
            
               <div className="container">
                  {this.props.children}
               </div>
            </div>
         )
      
   
   }
}
export default App;