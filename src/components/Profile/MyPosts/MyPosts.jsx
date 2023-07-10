import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post massage={p.message} likesCount={p.likesCount} key={p.id} />
  ));
  return (
    <div className={s.postBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          New post
          <AddPostForm props={props} />
          <div className={s.posts}>{postsElements}</div>
        </div>
      </div>
    </div>
  );
});

const AddPostForm = ({ props }) => {
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <Formik initialValues={{ newPostText: "" }} onSubmit={onAddPost}>
      <Form>
        <Field
          as={"textarea"}
          placeholder={"Add your post"}
          name={"newPostText"}
        />
        <div>
          <button type="submit">Add post </button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyPosts;
