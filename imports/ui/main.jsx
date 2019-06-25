import React from 'react';
import { Session } from 'meteor/session'

import { Weather } from '../api/weather';

import Header from './header';
import Footer from './footer';
import Copyright from './copyright';


export default class Main extends React.Component {

	constructor(props) {
		super(props);				
		this.state = {
			error: undefined,
			queryWeather: undefined
		};
	}

	checkWeather(e) {
		e.preventDefault(); 
		let queryZip = this.refs.query.value.trim();
		Meteor.call('checkWeatherQuery', queryZip, (error, result) => {
			if (!error) {
				
				this.setState({queryWeather: result.data})
				console.log(this.state.queryWeather);
				return
			} else {
				return this.setState({error: result})
			}
		});
		
	}

	render() {
		return (
			<div className="main">
				<Header />
				<div className="content" className="container">
				    <div className="header-style">
				      <h2>Welcome to Arda, your online Weather App!</h2>
				    </div>
					<form className="form" onSubmit={this.checkWeather.bind(this)} noValidate className="boxed-view__form">
						<input type="query" ref="query" name="query" placeholder="query"/> 
						<button className="button">Whats it like outside?</button>
						
					</form>
					<div>
						{this.state.error ? <p>{this.state.error}</p> : undefined}
						{this.state.queryWeather ?
							<div>
								<p>{this.state.queryWeather.name}</p>
								<p>{this.state.queryWeather.weather[0].main}</p>
								<p>{this.state.queryWeather.weather[0].description}</p>
							</div>
							: undefined
						}
					</div>
				</div>
				<Footer />
				<Copyright />
			</div>
		)
	}
}










