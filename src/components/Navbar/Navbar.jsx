import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "../Friends/Friends";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Massages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.itemf}>
        <NavLink
          to="users"
          className={(navData) => (navData.isActive ? s.activef : s.itemf)}
        >
          Friends
        </NavLink>
      </div>
      <div>
        <Friends />
        <Friends />
        <Friends />
      </div>
    </nav>
  );
};

export default Navbar;
