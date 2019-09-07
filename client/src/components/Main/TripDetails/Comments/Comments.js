import React, { Component } from "react";

function Comments(props) {
  console.log(props);
  return (
    <div>
      {!props.loading ? (
        <form onSubmit={props.onSubmit}>
          <textarea
            onChange={props.handleChange}
            value={props.comment}
          ></textarea>
          <button>Submit comment</button>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
      {!props.comments.length === 0 ? (
        <div>
          comments
          {props.comments.map((comment, index) => {
            return (
              <p key={index}>
                {comment.comment} by {comment.userName}
              </p>
            );
          })}
        </div>
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
}

export default Comments;
