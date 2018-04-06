import React,{Component}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Login  from '../login/login.js'; 
import Badge from 'material-ui/Badge';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {  ButtonToolbar, Button,DropdownButton,MenuItem} from 'react-bootstrap';

const style={
	float: 'left',
    marginLeft: '92px',
    height: '31px',
    marginTop: '12px',
}


class Logout extends Component{
	constructor(props){
		super(props)
		this.handleLogout=this.handleLogout.bind(this)
	}
	handleLogout(event){  

		this.props.addToken()

		var formData= new FormData();                          
		if (window.localStorage.access_token){
			var token=window.localStorage.access_token
			// var data=('token',window.localStorage.access_token);
			formData.set('token',token);
			
			axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/user/logout/',
              data: formData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
                        })
            .then(function (response,status, xhr) {
                if (response.status === 200){
             
                    window.localStorage.clear()
                }
                console.log(response);

            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

		}
	}
	render(){
		return(
		<span onClick={this.handleLogout}  >Logout</span>
			)

	}

}

class UserMenu extends Component{
	render(){
		return(
				<ButtonToolbar>
				    <DropdownButton background-color= "white" title="Default button" id="dropdown-size-medium">
				      <MenuItem eventKey="1">Action</MenuItem>
				      <MenuItem eventKey="2">Another action</MenuItem>
				      <MenuItem eventKey="3">Something else here</MenuItem>
				      <MenuItem divider />
				      <MenuItem eventKey="4"><Logout addToken={this.props.addToken} /> </MenuItem>
				    </DropdownButton>
				 </ButtonToolbar>
			)
	}
}
const style1= {
	cart:{
		width: '22px',
		marginBottom: '55px',
	},
	cartItems:{
		marginTop: '13px',
	},
	cartItems1:{
		    position: 'relative',
		    display: 'inline-block',
		    padding: '11px 27px 1px 13px',
		    marginTop: '17px',
	},
}
export default class Header extends Component{
	// constructor(props) {
 //    super(props);
 //    this.state = {cartItems: null};
 //  }

	render(){
		const cartItems=this.props.cartItems;
		// const cartItem=null;
		return(
			<MuiThemeProvider>
				<header>
					<div id="flipkart-navbar">   
					 <div className="row">
					 <div float="left"> 
					 	<Link to={`/`} >
					   			<img style={style} src={require('../../static/img/fk-logo_9fddff.png')} />
					   	</Link>
					   <input className="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" name=""/>
					   <button className="flipkart-navbar-button col-xs-1">
					     Search 
					   </button>
					</div>
					<div float="left"> 
					   {this.props.Token ? <UserMenu addToken={this.props.addToken} addUserName={this.props.addUserName} /> :<Login addUserName={this.props.addUserName} addToken={this.props.addToken} /> }
					   
					   <span className='right  right1'> More </span>
					   <span className='right'>
					   {cartItems ? (
						   <Badge
						      badgeContent={cartItems.length}
						      primary={true}
						    ><img style={style1.cart} src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>
						    </Badge>
					   		):
					   		<img width= "22px"src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>
						   
					   		}
					<Link to={`/viewCart`} >
					    	Cart 
					</Link>
					    </span>
					</div>
					 </div>  
					</div>			
				</header>
			</MuiThemeProvider>
			);

	}

}




