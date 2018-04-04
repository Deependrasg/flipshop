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
}

export const ProductView = ({ match }) => {
  const product = Product.find(item => item.id === match.params.id);
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
            <Button bsStyle="primary" style={style1.button} >  View All Products </Button>
            <Button bsStyle="primary" style={style1.button1} > View All Products </Button>
          </Paper>
      </div>
      <h3>{ product.id } - { product.label }</h3>  
      <Link to={`/offers`}>Back to catalog</Link>
    </div>

</MuiThemeProvider>

  )
}

// ic_shopping_cart_white_24dp_2x.png