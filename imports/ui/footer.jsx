import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class Header extends React.Component{



	render() {
		return (
		    <div className="footer">
		    	<h2>Get in touch</h2>
				<div className="copyright">
					Created by: <a href="https://github.com/JDjedi">Jonathan Diaz</a>
				</div>
		    </div>
		)
	}
}