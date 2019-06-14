import React from 'react';
import { Meteor } from 'meteor/meteor'



export default class Header extends React.Component{

	render() {
		return (
			<div id="header">
				<div class="container"> 
				  <div id="logo">
				    <h1 id="logo"><a href="#">Arda</a></h1>
				  </div>
				</div>
			</div>
		)
	}
}