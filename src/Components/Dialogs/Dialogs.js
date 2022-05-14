import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";


const Dialogs = (props) => {

  let stateData = props.dialogsPage; 
  

  let dialogsElement = stateData.dialogData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messagesElement = stateData.dialogMessage.map((m) => (
    <Message age message={m.message} />
  ));
  let newMessageBody = stateData.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBodyCreator(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      
      
      <div className={classes.messages}>
      <div>{messagesElement}</div>
      <div>
        <div><textarea placeholder="Enter your massage" value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
