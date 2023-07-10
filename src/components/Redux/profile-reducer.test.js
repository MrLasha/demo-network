import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 15 },
    { id: 2, message: "It's my 1st post", likesCount: 10 },
    { id: 3, message: "Cool project", likesCount: 30 },
    { id: 4, message: "Again and again", likesCount: 77 },
  ],
};

test("lenght of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

test("message of posts should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra");
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra");
});

test("after deleting length of posts should be correct", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test("after deleting length sould not be decrement if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
