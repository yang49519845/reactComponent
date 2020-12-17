import React, { PureComponent, Component } from 'react';
import { Button } from 'antd';

class CounterButton extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      console.log('pure1111')
      return (
        <div>
          <Button
            color={this.props.color}
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Count: {this.state.count}
          </Button>
          {/* <label>{this.props.value}</label> */}
        </div>
      );
    }
}
export default CounterButton;
