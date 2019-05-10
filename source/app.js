console.log("app.js is running");

var template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
		<p>It seems to like parenthesis!</p>
	</div>
);

var user = {
	name :'Jason',
	age: 42,
	location: 'Akron, OH'
}
// var username = 'Jason';
// var userage = 43;
// var userlocation = 'Akron, OH';

var template2 = (
	<div>
		<h1>Name: {user.name + '!'}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)