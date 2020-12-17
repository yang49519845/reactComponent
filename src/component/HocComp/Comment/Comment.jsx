import React from "react";

import { Comment, Tooltip, Avatar } from "antd";

import { DislikeFilled, LikeFilled } from "@ant-design/icons";

class MyComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: null,
      actions: [
        <Tooltip key="comment-basic-like" title="Like">
          <span>
            <LikeFilled />
            <span className="comment-action">喜欢</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span>
            <DislikeFilled />
            <span className="comment-action">不喜欢</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ],
    };
  }
  render() {
    const { comment } = this.props;
    const { name, content } = comment
    return (
      <Comment
        actions={this.state.actions}
        author={<a>{ name }</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt={name}
          />
        }
        content={
          <p>
            {content}
          </p>
        }
      />
    );
  }
}

export default MyComment;
