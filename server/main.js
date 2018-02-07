import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.methods({
	    checkWeather: function (stateQuery, cityQuery) {
	      this.unblock();
	      var apiURL = 'http://api.wunderground.com/api/bb60b5fbf63bb327/conditions/q/' + stateQuery + '/' + cityQuery + '.json';
				var apiCall = function (apiURL, callback) {
					try {
						var reply = HTTP.get(apiURL).data;
						callback(null, reply);
					} catch (error) {
						if (error.response) {
							var errorCode = error.response.data.code;
							var errorMessage = error.response.data.message;
						} else {
							var errorCode = 500;
							var errorMessage = 'Cannot access the API';
						}
						var theError = new Meteor.Error(errorCode, errorMessage);
						callback(theError, null);
					}
				}

				var response = Meteor.wrapAsync(apiCall)(apiURL);
				return response;
	    }
	});
});

