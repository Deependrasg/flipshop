import React,{Component}from 'react';
import Login  from '../login/login.js'; 
import Badge from 'material-ui/Badge';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style={
	float: 'left',
    marginLeft: '92px',
    height: '31px',
    marginTop: '12px',
}
export default class Header extends Component{
	// constructor(props) {
 //    super(props);
 //    this.state = {cartItems: null};
 //  }

	render(){
		// const cartItems=this.state.cartItems;
		const cartItem=null;
		return(
			<MuiThemeProvider>
				<header>
					<div id="flipkart-navbar">   
					 <div className="row">
					   <img style={style} src={require('../../static/img/fk-logo_9fddff.png')} />
					   <input className="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" name=""/>
					   <button className="flipkart-navbar-button col-xs-1">
					     Search 
					   </button>
					   <Login />
					   <span className='right'>
					   <span className='right  right1'> More </span>
					   {cartItem ? (
						   <Badge
						      badgeContent={cartItem}
						      primary={true}
						    ><img width= "22px"src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>
						    </Badge>
					   		):
					   		<img width= "22px"src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/>
						   
					   }
					    	Cart 
					    </span>
					 </div>  
					 </div>			
				</header>
			</MuiThemeProvider>
			);

	}

}




