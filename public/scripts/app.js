"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App"
	// subtitle: "I can't decide!",
	// options: ["One", "Two"]


	// var options = ((arr) => {
	// 	return arr.length > 0 ? <p>Here are your options</p> : undefined
	// })

};var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options && app.options.length > 0 ? "Here are your options" : "There are no options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			app.options && app.options[0]
		),
		React.createElement(
			"li",
			null,
			app.options && app.options[1]
		)
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
	name: 'Jason McGloin',
	age: 2,
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
		user.name ? user.name : "Anonymous"
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
