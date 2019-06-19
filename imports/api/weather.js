
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'

export const Weather = new Mongo.Collection("weather");

if (Meteor.isServer) {
	
}

Meteor.methods({
	'checkWeather.query'(zip) {
		this.unblock();
		try {
		 	const result = HTTP.call(
		 		"GET",
				"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e6d445b87577a86118b790cb4543a748",
	 			{},
	 			function(error, response){
				 	if ( error ) {
				    	console.log(error);
				  	} else {
				    	console.log(response);
				    	return response;
					}	
	 			}
			);
		  
		} catch (e) {
		  // Got a network error, timeout, or HTTP error in the 400 or 500 range.
		  return false;
		}
	}
});
