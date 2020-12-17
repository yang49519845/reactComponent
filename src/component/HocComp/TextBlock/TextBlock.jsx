import React from "react";
import { Tag } from "antd";

const TextBlock = (props) => {
  return <Tag color="magenta">{props.text.blogPost}</Tag>;
};

export default TextBlock