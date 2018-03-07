import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete comment
          </a>
        </div>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false
    };
  }
  render() {
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className="comment-list">{comments}</div>;
    } else {
      // this.setState({showComments: true })
    }
    return (
      <div className="comment-box">
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        <button onClick={this._handleClick.bind(this)}>Show comments</button>
        {commentNodes}
      </div>
    );
  }
  _getComments() {
    const commentList = [
      { id: 1, author: "Morgan McCircuit", body: "Great picture!" },
      { id: 2, author: "Bending Bender", body: "Excellent stuff" }
    ];
    return commentList.map(comment => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return commentCount + " comments";
    }
  }
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
}

ReactDOM.render(<CommentBox />, document.getElementById("comment-box1"));
