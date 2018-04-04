import React,{Component}from 'react';
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Slider1 from 
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';



import{ Button } from 'react-bootstrap';
// const style={
// 		width:'30%',
// 		height:'200px',

// }


const style = {
  height: 200,
  width: '29.5%',
  margin: 20,
  // textAlign: 'center',
  display: 'inline-block',
};

const PaperStyle = {
  height: 150,
  width: '18%',
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

const style1={
    height:'100%',
    width:'100%',
  };

const item=[
    {
    img: require('../../static/img/Flipkart-Big-Diwali-Sale-Offers-2017.jpg'),
    title: 'Breakfast',
    author: 'jill111',
    description:'this a protocol curt hails'
   },
   {
    img: require('../../static/img/flipkart-diwali-dhanteras-sale-offers-2017.jpg'),
    title: 'Breakfast',
    author: 'jill111',
    description:'this a protocol curt hails'
   },
   {
    img: require('../../static/img/Returns_Banner.jpg'),
    title: 'Breakfast',
    author: 'jill111',
    description:'this a protocol curt hails'
   },

]

  const just= [{
    img: require('../../static/img/Returns_Banner.jpg'),
    
   },
   {
    img: require('../../static/img/Infographic_Timeline_BANNER.jpg'),
  
   },
   {
    img: require('../../static/img/20150728-173942-banner-1.jpg'),

   },
   {
    img: require('../../static/img/67743d405e56cb1d41a9c41c60afcbcd--banner-design-minimum.jpg'),
    
   },
   {
    img: require('../../static/img/for-india-song_mainbanner.jpg'),
  
   },
]


const Product=[
  {
    img: require('../../static/img/clipping_path_with_shadow_before_01.jpg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/lr01-02-new-stylish-adk-original-imafff3udzb5z4ym (1).jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    img: require('../../static/img/lcs-8060-lois-caron-original-imaf3dfchev2dgsz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/209blublu-casado-original-imafybhev5yfpu7s.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/m-17a5sm39u008i902-united-colors-of-benetton-original-imafykfzgzpskfsh.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },


]

const Item2=[
  {
    img: require('../../static/img/Big-shopping-days-flipkart-dec-18th-to-dec-21st-cashback-deals-discounts.jpg'),
  },
  {
    img: require('../../static/img/20130527-230650-homepage-banner-tuesday-sale-watches-internal.jpg'),
  },
  {
    img: require('../../static/img/uk-tribes-fresh-arrival-banner-for-flipkart-designed-by-reelslug.jpg'),
  },
  ]

  // {
  //   img: require('../../static/img/20160211_192051_730x300_image-730-300-2.jpg'),
  // },
// 1)
// 2)
// 4)NF-CC-005 Product Sale HTML5 Banners_Preview.jpg
// 4)
// 6)37369-titan-onam-offer.jpg
// 7)9e223ba2bd1f55f58331b0c3a5e9765c.png  


const Product1=[
  {
    img: require('../../static/img/free-tz-1129-c1-trendz-style-original-imaff2a3xdvfjqxt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/free-hnc000120-hnc-retail-original-imaepdgj6n8r3vhz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    img: require('../../static/img/free-vjs366-2-v-j-fashion-original-imaewjjmx7bnkfzf.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/1-free-tz-arun-black1-trendz-style-1-original-imaer4j4evjjy4xz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/1-free-tz-arun-blue-trendz-style-1-original-imaer4aynuvez57f.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },


]

const Product2=[
  {
    img: require('../../static/img/bluebrown-11-panipat-textile-hub-blanket-original-imaezcm7hwn8j4yg.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/rk-925425-radhy-krishna-overseas-plain-polo-blanket-original-imaenexd2zhzwjbt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    img: require('../../static/img/rkblkt5-rkblkt05-broom-original-imaez8p2yykyrcpw.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/fleece-blanket-1-pcs-maroon-color-size-60inch-x90inch-btlbrwn1-original-imaezx9bzxca52k4.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    img: require('../../static/img/b13-the-chaddar-feathers-double-bed-blanket-exims313-original-imaedmzgzrgy3hjz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },


]


const ItemStypel={
          height: 300,
          width:'100%',
          display: 'inline-block',
          marginTop:'10px',
          marginBottom:'10px',
          marginLeft:'10px',
          marginRight:'10px',
      }

const imageStyle={
      height:200,
      width:'29.5%',
      display: 'inline-block',
      margin:'20px',
}
const divStyle={
      display: 'inline-block',
      float:'right'
      // marginBottom:30,
}

const span={
    fontSize: '20px',
    lineHeight: 0.38,
    marginLeft: '20px'
    
}
const productimg1={
      height:'150px',
      width:'115px',
}

const productimg={
      height:'150px',
      width:'145px',
}

const productDiv={

      // margin:'20px',
      display: 'inline-block',
      width:'200px',
      height:'60%',
      margin:'5px',
      marginTop: '18px'

}
const ProductStyle={
    height: 300,
    width:'100%',
    marginTop:'20px',
}

const ProductHead={
    fontSize: '20px',
    lineHeight: 0.38,
     marginLeft: '20px',
     display: 'inline-block',

}

const productspan={
    display: 'block',
    marginBottom: '156px',
    fontSize: '30px',
}
const productbutton={
    marginTop: '-202px',
    marginRight: '15px',
    marginLeft: '20px',

}
export default class Slider extends Component{


  render() {

    return (
      <div>
      <MuiThemeProvider>
       <Paper  style={ProductStyle} zDepth={3}>
          <children>
            <div style={ProductHead} >
              <span style={productspan} > Trending Offers </span>
             <Link to='/offers'> <Button bsStyle="primary" style={productbutton} >  View All Products </Button></Link> 
            </div>
          </children>
          {Product.map((data)=>(
            <div style={productDiv} >
              <img style={productimg} src={data.img} />
              <h5 >{data.name} </h5>
              <h6>{data.Price} </h6>
              <h6>Shop Now </h6>
            </div>
            ))}
        </Paper>



        {item.map((data) => (
      	    <Paper style={style} zDepth={3} >
              <img style={style1} src={data.img} />
            </Paper>
            ))}

        <Paper  style={ProductStyle} zDepth={3}>
          <children>
            <div style={ProductHead} >
              <span style={productspan} >Trending Offers </span>
              <Button bsStyle="primary" style={productbutton} > View All Products </Button>
            </div>
          </children>
          {Product2.map((data)=>(
            <div style={productDiv} >
              <img style={productimg} src={data.img} />
              <h5 >{data.name} </h5>
              <h6>{data.Price} </h6>
              <h6>Shop Now </h6>
            </div>
            ))}
        </Paper>

        <Paper style={ItemStypel} zDepth={3}>
          <children><h2 style={span} >Deals of the  Day </h2>
          </children>
          
          {Item2.map((data)=>(
                <img  style={imageStyle} src={data.img} />
                
            ))}
        </Paper>

        <Paper  style={ProductStyle} zDepth={3}>
          <children>
            <div style={ProductHead} >
              <span style={productspan} >Trending Offers </span>
              <Button bsStyle="primary" style={productbutton} > View All Products </Button>
            </div>
          </children>
          {Product1.map((data)=>(
            <div style={productDiv} >
              <img style={productimg1} src={data.img} />
              <h5 >{data.name} </h5>
              <h6>{data.Price} </h6>
              <h6>Shop Now </h6>
            </div>
            ))}
        </Paper>



        {just.map((data) => (
            <Paper style={PaperStyle} zDepth={4} >
              <img style={style1} src={data.img} />
            </Paper>
            ))}
        



        <Paper  style={ProductStyle} zDepth={5}>
          <children>
            <div style={ProductHead} >
              <span style={productspan} >Trending Offers </span>
              <Button bsStyle="primary" style={productbutton} > View All Products </Button>
            </div>
          </children>
          {Product.map((data)=>(
            <div style={productDiv} >
              <img style={productimg} src={data.img} />
              <h5 >{data.name} </h5>
              <h6>{data.Price} </h6>
              <h6>Shop Now </h6>
            </div>
            ))}
        </Paper>

      </MuiThemeProvider>
      </div>
    );
  }
}