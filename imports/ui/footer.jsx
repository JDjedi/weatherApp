import React from 'react';
import { Meteor } from 'meteor/meteor'


export default class Header extends React.Component{



	render() {
		return (
			<div className="footer">
				<div className="container">
				  <section>
				    <header>
				      <h2>Get in touch</h2>
				      <a href="https://github.com/JDjedi">Jonathan Diaz</a>
				    </header>
				  </section>
				</div>
			</div>
		)
	}
}