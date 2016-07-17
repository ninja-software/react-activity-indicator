# React Acitivity Indicator

Simple configurable activity indicator for React.

![See me work](http://i.imgur.com/gtERQ2h.gif)

## Installation

Install with NPM: `npm install react-activity-indicator`

## Example

```jsx
class ExampleComponent extends Component {
	constructor(props) {
		super(props)
		this.state = { loaded: false }
  }
  render() {
    if (!this.state.loaded) {
    	return (<div style={{background: "#222222"}}>>
				<ActivityIndicator number={5} activeColor="red" borderWidth={0} diameter={25} borderColor="black" />
			</div>)
  	} else {
  		<h3>
  			Loaded!
  		</h3>
  	}
  }
}

## Usage

ReactDOM.render(new ExampleComponent(), document.getElementById('app'))
```
The component accepts these props.

- `number`: the number of activity indicators `default: 3`
- `diameter`: size of the loading indicators `default: 20px`
- `duration`: color transition duration `default: 400`(ms)
- `activeColor`: color of the active loading indicator. `default: black`
- `borderRadius`: border radius of the loading indicators. `default: 10%`
- `borderWidth`: border width of the loading indicators. `default: 1px`
- `borderColor`: border color of the loading indicators. `default: black`


```jsx
<ActivityIndicator
	number={5}
	diameter={40}
	borderWidth={1}
	duration={300}
	activeColor="#66D9EF"
	borderColor="white"
	borderWidth={5}
	borderRadius="50%" 
/>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* Submitted to GitHub & NPM

## Credits

Alex Dunmow

## License

MIT license. Feel free to do whatever you want, but we have no liability or obligation for support.