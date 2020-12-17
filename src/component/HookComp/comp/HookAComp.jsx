import React, { useContext, useEffect } from 'react'

import { Tag, Badge, Avatar } from "antd";

import ThemeContext from '../HookContext'
/**
 * 组件A
 *
 * @param {*} props
 * @return {*} 
 */
const HookAComp = (props) => {
  console.log("HookAComp console in function");

  const ACount = useContext(ThemeContext);

  useEffect(() => {
    console.log("HookAComp console in effect");
  });

  return (
    <div style={{ marginTop: "20px", background: '#00a0ea', textAlign: 'center' }}>
      <h3 style={{textAlign: 'center', paddingBottom: '10px'}}>Component A</h3>

      <Badge count={props.valA}>
        <Avatar size="large">CompA</Avatar>
      </Badge>

      <div
        style={{
          marginTop: "20px",
          height: "42px",
          lineHeight: '42px',
          textAlign:'center',
        }}
      >
        上下文对象{"ACount => "}
        <Tag>{ACount}</Tag>
      </div>
    </div>
  );
};

export default HookAComp;