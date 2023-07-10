import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialogs + " " + s.active}>
      <img
        src="https://cdn1.flamp.ru/dca5e616d0d0278f7ac33bb2ace74573.jpg"
        alt=""
      />{" "}
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
