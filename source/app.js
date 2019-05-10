console.log("app.js is running");


var app = {
	title: "Indecision App",
	subtitle: "I can't decide!"
}

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
	</div>
);

var getLocation = ((location) => {
	if (location) return <p>Location: {location}</p>;
});

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
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot)