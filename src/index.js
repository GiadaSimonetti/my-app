import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form">
        <label>Join the discussion</label>
        <br />
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={input => (this._author = input)} />
          <br />
          <br />
          <textarea
            placeholder="Comment:"
            ref={input => (this._body = input)}
          />
          <br />
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post comment</button>
        </div>
      </form>
    );
  }
  // _handleSubmit(event) {
  //   event.preventDefault();
  //   let author = this._author;
  //   let body = this._body;
  //   this.props.addComment(author.value, body.value);
  // }
}

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
    let buttonText = "Show comments";
    if (this.state.showComments) {
      buttonText = "Hide comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    } else {
      // this.setState({showComments: true })
    }
    return (
      <div className="comment-box">
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
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
