import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
// import {Button} from 'material-ui/Button';
import{ Button } from 'react-bootstrap';
const style1={
	paper:{
		
		display: 'inline-block',
    	margin: '4px 18px 16px 27px',
		width: '1232px',
		backgroundColor: '#fff',
	    borderRadius: '2px',
	    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',

	    marginBottom: '100px',
	},
	paper1:{
		width:'100%',
		borderBottom: '1px solid #f0f0f0',
    	padding: '16px 31px 0 25px',
    	display: 'flex',
        justifyContent: 'space-between',
    	minHeight: '47px',
	},
	paper1span:{
		textTransform: 'uppercase',
	    color: '#212121',
	    fontSize: '16px',
	    fontWeight: '500',
	},
	paper2:{
		textAlign: 'center',
	    padding: '30px 0 36px 0',
	},
	paper2span:{
		display: 'block',
	    fontSize: '18px',
	    marginTop: '24px',
	}

}

const item={
	paper1div:{
		    display: 'inline-flex',
		    marginTop: '20px',
	},
	paper1:{
		display: 'inlineBlock',
	    margin: '0 18px 16px 0',
	    // display: 'flex',
		backgroundColor: '#fff',
		borderRadius: '2px',
		boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',
		width: '848px',
		marginTop: '30px',
	},
	
	imgdiv:{
	    WebkitFlex: '0 0 120px',
	    MsFlex: '0 0 120px',
	    flex: '0 0 120px',
	    textAlign: 'center',
	},
	img:{
		textDecoration: 'none',
	    color: 'inherit',
	    border: 'none',
	    outline: 'none',
	    width: '131px',
	    height: '150px',
	    marginBottom: '10px',
	    marginTop: '10px',
	    marginLeft: '40px',
	    float: 'left',
	},
	paper1div1:{
		padding: '0 24px 12px 24px',
		verticalAlign: 'top',
		minHeight: '112px',
		WebkitFlex: '1 1',
		MsFlex: '1 1',
		flex: '1 1',
		overflow: 'hidden',		
	},
	div1div1:{
		display: 'block',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap',
	},
	div1div2:{
		marginTop: '5px',
	},
	div1div3:{
		marginTop: '11px',
	},
	div1div4:{
		display: '-webkit-flex',
	    display: '-ms-flexbox',
	    display: 'flex',
	    fontSize: '14px',
	    WebkitAlignItems: 'flex-end',
	    MsFlexAlign: 'end',
	    alignItems: 'flex-end',
	    marginBottom: '3px',
	    marginTop: '10px',
	},
	paper1div11:{
		fontSize: '16px',
	    color: '#212121',
	    lineHeight: '1',
	    display: 'inline',
	},

	price:{
		fontSize: '20px',
	    fontWeight: '500',
	    display: 'inline-block',
	    marginRight: '12px',
	    lineHeight: '1',
	},
	offer:{
		display: 'inline-block',
	    color: '#388e3c',
	    fontWeight: '500',
	    margin: '0 10px',
	    cursor: 'pointer',
	},
	div3:{
		verticalAlign: 'top',
	    flex: '0 0 242px',
	},
	div31:{
		fontSize: '14px',
	    color: '#212121',
	    lineHeight: '1',
	},
	div32:{
		fontSize: '12px',
	    color: '#878787',
	    marginTop: '9px',
	},
	place:{
		    top: '173.449px',
		    left: '25.7924px',
		    marginBottom: '52px',
	},
	placeDiv:{
		    padding: '16px 23px',
		    display: '-webkit-flex',
		    display: '-ms-flexbox',
		    display: 'flex',
		    justifyContent: 'flex-end',
		    background: '#fff',
		    borderTop: '1px solid #f0f0f0',
		    boxShadow: '0 -2px 10px 0 rgba(0, 0, 0, .1)',
			marginTop: '55px',
			marginBottom: '-52px',
	},
	link:{
		    textDecoration: 'none',
		    color: 'inherit',
		    border: 'none',
		    outline: 'none',
	},
	button:{
		    marginRight: '16px',
		    padding: '14px 30px',
		    backgroundColor: '#fff',
		    color: '#212121',
			padding: '15px 30px',
			minWidth: '250px',
			marginRight: '6px',
			textTransform: 'uppercase',
			borderRadius: '2px',
			boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .1)',
			fontSize: '16px',
			fontWeight: '500',

			background: '#fff',
			boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',
			border: 'none',
			color: 'Black',
	},
	button1:{
		padding: '15px 30px',
	    minWidth: '250px',
	    marginRight: '6px',
	    textTransform: 'uppercase',
	    borderRadius: '2px',
	    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .1)',
	    fontSize: '16px',
	    fontWeight: '500',

		background: '#fb641b',
		boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',
		border: 'none',
		color: '#fff',
	}
}
const paper2={
	paper2:{
		    width: '376px',
		    display: 'inline-block',
		    verticalAlign: 'top',
		    float: 'right',
		    marginTop: '-296px',
	},
	div2:{
		display: 'inline-block',
	    height: '100%',
	    width: 'inherit',
	},
	div12:{
		background: '#fff',
	    borderRadius: '2px',
	    minHeight: '47px',
	    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, .2)',
	},
	styleDetail:{
		textTransform: 'uppercase',
	    padding: '13px 24px',
	    borderBottom: '1px solid #f0f0f0',
	    fontWeight: '500',
	    color: '#878787',
	    minHeight: '47px',
	    borderRadius: '2px 2px 0 0',
	},
	priceItem:{
		borderBottom: '1px solid #f0f0f0',
	    padding: '0 24px',
	    fontSize: '15px',
	},
	item1:{
		    display: 'flex',
		    justifyContent: 'space-between',
		    margin: '20px 0',
	},
	Payable:{
		borderTop: '1px dashed #e0e0e0',
	    marginBottom: '20px',
	},
	Payable1:{
		fontWeight:'500',
		marginBottom: '0',
	},
	fotter:{
		padding: '20px 24px',
	    fontSize: '14px',
	    display: '-webkit-flex',
	    display: '-ms-flexbox',
	    display: 'flex',
	    justifyContent: 'space-between',
	    borderRadius: '2px',
	},
	fotterSpan:{
		color: '#388e3c',
	    fontWeight: '500',
	}


}

export default class Cart extends Component {
	render(){
		const cartItems=this.props.cartItems.length;
		const Product=this.props.product.find(item=>item.id === this.props.cartItems[0]);
	return(
		<MuiThemeProvider>
		
			<Paper style={style1.paper} zDepth={1} >
				<Paper style={style1.paper1} zDepth={1}> <span style={style1.paper1span}> MY CART  </span>
				</Paper>
			{cartItems !=0  ? (
				<div>
					<Paper zDepth={1} style={item.paper1} >
					<div style={item.paper1div}>
						<div style={item.imgdiv}>
							<img style={item.img} src={Product.img} />
						</div>
						<div style={item.paper1div1}>
							<div style={item.div1div1}>
								<Link style={item.paper1div11} to="/" >Dell Inspiron Core i3 6th Gen - (4 GB/1 TB HDD/Ubuntu) 5567 Notebook </Link>
							</div>
							<div style={item.div1div2}>15.6 inch, Black, 2.36 kg</div>
							<div style={item.div1div3}>Seller: SAMRAT</div>
							<div style={item.div1div4}>
								<div style={item.price}>1200</div>
								<div style={item.offer}>
									<span>1 Offer Applied</span>
								</div>
							</div>
						</div>
						<div style={item.div3}>
							<div style={item.div31}><span>Free delivery by Tue, Apr 10</span></div>
							<div style={item.div32}><span>10 Days Replacement Policy</span></div>
						</div>
					</div>
						<div style={item.place}>
							<div style={item.placeDiv}>
								<Link to= {'/'} style={item.link}>
								 	<Button style={item.button} >
								 		<span>Continue shopping</span>
								 	</Button>
								 </Link>
								<Button style={item.button1} ><span>Place Order</span></Button>
							</div>
						</div>
					 </Paper>
				 <Paper zDepth={1} style={paper2.paper2}>
				 	<div style={paper2.div1} >
				 		<div style={paper2.div12 }>
				 			<div style={paper2.styleDetail}>
							    <span>Price details</span>
							</div>
							<div style={paper2.priceItem}>
							    <div style={paper2.item1}> 
							        <div>Price (3 items)</div>
							        <div class=""> ₹35,665</div>
							    </div>
							    <div style={paper2.item1}>
							        <div>Delivery Charges</div>
							        <div class=""> ₹50</div>
							    </div>
							    <div style={paper2.Payable}>
							        <div>
							            <div style={paper2.Payable1} >Amount Payable</div>
							            <div display='block'> ₹35,715</div>
							        </div>
							    </div>
							</div>
							<div style={paper2.fotter}>
							    <span style={paper2.fotterSpan} >Your Total Savings on this order <div >₹<span>915</span></div></span>
							</div>
				 		</div> 
					</div>
				 </Paper>
				 </div>
				):(

				<div>
					<Paper zDepth={0} style={style1.paper2} >
						<img  height='162px' src={require("../../static/img/empty-cart_ee6141.png")} />
						<span style={style1.paper2span} >Your Shopping Cart is empty </span>
					</Paper>
				</div>
				)}
				
			</Paper>

		</MuiThemeProvider>		
		
		);

	}

}