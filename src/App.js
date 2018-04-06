import React, { Component } from 'react';
import {BrowserRouter as Router,  Switch,Route } from 'react-router-dom';
import Header from './component/common/header.js';
import Fotter from './component/common/fotter.js';
import Navibar from './component/common/navbar.js';
import Home from './component/Home/home.js';
import './static/css/app.css';
import Offer,{ProductView} from './component/Offer/dailyOffer.js';
import Cart from './component/Offer/Cart.js';

const Product=[
  {
    id: '1',
    img: require('./static/img/clipping_path_with_shadow_before_01.jpg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '2',
    img: require('./static/img/lr01-02-new-stylish-adk-original-imafff3udzb5z4ym (1).jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '3',
    img: require('./static/img/lcs-8060-lois-caron-original-imaf3dfchev2dgsz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '4',
    img: require('./static/img/209blublu-casado-original-imafybhev5yfpu7s.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '5',
    img: require('./static/img/m-17a5sm39u008i902-united-colors-of-benetton-original-imafykfzgzpskfsh.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '6',
    img: require('./static/img/free-tz-1129-c1-trendz-style-original-imaff2a3xdvfjqxt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '7',
    img: require('./static/img/free-hnc000120-hnc-retail-original-imaepdgj6n8r3vhz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '8',
    img: require('./static/img/free-vjs366-2-v-j-fashion-original-imaewjjmx7bnkfzf.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {

    id: '9',
    img: require('./static/img/1-free-tz-arun-black1-trendz-style-1-original-imaer4j4evjjy4xz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '10',
    img: require('./static/img/1-free-tz-arun-blue-trendz-style-1-original-imaer4aynuvez57f.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '11',
    img: require('./static/img/bluebrown-11-panipat-textile-hub-blanket-original-imaezcm7hwn8j4yg.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '12',
    img: require('./static/img/rk-925425-radhy-krishna-overseas-plain-polo-blanket-original-imaenexd2zhzwjbt.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },

  {
    id: '13',
    img: require('./static/img/rkblkt5-rkblkt05-broom-original-imaez8p2yykyrcpw.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '14',
    img: require('./static/img/fleece-blanket-1-pcs-maroon-color-size-60inch-x90inch-btlbrwn1-original-imaezx9bzxca52k4.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
  {
    id: '15',
    img: require('./static/img/b13-the-chaddar-feathers-double-bed-blanket-exims313-original-imaedmzgzrgy3hjz.jpeg'),
    name:'White Stunning Shoes',
    Price:'Rs 5000' ,
  },
]


class App extends Component {
  constructor () {
    super();
    this.state = {
      cartItems: [],
      token: window.localStorage.access_token,
      userName:null,
    }
    this.addToCart=this.addToCart.bind(this);
    this.addToken=this.addToken.bind(this);
  }

  addToCart (action, item) {
    if (action === 'add') {
      const cart = [ ...this.state.cartItems ];
      cart.push(item);
      this.setState({ cartItems: cart });
    }
  }

  addToken(token){
    if(token){
      this.setState({'token':token})
    } else {
      this.setState({'token': null})
    }
  }

  addUserName(userName){
    if(userName){
      this.setState({'userName':userName})
    }else {
      this.setState({'userName':userName})
    }
  }
  render() {

      const ProductViewWithProps = props => (
        <ProductView {...props} addToCart={this.addToCart} />
      );

      const CartItemtoSale= props =>(
        <Cart cartItems={this.state.cartItems}  product={Product}/>
        );

    return (
      <Router>
        <div className="App">
            <Header 
                  cartItems={this.state.cartItems} 
                  userName={this.state.userName}
                  addUserName={this.addUserName} 
                  Token={this.state.token} 
                  addToken={this.addToken} />
            <Navibar />

            <Route exact path='/' component={Home} />
            <Route exact path='/offers' component={Offer} />
            <Route path="/offers/:id" component={ProductViewWithProps} />
            <Route exact path='/viewCart' component={CartItemtoSale} />
            <Fotter />
        </div>
      </Router>
    );
  }
}

export default App;

