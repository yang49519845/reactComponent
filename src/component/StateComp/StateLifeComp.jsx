import React, { Component } from "react";
import { Input } from "antd";
import StateChild from "./StateLifeCompChild";

class StateLifeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
    this.changeInpVal.bind(this);
  }
  // static getDerivedStateFromProps(){
  //   console.log('父： getDerivedStateFromProps')
  // }

  // componentWillMount() {
  //   console.log('父：组件将要装载。')
  // }
  componentDidMount() {
    console.log("父：组件已经装载。");
  }
  // componentWillReceiveProps() {
  //   console.log('父：组件将接收的props。')
  // }
  // componentWillUpdate() {
  //   console.log('父：组件将要更新。')
  // }
  componentDidUpdate() {
    console.log("父：组件更新完毕。");
  }
  // getSnapshotBeforeUpdate(){
  //   console.log('父：getSnapshotBeforeUpdate。')
  // }
  shouldComponentUpdate() {
    console.log("父：是否应该更新 返回 true|false。");

    return true;
  }
  componentWillUnmount() {
    console.log("父：组件将要卸载。");
  }
  static getDerivedStateFromError() {
    console.log("父：getDerivedStateFromError。");
  }
  componentDidCatch() {
    console.log("父：组件捕捉错误。");
  }
  changeVal(val) {
    this.setState({
      inputVal: val,
    });
  }

  changeInpVal(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }
  render() {
    return (
      <div>
        父组件：
        <Input
          value={this.state.inputVal}
          onChange={(e) => this.changeInpVal(e)}
        />
        <StateChild
          getChange={(val) => this.changeVal(val)}
          initVal={this.state.inputVal}
        />
      </div>
    );
  }
}

export default StateLifeComp;
