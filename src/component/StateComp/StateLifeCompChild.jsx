import React, { Component } from "react";
import { Input } from "antd";

class StateChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initVal || "place",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    console.log("子：componentWillMount");
  }
  componentDidMount() {
    console.log("子：componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("子：componentWillReceiveProps", arguments);
    if (this.props.initVal === nextProps.initVal) {
      return;
    }
    // if (this.prop.initVal === nextProps.initVal) return
    this.setState({
      text: nextProps.initVal,
    });
  }
  componentWillUpdate() {
    console.log("子：componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("子：componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("子：componentWillUnmount");
  }

  handleChange(event) {
    console.log(event)
    this.setState(
      {
        text: event.target.value,
      },
      () => {
        this.props.getChange(this.state.text);
      }
    );
  }
  render() {
    return (
      <div className="esComponent">
        <section>
          {/* <p>ES5创建组件方法</p> */}
          {/* <img className={Styles.imgWrapper} src={imgURL} /> */}
        </section>
        <section>
          {/* <p>ES6 类创建代码</p> */}
          Type something: 子：
          <Input onChange={this.handleChange} value={this.state.text} />
        </section>
      </div>
    );
  }
}

export default StateChild;
