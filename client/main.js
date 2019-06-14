import { Meteor } from "meteor/meteor";
import React from "react"; 
import { render } from "react-dom";
import ReactDOM from 'react-dom';

import Main from "./../imports/ui/main"

Meteor.startup(() => {
	ReactDOM.render(<Main />, document.getElementById('app'));
});

