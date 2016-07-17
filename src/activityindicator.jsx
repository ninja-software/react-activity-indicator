import React from 'react';
import { Component } from 'react';

import './activity-indicator.scss'

export default class ActivityIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.state.number = props.number || 3
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      let active = this.state.active
      active = (active >= this.state.number || isNaN(this.state.active) ? 0 : active+1)
      this.setState({active})
    },800)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    let s = {}

    let diameter = this.props.diameter || 20
    let indicatorStyle = this.props.indicatorStyle || {
      width: diameter,
      height: diameter,
      paddingLeft: diameter,
      paddingTop: diameter,
      borderColor: this.props.borderColor || this.props.activeColor || "black"
    }
    return (
      <div className="activity-indicator" style={this.props.style}>
        <div>
        {(() => {
          let children = [], className;
          for (var i = 0; i < this.state.number; i++) {
            if (this.state.active == i) {
              indicatorStyle.background = this.props.activeColor || "black"
            } else {
              indicatorStyle.background = this.props.color || "white"
            }
            children.push(<div key={"indicator_"+i} style={{
              marginLeft: (i > 0 ? diameter : 0),
              ...indicatorStyle
            }} className={className} />)
          }
          return children
        })()}
        </div>
      </div>
    )
  }
}