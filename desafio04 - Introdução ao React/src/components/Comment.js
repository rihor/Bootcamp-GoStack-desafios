import React from "react";

// import { Container } from './styles';

const Comment = ({ data }) => (
  <div className="comment">
    <img src={data.author.avatar} alt="Foto de usuário" />
    <div className="message">
      <p>
        <span className="name">{data.author.name}</span> {data.content}
      </p>
    </div>
  </div>
);

export default Comment;
