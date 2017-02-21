import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Login from './Login.jsx';

class Contact extends Component {
    logOut(){
      cookie.remove('userId');
      console.log("logOut user");
      browserHistory.push("/login");
    }
   render() {
      return (
         <div>
          <button onClick={this.logOut.bind(this)}>Log Out User</button>
         <p>
			For too many online companies the About Us page is the elephant in the room, and often the most awkward thing to write. It's a shame because analytics often shows the page as one of the most frequented on any website. Imagine a ceremonial elephant adorned in his embellished head plate, raising you above your competitors. This could be your About Us page if you show it the care and attention it deserves.
		</p>
		<p>
			The good news is your about page doesn't require several hundred pounds of vegetation on a daily basis, nor is there any real need for expensive antique rhinestones. 
		</p>
		<p>
			The bad news is crafting the perfect about page is easier said than done. Many find it difficult to strike the right balance between selling themselves to their customers and driving them away with a self-focused approach, which helps explain why the pages are so often neglected. 
		</p>
		<p>
			At Absolute, we're looking to revamp our entire website over the coming months, and in particular we'll be focusing our attention on our about page. We recognize that our page is currently a little on the dull side and while we are researching the topic, I thought it would be great to share nine great, easily applicable techniques we picked up from some of our favorite About Us pages from around the web.
		</p>
		<p>
			Start by talking about your audience, not yourself
		</p>
		<p>
			Human nature dictates that we are, first and foremost, concerned with our own problems. While some of us may give to charity or volunteer in our spare time, when it comes to searching for products or services online, we're all about ourselves and what a brand can do for us.
		</p>
		<p>
			Blog Tyrant is a great example of a blog that is focused on its visitors. The first thing you see when you land on their about page is a video titled "About Me and You." The text that follows is then split into two sections, "About Me" and "About You (The Tyrant Troops)."
		</p>

    <header className="image-bg-fluid-height">
        <img className="img-responsive img-center" src="http://placehold.it/200x200&text=Logo" alt="" />
    </header>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="section-heading">Section Heading</h1>
                    <p className="lead section-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
            </div>
        </div>
    </section>

    <aside className="image-bg-fixed-height"></aside>

    
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
         </div>
    </footer>
        </div>
      )
   }
}

export default Contact;