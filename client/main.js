import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';

import './main.html';
Meteor.subscribe('weather');

if (Meteor.isClient) {

	Template.weatherAppData.onRendered({
		toggleMenu: function() {
			Session.set('toggleMenu', false);
		}
	});

	Template.weatherAppData.helpers({
		location: function() {
			return Session.get('location');
		},
		toggleMenu: function() {
			return Session.get('toggleMenu');
		}
	});

	Template.weatherAppData.events({
		'click .find-weather': function(evt, tpl) {
			Session.set('toggleMenu', true);
			var stateQuery = tpl.find('input#state').value;
			var cityQuery = tpl.find('input#city').value;
		  Meteor.call("checkWeather", stateQuery, cityQuery, function(error, results) {
		  	if (error) {
		  		Session.set('location', {error: err});
		  	} else {
		  		Session.set('location', results);

		  		if (results.current_observation.weather === "Overcast") {
		  			console.log("Success!");
		  			//need to grab the css element "background-image:" and change it to the image in resources/images/image.jpg
		  		}
		  		return results
		  	}
		  });
		},

		'click .toggle-menu': function() {
			Session.set('toggleMenu', false);
		}
	});
}

//console.log();




