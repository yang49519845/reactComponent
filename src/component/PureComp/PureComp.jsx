import React from "react";
import 'antd/lib/button/style'
import { Button } from "antd";

class PureComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <Button
      type="default"
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        count: {this.state.count}
      </Button>
    );
  }
}

export default PureComp;