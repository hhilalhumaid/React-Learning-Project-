import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigationPage = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">All Meetups</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/new-meetups">New Meetups</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/favourites">Favourites</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationPage;
