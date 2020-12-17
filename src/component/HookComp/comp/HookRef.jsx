import React, { useState, useRef, useContext, useEffect } from "react";
import HookContext from "../HookContext";
import { Input, Button } from "antd";

const AutoFocusIpt = () => {
  const [vc, setVc] = useState(1);
  let numRef = useRef(vc);
  let inputEl = useRef(vc);
  let count = useContext(HookContext);

  useEffect(() => {
    inputEl.current.focus();
    numRef.current = vc;
  }, [vc]);

  return (
    <>
      <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
        Component Ref
      </h3>
      <Input ref={inputEl} type="text" value={count} />
      上一次的值： <Input type="text" value={numRef.current} />
      更新后的值: <Input type="text" value={vc} />
      <Button onClick={(e) => setVc(vc + 1)}>点击更换主题</Button>
    </>
  );
};

export default AutoFocusIpt;
