import React,{Component}from 'react';
import {Carousel} from 'react-bootstrap';
// import Slider1 from 

const style={
		width:'1200px',
		height:'400px',

}


export default class Slider extends Component{

	render(){
		return(
				<Carousel>
				  <Carousel.Item>
				    <img style= {style}  alt="900x500" src={require('../../static/img/slider4.jpg')} />
				    <Carousel.Caption>
				      <h3>First slide label</h3>
				      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img style= {style} alt="900x500" src={require('../../static/img/slider1.jpg')} />
				    <Carousel.Caption>
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img style= {style} alt="900x500" src={require('../../static/img/slider5.jpg')} />
				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img style= {style} alt="900x500" src={require('../../static/img/slider3.jpg')} />
				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img style= {style} alt="900x500" src={require('../../static/img/slider2.jpg')} />
				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			);

	}

}