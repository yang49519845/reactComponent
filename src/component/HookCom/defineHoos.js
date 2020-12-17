/*
 * @LastEditors: 杨鑫
 */
import React, { useState, useEffect } from "react";

const useInput = (iv) => {
  const [info, setInfo] = useState({
    name: iv,
  });
  useEffect(() => {
    document.title = `hello ${info.name}`;
    let timer = setTimeout(() => {
      document.title = `react app`;
    }, 2000);
    return () => clearTimeout(timer);
  }, [info]);

  const handleInputChange = (e) => {
    setInfo({
      ...info,
      name: e.target.value,
    });
  };
  const handleInputClick = e => {
    setInfo({
      ...info,
      name: e.target.value+'a'
    })
  }
  return [
    {
      value: info.name,
      onChange: handleInputChange,
      onClick: handleInputClick
    }
  ]
};

export default useInput;
