import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class Header extends React.Component{



	render() {
		return (
			<div className="copyright">
				<div className="container">
				  Design: <a href="http://templated.co">TEMPLATED</a> Created by: Jonathan Diaz
				</div>
			</div>
		)
	}
}