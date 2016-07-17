var React = require('react');
var ReactDOM = require('react-dom');
import ActivityIndicator from '../activityindicator.jsx';
require('file?name=[name].[ext]!./index.html');

ReactDOM.render(
	<div className="act-demo">
		<h2>Please wait...</h2>
		<div>
			<ActivityIndicator borderColor="white" />
		</div>
		<div style={{background: "#0070bf"}}>
			<ActivityIndicator number={5} color="black" activeColor="#66D9EF" borderColor="white" diameter={40} />
		</div>
		<div>
			<ActivityIndicator number={10} activeColor="red" borderColor="black" />
		</div>
	</div>,
  document.getElementById('app')
);