"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App",
	subtitle: "I can't decide!",
	ideas: [],
	chosen: ""
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var idea = e.target.elements.idea.value;
	idea.trim() && app.ideas.push(idea);
	e.target.elements.idea.value = "";
	app.chosen = "";
	// document.getElementById("decisionBtn").disabled = false;
	renderIndApp();
};

var onRemoveAll = function onRemoveAll() {
	app.ideas.length = 0;
	app.chosen = "";
	// document.getElementById("decisionBtn").disabled = true;
	renderIndApp();
};

var onMakeDecision = function onMakeDecision() {
	var number = Math.floor(Math.random() * app.ideas.length);
	app.chosen = app.ideas[number];
	console.log("decided");
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
			"button",
			{ id: "decisionBtn", onClick: onMakeDecision, disabled: !app.ideas.length },
			"Decide"
		),
		app.chosen && React.createElement(
			"p",
			null,
			"Your choice is: ",
			app.chosen
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll },
			"Remove All"
		),
		React.createElement(
			"ol",
			null,
			app.ideas.map(function (idea, ind) {
				return React.createElement(
					"li",
					{ key: "idea" + ind, id: "idea" + ind },
					idea
				);
			})
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

// document.getElementById("decisionBtn").disabled = true;

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
