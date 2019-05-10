'use strict';

console.log("app.js is running");

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'p',
		null,
		'It seems to like parenthesis!'
	)
);

var user = {
	name: 'Jason',
	age: 42,
	location: 'Akron, OH'
	// var username = 'Jason';
	// var userage = 43;
	// var userlocation = 'Akron, OH';

};var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Name: ',
		user.name + '!'
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
