import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Home extends Component {
	
   render() {
      return (
      		<div>
      			<div id="main" className="grid_12" >
            <h1><a href="#">Site Name</a></h1>
            <h2><a href="#">Featured post : here goes a title</a></h2>
            <a href="#"><img src="img/photo_1.jpg" alt="" /></a> 
         </div>
         <div id="articles" className="grid_12">
         <ul>
            <li>
               <h2><a href="#">Article title</a></h2>
               <div className="meta">published on 22 may, 2009</div>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>
                  <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <a href="#" className="more">read more &raquo;</a> </li>
                  <li>
                     <h2><a href="#">Article title</a></h2>
                     <div className="meta">published on 22 may, 2009</div>
                     <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                     </p>
                     <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                     <a href="#" className="more">read more &raquo;</a> 
                  </li>
                  <li>
                     <h2><a href="#">Article title</a></h2>
                     <div className="meta">published on 22 may, 2009</div>
                     <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>
                     <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                     <a href="#" className="more">read more &raquo;</a> 
                  </li>
                  <li className="no-margin">
                     <h2><a href="#">Article title</a></h2>
                     <div className="meta">published on 22 may, 2009</div>
                     <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>
                     <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                     <a href="#" className="more">read more &raquo;</a> 
                  </li>
               </ul>
               <div id="quote">
                  <p><span className="symbol">&#148;</span>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span className="author">&#151; <a href="#">John Doe</a></span></p>
               </div>
               <div id="description">
                  <p><img src="img/blank_gravatar.png" alt="" width="50" height="50" />Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>
               </div>
            </div>
            <div id="footer" className="grid_12">
               <p>Design by <a href="http://chergaoui.com">Ahmed Chergaoui</a>. Image courtesy of <a href="http://www.flickr.com/photos/danielebefera/1525784287/">marghe00</a>.</p>
               <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Archives</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>
      		</div>
      	)
   }
}

export default Home;