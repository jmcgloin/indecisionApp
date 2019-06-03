"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handleWhatToDo = _this.handleWhatToDo.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: "handleAddOption",
		value: function handleAddOption(newOption) {
			this.setState(function (prevState) {
				prevState.options.push(newOption);
				return {
					options: prevState.options
				};
			});
		}
	}, {
		key: "handleDeleteOptions",
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: "handleWhatToDo",
		value: function handleWhatToDo() {
			var rando = Math.floor(Math.random() * this.state.options.length);
			var choice = this.state.options[rando];
			alert(choice);
		}
	}, {
		key: "render",
		value: function render() {
			var title = "Indecision App";
			var subtitle = "Put your life in the hands of a computer";
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handleWhatToDo: this.handleWhatToDo
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.title
				),
				React.createElement(
					"h2",
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{
						disabled: !this.props.hasOptions,
						onClick: this.props.handleWhatToDo
					},
					"What should I do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: "render",
		value: function render() {
			var options = this.props.options;
			console.log("options", options);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.props.handleDeleteOptions },
					"Remove All"
				),
				React.createElement(
					"p",
					null,
					"Options here"
				),
				options.map(function (option, i) {
					return React.createElement(Option, { key: 'option' + i, option: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					this.props.option
				)
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.handleOnSubmit = _this6.handleOnSubmit.bind(_this6);
		return _this6;
	}

	_createClass(AddOption, [{
		key: "handleOnSubmit",
		value: function handleOnSubmit(e) {
			e.preventDefault();
			var newOption = e.target.elements.newOption;
			var newOptionValue = newOption.value.trim();
			if (newOptionValue != "") this.props.handleAddOption(newOptionValue);
			newOption.value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ onSubmit: this.handleOnSubmit },
					React.createElement(
						"label",
						{ htmlFor: "newOption" },
						"New Option: "
					),
					React.createElement("input", { type: "text", id: "newOption", name: "newOption" }),
					React.createElement(
						"button",
						{ type: "submit" },
						"Submit"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

var jsx = React.createElement(
	"div",
	null,
	React.createElement(IndecisionApp, null)
);

ReactDOM.render(jsx, document.getElementById('app'));

// babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch
