class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleWhatToDo = this.handleWhatToDo.bind(this);
		this.state = {
			options: []
		};
	}
	handleAddOption(newOption) {
		this.setState( (prevState) => {
			prevState.options.push(newOption)
			return {
				options: prevState.options
			};
		});
	}
	handleDeleteOptions() {
		this.setState( () => {
			return {
				options: []
			}
		})
	}
	handleWhatToDo() {
		let rando = Math.floor(Math.random() *  this.state.options.length);
		let choice = this.state.options[rando];
		alert(choice);
	}
	render() {
		const title = "Indecision App";
		const subtitle = "Put your life in the hands of a computer";
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0}
					handleWhatToDo={this.handleWhatToDo}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption}/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					disabled = {!this.props.hasOptions}
					onClick={this.props.handleWhatToDo}
				>
					What should I do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		let options = this.props.options;
		console.log("options", options)
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
	constructor(props) {
		super(props);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}
	handleOnSubmit(e) {
		e.preventDefault();
		let newOption = e.target.elements.newOption;
		let newOptionValue = newOption.value.trim();
		if(newOptionValue != "") this.props.handleAddOption(newOptionValue)
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