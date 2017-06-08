import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ActivityIndicator from '../activityindicator.jsx';
import 'file-loader?name=[name].[ext]!./index.html';
import '../activityindicator.css';

class ExampleComponent extends Component {
	constructor(props) {
		super(props)
		this.state = { loaded: false, counter:0 }
		this.interval = setInterval(() => {
			if (this.state.counter > 5000) {
				this.setState({loaded: true})
				clearInterval(this.interval)
			}
			this.setState({counter: this.state.counter+50})
		},100)
  }
  render() {
    if (!this.state.loaded) {
    	return (<div style={{textAlign: 'center'}}>
    		Loading {this.state.counter} / 5000 elements
				<ActivityIndicator number={10} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />
			</div>)
  	} else {
  		return (
  			<div style={{textAlign: 'center'}}>
	  			<h3>Loaded!</h3>
  			</div>)
  	}
  }
}


ReactDOM.render(
	<div className="act-demo">
		<h2>React Activity Indicator</h2>
		<div style={{background: 'white'}}>
			<ExampleComponent />
		</div>
		<div>
			<ActivityIndicator number={3} duration={200} color="#ddd" borderRadius="50%" activeColor="#0070bf" borderColor="#0070bf" borderWidth={0} diameter="10px" />
		</div>
		<div style={{background: 'white'}}>
			<ActivityIndicator />
		</div>
		<div>
			<ActivityIndicator number={20} activeColor="#e531c5" />
		</div>
		<div style={{background: 'white'}}>
			<ActivityIndicator number={3} duration={200} borderRadius="50%" activeColor="#0070bf" borderColor="#0070bf" />
		</div>
		<div>
			<ActivityIndicator number={5} borderWidth={0} duration={300}  activeColor="#66D9EF" borderColor="white" diameter={40} />
		</div>
		<div style={{background: 'white'}}>
			<ActivityIndicator borderColor="rgba(0,0,0,0.1)" borderRadius="10px" diameter={25} />
		</div>
		<div>
			<ActivityIndicator number={10} borderWidth={2} activeColor="red" borderColor="black" />
		</div>
		<div style={{background: 'white'}}>
			<ActivityIndicator number={3} duration={250} borderRadius={5} activeColor="#0070bf" borderColor="#0070bf" />
		</div>
	</div>,
  document.getElementById('app')
);
