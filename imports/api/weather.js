
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'
import { check } from 'meteor/check'
import { Session } from 'meteor/session'

export const Weather = new Mongo.Collection("weather");

if (Meteor.isServer) {
	
}

Meteor.methods({
	checkWeatherQuery: function(zip) {
		this.unblock();
		check(zip, String);
		try {
			let checkWeatherResponse = HTTP.get(
				"http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=e6d445b87577a86118b790cb4543a748",
	 			{}
			);	
			let result = checkWeatherResponse
			return result	
		} catch(err) {
			throw new Meteor.Error(err)
		}

	}
});

