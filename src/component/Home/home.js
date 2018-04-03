import React, { Component } from 'react';
import Slider from './slider.js';
import Component1 from './HomeComponent1.js';
import Component2 from './component2.js';

			// <Component1 />
export default class Home extends Component{
	render(){
		return (
			<div>
			<Slider />

			<Component2 />
			</div>

			);
	}
}
