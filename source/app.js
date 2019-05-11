console.log("app.js is running");


const app = {
	title: "Indecision App",
	// subtitle: "I can't decide!",
	// options: ["One", "Two"]
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{(app.options && app.options.length > 0) ? "Here are your options" : "There are no options"}</p>
		<ol>
			<li>{app.options && app.options[0]}</li>
			<li>{app.options && app.options[1]}</li>
		</ol>
	</div>
);

const getLocation = (location) => {
	if (location) return <p>Location: {location}</p>;
};

const user = {
	name: 'Jason McGloin',
	age: 2,
	location: 'Akron, OH'
}
// var username = 'Jason';
// var userage = 43;
// var userlocation = 'Akron, OH';

const template2 = (
	<div>
		<h1>Name: {user.name ? user.name : "Anonymous"}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)

// babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch