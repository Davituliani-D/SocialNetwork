const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogData: [
    { id: 1, name: "Mike" },
    { id: 2, name: "Laura" },
    { id: 3, name: "Fidel" },
    { id: 4, name: "Raoxxane" },
    { id: 5, name: "Coolio" },
  ],

  dialogMessage: [
    { id: 1, message: "Hello, How are you!" },
    { id: 2, message: "Hello, Im good" },
    { id: 3, message: "lorem" },
    { id: 4, message: "Hello, Big Data" },
    { id: 5, message: "CoolHello, World!" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: " ",
        dialogMessage: [...state.dialogData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};
