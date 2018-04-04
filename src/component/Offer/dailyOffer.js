import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import{ Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    width:'200px',
    position: 'sticky',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  menu:{
    maxWidth:'200px',
  }
};

const offerzone={
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#000',
    borderBottom: 'solid 1px rgba(0, 0, 0, .05)',
    // padding: '15px 24px',
    lineHeight: '32px',
    maxWidth:'200px',
}

        // <Divider />
const MenuExampleIcons = () => (
 <MuiThemeProvider>
  <div>
    <Paper style={style.paper}>
      <Menu  >
        <MenuItem primaryText="Offer Zone"  style={offerzone}leftIcon={<RemoveRedEye />} />
        <MenuItem  style={style.menu}primaryText="Deals of the day"  />
        <MenuItem  style={style.menu}primaryText="Fashion & Lifestyle"  />
        <MenuItem  style={style.menu}primaryText="Mobiles & Tablets"  />
        <MenuItem  style={style.menu}primaryText="Electronics"  />
        <MenuItem  style={style.menu}primaryText="TVs and Appliances"  />
        <MenuItem  style={style.menu}primaryText="Home & Furniture"  />
        <MenuItem  style={style.menu}primaryText="Cars & Bikes"  />
        <MenuItem  style={style.menu}primaryText="Books, Toys and More"  />
        <Divider style={style.menu} />
        <MenuItem style={style.menu} primaryText="Remove" />
      </Menu>
    </Paper>
    
  </div>
</MuiThemeProvider>
);



const Product=[
  {
    id: '1',
    img: require('../../static/img/clipping_path_with_shadow_before_01.jpg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '2',
    img: require('../../static/img/lr01-02-new-stylish-adk-original-imafff3udzb5z4ym (1).jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '3',
    img: require('../../static/img/lcs-8060-lois-caron-original-imaf3dfchev2dgsz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '4',
    img: require('../../static/img/209blublu-casado-original-imafybhev5yfpu7s.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '5',
    img: require('../../static/img/m-17a5sm39u008i902-united-colors-of-benetton-original-imafykfzgzpskfsh.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '6',
    img: require('../../static/img/free-tz-1129-c1-trendz-style-original-imaff2a3xdvfjqxt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '7',
    img: require('../../static/img/free-hnc000120-hnc-retail-original-imaepdgj6n8r3vhz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '8',
    img: require('../../static/img/free-vjs366-2-v-j-fashion-original-imaewjjmx7bnkfzf.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {

    id: '9',
    img: require('../../static/img/1-free-tz-arun-black1-trendz-style-1-original-imaer4j4evjjy4xz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '10',
    img: require('../../static/img/1-free-tz-arun-blue-trendz-style-1-original-imaer4aynuvez57f.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '11',
    img: require('../../static/img/bluebrown-11-panipat-textile-hub-blanket-original-imaezcm7hwn8j4yg.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '12',
    img: require('../../static/img/rk-925425-radhy-krishna-overseas-plain-polo-blanket-original-imaenexd2zhzwjbt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '13',
    img: require('../../static/img/rkblkt5-rkblkt05-broom-original-imaez8p2yykyrcpw.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '14',
    img: require('../../static/img/fleece-blanket-1-pcs-maroon-color-size-60inch-x90inch-btlbrwn1-original-imaezx9bzxca52k4.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '15',
    img: require('../../static/img/b13-the-chaddar-feathers-double-bed-blanket-exims313-original-imaedmzgzrgy3hjz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },


]

const offer={
    width:'100%',

}
const divstyle={
    width:'1200px%',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    marginLeft: '230px',
}

const sidebarstyle={
    width:'20%',
}

const divdata={
    display: 'inline-block',
    width: '230px',
    height: '70%',
    margin: '18px 15px 15px',
}

const img={
   width:'80%',
   height:'200px',
}

const offerHeader={
    fontSize: '22px',
    lineHeight: '32px',
    // display: 'inline-block',
    fontWeight: '500',
    padding: '15px 20px',
    borderBottom: '1px solid rgba(0, 0, 0, .1)'
}

class Offer extends Component{
  render(){
    return(
      <MuiThemeProvider>
            <div  >
                  <MenuExampleIcons style={sidebarstyle} />

                <Paper style={divstyle} zDepth={1}>
                  <div style={offerHeader}> Deal Of the Day </div>
                  <Divider />
                  {Product.map((data)=>(
                        <div style={divdata}>
                        <Link to={`/offers/${data.id}`}>
                        <img style={img} src={data.img} />
                        </Link>
                        <h5 >{data.name} </h5>
                        <h6>{data.Price} </h6>
                        <h6>Shop Now </h6>
                        </div>
                    ))}
                </Paper>
            </div>
      </MuiThemeProvider>
      )
  }


}

export default Offer;

const style1={
  img:{cursor: 'crosshair',
      maxHeight: '350px',
      maxWidth: '416px',
      // verticalAlign: 'top',
      marginTop: '20px',
      // marginLeft: '50px',
      // marginRight: '50px',
      // verticalAlign: 'top',
      // marginBottom: '20px',
  },
  row1:{
    width: '570px',
    height:'516px',
  },
  div:{
    width: '450px',
    display: 'inline-block',
    float:'left',
    height: '415px',
    textAlign: 'center',
  },
  sidepaper:{
    overflow: 'hidden',
    position: 'relative',
    height:   '416px',
    width:    '100px',
    float:'left',
    borderBox:'0.5px',
    marginLeft:'15px',
  },
  sideImg:{
    width: '67%',
    height: '50px',
    marginTop: '8px',
    marginLeft: '5px',
    marginBottom: '5px'
  },
  clear:{
    clear:'both'
  },
  buttonpaper:{
    width:'100%',
    height:'100px',
    marginTop:'15px',
    marginLeft: '181px',
  },
  button:{
    padding: '18px 8px',
    borderRadius: '2px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',
    width: '38%',
    border: 'none',
    float: 'left',
    background: '#ff9f00',
    color: '#fff',
    marginLeft: '-63px',
    marginRight: '10px',
  },
  button1:{
    padding: '18px 8px',
    borderRadius: '2px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .2)',
    width: '38%',
    border: 'none',
    float: 'left',
    background: '#fb641b',
    color: '#fff',
  },
  floatleft:{
    float:"left",
  },
  rightdiv:{
    float: 'right',
    height: '700px',
    marginTop: '-519px',
    marginRight: '-51px',
  },
  pincode:{
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#2874f0',
    marginLeft: 'auto',
    position: 'relative',
    marginLeft: '-40px',
  },
  delivery:{
    color: '#878787',
    width: '110px',
    paddingRight: '10px',
    fontWeight: '500',
    marginLeft:'10px',
  },
  question:{
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#878787',
    fontWeight: '500',
    width: '16px',
    height: '16px',
    fontSize: '11px',
    lineHeight: '16px',
    textSlign: 'center',
    display: 'inline-block',
    border: 'solid 1px #e0e0e0',
    boxShadow: '0 0 1px 0 rgba(0, 0, 0, .2)',
    verticalAlign: 'middle',
    margin: '0 2px 0 8px',
    cursor: 'pointer',
  },
  free:{
    color: '#388e3c',
  },
  spanMargin:{
    marginLeft: '10px',
  },
  spanButton:{
    color: '#2874f0',
    border: 'none',
    fontSize: '14px',
    boxShadow: 'none',
    cursor: 'pointer',
    padding: '0',
    verticalAlign: 'middle',
    marginTop: '-2px',
    marginLeft:'2px',
    backgroundColor: 'white',
  },
  flex:{
        display: 'flex',
  },
  displayInline:{
    display: 'inline-flex',
  },
  offerPrice:{
        marginTop: '36px',
        marginLeft: '20px',
  },
  off:{
    marginLeft: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#388e3c',
    verticalAlign: 'middle',
  },
  ul:{
      marginLeft: '76px',
      marginBottom: '0px',
      marginTop: '-16px',
  },
  Retail:{
    marginLeft: "24px",
  }

}

export const ProductView = ( match ) => {
  const product = Product.find(item => item.id === match.match.params.id);
  return (
<MuiThemeProvider>
    <div>
      <div style={style1.row1}>
          <Paper style={style1.sidepaper} zDepth={1}>
          <img  style={style1.sideImg}  src={product.img} />
          <img  style={style1.sideImg}  src={product.img} />
          <img  style={style1.sideImg}  src={product.img} />
          <img  style={style1.sideImg}  src={product.img} />

          <Divider />
          </Paper>
        <Paper style={style1.div} zDepth={1} >

          <img style={style1.img} src={product.img} />
        </Paper> 
        <div style={style1.clear}> </div>
          <Paper style={style1.buttonpaper} zDepth={0}>         
          <Button bsStyle="primary" style={style1.button} onClick={() => match.addToCart('add', product.id)}>
            <img width= "22px"src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/> ADD TO CART </Button>
          <Button bsStyle="primary" style={style1.button1} ><img width= "22px"src={require('../../static/img/ic_shopping_cart_white_24dp_2x.png')}/> BUY NOW </Button>
          </Paper>
      </div>
      <div style={style1.rightdiv}>
        <Paper zDepth={0}>
            <div style={style1.floatleft} >
                <h4>HP 15 APU Dual Core E2 - (4 GB/500 GB HDD/DOS) 15Q-BY001AU Laptop</h4>
                <span>3.6  ★ &nbsp;</span>
                <span>
                    <span>710 Ratings&nbsp;</span>
                    <span >&amp;</span>
                    <span>&nbsp;150 Reviews</span>
                    <span><img height="21" src={require('../../static/img/fa_8b4b59.png')}  /></span>
                </span>
            </div>
            <div style={style1.clear}>
            <div>
                <span>Special Price</span>
            </div>
                <div style={style1.flex}> 
                  <h1 >₹ 16,990</h1>
                  <div style={style1.offerPrice}> <span>₹ 17,990 </span> 
                        <span style={style1.off}> 5 %off </span>
                        <span><img src={require('../../static/img/info-basic_ea3ba2.svg')} /></span>
                  </div>
                  </div>
                  <h5>Hurry, Only a few left! </h5> 
            </div>
            <div>
                <p style={style1.floatleft}>
                <img src={require('../../static/img/download.svg')} width="18" height="18" />
                <span style={style1.spanMargin}>No Cost EMIs from  ₹2,832 /month .Other EMIs from ₹824 /month</span>
                    <button style={style1.spanButton}><span >View Plans &nbsp;</span>
                        <img src={require('../../static/img/download (3).svg')} width="6" height="9" />
                    </button>
                </p>
            </div>
            <div>
                <p style={style1.floatleft}>
                <img src={require('../../static/img/download (1).svg')} width="18" height="18" />
                <span style={style1.spanMargin}>Get upto ₹8,200 off on exchange</span>
                    <button style={style1.spanButton}><span >Buy with Exchange &nbsp;</span>
                         <img src={require('../../static/img/download (3).svg')} width="6" height="9" />
                    </button>
                </p>
            </div>
            <div>
                <p style={style1.floatleft}>
                <img src={require('../../static/img/download (2).svg')} width="18" height="18" />
                <span style={style1.spanMargin} >Bank OfferExtra 5% off* with Axis Bank Buzz Credit Card</span>
                    <button style={style1.spanButton}><span >T&C</span>
                    </button>
                </p>
            </div>
            <div style={style1.clear}>
                <p style={style1.floatleft}>
                <img src={require('../../static/img/download.svg')} width="18" height="18" />
                <span style={style1.spanMargin}>Partner OfferDell Back To School Get 2 Years Additional Warranty with this Laptop from ₹999 per month.</span>
                    <button style={style1.spanButton}><span >Know More</span>
                    </button>
                </p>
            </div>

            <div >
                <div>
                  <div>
                    <span style={style1.delivery}>Delivery</span>
                  </div>
                   <div>
                      <svg width="12" height="12" viewBox="0 0 9 12" class="_3VH2pM" xmlns="http://www.w3.org/2000/svg"></svg>
                      <TextField
                        hintText="452001"
                        floatingLabelText="Check With Pin"
                      />
                      <span style={style1.pincode}> Clear </span> <br />
                   </div>
                  <div>
                    <span >Delivery by7 Apr, Saturday | </span>
                    <span style={style1.free}> Free </span>
                    <span style={style1.question}>?</span>
                  </div>
                  <div><button style={style1.spanButton}><span >View Details</span></button></div>
                </div> 
            </div>

            <div style={style1.displayInline}>
                <div>
                  <div>
                    <span style={style1.delivery}>Highlights</span>
                  </div>
                  <div style={style1.ul}>
                    <ul>
                        <li>Intel Core i3 Processor (6th Gen)</li>
                        <li>4 GB DDR4 RAM</li>
                        <li>Linux/Ubuntu Operating System</li>
                        <li>1 TB HDD</li>
                        <li>15.6 inch Display</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <span style={style1.delivery}>Services</span>
                  </div>
                  <div style={style1.ul}>
                    <ul>
                        <li>Intel Core i3 Processor (6th Gen)</li>
                        <li>4 GB DDR4 RAM</li>
                        <li>Linux/Ubuntu Operating System</li>
                        <li>1 TB HDD</li>
                        <li>15.6 inch Display</li>
                    </ul>
                  </div>
                </div>
            </div>
             <div>
                <div>
                  <span style={style1.delivery}>Seller</span>
                </div>
                <div style={style1.ul}>
                    <span style={style1.Retail}> Retail Net </span>
                </div>
            </div>
        </Paper>
      </div>
      <h3>{ product.id } - { product.label }</h3>  
      <Link to={`/offers`}>Back to catalog</Link>
    </div>

</MuiThemeProvider>

  )
}


