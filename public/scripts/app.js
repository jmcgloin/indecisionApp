"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App",
	subtitle: "I can't decide!",
	ideas: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var idea = e.target.elements.idea.value;
	idea.trim() && app.ideas.push(idea);
	e.target.elements.idea.value = "";
	renderIndApp();
};

var onRemoveAll = function onRemoveAll() {
	app.ideas.length = 0;
	renderIndApp();
};

var appRoot = document.getElementById('app');

var renderIndApp = function renderIndApp() {
	var template = React.createElement(
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
			app.ideas && app.ideas.length > 0 ? "Here are your ideas" : "There are no ideas"
		),
		React.createElement(
			"p",
			null,
			app.ideas.length
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll },
			"Remove All"
		),
		React.createElement(
			"ol",
			null,
			React.createElement(
				"li",
				null,
				"Idea 1"
			),
			React.createElement(
				"li",
				null,
				"Idea 2"
			)
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement(
				"label",
				{ htmlFor: "idea", name: "idea" },
				"Enter your idea here: "
			),
			React.createElement("input", { type: "text", name: "idea", id: "idea" }),
			React.createElement(
				"button",
				null,
				"Add Idea"
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

renderIndApp();

// let count = 0;
// const increment = () => {
// 	count++;
// 	renderCounterApp();
// }
// const decrement = () => {
// 	count--;
// 	renderCounterApp();
// }
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const  templateTwo = (
// 		<div>
// 			<h1>
// 				Count: {count}
// 			</h1>
// 			<button onClick={increment}>+1</button>
// 			<button onClick={decrement}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

// babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch
