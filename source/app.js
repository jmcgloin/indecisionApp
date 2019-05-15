class IndecisionApp extends React.Component {
	render() {
		const title = "Indecision App";
		const subtitle = "Put your life in the hands of a computer";
		const options = ["Thing 1", "Thing 2",  "Thing 4"];
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				</div>
		);
	}
}

class Action extends React.Component {
	handleWhatToDo() {
		console.log('this worked');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleWhatToDo}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	handleRemoveAll() {
		console.log("removed all");
	}
	render() {
		let options = this.props.options;
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				<p>Options here</p>
				{options.map( (option, i) => <Option key={'option' + i} option={option} />)}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.option }</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	handleOnSubmit(e) {
		e.preventDefault();
		let newOption = e.target.elements.newOption;
		let newOptionValue = newOption.value.trim();
		if(newOptionValue != "") console.log(newOptionValue);
		newOption.value = "";
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<label htmlFor="newOption">New Option: </label>
					<input type="text" id="newOption" name="newOption" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

const jsx = (
	<div>
		<IndecisionApp />
	</div>
)

ReactDOM.render(jsx, document.getElementById('app'));

// babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch