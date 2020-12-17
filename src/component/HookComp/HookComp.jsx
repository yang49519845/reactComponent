import React, { useState, useMemo } from "react";

import { Button, Space, Card } from "antd";

import HookAComp from "./comp/HookAComp";
import HookBComp from "./comp/HookBComp";
import AutoFocusIpt from "./comp/HookRef";

import HookContext from "./HookContext";

const HookComp = (props) => {
  const [count, setCount] = useState(0);
  const [countA, setCountA] = useState(0);
  const [name, setName] = useState("lisa");
  const MemoB = useMemo(() => HookBComp);

  const changeStatus = () => {
    setCountA((countA) => countA + 1);
  };
  const addNum = () => {
    setCount(count + 1);
  };
  const removeNum = () => {
    setCount(count - 1);
  };
  return (
    <Card title={props.title} extra="More">
      <Space>
        <span>点击次数： {count}</span>
        <Button type="primary" onClick={addNum}>
          点击+1
        </Button>
        <Button type="primary" onClick={removeNum}>
          点击-1
        </Button>
      </Space>
      <HookContext.Provider value={count}>
        <div>
          <hr />
          <Button onClick={changeStatus}>点击更新A</Button>
          <HookAComp valA={countA} />
        </div>
        <div>
          <hr />
          <MemoB name={name} />
        </div>
        <div>
          <AutoFocusIpt />
        </div>
      </HookContext.Provider>
    </Card>
  );
};

export default HookComp;
