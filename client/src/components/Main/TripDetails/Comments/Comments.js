import React, { Component } from "react";
import "./Comments.css";

function Comments(props) {
  console.log(props);
  console.log("comments length", props.comments.length);
  return (
    <div className="comment_section">
      {props.comments.length > 0 ? (
        <div>
          {props.comments.map((comment, index) => {
            return (
              <div key={index}>
                <h4>{comment.userName}</h4>
                <p>{comment.comment}</p>
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No comments yet, start by posting one!</p>
      )}

      {!props.loading ? (
        <form onSubmit={props.onSubmit}>
          <div className="komentar">
            <textarea
              className="text_area2"
              onChange={props.handleChange}
              value={props.comment}
              placeholder="Write a comment..."
            ></textarea>
            <button className="bookNow">Submit comment</button>
          </div>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Comments;
