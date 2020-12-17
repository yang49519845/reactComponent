import React from "react";

const StateLessList = (props) => {
  const list = props.list.map((item, index) => (
    <li key={item.title + index}>{item.title}</li>
  ));

  return <ul>{list}</ul>;
};

export default StateLessList;
