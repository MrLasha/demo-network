import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Navigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const initialValues = {
  newMessageBody: "",
};

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <AddMessageForm props={props} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = ({ props }) => {
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={addNewMessage}>
      <Form>
        <div>
          <Field
            as="textarea"
            placeholder="Enter your message"
            name={"newMessageBody"}
          />
        </div>
        <div>
          <button type={"submit"}>Отправить</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Dialogs;
