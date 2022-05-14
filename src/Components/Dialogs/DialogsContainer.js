
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatcToProps = (dispatch) => {
  return {
    sendMessageCreator: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBodyCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatcToProps)(Dialogs);

export default DialogsContainer;
