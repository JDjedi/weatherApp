import React from 'react';

import { Weather } from '../api/weather';
import Header from './header';
import Footer from './footer';
import Copyright from './copyright';


export default class Main extends React.Component {

	constructor(props) {
		super(props);				
		this.state = {
			error: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault(); 

		let queryZip = this.refs.query.value.trim();

		Meteor.call('checkWeather.query', queryZip, (err, res) => {
			if (err) {
				this.setState({error: err.reason})
			}
		})
		
	}

	render() {
		return (
			<div className="main">
				<Header />
				<div className="content" className="container">
				    <div className="header-style">
				      <h2>Welcome to Arda, your online Weather App!</h2>
				    </div>
					<form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate className="boxed-view__form">
						<input type="query" ref="query" name="query" placeholder="query"/> 
						<button className="button">Whats it like outside?</button>
					</form>       
				</div>
				<Footer />
				<Copyright />
			</div>
		)
	}
}










