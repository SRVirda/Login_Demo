import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import validator from 'validator';
import Validation from './node_modules/react-validation/lib/build/validation.js';
import GoogleLogin from 'react-google-login';
import Home from './Home1.jsx';


class Login extends Component {

	constructor(){
		super();
		this.state = {
			data : []
		}
	}

	responseGoogle(response) {
  		console.log(response,"sucess");
  		browserHistory.push("/contact");

	}

	onClick (event){
        event.preventDefault();

        this.setState({
            errors: this.form.validateAll()
        });
    };

	dataHandle(e){
		const temp = this.state.data;
		//console.log(e.target.value);
		const a = e.target.value ;
		//console.log(e.target.id);
		if(e.target.id=='email'){
			temp[0] = a;
		}
		else{
			temp[1] = a;
		}
		this.setState({
				data : temp
			})
		//console.log(this.state.data);
	}

	showData(e){
		//console.log(this.state.data);
		if(this.state.data[0] == "admin@gmail.com")
        {
        	if(this.state.data[1] == "admin")
        	{	
        		cookie.save('userId', this.state.data[1]);
        		browserHistory.push("/contact")

        	}
        }   
        else{
        		alert("Enter admin in email and password");
        }				
	}

   render() {
      	return (
  				<div className="container">
    				<div className="row">
        				<div className="col-sm-6 col-md-4 col-md-offset-4">
            				<h1 className="text-center login-title">Sign in to continue to Bootsnipp</h1>
            				<div className="account-wall">
                				<img className="profile-img" src="img/blank_gravatar.png"
                    			alt="" />
                			
                				<Validation.components.Form ref={c => this.form = c} onSubmit={this.onSubmit} className="form-signin">

                		
                				<Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='email@email.com' name='email' validations={['required', 'email']}
                				className="form-control" onChange={this.dataHandle.bind(this)} id='email'/>

               
                				<Validation.components.Input type='password' errorClassName='is-invalid-input' containerClassName='' value='' name='password' validations={['required', 'password']}
                				className="form-control" onChange={this.dataHandle.bind(this)}
                				id='password'/>

                				<button className="btn btn-lg btn-primary btn-block" onClick={this.showData.bind(this)}>
                				Login
                    			</button>

                				<span className="checkbox pull-left">
                    			<input type="checkbox" value="remember-me" />
                    			Remember me
                				</span>
                				<a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                				</Validation.components.Form> 
            				</div>
            				<a href="#" className="text-center new-account">Create an account </a>
        				
        				<GoogleLogin
						    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
						    buttonText="Login"
						    onSuccess={this.responseGoogle.bind(this)}
						    onFailure={this.responseGoogle.bind(this)}
						  />

						</div>
    				</div>
    				
				</div>
      	)
}

	componentWillMount() {
     console.log('Component WILL MOUNT!');


    Object.assign(Validation.rules, {
    
    required: {
        rule: value => value.toString().trim(),
        hint: () => <span className="form-error is-visible">Required</span>
    },

    email: {
        rule: value => validator.isEmail(value),
        hint: value => <span className="form-error is-visible">{value} is not an Email.</span>
    },

    alpha: {
        rule: value => validator.isAlpha(value),
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-zA-Z).
            </span>
        )
    },

    password: {
        rule: (value, components) => {
            const password = components.password;
            
            
            
            return password.value ;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    }
});
}
}

export default Login;
