console.log("app.js is running");


const app = {
	title: "Indecision App",
	subtitle: "I can't decide!",
	ideas: []
}

const onFormSubmit = (e) => {
	e.preventDefault();
	const idea = e.target.elements.idea.value;
	idea.trim() && app.ideas.push(idea);
	e.target.elements.idea.value = "";
	renderIndApp();
}

const onRemoveAll = () => {
	app.ideas.length = 0;
	renderIndApp();
}

const appRoot = document.getElementById('app');

const renderIndApp = () =>  {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{(app.ideas && app.ideas.length > 0) ? "Here are your ideas" : "There are no ideas"}</p>
			<p>{app.ideas.length}</p>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				<li>Idea 1</li>
				<li>Idea 2</li>
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