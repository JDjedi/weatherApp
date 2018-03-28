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

		  		if (results.current_observation.weather === "Rain") {
		  			$("body").css({"background-image": "url('https://www.imgbase.info/images/safe-wallpapers/photography/water/43917_water_rain.jpg')"});
		  		} else if (results.current_observation.weather === "Mostly Cloudy") {
		  			$("body").css({"background-image": "url('https://wallpaperstock.net/storm-clouds-wallpapers_34797_1920x1080.jpg')"});
		  		} else if (results.current_observation.weather === "Overcast") {
		  			$("body").css({"background-image": "url('http://s1.1zoom.me/b3452/685/Thundercloud_Clouds_Hill_520081_1920x1080.jpg')"});
		  		} else if (results.current_observation.weather === "Thunderstorm") {
		  			$("body").css({"background-image": "url('http://natbg.com/wp-content/uploads/2016/06/nature-lightning-storm-mountains-rain-high-quality-picture.jpg')"});
		  		} else if (results.current_observation.weather === "Clear") {
		  			$("body").css({"background-image": "url('http://wpnature.com/wp-content/uploads/2016/08/field-sunny-day-blue-light-white-sky-trees-nature-sun-living-country-clouds-green-landscape-full-hd-wallpaper.jpg')"});
		  		} else if (results.current_observation.weather === "Partly Cloudy") {
		  			$("body").css({"background-image": "url('https://wallpaperscraft.com/image/clouds_sun_sunset_colors_height_air_sky_48024_1920x1080.jpg')"});
		  		} else {
		  			return results
		  		}
		  		return results
		  	}
		  });
		},

		'click .toggle-menu': function() {
			Session.set('toggleMenu', false);
				$("body").css({"background-image": ""});
		}
	});
}

//console.log();
// else if (results.current_observation.weather === "") {
// 	$("body").css({"background-image": "url('')"});
// }



