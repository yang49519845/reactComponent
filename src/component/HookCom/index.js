/*
 * @LastEditors: 杨鑫
 */
import React, { useEffect, useState } from "react";
import { Button, Card, Input } from "antd";

import useInput from "./defineHoos";
const HookCom = () => {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("Hook Card");
  const titles = ["蔡徐坤", "马保国", "乔峰"];
  const name = useInput('myName');
  const home = useInput("home");
  const changeTitle = () => {
    setNum((num) => num + 1);
    setTitle((title) => titles[num % 3]);
  };

  return (
    <div>
      <Card
        title={title}
        extra={
          <Button type="link" onClick={changeTitle}>
            更新标题
          </Button>
        }
      >
        <div>自定义hook</div>
        <div>
          name:
          <Input type="text" {...name[0]} />
          home:
          <Input type="text" {...home[0]} />
        </div>
      </Card>
    </div>
  );
};

export default HookCom;
