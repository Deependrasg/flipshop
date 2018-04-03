import React,{Component}from 'react';
import Login  from '../login/login.js'; 

export default class Header extends Component{

	render(){
		return(
				<header>
					<div id="flipkart-navbar">   
					 <div className="row">
					   <span id='FlipKart'> Flipkart</span>
					   <input className="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" name=""/>
					   <button className="flipkart-navbar-button col-xs-1">
					     Search 
					   </button>
					   <Login />
					   <span className='right  right1'> More </span>
					   <span className='right'> Cart </span>
					 </div>  
					 </div>			
				</header>
			);

	}

}