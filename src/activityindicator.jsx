import React from 'react';
import { Component } from 'react';

export default class ActivityIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {duration: this.props.duration || 400}
    this.state.number = props.number || 3
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      let active = this.state.active
      active = (active >= this.state.number || isNaN(this.state.active) ? 0 : active+1)
      this.setState({active})
    },this.state.duration * 2)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    let diameter = this.props.diameter || 20
    diameter = parseInt(diameter)
    let acColor = this.props.activeColor || "black"
    let n = this.props.number || 3
    let indicatorStyle = {
      width: diameter,
      height: diameter,
      borderRadius: this.props.borderRadius || '10%' ,
      borderWidth:  (typeof this.props.borderWidth != "undefined" ? this.props.borderWidth : 1),
      borderStyle: 'solid',
      background: this.props.color || "transparent",
      transitionDuration: this.state.duration,
      display: 'inline-block',
      lineHeight: diameter,
      fontSize: 0,
      borderColor: this.props.borderColor || acColor
    }
    let containerWidth = (n * diameter * 2) - diameter
    return (
      <div className="activity-indicator">
        <div style={{width: containerWidth }}>
        {(() => {
          let children = [], className;
          for (var i = 0; i < this.state.number; i++) {
            if (this.state.active == i) {
              indicatorStyle.background = acColor
            } else {
              indicatorStyle.background = this.props.color || "transparent"
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