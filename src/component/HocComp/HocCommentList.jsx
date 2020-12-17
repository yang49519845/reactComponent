import React from "react";
import MyComment from "./Comment/Comment";
import DataSource from '../../function/list'

class HocCommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: DataSource.getComments(),
    };
    this.handleChange.bind(this);
  }
  
  componentDidMount() {

    DataSource.addChangeListener(this, 'handleChange')
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this, 'handleChange')
  }

  handleChange() {
    console.log('handle change')
    this.setState({
      comments: DataSource.getComments(),
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <MyComment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

export default HocCommentList;
