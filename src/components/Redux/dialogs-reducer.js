const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Ann" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: ":)" },
    { id: 4, message: "Start" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};
export const sendMassageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
