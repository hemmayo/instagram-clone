import React, { Component } from "react";
import "./Post.css";

export default class Post extends Component {
  render() {
    const { username, caption, avatar, image } = this.props;

    return (
      <article className="Post">
        <div className="Post__header">
          <div className="Post__user">
            <div className="Post__user-avatar">
              <img src={avatar} alt={username} />
            </div>
            <div className="Post__user-nickname">
              <span>{username}</span>
            </div>
          </div>
          <div className="Post__options">more</div>
        </div>
        <div className="Post__image">
          <img alt="Icon Living" src={image} />
        </div>
        <div className="Post__footer">
          <div className="Post__caption">{caption}</div>
        </div>
      </article>
    );
  }
}
