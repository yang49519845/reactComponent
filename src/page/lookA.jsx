import React, { useState } from "react";
// 评论列表
import HocCommentList from "../component/HocComp/HocCommentList";
// 博客
import HocBlogPost from "../component/HocComp/HocBlogPost";
import DataSource from "../function/list";

import {
  CommentListWithSubscription,
  BlogPostWithSubscription,
} from "../component/HocComp/WithHocComp";

const LookAHoc = () => {
  const [ids, setIds] = useState("cxk01");
  return (
    <div>
      <div
        onClick={() => {
          let ids = Date.now();
          DataSource.addComments(ids);
          setIds(ids);
        }}
      >
        添加一个评论
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <h2 style={{ fontWeight: "bold" }}>class版</h2>
          <span>
            最新动态: <HocBlogPost id={ids} />
          </span>
          <HocCommentList />
        </div>
        <div>
          <h2 style={{ fontWeight: "bold" }}>HOC版</h2>
          <span>
            Hoc最新动态: <BlogPostWithSubscription id={ids} />
          </span>
          <CommentListWithSubscription />
          {/* <BlogPostWithSubscription /> */}
        </div>
      </div>
    </div>
  );
};

export default LookAHoc;
