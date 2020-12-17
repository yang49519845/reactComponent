import React, { useContext, useEffect } from 'react'

/**
 * 组件A
 *
 * @param {*} props
 * @return {*} 
 */
const HookBComp = (props) => {
  console.log("HookBComp BBB in function");

  useEffect(() => {
    console.log("HookBComp BBB in effect");
  });

  return (
    <div style={{ marginTop: "20px", background: '#fff000', textAlign: 'center' }}>
      <h3 style={{textAlign: 'center', paddingBottom: '10px'}}>Component B</h3>
      {props.name}
    </div>
  );
};

export default HookBComp;