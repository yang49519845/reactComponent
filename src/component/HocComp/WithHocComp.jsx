import HocCommentList from "./HocCommentList";
import HocBlogPost from "./HocBlogPost";
import withSubscription from './WithHoc'
const CommentListWithSubscription = withSubscription(
  HocCommentList,
  (DataSource) => DataSource.getComments() // 
);

const BlogPostWithSubscription = withSubscription(
  HocBlogPost,
  (DataSource, props) => {
    console.log(props)
    DataSource.getBlogPost(props.id)
  }
);

export {
  CommentListWithSubscription, 
  BlogPostWithSubscription
} 