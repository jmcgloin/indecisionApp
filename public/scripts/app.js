"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App",
	subtitle: "I can't decide!"
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	React.createElement(
		"p",
		null,
		app.subtitle
	)
);

var getLocation = function getLocation(location) {
	if (location) return React.createElement(
		"p",
		null,
		"Location: ",
		location
	);
};

var user = {
	name: 'Jason',
	age: 42,
	location: 'Akron, OH'
	// var username = 'Jason';
	// var userage = 43;
	// var userlocation = 'Akron, OH';

};var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Name: ",
		user.name + '!'
	),
	React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
