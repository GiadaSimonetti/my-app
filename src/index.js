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
  render() {
    return (
      <div className="comment-box">
        <h4 className="comment-count">2 comments</h4>
        <div className="comment-list">
          <Comment author="Morgan McCircuit" body="Great picture!" />
          <Comment author="Bending Bender" body="Excellent stuff" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CommentBox />, document.getElementById("comment-box1"));
