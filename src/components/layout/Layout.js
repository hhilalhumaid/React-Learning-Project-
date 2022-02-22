import React from "react";
import MainNavigationPage from "./MainNavigation";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <div>
      <MainNavigationPage />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default layout;
