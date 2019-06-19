import React from 'react';
import { Meteor } from 'meteor/meteor'



export default class Header extends React.Component{

	render() {
		return (
			<div className="header">
				<div className="container"> 
				  <div className="logo">
				    <h1 className="logo"><a href="#">Arda</a></h1>
				  </div>
				</div>
			</div>
		)
	}
}