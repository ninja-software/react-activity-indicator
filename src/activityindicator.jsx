import React from 'react';
import { Component } from 'react';

import '.activity-indicator.scss'

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
    s.height = this.props.diameter || 20
    s.width = this.props.diameter || 20
    s.paddingLeft = this.props.diameter || 20
    s.paddingTop = this.props.diameter || 20
    let sx = s
    sx.marginLeft = s.width
    return (
      <div className="activity-indicator" style={this.props.style}>
        <div>
        {(() => {
          let els = [], cls, style = s;
          for (var i = 0; i < this.state.number; i++) {
            if (i > 0) style = sx
            if (this.state.active == i) {
              cls = "indicator active"
            } else {
              cls = "indicator"
            }
            els.push(<div key={"indicator_"+i} style={style} className={cls} />)
          }
          return els
        })()}
        </div>
      </div>
    )
  }
}