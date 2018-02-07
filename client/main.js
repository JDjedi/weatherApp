import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';

import './main.html';
Meteor.subscribe('weather');

if (Meteor.isClient) {
	Template.counterButton.onCreated(function helloOnCreated() {
	  // counter starts at 0
	  this.counter = new ReactiveVar(0);
	});

	Template.counterButton.helpers({
	  counter() {
	    return Template.instance().counter.get();
	  }
	});

	Template.counterButton.events({
	  'click button'(event, instance) {
	    // increment the counter when button is clicked
	    instance.counter.set(instance.counter.get() + 1);
	  }
	});

	Template.weatherAppData.helpers({
		location: function() {
			return Session.get('location');
		}
	})

	Template.weatherAppData.events({
		'click .find-weather': function(evt, tpl) {
			var stateQuery = tpl.find('input#state').value;
			var cityQuery = tpl.find('input#city').value;
		  Meteor.call("checkWeather", stateQuery, cityQuery, function(error, results) {
		  	if (error) {
		  		Session.set('location', {error: err});
		  	} else {
		  		Session.set('location', results);
		  		console.log(results);
		  		return results
		  	}
		  });
		}

	});
}



