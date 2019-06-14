import React from 'react';

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

		let query = this.refs.query.value.trim();
		console.log(query);

		// this.props.loginWithPassword({email}, password, (err) => {
		// 	if (err) {
		// 		this.setState({error: "Unable to login, check email and or password."})
		// 	} else {
		// 		this.setState({error: ''})
		// 	}
		// })
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
						<button className="button">Login</button>
					</form>       
				</div>
				<Footer />
				<Copyright />
			</div>
		)
	}
}










