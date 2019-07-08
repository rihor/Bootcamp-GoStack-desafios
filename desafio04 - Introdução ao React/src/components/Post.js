import React from "react";

import Comment from "./Comment";

function Post({ data }) {
  return (
    <div className="post">
      <div className="user">
        <img src={data.author.avatar} alt="Foto de usuário" />
        <div className="info">
          <p className="name">{data.author.name}</p>
          <p className="date">{data.date}</p>
        </div>
      </div>
      <div className="message">{data.content}</div>

      {data.comments.length !== 0 && <hr />}

      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;
