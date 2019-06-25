
import React from "react"; 
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Session } from 'meteor/session'

import Main from "./../imports/ui/main"

Meteor.startup(() => {
	Session.set('data', undefined);
	Session.set('isQueryDisplayed', false);
	ReactDOM.render(<Main />, document.getElementById('app'));
});

