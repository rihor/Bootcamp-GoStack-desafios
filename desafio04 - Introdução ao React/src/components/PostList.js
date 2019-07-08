import React, { Component } from "react";

import comments from "../data/comments";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: comments
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
