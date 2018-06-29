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
	right_section:{
		display : 'flex',
		float : 'right',
		marginRight: '30px',
	},

	right_sectionDiv:{
		marginLeft:'15px',
	},
	cart_new:{

    height: '22px',
    verticalAlign: 'middle',
    marginTop: '0px',
    marginRight: '15px',
	},
	MuiBadgeBadge: {
	    marginTop: '6px',
	    // position: 'absolute',
	    // top: '0',
	    color: '#fee242',
	},
	cart_text:{
		color :'#fff',
		textDecoration:'none',
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
							<div style={style1.right_section} >
							   {this.props.Token ? <UserMenu addToken={this.props.addToken} addUserName={this.props.addUserName} /> :<Login addUserName={this.props.addUserName} addToken={this.props.addToken} /> }

							 <div className="more">
               <div className="mare-item">
                   <div className="more-text"><span>More</span></div>
		               </div>
		           </div>
		           <a className="cart">
		               <div className="cart-item">
		                  <i className="fa fa-cart-plus"></i>&nbsp;
		                    <span className='####'>
				                 {cartItems ? (
				                   <Badge
				                      badgeContent={cartItems.length}
				                      primary={true}
				                      style={style1.MuiBadgeBadge}
				                    >
				                    <img style={style1.cart_new} src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>
				                    </Badge>
				                    ):
				                    <img style={style1.cart_new} src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>

				                    }
				                <Link style={style1.cart_text} to={`/viewCart`} >
				                      Cart
				                </Link>
				                  </span>
		               </div>
		           </a>
							</div>
					 </div>
					</div>
				</header>
			</MuiThemeProvider>
			);

	}

}




