console.log("app.js is running");


const app = {
	title: "Indecision App",
	subtitle: "I can't decide!",
	ideas: [],
	chosen: ""
}

const onFormSubmit = (e) => {
	e.preventDefault();
	const idea = e.target.elements.idea.value;
	idea.trim() && app.ideas.push(idea);
	e.target.elements.idea.value = "";
	app.chosen = "";
	// document.getElementById("decisionBtn").disabled = false;
	renderIndApp();
}

const onRemoveAll = () => {
	app.ideas.length = 0;
	app.chosen = "";
	// document.getElementById("decisionBtn").disabled = true;
	renderIndApp();
}

const onMakeDecision = () => {
	let number = Math.floor(Math.random() * app.ideas.length);
	app.chosen = app.ideas[number];
	console.log("decided");
	renderIndApp();
}

const appRoot = document.getElementById('app');

const renderIndApp = () =>  {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{(app.ideas && app.ideas.length > 0) ? "Here are your ideas" : "There are no ideas"}</p>
			<button id="decisionBtn" onClick={onMakeDecision} disabled={!app.ideas.length}>Decide</button>
			{app.chosen && <p>Your choice is: {app.chosen}</p>}
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{app.ideas.map( (idea, ind) => <li key={"idea" + ind} id={"idea" + ind} >{idea}</li>)}
			</ol>
			<form onSubmit={onFormSubmit}>
				<label htmlFor="idea" name="idea">Enter your idea here: </label>
				<input type="text" name="idea" id="idea" />
				<button>Add Idea</button>
			</form>
		</div>
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