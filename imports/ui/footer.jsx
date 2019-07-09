import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class Header extends React.Component{



	render() {
		return (
		    <div className="footer">
		    	<h2>Get in touch</h2>
		    	<a href="https://github.com/JDjedi">Jonathan Diaz</a>
				<div className="copyright">
					  Design: <a href="http://templated.co">TEMPLATED</a> Created by: Jonathan Diaz
				</div>
		    </div>
		)
	}
}