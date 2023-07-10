import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <div>{props.massage}</div>
    <img src="https://cdn1.flamp.ru/dca5e616d0d0278f7ac33bb2ace74573.jpg" />
    <div>
      <span>Like {props.likesCount}</span>
    </div>
  </div>

}

export default Post;