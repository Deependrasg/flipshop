import React,{Component}from 'react';
import Login  from '../login/login.js'; 


const style={
	float: 'left',
    marginLeft: '92px',
    height: '31px',
    marginTop: '12px',
}
export default class Header extends Component{

	render(){
		return(
				<header>
					<div id="flipkart-navbar">   
					 <div className="row">
					   <img style={style} src={require('../../static/img/fk-logo_9fddff.png')} />
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




