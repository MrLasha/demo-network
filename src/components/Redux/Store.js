import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How are you?", likesCount: 15 },
        { id: 2, message: "It's my 1st post", likesCount: 10 },
        { id: 3, message: "Cool project", likesCount: 30 },
        { id: 4, message: "Again and again", likesCount: 77 },
      ],
      newPostText: "League of Legends",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kuki" },
        { id: 2, name: "Nino" },
        { id: 3, name: "Mari" },
        { id: 4, name: "Shalva" },
        { id: 5, name: "Levani" },
        { id: 6, name: "Giorgi" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "You are so noob" },
        { id: 4, message: "You have pizdati site" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("yotoyo");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost () {
  //     let newPost = {
  //         id: 5,
  //         message: this._state.profilePage.newPostText,
  //         likesCount: 0,
  //     };
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = '';
  //     this._callSubscriber(this._state);
  // },
  // updeteNewPostText (newText) {
  //     this._state.profilePage.newPostText = newText;
  //     this._callSubscriber(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
