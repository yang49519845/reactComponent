/*
 * @LastEditors: 杨鑫
 */
import "./App.css";
import StateLessButton from "./component/StateLess/StateLessButton";
import StateLessDiv from "./component/StateLess/StateLessDiv";
import StateLessList from "./component/StateLess/StateLessList";

import StateDiv from "./component/StateComp/StateDiv";
import PureComp from "./component/PureComp/PureComp";

import StateLifeComp from "./component/StateComp/StateLifeComp";

import LookAHoc from "./page/lookA";

import HookComp from "./component/HookComp/HookComp";
import HookCom from './component/HookCom'
import { Divider, Row, Col } from "antd";

function App() {
  return (
    <div className="App">
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>HOOK</h2>
      </Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div>
            <HookComp title="react hook 组件" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <HookCom />
        </Col>
        <Col className="gutter-row" span={6}>
          <div>{/* <HookComp title="react hook 组件" /> */}</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>{/* <HookComp title="react hook 组件" /> */}</div>
        </Col>
      </Row>
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>状态组件&生命周期</h2>
      </Divider>
      <StateLifeComp />
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>组件&HOC组件</h2>
      </Divider>
      <LookAHoc />
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>无状态组件</h2>
      </Divider>
      <StateLessButton>这是一个无状态按钮</StateLessButton>
      <StateLessDiv>这是一个无状态div</StateLessDiv>
      <StateLessList
        list={[
          {
            title: "a",
          },
          {
            title: "b",
          },
          {
            title: "c",
          },
          {
            title: "d",
          },
          {
            title: "e",
          },
          {
            title: "f",
          },
          {
            title: "g",
          },
        ]}
      />
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>状态组件</h2>
      </Divider>
      <StateDiv />
      <Divider orientation="left">
        <h2 style={{ fontWeight: "bold" }}>PureComponent组件</h2>
      </Divider>
      <PureComp color="blue" />
    </div>
  );
}

export default App;
